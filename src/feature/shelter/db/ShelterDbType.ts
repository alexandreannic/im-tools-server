import {OblastISO, OblastName} from '../../../core/oblastIndex'
import {DrcOffice} from '../../../core/DrcUa'
import {KoboAnswerFlat, KoboAnswerId} from '../../connector/kobo/KoboClient/type/KoboAnswer'
import {Shelter_TA} from '../../../script/output/kobo/Shelter_TA/Shelter_TA'
import {ShelterNtaTags, ShelterTaTags} from '../../kobo/tags/ShelterTags'
import {Shelter_NTA} from '../../../script/output/kobo/Shelter_NTA/Shelter_NTA'

export enum ShelterTaPriceLevel {
  Light = 'Light',
  Medium = 'Medium',
  Heavy = 'Heavy',
}

export interface ShelterEntity {
  ta?: KoboAnswerFlat<Shelter_TA, ShelterTaTags> & {
    _price?: number | null
    _priceLevel?: ShelterTaPriceLevel
  }
  nta?: KoboAnswerFlat<Shelter_NTA, ShelterNtaTags>
  oblastIso?: OblastISO | ''
  oblast?: OblastName | ''
  office?: DrcOffice | ''
  id: KoboAnswerId
}
