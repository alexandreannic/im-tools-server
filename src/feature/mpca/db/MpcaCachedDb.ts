import {MpcaDbService} from './MpcaDbService'
import {PrismaClient} from '@prisma/client'
import {ApiPaginate, toApiPaginate, UUID} from '../../../core/Type'
import {MpcaEntity, MpcaDataFilter} from './MpcaDbType'
import {Enum} from '@alexandreannic/ts-utils'
import {KoboEvent} from '../../kobo/KoboEvent'
import {koboFormsId} from '../../../core/conf/KoboFormsId'
import {MemoryDatabase, MemoryDatabaseInterface} from '../../../core/MemoryDatabase'

export class MpcaCachedDb {
  private static instance: MpcaCachedDb

  static constructSingleton = (
    prisma: PrismaClient,
    service: MpcaDbService = new MpcaDbService(prisma),
  ) => {
    if (!MpcaCachedDb.instance) {
      const mem = MemoryDatabase.getCache()
      const cache = mem.register({
        name: 'mpca',
        fetch: () => service.search({}).then(_ => _.data),
        getId: _ => _.id,
      })
      this.instance = new MpcaCachedDb(cache)
    }
    return MpcaCachedDb.instance
  }

  private constructor(
    private meme: MemoryDatabaseInterface<MpcaEntity, UUID>,
    private koboEvent: KoboEvent = new KoboEvent(),
  ) {
    this.koboEvent.listenTagEdited(async (x) => {
      if (![
        koboFormsId.prod.bn_re,
        koboFormsId.prod.bn_1_mpcaNfi,
        koboFormsId.prod.bn_rapidResponse,
        koboFormsId.prod.shelter_cashForRepair,
      ].includes(x.formId)) {
        return
      }
      x.answerIds.forEach(id => {
        this.meme.update(id, prev => {
          prev.tags = {
            ...prev.tags,
            ...x.tags,
          }
          return prev
        })
      })
    })
    this.refresh = this.meme.refresh
    this.warmUp = this.meme.warmUp
  }

  readonly refresh: typeof this.meme.refresh
  readonly warmUp: typeof this.meme.warmUp

  readonly search = async ({start, end, ...filters}: MpcaDataFilter): Promise<ApiPaginate<MpcaEntity>> => {
    const definedFilters = Enum.entries(filters).filter(([k, v]) => v !== undefined && v.length > 0).map(_ => _[0])
    const data = await this.meme.get()
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