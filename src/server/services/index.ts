import {ServiceEcrec} from './ServiceEcrec'
import {ServiceLegalAid} from './ServiceLegalAid'
import {ServiceNfi} from './ServiceNfi'
import {ServiceStats} from './ServiceStats'
import {MpcaPaymentService} from '../../feature/mpcaPayment/MpcaPaymentService'

export interface Services {
  ecrec: ServiceEcrec
  legalAid: ServiceLegalAid
  nfi: ServiceNfi
  stats: ServiceStats
  mpcaPayment: MpcaPaymentService

}
