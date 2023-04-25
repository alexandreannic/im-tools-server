import {ProtHHS_2_1} from './ProtHHS_2_1'

export const mapProtHHS_2_1 = (_: Record<keyof ProtHHS_2_1, string | undefined>): ProtHHS_2_1 => ({
	..._,
  introduction: {
    ..._,
    
  },
  basic_bio_data: {
    ..._,
    
  },
  hh_composition: {
    ..._,
    	are_you_separated_from_any_of_your_households_members: _.hh_composition.are_you_separated_from_any_of_your_households_members?.split(' '),
  },
  specific_needs: {
    ..._,
    	do_any_of_these_specific_needs_categories_apply_to_the_head_of_this_household: _.specific_needs.do_any_of_these_specific_needs_categories_apply_to_the_head_of_this_household?.split(' '),
  	do_you_have_a_household_member_that_has_a_lot_of_difficulty: _.specific_needs.do_you_have_a_household_member_that_has_a_lot_of_difficulty?.split(' '),
  },
  displacement_status_and_info: {
    ..._,
    	why_did_you_leave_your_area_of_origin: _.displacement_status_and_info.why_did_you_leave_your_area_of_origin?.split(' '),
  	when_did_you_leave_your_area_of_origin: _.when_did_you_leave_your_area_of_origin ? new Date(_.when_did_you_leave_your_area_of_origin) : undefined,
  	how_did_you_travel_to_your_displacement_location: _.displacement_status_and_info.how_did_you_travel_to_your_displacement_location?.split(' '),
  	when_did_you_first_leave_your_area_of_origin: _.when_did_you_first_leave_your_area_of_origin ? new Date(_.when_did_you_first_leave_your_area_of_origin) : undefined,
  	when_did_you_return_to_your_area_of_origin: _.when_did_you_return_to_your_area_of_origin ? new Date(_.when_did_you_return_to_your_area_of_origin) : undefined,
  	why_did_you_decide_to_return_to_your_area_of_origin: _.displacement_status_and_info.why_did_you_decide_to_return_to_your_area_of_origin?.split(' '),
  	was_your_movement_to_return_to_your_area_of_origin_supported_or_facilitated_by_any_of_the_following: _.displacement_status_and_info.was_your_movement_to_return_to_your_area_of_origin_supported_or_facilitated_by_any_of_the_following?.split(' '),
  	did_you_or_any_member_of_your_household_on_your_displacement_journey_experience_safety_or_security_concerns: _.displacement_status_and_info.did_you_or_any_member_of_your_household_on_your_displacement_journey_experience_safety_or_security_concerns?.split(' '),
  	what_factors_would_be_key_to_support_your_successful_integration_into_the_local_community: _.displacement_status_and_info.what_factors_would_be_key_to_support_your_successful_integration_into_the_local_community?.split(' '),
  	what_would_be_the_deciding_factor_in_your_return_to_your_area_of_origin: _.displacement_status_and_info.what_would_be_the_deciding_factor_in_your_return_to_your_area_of_origin?.split(' '),
  	why_are_planning_to_relocate_from_your_current_place_of_residence: _.displacement_status_and_info.why_are_planning_to_relocate_from_your_current_place_of_residence?.split(' '),
  },
  registration_documentation: {
    ..._,
    	as_nonUkrainian_do_you_have_documentation: _.registration_documentation.as_nonUkrainian_do_you_have_documentation?.split(' '),
  	does_1_lack_doc: _.registration_documentation.does_1_lack_doc?.split(' '),
  	does_2_lack_doc: _.registration_documentation.does_2_lack_doc?.split(' '),
  	does_3_lack_doc: _.registration_documentation.does_3_lack_doc?.split(' '),
  	does_4_lack_doc: _.registration_documentation.does_4_lack_doc?.split(' '),
  	does_5_lack_doc: _.registration_documentation.does_5_lack_doc?.split(' '),
  	does_6_lack_doc: _.registration_documentation.does_6_lack_doc?.split(' '),
  	does_7_lack_doc: _.registration_documentation.does_7_lack_doc?.split(' '),
  	does_8_lack_doc: _.registration_documentation.does_8_lack_doc?.split(' '),
  	does_9_lack_doc: _.registration_documentation.does_9_lack_doc?.split(' '),
  	does_10_lack_doc: _.registration_documentation.does_10_lack_doc?.split(' '),
  	does_11_lack_doc: _.registration_documentation.does_11_lack_doc?.split(' '),
  	does_12_lack_doc: _.registration_documentation.does_12_lack_doc?.split(' '),
  	do_you_have_any_of_the_following: _.registration_documentation.do_you_have_any_of_the_following?.split(' '),
  	why_are_you_not_registered: _.registration_documentation.why_are_you_not_registered?.split(' '),
  	what_housing_land_and_property_documents_do_you_lack: _.registration_documentation.what_housing_land_and_property_documents_do_you_lack?.split(' '),
  	have_you_experienced_any_barriers_in_obtaining_or_accessing_identity_documentation_and_or_hlp_documentation: _.registration_documentation.have_you_experienced_any_barriers_in_obtaining_or_accessing_identity_documentation_and_or_hlp_documentation?.split(' '),
  },
  safety_n_movement: {
    ..._,
    	what_are_the_main_factors_that_make_this_location_feel_unsafe: _.safety_n_movement.what_are_the_main_factors_that_make_this_location_feel_unsafe?.split(' '),
  	what_factors_are_affecting_the_relationship_between_communities_in_this_location: _.safety_n_movement.what_factors_are_affecting_the_relationship_between_communities_in_this_location?.split(' '),
  	have_you_or_your_household_members_experienced_incidents_with_host_community_members_idps_returnees: _.safety_n_movement.have_you_or_your_household_members_experienced_incidents_with_host_community_members_idps_returnees?.split(' '),
  	do_you_or_your_household_members_experience_any_barriers_to_movements_in_and_around_the_area: _.safety_n_movement.do_you_or_your_household_members_experience_any_barriers_to_movements_in_and_around_the_area?.split(' '),
  },
  violence_coercion_n_deprivation: {
    ..._,
    	what_type_of_incidents_took_place_has_any_adult_male_member_experienced_violence: _.violence_coercion_n_deprivation.what_type_of_incidents_took_place_has_any_adult_male_member_experienced_violence?.split(' '),
  	when_did_the_incidents_occur_has_any_adult_male_member_experienced_violence: _.violence_coercion_n_deprivation.when_did_the_incidents_occur_has_any_adult_male_member_experienced_violence?.split(' '),
  	who_were_the_perpetrators_of_the_incident_has_any_adult_male_member_experienced_violence: _.violence_coercion_n_deprivation.who_were_the_perpetrators_of_the_incident_has_any_adult_male_member_experienced_violence?.split(' '),
  	what_type_of_incidents_took_place_has_any_adult_female_member_experienced_violence: _.violence_coercion_n_deprivation.what_type_of_incidents_took_place_has_any_adult_female_member_experienced_violence?.split(' '),
  	when_did_the_incidents_occur_has_any_adult_female_member_experienced_violence: _.violence_coercion_n_deprivation.when_did_the_incidents_occur_has_any_adult_female_member_experienced_violence?.split(' '),
  	who_were_the_perpetrators_of_the_incident_has_any_adult_female_member_experienced_violence: _.violence_coercion_n_deprivation.who_were_the_perpetrators_of_the_incident_has_any_adult_female_member_experienced_violence?.split(' '),
  	what_type_of_incidents_took_place_has_any_boy_member_experienced_violence: _.violence_coercion_n_deprivation.what_type_of_incidents_took_place_has_any_boy_member_experienced_violence?.split(' '),
  	when_did_the_incidents_occur_has_any_boy_member_experienced_violence: _.violence_coercion_n_deprivation.when_did_the_incidents_occur_has_any_boy_member_experienced_violence?.split(' '),
  	who_were_the_perpetrators_of_the_incident_has_any_boy_member_experienced_violence: _.violence_coercion_n_deprivation.who_were_the_perpetrators_of_the_incident_has_any_boy_member_experienced_violence?.split(' '),
  	what_type_of_incidents_took_place_has_any_girl_member_experienced_violence: _.violence_coercion_n_deprivation.what_type_of_incidents_took_place_has_any_girl_member_experienced_violence?.split(' '),
  	when_did_the_incidents_occur_has_any_girl_member_experienced_violence: _.violence_coercion_n_deprivation.when_did_the_incidents_occur_has_any_girl_member_experienced_violence?.split(' '),
  	who_were_the_perpetrators_of_the_incident_has_any_girl_member_experienced_violence: _.violence_coercion_n_deprivation.who_were_the_perpetrators_of_the_incident_has_any_girl_member_experienced_violence?.split(' '),
  	what_type_of_incidents_took_place_has_any_other_member_experienced_violence: _.violence_coercion_n_deprivation.what_type_of_incidents_took_place_has_any_other_member_experienced_violence?.split(' '),
  	when_did_the_incidents_occur_has_any_other_member_experienced_violence: _.violence_coercion_n_deprivation.when_did_the_incidents_occur_has_any_other_member_experienced_violence?.split(' '),
  	who_were_the_perpetrators_of_the_incident_has_any_other_member_experienced_violence: _.violence_coercion_n_deprivation.who_were_the_perpetrators_of_the_incident_has_any_other_member_experienced_violence?.split(' '),
  	on_what_ground: _.violence_coercion_n_deprivation.on_what_ground?.split(' '),
  	is_are_any_adult_memberof_your_household_displaying_any_of_the_following_signs: _.violence_coercion_n_deprivation.is_are_any_adult_memberof_your_household_displaying_any_of_the_following_signs?.split(' '),
  	is_are_any_child_member_of_your_household_displaying_any_of_the_following_signs: _.violence_coercion_n_deprivation.is_are_any_child_member_of_your_household_displaying_any_of_the_following_signs?.split(' '),
  	what_are_the_barriers_to_access_services: _.violence_coercion_n_deprivation.what_are_the_barriers_to_access_services?.split(' '),
  	what_do_you_think_feel_are_the_major_stress_factors_for_you_and_your_household_members: _.violence_coercion_n_deprivation.what_do_you_think_feel_are_the_major_stress_factors_for_you_and_your_household_members?.split(' '),
  },
  coping_strategies: {
    ..._,
    	what_are_the_main_sources_of_income_of_your_household: _.coping_strategies.what_are_the_main_sources_of_income_of_your_household?.split(' '),
  	what_type_of_allowances_do_you_receive: _.coping_strategies.what_type_of_allowances_do_you_receive?.split(' '),
  	what_are_the_reasons_for_being_out_of_work: _.coping_strategies.what_are_the_reasons_for_being_out_of_work?.split(' '),
  	what_are_the_strategies_that_your_household_uses_to_cope_with_these_challenges: _.coping_strategies.what_are_the_strategies_that_your_household_uses_to_cope_with_these_challenges?.split(' '),
  },
  access_to_education: {
    ..._,
    	what_are_the_reasons_preventing_children_in_your_household_from_regularly_attending_education_services: _.access_to_education.what_are_the_reasons_preventing_children_in_your_household_from_regularly_attending_education_services?.split(' '),
  },
  housing: {
    ..._,
    	what_are_your_main_concerns_regarding_your_accommodation: _.housing.what_are_your_main_concerns_regarding_your_accommodation?.split(' '),
  },
  access_to_health: {
    ..._,
    	what_are_the_barriers_to_accessing_health_services: _.access_to_health.what_are_the_barriers_to_accessing_health_services?.split(' '),
  },
  sec_priority_needs: {
    ..._,
    
  },
  sec_additional_information: {
    ..._,
    
  },
  sec_followup: {
    ..._,
    }) as ProtHHS_2_1