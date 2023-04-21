import {ServiceEcrec} from './ServiceEcrec'
import {ServiceLegalAid} from './ServiceLegalAid'
import {ServiceNfi} from './ServiceNfi'
import {ServiceStats} from './ServiceStats'

export interface Services {
  ecrec: ServiceEcrec
  legalAid: ServiceLegalAid
  nfi: ServiceNfi
  stats: ServiceStats
}