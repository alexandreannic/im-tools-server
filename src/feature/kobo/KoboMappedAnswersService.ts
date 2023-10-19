import {KoboAnswerFilter, KoboService} from './KoboService'
import {PrismaClient} from '@prisma/client'
import {koboFormsId} from '../../core/conf/KoboFormsId'
import {ApiPaginate} from '../../core/Type'
import {DbKoboAnswer, KoboAnswerFlat} from '../connector/kobo/KoboClient/type/KoboAnswer'
import {mapBn_Re} from '../../script/output/kobo/Bn_Re/Bn_ReMapping'
import {mapShelter_cashForRepair} from '../../script/output/kobo/Shelter_cashForRepair/Shelter_cashForRepairMapping'
import {mapBn_OldMpcaNfi} from '../../script/output/kobo/Bn_OldMpcaNfi/Bn_OldMpcaNfiMapping'
import {mapBn_RapidResponse} from '../../script/output/kobo/Bn_RapidResponse/Bn_RapidResponseMapping'

export class KoboMappedAnswersService {

  constructor(
    private prisma: PrismaClient,
    private kobo: KoboService = new KoboService(prisma)
  ) {
  }

  private static readonly map = <T extends Record<string, any> = Record<string, any>>(fnMap: (_: Record<string, any>) => T) => (data: ApiPaginate<DbKoboAnswer>): ApiPaginate<KoboAnswerFlat<T>> => {
    return {
      total: data.total,
      data: data.data.map(_ => ({..._, ...fnMap(_.answers)}))
    }
  }

  readonly searchBnre = (filters: KoboAnswerFilter = {}) => {
    return this.kobo.searchAnswers({
      formId: koboFormsId.prod.bn_Re,
      ...filters,
    }).then(KoboMappedAnswersService.map(mapBn_Re))
      // .then(_ => _.data[0].i)
  }

  readonly searchShelter_cashForRepair = (filters: KoboAnswerFilter = {}) => {
    return this.kobo.searchAnswers({
      formId: koboFormsId.prod.shelter_cashForRepair,
      ...filters,
    }).then(KoboMappedAnswersService.map(mapShelter_cashForRepair))
  }

  readonly searchBn_BnrOld = (filters: KoboAnswerFilter = {}) => {
    return this.kobo.searchAnswers({
      formId: koboFormsId.prod.bn_OldMpcaNfi,
      ...filters,
    }).then(KoboMappedAnswersService.map(mapBn_OldMpcaNfi))
  }

  readonly searchBn_RapidResponseMechanism = (filters: KoboAnswerFilter = {}) => {
    return this.kobo.searchAnswers({
      formId: koboFormsId.prod.bn_RapidResponse,
      ...filters,
    }).then(KoboMappedAnswersService.map(mapBn_RapidResponse))
  }
}