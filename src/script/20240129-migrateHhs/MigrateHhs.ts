import {PrismaClient} from '@prisma/client'
import {KoboSdkGenerator} from '../../feature/kobo/KoboSdkGenerator'
import {PromisePool} from '@supercharge/promise-pool'
import {KoboAnswer} from '../../feature/connector/kobo/KoboClient/type/KoboAnswer'
import {scriptConf} from '../ScriptConf'
import {Protection_hhs} from '../output/kobo/Protection_hhs'
import {Protection_hhs2_2} from '../output/kobo/Protection_hhs2_2'
import {DeepPartial, mapFor} from '@alexandreannic/ts-utils'

(async () => {
  const config = {
    server: 'dev',
    importConcurrency: 2,
  } as const
  const serverConfig = {
    dev: {
      formId: 'a89UuhpXnPusPbK3SwQzBU',
      newFormId: 'a5iRvSUsSWimDbmzs4efY7',
    },
    prod: {
      formId: 'TODO'
    }
  }[config.server]

  const prisma = new PrismaClient()
  const sdk = await new KoboSdkGenerator(prisma).get(scriptConf.kobo[config.server].serverId)
  const sdkv1 = await new KoboSdkGenerator(prisma).getV1(scriptConf.kobo[config.server].serverId)

  const getAllIds: KoboAnswer<Protection_hhs.T>[] = await sdk
    .getAnswers(serverConfig.formId)
    .then(x => x.data.map(a => {
      return {
        ...a,
        answers: Protection_hhs.map(a.answers)
      }
    }))

  await PromisePool.withConcurrency(config.importConcurrency).for(getAllIds).process(async (row, i) => {
    console.log(row.id, row.answers.hh_age_1)
    const d = row.answers
    const res = await sdkv1.submit<DeepPartial<Protection_hhs2_2.T>>({
      formId: serverConfig.newFormId,
      // submissionIds: [row.id],
      data: Object.freeze({
        group_introduction: {
          staff_to_insert_their_DRC_office: d.staff_to_insert_their_DRC_office,
          staff_code: d.staff_code,
          type_of_site: d.type_of_site,
          present_yourself: d.present_yourself,
          thanks_the_respondant: d.thanks_the_respondant,
          have_you_filled_out_this_form_before: d.have_you_filled_out_this_form_before,
        },
        group_basic_bio_data: {
          where_are_you_current_living_label: d.where_are_you_current_living_label,
          where_are_you_current_living_oblast: d.where_are_you_current_living_oblast,
          where_are_you_current_living_raion: d.where_are_you_current_living_raion,
          where_are_you_current_living_hromada: d.where_are_you_current_living_hromada,
          settlement: d.settlement,
          what_is_your_citizenship: d.what_is_your_citizenship,
          if_nonukrainian_what_is_your_citizenship: d.if_nonukrainian_what_is_your_citizenship,
          please_specifyif_nonukrainian_what_is_your_citizenship: d.please_specifyif_nonukrainian_what_is_your_citizenship,
          if_ukrainian_do_you_or_your_household_members_identify_as_member_of_a_minority_group: d.if_ukrainian_do_you_or_your_household_members_identify_as_member_of_a_minority_group,
          please_specifyif_ukrainian_do_you_or_your_household_members_identify_as_member_of_a_minority_group: d.please_specifyif_ukrainian_do_you_or_your_household_members_identify_as_member_of_a_minority_group,
          what_is_the_primary_language_spoken_in_your_household: d.what_is_the_primary_language_spoken_in_your_household,
        },
        group_hh_composition: {
          what_is_the_type_of_your_household: d.what_is_the_type_of_your_household,
          what_is_the_type_of_your_household_min: d.what_is_the_type_of_your_household_min,
          what_is_the_type_of_your_household_max: d.what_is_the_type_of_your_household_max,
          how_many_ind: d.how_many_ind,
          hh_char_hh_det: mapFor(d.how_many_ind ?? 0, i => ({
            hh_char_hh_det_age: d['hh_age_' + i],
            hh_char_hh_det_gender: d['hh_sex_' + i],
            do_you_have_a_household_member_that_has_a_lot_of_difficulty: ['unable_unwilling_to_answer'],
          }),)
        },
        group_registration_documentation: {
          hh_char_hh_doc: [
            {
              does_lack_doc: ['birth_certificate', 'pensioner_cert_retirement'],
              is_member_registered: 'no',
              please_specifydoes_lack_doc: 'test'
            }
          ]
        }
      }) as any,
    })
    console.log(res.message)
  })


})()