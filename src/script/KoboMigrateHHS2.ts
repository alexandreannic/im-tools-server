import {ProtHHS_2_1Options} from '../feature/kobo/formInterface/ProtHHS_2_1Options'
import {ProtHHS_2_1} from '../feature/kobo/formInterface/ProtHHS_2_1'
import {ProtHHS_2_1_fields} from '../feature/kobo/formInterface/ProtHHS_2_1_fields'
import {PrismaClient} from '@prisma/client'
import {KoboApiService} from '../feature/kobo/KoboApiService'
import {logger, Logger} from '../utils/Logger'

interface Props {
  prisma: PrismaClient,
  serverId: string
  oldFormId: string
  newFormId: string
  service?: KoboApiService
  log?: Logger
}

export const KoboMigrateHHS2 = ({
  prisma,
  serverId,
  oldFormId,
  newFormId,
  service = new KoboApiService(prisma),
  log = logger('KoboMigrateHHS2'),
}: Props) => {

  const mapAnswers = async () => {
    const res = await service.fetchAnswers(serverId, oldFormId)
    const unhandledQuestionName = new Set<string>()
    const unhandledOptions: Record<string, string> = {}

    const checkOptions = (questionName: string, values: string) => {
      const options = ProtHHS_2_1Options[questionName]
      const value = values.split(' ')
      if (!options) return
      const possibleValues = Object.keys(options)
      value.forEach(v => {
        if (possibleValues && !possibleValues.includes(v)) {
          unhandledOptions[questionName] = v
        }
      })
    }

    const fixOptions = (values: string): string => {
      const optionsMapping = {
        wg_using_your_usual_language_have_difficulty_communicating_: 'wg_using_your_usual_language_have_difficulty_communicating',
        host_community_member: 'non_displaced',
        conflict_affected_person: 'non_displaced',
        'host_communitys_local_authorities_supported_evacuation': 'government_supported_evacuation',
        '_4_very_good': '_5_very_good',
        '_3_good': '_4_good',
        'collective_centre': 'urban_area',
        'village_settlement': 'rural_area',
        'private_housing': 'rural_area',
        'borrowing_money_': 'borrowing_money',
        'accommodations_condition_': 'accommodations_condition',
        'fear_of_property_being_damaged_or_destroyed_by_armed_violence': 'fear_of_property_being_damaged_or_destroyedby_armed_violence',
        'partially_damaged_': 'partially_damaged',
        'accommodation_with_host_family_': 'accommodation_with_host_family',
        'livelihood_support_vocational_training': 'livelihood_support vocational_training',
        'collective_shelter_': 'collective_shelter',
        'repaired_housing_compensation_for_destroyed_or_damaged_property': 'repaired_housing_compensation_for_destroyedor_damaged_property',
      }
      return values.split(' ').map(_ => optionsMapping[_] ?? _).join(' ')
    }

    const newData = res.data.map(row => {
      const answersArr = Object.entries(row.answers).map(([questionName, value]) => [questionName.split('/')[1], value]) as [string, any][]
      const answers = {} as ProtHHS_2_1
      answersArr.forEach(([questionName, value], index) => {
        value = fixOptions(value)
        if (/^where_is_your_[a-z]+$/.test(questionName) && value === 'stayed_to_keep_the_jobs') {
          value = value.replace('stayed_to_keep_the_jobs', 'remained_behind_in_the_area_of_origin')
        }
        if (questionName === 'type_of_site' && value === 'other_specify') {
          value = ''
        }
        if (ProtHHS_2_1_fields.find(_ => _ === questionName)) {
          answers[questionName] = value
        } else if (/^please_specify[a-z0-9_]{5}$/.test(questionName)) {
          const previousQuestionName = answersArr[index - 1][0]
          answers['please_specify' + previousQuestionName] = value
        } else if (
          /^what_type_of_incidents_took_place[a-z0-9_]{5}$/.test(questionName) ||
          /^when_did_the_incidents_occur[a-z0-9_]{5}$/.test(questionName) ||
          /^who_were_the_perpetrators_of_the_incident[a-z0-9_]{5}$/.test(questionName)
        ) {
          let relatedParent
          for (let i = index - 1; i === 0 || !relatedParent; i--) {
            relatedParent = answersArr[i][0].match(/^(has_any_.*?)[a-z0-9_]{5}$/)?.[1]
          }
          answers[questionName.substring(0, questionName.length - 5) + relatedParent] = value
        } else if (questionName === 'how_many_individuals_including_the_respondent_are_in_the_household') {
          answers.how_many_ind = value
        } else if (/^where_are_you_current_living_oblast/.test(questionName)) {
          answers.where_are_you_current_living_oblast = value
        } else if (/^where_are_you_current_living_raion/.test(questionName)) {
          answers.where_are_you_current_living_raion = value
        } else if (/^where_are_you_current_living_hromada/.test(questionName)) {
          answers.where_are_you_current_living_hromada = value
        } else if (/^what_is_your_area_of_origin_oblast/.test(questionName)) {
          answers.what_is_your_area_of_origin_oblast = value
        } else if (/^what_is_your_area_of_origin_raion/.test(questionName)) {
          answers.what_is_your_area_of_origin_raion = value
        } else if (/^what_is_your_area_of_origin_hromada/.test(questionName)) {
          answers.what_is_your_area_of_origin_hromada = value
        } else if (questionName === 'why_dont_they_have_stauts') {
          answers.why_dont_they_have_status = value
        } else if (questionName === 'has_any_member_of_your_household_experienced_any_protectionright_violation_incident') {
          answers.has_any_other_member_experienced_violence = value
        } else if (questionName === 'has_any_adult_female_member_of_your_household_experienced_any_protectionright_violation_incident') {
          answers.has_any_adult_female_member_experienced_violence = value
        } else if (questionName === 'has_any_adult_male_member_of_your_household_experienced_any_form_of_violence_within_the_last_6_months') {
          answers.has_any_adult_male_member_experienced_violence = value
        } else if (questionName === 'has_any_girl_member_of_your_household_experienced_any_protectionright_violation_incident') {
          answers.has_any_girl_member_experienced_violence = value
        } else if (questionName === 'how_many_household_members_lack_personal_documentation') {
          for (let i = 0; i < 12; i++) {
            if (value >= i) {
              answers[`does_${i}_lack_doc`] === 'other_specify'
            }
          }
        } else if (questionName.startsWith('hh_unregistered_sex_')) {
          const hhIndex = questionName.match(/hh_unregistered_sex_(\d+)/)?.[1]
          if (hhIndex && +hhIndex <= 12) {
            answers[`is_member_${hhIndex}_registered`] = 'no'
          }
        } else {
          unhandledQuestionName.add(questionName)
        }
      })
      Object.entries(answers).forEach(([questionName, answer]) => {
        checkOptions(questionName, answer)
      })
      return {...row, answers2: answers}
    })
    console.error(unhandledOptions)
    console.warn(unhandledQuestionName)
    return newData
  }

  const transformIdToAvoidCollision = (koboId: string) => '2' + koboId

  const run = async () => {
    const form = await prisma.koboForm.findFirst({where: {id: oldFormId}})
    if (form) {
      log.info(`Form ${oldFormId} already created.`)
      return
    }
    await service.saveApiFormToDb(serverId, newFormId)
    const mappedAnswers = await mapAnswers()

    const alreadyInserted = await prisma.koboAnswers.findFirst({
      where: {
        id: transformIdToAvoidCollision(mappedAnswers[0].id)
      }
    })
    if (alreadyInserted) {
      log?.info(`Data already inserted.`)
      return
    }

    await prisma.koboAnswers.createMany({
      data: mappedAnswers.map(_ => ({
        id: transformIdToAvoidCollision(_.id),
        formId: newFormId,
        start: _.start,
        end: _.end,
        version: _.version,
        submissionTime: _.submissionTime,
        validationStatus: _.validationStatus,
        validatedBy: _.validatedBy,
        lastValidatedTimestamp: _.lastValidatedTimestamp,
        answers: _.answers,
      }))
    })
  }

  return {
    run
  }
}
