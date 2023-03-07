import {UUID} from '../../utils/Type'
import {ApiClient} from '../../client/ApiClient'
import {Legalaid} from './Legalaid'
import {Cache, duration, Enum, throwIf} from '@alexandreannic/ts-utils'
import Poll = Legalaid.Poll
import PaginateRequest = Legalaid.PaginateRequest
import PaginateResult = Legalaid.PaginateResult
import Beneficiary = Legalaid.Beneficiary
import Config = Legalaid.Config
import BeneficiaryGroup = Legalaid.BeneficiaryGroup
import AgeGroup = Legalaid.AgeGroup

export enum PollType {
  Group,
  Individual,
}

export interface Filters {
  start?: Date
  end?: Date
}

const pollSearch = {
  [PollType.Group]: 'Group',
  [PollType.Individual]: 'Individual',
}

export class LegalaidSdk {


  constructor(private client: ApiClient) {

  }

  private static readonly formatDate = (d: Date) => d.toISOString()

  readonly fetchOfficesAll = async () => {
    return Config.offices
  }
  
  readonly fetchPolls = Cache.request(({
    officeId,
    search
  }: {
    officeId: UUID,
    search?: string
  }): Promise<{polls: Poll[], total: number}> => {
    return this.client.get(`/poll/find`, {
      qs: {
        search,
        status: 'poll',
        officeId,
        limit: 10000,
        skip: 0
      }
    })
  }, {ttl: duration(2, 'day')})

  private readonly fetchBeneficiaryRaw = async (pollId: UUID, params: PaginateRequest & {
    dataFilters?: Record<UUID, string[]>
  }): Promise<PaginateResult<Beneficiary>> => {
    return this.client.post(`/beneficiary/find`, {
      body: {
        ...params,
        pollId,
      }
    })
  }

  readonly fetchBeneficiaries = async ({
    pollId,
    start,
    end,
    skip = 0,
    limit = 100000
  }: Filters & PaginateRequest & {
    pollId: UUID
  }) => {
    const dateColumnUUID = await this.fetchBeneficiaryRaw(pollId, {
      limit: 1,
      skip: 0
    }).then(_ => {
      const key = Object.keys(_.cols)[0]
      if (_.cols[key].type !== 'datePicker') {
        throw new Error('Date column not found for pollId=' + pollId)
      }
      return key
    })
    return this.fetchBeneficiaryRaw(pollId, {
      skip,
      limit,
      ...(start || end) ? {
        dataFilters: {
          [dateColumnUUID]: [
            ...start ? [LegalaidSdk.formatDate(start)] : [],
            ...end ? [LegalaidSdk.formatDate(end)] : []
          ]
        }
      } : {}
    }).then(LegalaidSdk.mapBeneficiaries(dateColumnUUID))
  }

  private readonly fetchBeneficiaryGroupAgeColumns = async (pollId: UUID): Promise<AgeGroup<UUID>> => {
    const cols = await this.fetchBeneficiaries({limit: 1, skip: 0, pollId}).then(_ => _.cols)
    const get = (pattern: RegExp) => {
      const r = Object.keys(cols).find(k => pattern.test(cols[k].name))
      if (!r) {
        throw new Error(`Cannot find column pattern ${pattern} for pollId=${pollId}`)
      }
      return r
    }
    return {
      men_0_17: get(/MEN.*?<\s*18/),
      men_18_49: get(/MEN.*?18-49/),
      men_50_65: get(/MEN.*?50-65/),
      men_66_: get(/MEN.*?65+/),
      women_0_17: get(/WOM.*?<\s*18/),
      women_18_49: get(/WOM.*?18-49/),
      women_50_65: get(/WOM.*?50-65/),
      women_66_: get(/WOM.*?65+/),
    }
  }

  readonly fetchGroups = async (filters: PaginateRequest & Filters & {
    pollId: UUID,
  }): Promise<PaginateResult<BeneficiaryGroup>> => {
    const colsUUID = await this.fetchBeneficiaryGroupAgeColumns(filters.pollId)
    return this.fetchBeneficiaries(filters).then(_ => ({
      ..._,
      data: _.data.map(_ => {
        const ageGroups = Enum.entries(colsUUID).reduce<AgeGroup<number>>((acc, [k, v]) => ({...acc, [k]: _[v]}), {} as any)
        return {
          ..._,
          ...ageGroups,
        }
      })
    }))
  }

  readonly fetchGroupsByOffices = async ({
    offices,
    ...filters
  }: Filters & PaginateRequest & {
    offices: UUID[]
  }) => {
    const polls = await Promise.all(offices.map(officeId =>
      this.fetchPolls({officeId, search: pollSearch[PollType.Group]})
        .then(throwIf(_ => _.polls.length === 0, `Poll with search '${pollSearch[PollType.Group]}' not found for office ${officeId}`))
        .then(_ => _.polls[0])
    ))
    return await Promise.all(polls.map(_ => this.fetchGroups({pollId: _._id, ...filters})))
      .then(LegalaidSdk.reducePaginates)
  }

  readonly fetchBeneficiariesByOffices = async ({
    offices,
    ...filters
  }: Filters & PaginateRequest & {
    offices: UUID[]
  }) => {
    const polls = await Promise.all(offices.map(officeId =>
      this.fetchPolls({officeId, search: pollSearch[PollType.Individual]})
        .then(throwIf(_ => _.polls.length === 0, `Poll with search '${pollSearch[PollType.Group]}' not found for office ${officeId}`))
        .then(_ => _.polls[0])
    ))
    return await Promise.all(polls.map(_ => this.fetchGroups({pollId: _._id, ...filters})))
      .then(LegalaidSdk.reducePaginates)
  }

  private static reducePaginates = <T>(paginate: PaginateResult<T>[]): PaginateResult<T> => {
    return paginate.reduce<PaginateResult<T>>((acc, curr) => ({
      cols: {},
      total: acc.total + curr.data.length,
      data: [...acc.data, ...curr.data],
    }), {total: 0, data: [], cols: {}})
  }

  private static mapBeneficiaries = (dateColumnUUID: UUID) => (
    d: PaginateResult<Record<keyof Beneficiary, any>>
  ): PaginateResult<Beneficiary> => {
    return {
      ...d,
      data: d.data.map(LegalaidSdk.mapBeneficiary(dateColumnUUID))
    }
  }

  private static mapBeneficiary = (dateColumnUUID: UUID) => (d: Record<keyof Beneficiary, any>): Beneficiary => {
    return {
      ...d,
      date: new Date(d[dateColumnUUID]),
      createdAt: new Date(d.createdAt),
      updatedAt: new Date(d.updatedAt),
    }
  }
}
