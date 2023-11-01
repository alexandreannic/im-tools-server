import {KoboAnswerFilter, KoboService} from './KoboService'
import {PrismaClient} from '@prisma/client'
import {koboFormsId} from '../../core/conf/KoboFormsId'
import {ApiPaginate} from '../../core/Type'
import {DbKoboAnswer, KoboAnswerFlat, KoboId} from '../connector/kobo/KoboClient/type/KoboAnswer'
import {mapBn_Re} from '../../script/output/kobo/Bn_Re/Bn_ReMapping'
import {mapShelter_cashForRepair} from '../../script/output/kobo/Shelter_cashForRepair/Shelter_cashForRepairMapping'
import {mapBn_OldMpcaNfi} from '../../script/output/kobo/Bn_OldMpcaNfi/Bn_OldMpcaNfiMapping'
import {mapBn_RapidResponse} from '../../script/output/kobo/Bn_RapidResponse/Bn_RapidResponseMapping'
import {mapBn_0_mpcaReg} from '../../script/output/kobo/Bn_0_mpcaReg/Bn_0_mpcaRegMapping'
import {mapBn_0_mpcaRegNoSig} from '../../script/output/kobo/Bn_0_mpcaRegNoSig/Bn_0_mpcaRegNoSigMapping'
import {mapBn_0_mpcaRegESign} from '../../script/output/kobo/Bn_0_mpcaRegESign/Bn_0_mpcaRegESignMapping'
import {mapBn_0_mpcaRegNewShort} from '../../script/output/kobo/Bn_0_mpcaRegNewShort/Bn_0_mpcaRegNewShortMapping'

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

  private readonly buildMappedSearch = <T extends Record<string, any>>(
    formId: KoboId,
    fn: (_) => T) => (filters: KoboAnswerFilter = {}
  ): Promise<ApiPaginate<KoboAnswerFlat<T>>> => {
    return this.kobo.searchAnswers({
      formId,
      ...filters,
    }).then(KoboMappedAnswersService.map(fn))
  }

  readonly searchBnre = this.buildMappedSearch(koboFormsId.prod.bn_re, mapBn_Re)
  readonly searchShelter_cashForRepair = this.buildMappedSearch(koboFormsId.prod.shelter_cashForRepair, mapShelter_cashForRepair)
  readonly searchBn_BnrOld = this.buildMappedSearch(koboFormsId.prod.bn_1_mpcaNfi, mapBn_OldMpcaNfi)
  readonly searchBn_RapidResponseMechanism = this.buildMappedSearch(koboFormsId.prod.bn_rapidResponse, mapBn_RapidResponse)
  readonly searchBn_0_mpcaRegNewShort = this.buildMappedSearch(koboFormsId.prod.bn_0_mpcaRegNewShort, mapBn_0_mpcaRegNewShort)
  readonly searchBn_0_mpcaReg = this.buildMappedSearch(koboFormsId.prod.bn_0_mpcaReg, mapBn_0_mpcaReg)
  readonly searchBn_0_mpcaRegNoSig = this.buildMappedSearch(koboFormsId.prod.bn_0_mpcaRegNoSig, mapBn_0_mpcaRegNoSig)
  readonly searchBn_0_mpcaRegESign = this.buildMappedSearch(koboFormsId.prod.bn_0_mpcaRegESign, mapBn_0_mpcaRegESign)
}

