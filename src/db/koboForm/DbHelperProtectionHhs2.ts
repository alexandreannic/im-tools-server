import {PrismaClient} from '@prisma/client'
import {ProtHHS_2_1Options} from '../generatedKoboInterface/ProtHHS_2_1/ProtHHS_2_1Options'
import {DbKoboFormHelper} from './Helper'
import {BNRE} from '../generatedKoboInterface/BNRE/BNRE'
import {ProtHHS_2_1} from '../generatedKoboInterface/ProtHHS_2_1/ProtHHS_2_1'
import {Enum, map} from '@alexandreannic/ts-utils'

type Office = typeof ProtHHS_2_1Options['staff_to_insert_their_DRC_office']

/**
 * From Romane reporting file
 */
export enum Donor {
  'BHA_UKR000284' = 'BHA UKR-000284',
  'OKF_UKR000309' = 'OKF UKR-000309',
  'ECHO_UKR000322' = 'ECHO UKR-000322',
  'UHF_IV_UKR000314' = 'UHF IV UKR-000314',
  'NN2_UKR000298' = 'NN2 UKR-000298',
}

const juneReporting: Partial<Record<
  keyof Office,
  Partial<Record<Donor, {ai?: number, ipt?: number}>>>
> = {
  'lviv': {
    [Donor.BHA_UKR000284]: {ai: .5, ipt: 1,},
    [Donor.OKF_UKR000309]: {ai: .5, ipt: 1,},
  },
  'chernihiv': {
    [Donor.BHA_UKR000284]: {ipt: 1, ai: 1},
  },
  'dnipro': {
    [Donor.BHA_UKR000284]: {ipt: 1, ai: 1},
  },
  'kharkiv': {
    [Donor.BHA_UKR000284]: {ipt: 1},
    [Donor.UHF_IV_UKR000314]: {ai: 1, ipt: 1},
  },
  'mykolaiv': {
    [Donor.UHF_IV_UKR000314]: {ai: 1, ipt: 1},
    [Donor.NN2_UKR000298]: {ipt: 1},
  },
}

export interface DbProtectionHhs2Tags {
  reportingAiDonor?: Donor
  reportingIptDonor?: Donor
}

export class DbHelperProtectionHhs2 {

  constructor(private prisma: PrismaClient) {
  }

  readonly assignDonor = async () => {
    const data = await this.prisma.koboAnswers.findMany({
      where: {
        end: {
          gte: new Date(2023, 5, 1),
          lt: new Date(2023, 6, 1),
        },
      }
    }).then(_ => _.map(DbKoboFormHelper.definedJsonType<ProtHHS_2_1>()))
    await Promise.all(data
      .filter(_ => !!_.answers.staff_to_insert_their_DRC_office)
      .map(_ => {
        return map(juneReporting[_.answers.staff_to_insert_their_DRC_office], reporting => {
          const donor: {ipt: Donor[], ai?: Donor} = {ipt: []}
          Enum.entries(reporting).forEach(([k, v], donorIndex) => {
            if (v.ipt === 1)
              donor.ipt.push(k)
            else if (v.ipt === .5) {
              if (+_.id % 2 === donorIndex) {
                donor.ipt.push(k)
              }
            }
            if (v.ai === 1)
              donor.ai = k
            else if (v.ai === .5) {
              if (+_.id % 2 === donorIndex) {
                donor.ai = k
              }
            }
          })
          return this.prisma.koboAnswers.update({
            where: {
              uuid: _.uuid,
            },
            data: {tags: donor}
          })
        })
      }))
  }
}
