import {ApiClient} from '../../../core/client/ApiClient'
import {AssistancePrevented, AssistanceProvided, WfpFilters, WfpImport, WfpPaginate} from './WfpBuildingBlockType'
import {ApiPaginate} from '../../../core/Type'

export class WFPBuildingBlockSdk {

  constructor(private client: ApiClient) {
  }

  private static readonly mapPaginate = <I, O>(fn: (_: I) => O) => (_: WfpPaginate<I>): ApiPaginate<O> => {
    return {
      total: _.paging.total ?? _.paging.totalAtLeast,
      data: _.items.map(fn)
    }
  }

  readonly getImportFiles = ({limit, offset}: WfpFilters = {}) => {
    return this.client.get<WfpPaginate<any>>(`/manager/tasks/beneficiary-import-requests`, {
      qs: {
        _limit: limit,
        _offset: offset,
      }
    })
      .then(WFPBuildingBlockSdk.mapPaginate(WfpImport.map))
  }

  readonly getAssistanceProvided = ({limit = 1000, offset = 0}: WfpFilters = {}) => {
    return this.client.post(`/manager/entitlements/list`, {
      body: {
        organization: 'DRC',
        _limit: limit,
        _offset: offset,
      }
    })
      .then(WFPBuildingBlockSdk.mapPaginate(AssistanceProvided.map))
  }

  readonly getAssistancePrevented = ({limit = 1000, offset = 0}: WfpFilters = {}) => {
    return this.client.post(`/manager/deduplicated-entitlements/list`, {
      body: {
        organization: 'DRC',
        _limit: limit,
        _offset: offset,
      }
    })
      .then(WFPBuildingBlockSdk.mapPaginate(AssistancePrevented.map))
  }

}