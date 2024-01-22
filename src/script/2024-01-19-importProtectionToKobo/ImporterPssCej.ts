import {fnSwitch} from '@alexandreannic/ts-utils'
import {parse, setHours} from 'date-fns'
import {ImportKoboPss} from './KoboImportPss'
import {Protection_groupSession} from '../output/kobo/Protection_groupSession/Protection_groupSession'

export namespace ImportPssCej {

  export interface Csv {
    'Area code': string
    'Donor': string
    'Project Code': string
    'Session No': string
    'Oblast': string
    'Raion': string
    'Hromada': string
    'Location name': string
    'Date': string
    'Topic': string
    'Language': string
    'Facilitator': string
    'Settlement type': string
    'Gender': string
    'Age': string
    'Status': string
    'Delivered': string
    'Comments': string
  }

  export interface GroupedRow extends Omit<Csv, 'Age' | 'Gender' | 'Status'> {
    participants: NonNullable<Protection_groupSession['hh_char_hh_det']>
  }

  export const mapStatus = (_: string): any => fnSwitch(_, {
    'Conflict affected': 'unspec',
    'IDP': 'idp',
  }, () => 'other')

  export const mapDate = (_: string): any => {
    try {
      return setHours(parse(_, 'dd.MM.yyyy', new Date()), 11).toISOString()
    } catch (e) {
      new Error(`Failed to parse ${_}.`)
    }
  }

  export const map = (_: GroupedRow, comments: string): ImportKoboPss => {
    const date = mapDate(_.Date)
    return {
      start: date,
      end: date,
      introduction: {
        date: date,
        staff_to_insert_their_DRC_office: 'lviv',
        project: 'echo',
        ben_det_oblast: fnSwitch(_.Oblast, {
          Kyivska: 'kyivska',
          Chernihivska: 'chernihivska',
        }),
        ben_det_raion: fnSwitch(_.Raion, {
          'Chernihivskyi': 'chernihivskyi',
          'Koriukivskyi': 'koriukivskyi',
          'Novhorod-Siverskyi': 'novhorod',
          'Vyshhorodskyi': 'vysochanska',

        }),
        ben_det_hromada: fnSwitch(_.Hromada, {
          'Horodnianska': 'horodnianska',
          'Novobilouska': 'novobilouska',
          'Novhorod-Siverska': 'novhorod',
          'Menska': 'menska',
          'Kiptivska': 'kiptivska',
          'Slavutytska': 'slavutska',
          'Tupychivska': 'tupychivska',
          'Kyinska': 'kyinska',
          'Kholmynska': 'kholmynska',
          'Mykhailo-Kotsiubynska': 'mykhailo',
        }),
        ben_det_hromada_001: _['Location Name'],
        location: fnSwitch(_['Settlement type'], {
          'Rural': 'other',
          'Urban': 'other',
        }),
      },
      gi: {
        activity: 'pss',
        activity_topic: _.Topic,
        new_ben: 'yes',
        new_ben_no: +_['Session No'],
        numb_part: +_.participants.length,
        hh_char_hh_det: _.participants,
        comments,
      }
    }
  }
}
