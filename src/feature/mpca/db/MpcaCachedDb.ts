import {MpcaDbService} from './MpcaDbService'
import {PrismaClient} from '@prisma/client'
import {ApiPaginate, toApiPaginate} from '../../../core/Type'
import {MpcaData, MpcaDataFilter} from './MpcaDbType'
import {Enum, fnSwitch} from '@alexandreannic/ts-utils'
import {KoboEvent} from '../../kobo/KoboEvent'
import {KoboAnswerId} from '../../connector/kobo/KoboClient/type/KoboAnswer'
import {koboFormsId} from '../../../core/conf/KoboFormsId'
import {logger, Logger} from '../../../helper/Logger'

export class MpcaCachedDb {
  private static instance: MpcaCachedDb

  static constructSingleton(prisma: PrismaClient) {
    if (!MpcaCachedDb.instance) MpcaCachedDb.instance = new MpcaCachedDb(prisma)
    return MpcaCachedDb.instance
  }

  private constructor(
    private prisma: PrismaClient,
    private service: MpcaDbService = new MpcaDbService(prisma),
    private koboEvent: KoboEvent = new KoboEvent(),
    private log: Logger = logger('MpcaCachedDb')
  ) {
    this.koboEvent.listenTagEdited(async (x) => {
      if (!this._cache || !this.idIndex || ![
        koboFormsId.prod.bn_re,
        koboFormsId.prod.bn_1_mpcaNfi,
        koboFormsId.prod.bn_rapidResponse,
        koboFormsId.prod.shelter_cashForRepair,
      ].includes(x.formId)) {
        return
      }
      const cache = await this._cache
      x.answerIds.forEach(id => {
        const index = this.idIndex![id]
        if (!index) return
        cache[index].tags = {
          ...cache[this.idIndex![id]].tags,
          ...x.tags,
        }
      })
    })
  }

  private _cache: Promise<MpcaData[]> | undefined
  private get cache(): Promise<MpcaData[]> | undefined {
    if (!this._cache) {
      this.build()
    }
    return this._cache
  }

  private idIndex: Record<KoboAnswerId, number> | undefined

  readonly build = async () => {
    this.log.info('Rebuild memory database...')
    this._cache = this.service.search({}).then(_ => {
      this.idIndex = {}
      _.data.forEach((d, i) => {
        if (this.idIndex![d.id]) throw new Error(`Why ${d.id} exists twice?`)
        this.idIndex![d.id] = i
      })
      return _.data
    })
    await this._cache
    this.log.info('Rebuild memory database... Completed!')
  }

  readonly refresh = this.build

  readonly warmUp = this.build

  readonly search = async ({start, end, ...filters}: MpcaDataFilter): Promise<ApiPaginate<MpcaData>> => {
    const definedFilters = Enum.entries(filters).filter(([k, v]) => v !== undefined && v.length > 0).map(_ => _[0])
    const data = await this.cache
    const filteredData = data?.filter(_ => {
      for (let i = 0; i < definedFilters.length; i++) {
        const key = definedFilters[i]
        if (!(filters[key]! as any).includes(_[key])) {
          return false
        }
      }
      return true
    })
    return toApiPaginate(filteredData ?? [])
  }
}