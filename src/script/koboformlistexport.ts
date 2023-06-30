export const printKoboFormsAsCSV = () => {
  const res = list
    .map(_ => [
      _.name,
      _.url,
      _.date_created,
      _.date_modified,
      _.date_deployed,
      _.owner__username,
      _.deployment__submission_count,
      _.deployment__active,
    ].map(_ => `"${_}"`).join(','))
    .join('\n')
}


const list = [
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a5Ue2L8z6i4j6tuivjWVN2/',
    'date_created': '2023-03-17T14:40:05.836534Z',
    'date_modified': '2023-06-08T11:39:10.632087Z',
    'date_deployed': '2023-04-14T07:47:07.995088Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        '1. Інформована згода',
        'Вітаємо від  Данської Ради у справах біженців! Ми хочемо задати вам кілька запитань, щоб отримати інформацію про грошову допомогу, яку Ви та ваша сім\'я отримали від нас. Ми хочемо почути ваші думки, щоб ми могли поліпшити свою роботу. Ваша участь є добровільною, і відповідь на запитання займе близько 20 хвилин. Якщо Ви погодитесь на інтерв\'ю, у Вас є можливість перестати відповідати або не відповідати на будь-яке питання, якщо Ви не бажаєте. Ця інформація допоможе нам зрозуміти, що було зроблено належним чином, що не спрацювало,  і що ми повинні робити по-іншому в процесі видачі грошової допомоги. Інформація, якою Ви ділитеся, буде захищена і буде передана лише невеликій групі людей у нашій організації. Будь ласка, знайте, що якщо Ви надасте негативні відгуки про нашу роботу, це не матиме жодних негативних наслідків для вашої участі в тій чи іншій проектній діяльності нашої організації. ',
        'Enter a date',
        'Офіс, відповідальний за видачу грошової допомоги ',
        'Унікальний код бенефіціара '
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'select_from_list_name',
        'hint',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'Ukrainian',
        'English'
      ],
      'row_count': 77,
      'name_quality': {
        'ok': 33,
        'bad': 3,
        'good': 41,
        'total': 77,
        'firsts': {
          'ok': {
            'name': 'Enter_a_date',
            'index': 3,
            'label': [
              'Enter a date',
              'Enter a date'
            ]
          },
          'bad': {
            'name': '_',
            'index': 40,
            'label': [
              'Що було зроблено для покращення ваших житлових умов?',
              'What has been done to improve your living conditions? '
            ]
          }
        }
      },
      'default_translation': 'Ukrainian'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'a5Ue2L8z6i4j6tuivjWVN2',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Multiple Clusters',
        'value': 'Humanitarian - Multiple Clusters'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ]
    },
    'kind': 'asset',
    'name': 'BHA_PDM_MPCA_Cash for Rent',
    'asset_type': 'survey',
    'version_id': 'vCttNR9izsFNJpAF76Ypec',
    'has_deployment': true,
    'deployed_version_id': 'vCttNR9izsFNJpAF76Ypec',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/a5Ue2L8z6i4j6tuivjWVN2',
    'deployment__active': true,
    'deployment__submission_count': 0,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a5Ue2L8z6i4j6tuivjWVN2/permission-assignments/p8HnuJVWqZBu2JeMnCUsVj/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a5Ue2L8z6i4j6tuivjWVN2/permission-assignments/pFyTQ5Rqzm5c8Nwys9Cxwq/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a5Ue2L8z6i4j6tuivjWVN2/permission-assignments/pGid37Ziz4MohTPcm3vNbz/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a5Ue2L8z6i4j6tuivjWVN2/permission-assignments/pLj2fawoJU73iUHMU5trqS/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a5Ue2L8z6i4j6tuivjWVN2/permission-assignments/p7fkMn5XBBWrp5KxhKHmFZ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a5Ue2L8z6i4j6tuivjWVN2/permission-assignments/pFpDT8k3dDPZjwGBAHokVV/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a5Ue2L8z6i4j6tuivjWVN2/permission-assignments/p69Xmb9o3vmDoFLeb6XEDX/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a5Ue2L8z6i4j6tuivjWVN2/permission-assignments/p9P4kmv5NrDXiFdWtF3uRA/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a5Ue2L8z6i4j6tuivjWVN2.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a5Ue2L8z6i4j6tuivjWVN2.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a5Ue2L8z6i4j6tuivjWVN2/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/',
    'date_created': '2023-05-25T10:20:18.971753Z',
    'date_modified': '2023-06-08T10:54:30.281248Z',
    'date_deployed': '2023-06-08T06:34:25.822183Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
    'summary': {
      'geo': false,
      'labels': [
        'Basic Information',
        'Partner name (English)',
        'Partner name (Ukrainian)',
        'Type of organization',
        'If other, detail'
      ],
      'columns': [
        'name',
        'type',
        'required',
        'label',
        'select_from_list_name',
        'relevant',
        'hint',
        'appearance',
        'repeat_count',
        'calculation',
        'parameters'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 297,
      'name_quality': {
        'ok': 22,
        'bad': 0,
        'good': 275,
        'total': 297,
        'firsts': {
          'ok': {
            'name': 'Other_information_pr_valuable_and_helpful',
            'index': 20,
            'label': [
              'Other information provided that might be valuable and helpful'
            ]
          }
        }
      },
      'default_translation': null
    },
    'owner__username': 'col_hom',
    'parent': null,
    'uid': 'aLs32U5Qc9HfQ5mxQtsEML',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Multiple Clusters',
        'value': 'Humanitarian - Multiple Clusters'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': 'Draft version',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'DRC Partners Database',
    'asset_type': 'survey',
    'version_id': 'vELL7Lue4Mmy9GMiUr26ck',
    'has_deployment': true,
    'deployed_version_id': 'vDRcWAMW9R2PAgDd7MFvkw',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/col_hom/forms/aLs32U5Qc9HfQ5mxQtsEML',
    'deployment__active': true,
    'deployment__submission_count': 1,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/pMFxAXWSiHkSWdPV5mXb5E/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/p3dtWsX8CBfatxqxmuLJJi/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/pFwSSanjnXNvBsQ6uu2ubG/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/pRPnGfSHQnYsWZACbrMMws/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/pA4A9HACgfwQBkH3xqC9Sv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/pKwkSiRbQSZa7B87nrpCE3/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/pBsmH4R398diPDHNcUMAWi/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/pEYssKor9s6a73arN2XMaW/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/p7Jy75anWvwjNMNpT4wq74/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/pJZYxNXzrcQr9L4jJPC3d2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/pSRVXTJcDwpeTRqvMM4QHc/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/pRhnohFLTtQUJG2dsaXwiJ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/p6PLtHFJHJSYpsSyiSvXSv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/pBSAoWRZfjskazkwTj6Snc/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/pH3VziFsXx29Vy4p6y6EMZ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/permission-assignments/pKPKsy7tYb3WacSFpBPxRF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLs32U5Qc9HfQ5mxQtsEML/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/',
    'date_created': '2023-05-22T06:56:40.498099Z',
    'date_modified': '2023-06-07T14:08:13.631066Z',
    'date_deployed': '2023-06-07T14:08:04.858208Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': true,
      'labels': [
        'Intro',
        '1.1 Select Office',
        'Enumerator Name',
        'DRC is a Danish non-governmental humanitarian organization and that currently implements a project providing shelter support to households with damaged shelters. DRC is conducting an initial assessment to determine which households are eligible to be targeted by for the project.',
        'Consent'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'appearance',
        'required',
        'select_from_list_name',
        'choice_filter',
        'hint',
        'relevant',
        'calculation',
        'constraint',
        'constraint_message',
        'repeat_count',
        'default'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (uk)',
        'Russian (ru)'
      ],
      'row_count': 165,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 165,
        'total': 165,
        'firsts': {}
      },
      'default_translation': 'English (en)'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aL8oHMzJJ9soPepvK6YU9E',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Coordination / Information Management',
        'value': 'Humanitarian - Coordination / Information Management'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ]
    },
    'kind': 'asset',
    'name': 'Shelter Non-Technical Assessment Questionnaire',
    'asset_type': 'survey',
    'version_id': 'vFpSz7BtyxeFEH3LLwsEdK',
    'has_deployment': true,
    'deployed_version_id': 'vFpSz7BtyxeFEH3LLwsEdK',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aL8oHMzJJ9soPepvK6YU9E',
    'deployment__active': true,
    'deployment__submission_count': 2,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/p87ZcKkKQxfVWjatqsGiLb/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pNd8QfnM2GzwiYgYCjT4ab/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/p8iZJavtRNvnZYE7CMqDtg/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/p4QBSXVQx3SwtnxsvoceKR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pJRhktqYeYHCN4ZM3Bb9Uf/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pD3fkp8xPf8bkWBeNp77Xh/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pHSTCd5vAg7a8oQEtvo9bK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pLERmQ2T6xFPLB7JL7jTE5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pFhDVkr3ULktAwEz6nV3P5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cejshelter/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/p5gfgezDdcwBKHUvLAVTvQ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cejshelter/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/p8zcZxDMCtjSMsdZtz8vgz/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cejshelter/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pJbdarACVdbwnhSg7wkTg5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cejshelter/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pPP4zgemZoMQcUZ39p6QGc/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cejshelter/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/p4KXnEybFfNqHRwRCMQC9K/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cejshelter/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/p9cMY2tSQdRMpEpJiZ7aT8/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/p8CRb2ycWEbMKVrLpyDA2n/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pBhwkFDSQM6wiF95VPSxRV/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pQaM5RVQmdCK5NunhFytXc/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pDAvSzkbzKJy8vSzHmjh9N/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pDxomc9Kk637WZ4VF7kCbm/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pSXwvEX8EXazCsnoHC9SF7/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pT6WUwmAMqhr5tjiSjCEV5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pTWT5vb79jqAb2eEiNX2qk/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pQG8iQiZGtKbi3Heis7Hvw/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/p8uRaETLo2aZ6obWJu6crg/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pBk8Y8THXdwkC7ZcyvcC3y/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/p48wWt9kAS37bx9W7jGzHw/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/p8RwD7d8nZPto65hR3Zumz/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/permission-assignments/pJbri2yEJYyGPCw38rbXzY/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esNiZXCWPoZTfMRvsoDNtUC',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/export-settings/esNiZXCWPoZTfMRvsoDNtUC/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/export-settings/esNiZXCWPoZTfMRvsoDNtUC/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/export-settings/esNiZXCWPoZTfMRvsoDNtUC/data.xlsx',
        'name': '',
        'date_modified': '2023-06-01 12:33:00.689241+00:00',
        'export_settings': {
          'lang': '_xml',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aL8oHMzJJ9soPepvK6YU9E/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/',
    'date_created': '2023-02-08T07:10:34.442458Z',
    'date_modified': '2023-06-07T12:41:49.477955Z',
    'date_deployed': '2023-04-27T15:06:02.368932Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
    'summary': {
      'geo': true,
      'labels': [
        'Providing non-food assistance and support to the most vulnerable households',
        'Unique ID ${ID}',
        'Is this beneficiary a patient at a ward?',
        'Record your current location',
        'Consent'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'calculation',
        'select_from_list_name',
        'relevant',
        'hint',
        'appearance',
        'choice_filter',
        'repeat_count',
        'parameters'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English',
        'Ukrainian'
      ],
      'row_count': 45,
      'name_quality': {
        'ok': 1,
        'bad': 1,
        'good': 43,
        'total': 45,
        'firsts': {
          'ok': {
            'name': 'Is_this_beneficiary_a_patient_at_a_ward',
            'index': 4,
            'label': [
              'Is this beneficiary a patient at a ward?',
              null
            ]
          },
          'bad': {
            'name': '__021',
            'index': 7,
            'label': [
              'In order to register your application, we\'d need to ask you a few questions to understand the composition of your household and how to best transfer financial assistance to you if you are eligible. These questions will take between 10-15 minutes. If you are eligible, we’ll need to share some basic details with the bank in order to make the payment. We are also required to share Tax ID numbers of people we provide assistance to with other humanitarian agencies implementing financial assistance programs, to ensure we are not duplicating assistance. All the other information will be stored safely, in accordance with the Law on protection of personal data, and will not be shared outside of DRC and its partners.. Do you provide DRC consent to take photos or copies of your personal documentation at this time? Following DRC Data Protection Protocols and Ukraine Law on Data Protection, we will not share copies or photos of your documents with anyone outside DRC and these will only be used for the sole purpose of processing your information in order to provide you with cash assistance. You can decide to say no at this time and we will need to collect your documents at a later point in time.',
              'Щоб зареєструвати вашу заявку, нам потрібно поставити вам кілька запитань, щоб зрозуміти склад вашої сім’ї та як найкраще перерахувати вам фінансову допомогу, якщо ви маєте на це право. Ці запитання займуть 10-15 хвилин. Якщо ви відповідаєте вимогам, нам потрібно буде надати банку деякі основні дані, щоб здійснити платіж. Ми також зобов’язані надавати ідентифікаційні номери платника податків людей, яким ми надаємо допомогу, іншим гуманітарним організаціям, які впроваджують програми фінансової допомоги, щоб гарантувати, що ми не дублюємо допомогу. Вся інша інформація зберігатиметься в безпеці відповідно до Закону про захист персональних даних і не буде передана за межі DRC та його партнерів. Чи надаєте ви згоду DRC на фотографування або копіювання ваших особистих документів у цей час? Відповідно до протоколів захисту даних ДРК та Закону України «Про захист даних» ми не надаватимемо копії чи фотографії ваших документів нікому за межами ДРК, і вони використовуватимуться лише з єдиною метою обробки вашої інформації, щоб надати вам грошову допомогу. Ви можете відмовитися зараз, і нам потрібно буде забрати ваші документи пізніше.'
            ]
          }
        }
      },
      'default_translation': 'English'
    },
    'owner__username': 'col_hom',
    'parent': null,
    'uid': 'a8WAWB9Yxu2jkgk4Ei8GTk',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Other',
        'value': 'Other'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'data-table': {
        'sort-by': {
          'value': 'DESCENDING',
          'fieldId': 'start'
        }
      },
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': true
    },
    'kind': 'asset',
    'name': '[Mykolaiv Short Form] DRC Joint MPCA-NFI Registration Form',
    'asset_type': 'survey',
    'version_id': 'vKY88KRhqb3Sh3V7XiPYDw',
    'has_deployment': true,
    'deployed_version_id': 'vDVXjnyEuMkYFruZHfq9Rv',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/col_hom/forms/a8WAWB9Yxu2jkgk4Ei8GTk',
    'deployment__active': true,
    'deployment__submission_count': 2591,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pATsGrLmZZe683ZrU7zg2H/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/AnonymousUser/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pJJSTMMWT5nQkHR777DUoY/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pR3LzDrk4Gm4MRkMYpcmkr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/p3oyWk7LiX9zJB2br7Bn6S/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pRY5SWKJBiDHeGRPuRQ4BR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pGxCovDXHmTJX9hW7BVtzh/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pLkGDoUfpZYdGuWR4gBBQG/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pKgfPv5FXYQBMpHnZSGgS5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pRKciFjHqgxmX2Ga6A5FxW/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pBUqyiJGQsVDM9dLvfCAtH/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/p5tgoJd98E8DGcASZzad4J/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pNNG4QLemeDqbVqu9hLMks/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/p5ti6hXfoFNDBNEYoq3Jxp/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pSdZRMQGgKLNmHQBSKR32G/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pQsXxXXrooexPG9aZmjp9j/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pDT5hoPx6YJQs2asayXHip/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/p3amHsZNknNWZ6vUiTxdcB/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pKUnwU6wu7HdcZuHXn9c3V/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_cej_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/p4XGKvuAKqobkSSivbd2JA/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_cej_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/partial_submissions/',
        'partial_permissions': [
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cej_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cej_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cej_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cej_basicneeds'
                  ]
                }
              }
            ]
          }
        ],
        'label': {
          'default': 'Act on submissions only from specific users',
          'view_submissions': 'View submissions only from specific users',
          'change_submissions': 'Edit submissions only from specific users',
          'delete_submissions': 'Delete submissions only from specific users',
          'validate_submissions': 'Validate submissions only from specific users'
        }
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/p64MyhmCpQpTxhBnEWGB3g/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_cej_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pEq63qaJK4748avwrP4WzM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_cwc_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pTFHMeYRZgNX4JFDzQPebE/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_cwc_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/partial_submissions/',
        'partial_permissions': [
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cwc_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cwc_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cwc_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cwc_basicneeds'
                  ]
                }
              }
            ]
          }
        ],
        'label': {
          'default': 'Act on submissions only from specific users',
          'view_submissions': 'View submissions only from specific users',
          'change_submissions': 'Edit submissions only from specific users',
          'delete_submissions': 'Delete submissions only from specific users',
          'validate_submissions': 'Validate submissions only from specific users'
        }
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pS6bCwHpEVmhmGvEKkFyox/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_cwc_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/p7YHpTgF9uVW5xYZb5kGKd/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/p834JExFkUadhnTHGCNncU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pQhkHgnio46kx8gsTo3s29/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/p8cixyph47495cnDHqZAgV/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pFZ9cGUNTwTjEdftjsX22q/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/p3YaQUy9TUmqmwGBKsPPVM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/pPPnSvGhfsn3KZvWSiNCzZ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/permission-assignments/p9k93X8XYqbBvFR7UWxM38/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esGhTcohbvjXV3iaKW7fA9J',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/export-settings/esGhTcohbvjXV3iaKW7fA9J/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/export-settings/esGhTcohbvjXV3iaKW7fA9J/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/export-settings/esGhTcohbvjXV3iaKW7fA9J/data.xlsx',
        'name': '',
        'date_modified': '2023-02-28 10:28:14.361125+00:00',
        'export_settings': {
          'lang': 'English',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a8WAWB9Yxu2jkgk4Ei8GTk/data/',
    'subscribers_count': 0,
    'status': 'public',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/',
    'date_created': '2023-04-14T12:19:30.929515Z',
    'date_modified': '2023-06-07T06:30:10.539380Z',
    'date_deployed': '2023-06-06T18:35:41.277689Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
    'summary': {
      'geo': false,
      'labels': [
        '###1. Background',
        '**Unique ID/Case Number**',
        '1.1 Select Office',
        '1.2 Enumerator',
        '1.3 Project & Donor'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'calculation',
        'select_from_list_name',
        'choice_filter',
        'hint',
        'relevant',
        'constraint',
        'constraint_message',
        'repeat_count',
        'default',
        'parameters'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (uk)'
      ],
      'row_count': 148,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 148,
        'total': 148,
        'firsts': {}
      },
      'default_translation': 'English (en)'
    },
    'owner__username': 'martinkenny',
    'parent': null,
    'uid': 'aKgX4MNs6gCemDQKPeXxY8',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Economic/Social Development',
        'value': 'Economic/Social Development'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'data-table': {
        'sort-by': {
          'value': 'ASCENDING',
          'fieldId': 'start'
        },
        'show-hxl-tags': false,
        'show-group-name': true,
        'translation-index': -1
      },
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ]
    },
    'kind': 'asset',
    'name': 'Basic Needs Registration and Evaluation Form',
    'asset_type': 'survey',
    'version_id': 'v64RRvUwGqy7nuGeC5xfQH',
    'has_deployment': true,
    'deployed_version_id': 'vPK6NqRfdZg2ycZyXEnssJ',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/martinkenny/forms/aKgX4MNs6gCemDQKPeXxY8',
    'deployment__active': true,
    'deployment__submission_count': 153,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pRb7bwP9tMaoRQkLNB3LnZ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/AnonymousUser/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p8aSf48XKVFryvY3Yohwma/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p975XR25FmvrbkQ3JWWqBu/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pKrjUii3ELdohEQN3NcqgX/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pJxKEDTrcKPTx25LMLfuF8/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pGX9HFQW9ZZ9bTmJBwoyxM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p9p7eHxRgqRh3BUtUTbFPd/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pEM4cP9PBdRFHmNxWD7s5m/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pRy4dbuxTb42ijk4tC98xZ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pLA49gchhDyunfDJDbU4oH/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pRx3F9R7mpEjrCyNmoYQCC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pSfGXfTkveJMfRK2insdz3/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p4HeMg9ca35B2Y2Zrx3VBs/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pR5jGLtEMA3bCifwc4TQ5B/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p5L8Dvmi6AowSfGtbsxHDZ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pQEwRBGjoycYEr9rsaw38A/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p6hUw8LTXtmc3f3Tv2SjM4/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pGzF4h8qaMzmnx2X6Fygir/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/dmytro_kukharuk/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pMPmRuJwULY6VkdQX2YsuM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/dmytro_kukharuk/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/partial_submissions/',
        'partial_permissions': [
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cej_basicneeds'
                  ]
                }
              }
            ]
          }
        ],
        'label': {
          'default': 'Act on submissions only from specific users',
          'view_submissions': 'View submissions only from specific users',
          'change_submissions': 'Edit submissions only from specific users',
          'delete_submissions': 'Delete submissions only from specific users',
          'validate_submissions': 'Validate submissions only from specific users'
        }
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pKYsXQk7UjJHeb6aENmLQ6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/dmytro_kukharuk/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pPPJ5BqXPjUornq5tWYVd6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/dnk_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p8eVdorY2VjhhFTxE5RQS5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/dnk_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/partial_submissions/',
        'partial_permissions': [
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'dnk_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'dnk_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'dnk_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'dnk_basicneeds'
                  ]
                }
              }
            ]
          }
        ],
        'label': {
          'default': 'Act on submissions only from specific users',
          'view_submissions': 'View submissions only from specific users',
          'change_submissions': 'Edit submissions only from specific users',
          'delete_submissions': 'Delete submissions only from specific users',
          'validate_submissions': 'Validate submissions only from specific users'
        }
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p5ujmbZhxNFck5wxpi47w6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/dnk_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p4zNuXRsJdN9tszzwGrp7B/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_cej_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pav8APJe9iRxXzKtMAExLh/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_cej_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/partial_submissions/',
        'partial_permissions': [
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cej_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cej_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cej_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cej_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cej_basicneeds'
                  ]
                }
              }
            ]
          }
        ],
        'label': {
          'default': 'Act on submissions only from specific users',
          'view_submissions': 'View submissions only from specific users',
          'change_submissions': 'Edit submissions only from specific users',
          'delete_submissions': 'Delete submissions only from specific users',
          'validate_submissions': 'Validate submissions only from specific users'
        }
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p7A7nock4iohJdGu2UsJ9i/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_cej_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pvNkZyAbzq6RdPa6YYXGdN/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_cwc_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pQjSJnFDMvoYiAkPYh2Pom/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_cwc_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/partial_submissions/',
        'partial_permissions': [
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cwc_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cwc_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cwc_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_cwc_basicneeds'
                  ]
                }
              }
            ]
          }
        ],
        'label': {
          'default': 'Act on submissions only from specific users',
          'view_submissions': 'View submissions only from specific users',
          'change_submissions': 'Edit submissions only from specific users',
          'delete_submissions': 'Delete submissions only from specific users',
          'validate_submissions': 'Validate submissions only from specific users'
        }
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pPxNTLpdhHB8vbLKcBtqGP/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_cwc_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pyaiGfdaUZu6RcQwwjFVAg/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_hrk_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pMZ6zhjo7nm56jPVrUnTJS/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_hrk_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/partial_submissions/',
        'partial_permissions': [
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_hrk_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_hrk_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_hrk_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_hrk_basicneeds'
                  ]
                }
              }
            ]
          }
        ],
        'label': {
          'default': 'Act on submissions only from specific users',
          'view_submissions': 'View submissions only from specific users',
          'change_submissions': 'Edit submissions only from specific users',
          'delete_submissions': 'Delete submissions only from specific users',
          'validate_submissions': 'Validate submissions only from specific users'
        }
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pFZ7ipS9h8c4Gipg9X6QNi/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_hrk_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p3RSGAeZ6xdfYR5m6ibNtq/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_ukraine_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pTBERBN2SarbUPpkKADwbz/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_ukraine_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pSe2B2uuuXBziZsNG7xEid/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/kas1976/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pM2HAFveLR8uuimfKMwDZM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/kas1976/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/partial_submissions/',
        'partial_permissions': [
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'lviv_mpca_nfi'
                  ]
                }
              }
            ]
          }
        ],
        'label': {
          'default': 'Act on submissions only from specific users',
          'view_submissions': 'View submissions only from specific users',
          'change_submissions': 'Edit submissions only from specific users',
          'delete_submissions': 'Delete submissions only from specific users',
          'validate_submissions': 'Validate submissions only from specific users'
        }
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p5MkvBxtWzg2xT88QQT5kr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/kas1976/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pLsmrKW2p2AzaWmTQUmXtg/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/lviv_mpca_nfi/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p4ZZ28ragaZrUG8p6HKMrz/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/lviv_mpca_nfi/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/partial_submissions/',
        'partial_permissions': [
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'lviv_mpca_nfi'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'lviv_mpca_nfi'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'lviv_mpca_nfi'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'lviv_mpca_nfi'
                  ]
                }
              }
            ]
          }
        ],
        'label': {
          'default': 'Act on submissions only from specific users',
          'view_submissions': 'View submissions only from specific users',
          'change_submissions': 'Edit submissions only from specific users',
          'delete_submissions': 'Delete submissions only from specific users',
          'validate_submissions': 'Validate submissions only from specific users'
        }
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pPEie9dx8mCUGvzcpGWCEX/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/lviv_mpca_nfi/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pK8ZMDXzELLdUx8knhyEp8/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p5h7QeozxiF3WiRZ7Pxsus/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pGzHio3hT4hWqMJgfNb6LC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pGb9nWYBHVMMhGzV9Co3vK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pAnLY2aKbLqQRw9NiTzA6F/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p4G4Tca5emhuBijbKbkeVo/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pJxb8MDwZaESYfF4xyQM7u/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pDCqtAPMzXMJ758gnQaa3V/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p3KnEquev9B5HjyCbBQ89i/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p9XviFe3j92iGH4ZgRBrRt/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pJH49Cvh9V7jrisjkbttdU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p6tCWWXFdA5FbZN6yuhf7h/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p3kmzH28chdLsAKqMrkNyt/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pNyw3MwnreSkmNqiz2ZJfY/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pJfK9BmnhUZzFoT69okw5f/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pC3stNvPrfTQK8HRQ7KiR2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pNpgtXLGhrtHYCcDJkQpX2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pBCafmQVgS97XiPZCSydA8/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pFc6SMijm47Xb9o24sTRRf/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pQaEogYVDdpi4ffvLZYMHg/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pJzz9BZVG9DhR46LWhKP2Q/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pBmBz6aSoNWpp89koF8Utc/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pJewM7WMtfxbHFt6Xw5aWb/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/p73V4jGKtx5gMnfYGmnXx2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/pavlenko22_buh/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pwJF2yFktZwhaEV3qjpToN/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/pavlenko22_buh/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pSfJ2D26b4LJoix5enfTbp/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/pavlenko22_buh/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pGTGKUjrUNcc9xQVCHNbbF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/viktoriia_andriushchenko12/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pMxrEBA7JoGNMsDKwXicDB/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/viktoriia_andriushchenko12/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/partial_submissions/',
        'partial_permissions': [
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_hrk_basicneeds'
                  ]
                }
              }
            ]
          }
        ],
        'label': {
          'default': 'Act on submissions only from specific users',
          'view_submissions': 'View submissions only from specific users',
          'change_submissions': 'Edit submissions only from specific users',
          'delete_submissions': 'Delete submissions only from specific users',
          'validate_submissions': 'Validate submissions only from specific users'
        }
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/permission-assignments/pKsN3SuQuMUFbf4yEXKWXU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/viktoriia_andriushchenko12/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      }
    ],
    'export_settings': [
      {
        'uid': 'es5ts6FSRozkSJeY6hfpDPq',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/export-settings/es5ts6FSRozkSJeY6hfpDPq/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/export-settings/es5ts6FSRozkSJeY6hfpDPq/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/export-settings/es5ts6FSRozkSJeY6hfpDPq/data.xlsx',
        'name': '',
        'date_modified': '2023-06-06 06:46:16.724280+00:00',
        'export_settings': {
          'lang': 'English (en)',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKgX4MNs6gCemDQKPeXxY8/data/',
    'subscribers_count': 0,
    'status': 'public',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/',
    'date_created': '2023-06-06T09:45:47.034143Z',
    'date_modified': '2023-06-06T18:28:28.817637Z',
    'date_deployed': '2023-06-06T18:28:06.230185Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
    'summary': {
      'geo': false,
      'labels': [
        'Programme Type',
        'Beneficiary Details',
        'What is your surname name (as shown in personal ID)?',
        'What is your first name (as shown in personal ID)?',
        'What is your patronymic name?'
      ],
      'columns': [
        'hint',
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'select_from_list_name',
        'constraint',
        'constraint_message',
        'choice_filter',
        'relevant',
        'parameters',
        'default',
        'calculation'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (uk)'
      ],
      'row_count': 32,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 32,
        'total': 32,
        'firsts': {}
      },
      'default_translation': 'English (en)'
    },
    'owner__username': 'alexandre_annic_drc',
    'parent': null,
    'uid': 'aMJL9DG8qEcULqTZTKQbrq',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Coordination / Information Management',
        'value': 'Humanitarian - Coordination / Information Management'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'MPCA Registration NK Dam',
    'asset_type': 'survey',
    'version_id': 'v83eXiEUmC8SxfYzBSPREJ',
    'has_deployment': true,
    'deployed_version_id': 'v83eXiEUmC8SxfYzBSPREJ',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/alexandre_annic_drc/forms/aMJL9DG8qEcULqTZTKQbrq',
    'deployment__active': true,
    'deployment__submission_count': 186,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pJUvKxvCADBYW7ryjVBaYs/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pKHwriZ7t3d4tnuY5secmq/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/p4EZmRyReF4cjTp9xbPWnB/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/p6J3V8PVF2vGkFFkJn9RiM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/p9B3G45CnJNPTEuPXZp3Xo/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/p4PmLLugbtpfAwPSW2p7HL/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pGKDAhy2qhLFKg3t3yYLsx/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/p64Fu3yFys2fJFpfT8X2qC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pP5FR8xCupPcgJyuunTqPF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_nlv_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pEHVCWMxiHDBHszWeeZgwv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_nlv_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pLgMLEAhUCt3RfBMzKdzUg/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_nlv_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pADGdi7fcAqxntLpfXQxWv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_nlv_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pTFsSjoMnVzMSGAXBdKMrr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_nlv_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/p9KHZSJkduSzStSgmDfiJy/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/lviv_mpca_nfi/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pSVF69WjZhsFC8EzvsconK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/lviv_mpca_nfi/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pC2s8njUaVoEmqxZCH6pRs/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/lviv_mpca_nfi/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pBDdR4asbNfLCm2hSUPzx6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/lviv_mpca_nfi/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pHbgJVa7Yw74HftYCZABK2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/lviv_mpca_nfi/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pBTZFByw9ftyWUUu7ihzSf/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pAxyJ982b5QinHVpDNAaYN/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pFrZigm6JAj96yCpHmfqci/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pEJzg26sReYvYqZBWgEGYv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/p3cGskMTkoxDrdWyMiGRhU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pD6z8UTkZqpHaVwHB2i9x2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pbNRmp2zrHHuS27CHUDEev/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/permission-assignments/pK4YnnxGbQKRz6GLB7tMSt/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esPuAoxP7jrv7FjxrLqcZZw',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/export-settings/esPuAoxP7jrv7FjxrLqcZZw/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/export-settings/esPuAoxP7jrv7FjxrLqcZZw/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/export-settings/esPuAoxP7jrv7FjxrLqcZZw/data.xlsx',
        'name': '',
        'date_modified': '2023-06-07 05:52:00.005121+00:00',
        'export_settings': {
          'lang': 'English (en)',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aMJL9DG8qEcULqTZTKQbrq/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/',
    'date_created': '2023-05-24T18:01:15.177288Z',
    'date_modified': '2023-06-06T12:08:27.796754Z',
    'date_deployed': '2023-06-06T12:08:19.810861Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Interviewer Data:',
        'Name:',
        'Position:',
        'Date of assessment:',
        'Respondent Data'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'constraint',
        'constraint_message',
        'select_from_list_name',
        'relevant',
        'hint',
        'appearance',
        'repeat_count'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (uk)',
        'Russian (ru)'
      ],
      'row_count': 85,
      'name_quality': {
        'ok': 2,
        'bad': 0,
        'good': 83,
        'total': 85,
        'firsts': {
          'ok': {
            'name': 'Current_Capacity_and_ncy_Response_Efforts',
            'index': 13,
            'label': [
              'Current Capacity and Emergency Response Efforts',
              'Поточна спроможність та зусилля з реагування на надзвичайні ситуації',
              'Текущая способность и усилия по реагированию на чрезвычайные ситуации'
            ]
          }
        }
      },
      'naming_conflicts': [
        'idd',
        'wa'
      ],
      'default_translation': 'English (en)'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aLD2Xc9cKSY22c5cAP5utT',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Coordination / Information Management',
        'value': 'Humanitarian - Coordination / Information Management'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': 'This tool is designed to map CSO capacity and assess initial caps ',
      'organization': '',
      'country_codes': [
        'UKR'
      ]
    },
    'kind': 'asset',
    'name': 'CBP CSO Assessment',
    'asset_type': 'survey',
    'version_id': 'vK9fUHjEHM8nJSj6VNVhsq',
    'has_deployment': true,
    'deployed_version_id': 'vK9fUHjEHM8nJSj6VNVhsq',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aLD2Xc9cKSY22c5cAP5utT',
    'deployment__active': true,
    'deployment__submission_count': 11,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/p7QepT9uEje9pXvxUjmYQd/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/pHPXpZp3XG4PxttzCcogeu/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/p3koHoEqGnf3hbspAfkvCF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/pTWA8aaG7svBNUqNnq5N2h/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/p5DaLRE8xpAm2PLuV3rYzw/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/pMjwxj6xWgXsr9tVLXihGm/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/pBVZ5dNezqwTYEYGij8egU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/pEb7iiKw92vC8Gz3jf7duR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/p3cKqMRAxJNMnhJdZ9TRcw/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/p3Cphk8GbVEbWTFNuKU9mA/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/pzFtZpdWzdxee5Hu3cqCZv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/pEjQ7PMNxcXpG3SgjrJNAM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/pEhWpwsCRZVydgWyEiYvAR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/pPCBRGQzz2mtPnrDtUSjMf/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/p3frS6YHmfr9SDQLW9vWuk/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/p3kSGmHzZFw2DzBUA6Qbvy/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/p3GSfxUXs9yY2KoNg6y6HE/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/p6Dhay36r3rwnF4U8k2Lfm/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/pBWWsA6AcBpYridryN6EjK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/p9QP763vDWdkWPsRMohP2J/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/pCAgEcEGgEwA9oJCkuSZwU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/p9MFWTwvvfqoq8fFiXnh9u/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/permission-assignments/pRH23npxMWKgy2kj3qfCYA/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'es7x8FJNcJpEVA2tGTtW6Xe',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/export-settings/es7x8FJNcJpEVA2tGTtW6Xe/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/export-settings/es7x8FJNcJpEVA2tGTtW6Xe/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/export-settings/es7x8FJNcJpEVA2tGTtW6Xe/data.xlsx',
        'name': '',
        'date_modified': '2023-05-25 14:08:51.567755+00:00',
        'export_settings': {
          'lang': 'English (en)',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLD2Xc9cKSY22c5cAP5utT/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/',
    'date_created': '2023-05-25T07:53:36.270764Z',
    'date_modified': '2023-06-06T12:05:31.112389Z',
    'date_deployed': '2023-06-06T12:04:58.765369Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Respondent Data',
        'Name of the organization',
        'Name of the respondent',
        'Title, role at the organization',
        'Contact details(cell):'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'constraint',
        'constraint_message',
        'select_from_list_name',
        'relevant',
        'appearance',
        'repeat_count',
        'hint'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)'
      ],
      'row_count': 38,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 38,
        'total': 38,
        'firsts': {}
      },
      'default_translation': 'English (en)'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'a6u7CBysEz746Hdx6pVLzp',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Coordination / Information Management',
        'value': 'Humanitarian - Coordination / Information Management'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'CBP CSO Initial Questionnaire',
    'asset_type': 'survey',
    'version_id': 'vHNxdHeJsCCAJ8dgH3PVjz',
    'has_deployment': true,
    'deployed_version_id': 'vHNxdHeJsCCAJ8dgH3PVjz',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/a6u7CBysEz746Hdx6pVLzp',
    'deployment__active': true,
    'deployment__submission_count': 3,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pQiQHvGyps99oSgVj8Yeeo/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/AnonymousUser/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pAxvNDyJPUhA5iTSRThqJP/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/p9NiXL9jU7CW2T8mDoRsRK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pHDGynktt5pYguKGe2dfYF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/p5JtYqbtDyrgQVfQYnoAvB/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/p35Ur2ZRmwEKuzNhkNczPw/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/p9QgwLxUw5SbRA5xoHtUoV/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pH5fTjTtmqZ3uZNjc6EkTr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cbp_ukraine2023/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pAvj3W9d4aV7zvrXtNtPBt/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pRente5DtNbKrUkdQwSFSG/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pCChrGq2JeQSQaeGHaqGp7/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pRpMpA6Jvt8oMqEiAMjnxF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pT4SuvoTtWac9FcHyQmDPa/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pQ3Jhh26JQ9ZhnShfYTiDF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pQtMyEDYLsEhEobGzNmdmL/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pArBz97fs9fL2s6gMNtfHA/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/p4kWrqRiExaMTuz32oXFkz/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pNU2YcUxGTHnTxo6s8LF22/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pTNGoJziuTNpVNceAhSvAP/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/p5asUEkAiKxzTdEeC9xPcb/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/p5pkdG9TVwgdEhu5X9dK2o/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pAJPRtVbz9s2auEmhWKBA7/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/pJUwxsifcRvjR8CzoHWAoM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/permission-assignments/p6HtrxUi8hK7ry5Q8MUD9X/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6u7CBysEz746Hdx6pVLzp/data/',
    'subscribers_count': 0,
    'status': 'public',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a35muvL8LHnVehxnic3BXh/',
    'date_created': '2023-06-04T19:53:57.720094Z',
    'date_modified': '2023-06-05T17:34:38.087491Z',
    'date_deployed': '2023-06-05T17:34:08.456403Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Дані, зібрані в цій формі, призначені для внутрішнього використання ДРБ та програмних цілей, і є конфіденційними. Будь ласка, зверніть увагу на те, що всі питання, позначені символом "*", є обов\'язковими для заповнення. Всі інші питання є додатковими та можуть бути пропущені, на Ваш розсуд, якщо з особистих причин Ви не бажаєте давати на них відповідь.',
        'Бенефіціар надає згоду на збір та обробку його персональних даних в інформаційних базах Датської ради у справах Біженців відповідно до положень Закону України «Про захист персональних даних»',
        'Interview',
        'Ім\'я інтерв\'юєра',
        'Дата проведення інтерв\'ю'
      ],
      'columns': [
        'hint',
        'name',
        'type',
        'label',
        'required',
        'select_from_list_name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 31,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 31,
        'total': 31,
        'firsts': {}
      },
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'a35muvL8LHnVehxnic3BXh',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Economic/Social Development',
        'value': 'Economic/Social Development'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'Копия объекта SDC UKR-000226_LAP_EcRec_Women IT_PDM_2',
    'asset_type': 'survey',
    'version_id': 'vLzLU6BeHQUJS6AvCzCC6a',
    'has_deployment': true,
    'deployed_version_id': 'vLzLU6BeHQUJS6AvCzCC6a',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/a35muvL8LHnVehxnic3BXh',
    'deployment__active': true,
    'deployment__submission_count': 98,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a35muvL8LHnVehxnic3BXh/permission-assignments/pM8z77VXo3NPEy54ZaZX9J/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a35muvL8LHnVehxnic3BXh/permission-assignments/p6AGcwHJKX6drRyXYvuUNu/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a35muvL8LHnVehxnic3BXh/permission-assignments/p6mqR36LgMkVEJKzFKj7cR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a35muvL8LHnVehxnic3BXh/permission-assignments/pQqjTk9zRjMEqeKXN2kUgL/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a35muvL8LHnVehxnic3BXh/permission-assignments/pKcWw9C4cg3JK5wZjrJkQM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a35muvL8LHnVehxnic3BXh/permission-assignments/p837g2sBrsfTB48pmm3sXu/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a35muvL8LHnVehxnic3BXh/permission-assignments/p62xspGXBJRj8EJsBD3Fxm/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a35muvL8LHnVehxnic3BXh/permission-assignments/p7oM5WCpdoSNfdUEFKfQs2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a35muvL8LHnVehxnic3BXh.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a35muvL8LHnVehxnic3BXh.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a35muvL8LHnVehxnic3BXh/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKW9rwe6AnPPyQYfXUwurD/',
    'date_created': '2023-05-23T12:16:52.737088Z',
    'date_modified': '2023-06-04T19:46:34.708484Z',
    'date_deployed': null,
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Дані, зібрані в цій формі, призначені для внутрішнього використання ДРБ та програмних цілей, і є конфіденційними. Будь ласка, зверніть увагу на те, що всі питання, позначені символом "*", є обов\'язковими для заповнення. Всі інші питання є додатковими та можуть бути пропущені, на Ваш розсуд, якщо з особистих причин Ви не бажаєте давати на них відповідь.',
        'Бенефіціар надає згоду на збір та обробку його персональних даних в інформаційних базах Датської ради у справах Біженців відповідно до положень Закону України «Про захист персональних даних»',
        'Ім\'я інтерв\'юєра',
        'Дата проведення інтерв\'ю',
        '2.1 Чи закінчили Ви професійне навчання "IT для Жінок"?'
      ],
      'columns': [
        'type',
        'name',
        'label',
        'hint',
        'required',
        'select_from_list_name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 23,
      'name_quality': {
        'ok': 0,
        'bad': 5,
        'good': 18,
        'total': 23,
        'firsts': {
          'bad': {
            'name': '_2_1_1_',
            'index': 8,
            'label': [
              '2.1.1 Якщо «так» – поділіться чим саме, а якщо «ні», надайте пояснення чому саме незадоволені:'
            ]
          }
        }
      },
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aKW9rwe6AnPPyQYfXUwurD',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Economic/Social Development',
        'value': 'Economic/Social Development'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'SDC UKR-000226_LAP_EcRec_Women IT_PDM',
    'asset_type': 'survey',
    'version_id': 'v9kzSxez9wid8XM7vSABDQ',
    'has_deployment': false,
    'deployed_version_id': null,
    'deployment__identifier': null,
    'deployment__active': false,
    'deployment__submission_count': 0,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKW9rwe6AnPPyQYfXUwurD/permission-assignments/pNi7NTdYVdyoTQWz6G3tuu/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKW9rwe6AnPPyQYfXUwurD/permission-assignments/pBmPVWfVsPNvY5yTLNGU3y/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKW9rwe6AnPPyQYfXUwurD/permission-assignments/pHnQA727W7e5snnJUdQmGN/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKW9rwe6AnPPyQYfXUwurD/permission-assignments/p4fEH4SpN3wVgWdJwMpXby/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKW9rwe6AnPPyQYfXUwurD/permission-assignments/pRxiTCXGkFKMdqZaG36GpJ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKW9rwe6AnPPyQYfXUwurD/permission-assignments/pMJHkBfqqYgFzBYyhFmTsE/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKW9rwe6AnPPyQYfXUwurD/permission-assignments/pAXWUUBTy9bjVW8PBZWPYC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKW9rwe6AnPPyQYfXUwurD/permission-assignments/pN8WTVHcXZxh4HdFupgLXn/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKW9rwe6AnPPyQYfXUwurD.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKW9rwe6AnPPyQYfXUwurD.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aKW9rwe6AnPPyQYfXUwurD/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/',
    'date_created': '2023-04-12T09:34:34.941884Z',
    'date_modified': '2023-06-02T09:22:11.644513Z',
    'date_deployed': '2023-06-02T09:22:05.038375Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'GREETINGS',
        '**Hello, my name is [insert name] I am from DRC.**',
        'We want to ask you some questions to obtain information about the NFI assistance that your center has received from us. Your participation is voluntary and the questions will take around 20-30 minutes to answer. If you accept to participate, you have the option to stop answering or to not answer any question that you don\'t want to. This information will help us to understand what has been done appropriately in the process, what hasn\'t worked that good and what we should be doing differently. We want to hear your thoughts, so we can improve the way that we are doing our job in the future.',
        'The information we collect about your personal identity will only be used to identify you for follow up questions if necessary, and will not be shared wider than internal DRC Staff.. Finally, please know that if you provide negative feedback about our work, this will not have any negative consequences to your permanence in this or future activities of this project.',
        'Meta data'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'select_from_list_name',
        'constraint',
        'constraint_message',
        'appearance',
        'choice_filter',
        'relevant',
        'hint'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (uk)'
      ],
      'row_count': 73,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 73,
        'total': 73,
        'firsts': {}
      },
      'default_translation': 'English (en)'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'a6EAaxav9Y2gv5sdy4soD4',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Sanitation, Water & Hygiene',
        'value': 'Humanitarian - Sanitation, Water & Hygiene'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'PDM CC NFI BHA',
    'asset_type': 'survey',
    'version_id': 'vNUH9qHpYHRf3EN2cMA83W',
    'has_deployment': true,
    'deployed_version_id': 'vNUH9qHpYHRf3EN2cMA83W',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/a6EAaxav9Y2gv5sdy4soD4',
    'deployment__active': true,
    'deployment__submission_count': 0,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/pProjdaVGNirSvhbSP8M9n/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/pErysD4YRRLvrVF6Hy5dGd/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/pQxeMhJxp4r3N46VbQ2GDs/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/pRceV2QhsTDGPwCLuKWtE9/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/pHzu8tqUQ9P4b83X9tAx8H/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/pEmiyzXRFR69TQHnoiAk2V/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/p9cpwh9m55N95xC3vw86QL/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/pDKs56xnhKra9ywadyuG4Q/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/pK9r3NzMAooiqBbudASbYz/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/pKke2QxEVUtnFjc5ghLfat/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/p3NHHFPWtVKo2UbLoc2r9D/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/pQBsUj36oaR7EuBonyf3tC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/pB3efRdjCtxYnQ5Cew6GZq/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/pBmZ9CkBfGHnAp7Dh8wHaz/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/permission-assignments/p6hShr8ezdCh4AQHVxQFMF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6EAaxav9Y2gv5sdy4soD4/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/',
    'date_created': '2023-05-25T11:18:35.465993Z',
    'date_modified': '2023-05-29T11:08:22.978417Z',
    'date_deployed': '2023-05-29T11:07:56.839679Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Respondent person',
        'DRC is a Danish non-governmental humanitarian organization and that can provide shelter support to households with damaged shelters. DRC is collecting this information from you however this does not guarantee immediate or future shelter support. DRC will not share this information with external organisations or entities, but would like your consent in collecting personal contact details, and to contact you in the future.',
        'Do you consent to DRC collecting this information and contacting you in the future?',
        'Location',
        'Select oblast where registration is taking place'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'select_from_list_name',
        'choice_filter',
        'hint',
        'constraint',
        'constraint_message'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (eng)',
        'Ukrainian (ukr)'
      ],
      'row_count': 15,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 15,
        'total': 15,
        'firsts': {}
      },
      'default_translation': 'English (eng)'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'a6b6PfK3oYA9sDBWeP6yc6',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Emergency Shelter',
        'value': 'Humanitarian - Emergency Shelter'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ]
    },
    'kind': 'asset',
    'name': 'Prospective Shelter Repair Information Form',
    'asset_type': 'survey',
    'version_id': 'vCUTSphWR3uiHwhwA6R8iU',
    'has_deployment': true,
    'deployed_version_id': 'vCUTSphWR3uiHwhwA6R8iU',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/a6b6PfK3oYA9sDBWeP6yc6',
    'deployment__active': true,
    'deployment__submission_count': 2,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pNcKnEY47yqamwfrfw59eo/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pPmXcA25CwxjWd5uamgy4c/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pKLWiDTwYXrYKYC42ybMpx/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pBVuwHxJe8ioTkdhd2aJZF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/p3x5XyymqGdcUcRAE2dY82/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/p9Ku9vNXUXudZYRJtJ8J8g/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/p5xVaVrwtBdbAEYBJtyLqY/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pCVbgzSkNxFaTrkp3XErLZ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pRrRYLfwmntEfmZWN8P3rR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cejshelter/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/p43Lpk5rgGLTXBVcL29ziw/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cejshelter/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/p5otsGU7dwXXL62KbZntXh/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cejshelter/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pDcbMBEseFTtiBV4JfdMwD/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cejshelter/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/p3MNYs8F3oiSjinHP9w8Ex/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cejshelter/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pQyp5wVfZK9d5WDNLw3Rq2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/cejshelter/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/p93ndu6SNv4yznSuaANZky/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/p3jyez2PyNenKFDebLiaAb/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pAyMVMag9dxsTXZa7guwvW/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pChdr9vEhDrkMb2RHpNqE3/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pHWZu3kRvsYZ78wqNXjFNx/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pApHqB4v6JJaQsBxoFGyMm/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pNX8oipS43g2EqMDEhX2SC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pAfnFgCDqT6ZQL2rKeBfes/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pN8AUYsUBATcy7XG9fEkSJ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pGvDYy4fXYpLJXgafneU4a/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pH46HB5gD22PBjUbYPiGvC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pK2Cve4jQJm4XzCgLAcVBi/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pRtQvLZoCbz4uDYwEvxUHJ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/permission-assignments/pTTRkKjQ3XtcdyJGjZMy7C/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6b6PfK3oYA9sDBWeP6yc6/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/',
    'date_created': '2023-04-24T07:41:27.296724Z',
    'date_modified': '2023-05-23T12:35:47.842864Z',
    'date_deployed': '2023-05-23T12:35:41.345623Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
    'summary': {
      'geo': true,
      'labels': [
        'Регістрація',
        'Офіс',
        'Ім\'я регістратора',
        'Фото пошкоджень',
        'Фото пошкоджень (1)'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'appearance',
        'required',
        'select_from_list_name',
        'choice_filter',
        'hint',
        'parameters',
        'relevant',
        'default',
        'constraint',
        'constraint_message',
        'calculation'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'Ukrainian (ukr)',
        'English (eng)'
      ],
      'row_count': 157,
      'name_quality': {
        'ok': 0,
        'bad': 27,
        'good': 130,
        'total': 157,
        'firsts': {
          'bad': {
            'name': '__007',
            'index': 3,
            'label': [
              'Ім\'я регістратора',
              'Registrar name'
            ]
          }
        }
      },
      'default_translation': 'Ukrainian (ukr)'
    },
    'owner__username': 'marchelo',
    'parent': null,
    'uid': 'aCPdwVnnsYeReynJ7YnLGH',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Emergency Shelter',
        'value': 'Humanitarian - Emergency Shelter'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'data-table': {
        'sort-by': null,
        'show-hxl-tags': false,
        'show-group-name': true,
        'selected-columns': [
          'group_cp32s44/back_office',
          'group_cp32s44/__007',
          'group_cp32s44/group_va3uo30/fp1',
          'group_cp32s44/group_va3uo30/fp2',
          'group_sk5ss08/group_xf3tq10/_Number_of_damaged_windows',
          'group_sk5ss08/group_xf3tq10/ppvi',
          'group_sk5ss08/group_xf3tq10/__027',
          'group_sk5ss08/group_mn8qs18/Nodd',
          'group_sk5ss08/group_lb53s88/_Is_there_damage_to_the_',
          'group_sk5ss08/group_lb53s88/ppda',
          'group_sk5ss08/group_lb53s88/tm',
          'group_nq8ia42/__009',
          'group_nq8ia42/__016',
          'group_nq8ia42/ben_det_hromada',
          'group_nq8ia42/ben_det_city',
          'group_nq8ia42/__012',
          'group_nq8ia42/__013',
          'group_nq8ia42/__014',
          'group_nq8ia42/pas',
          'group_nq8ia42/ipn',
          'group_nq8ia42/__017',
          'group_nq8ia42/fd1',
          'group_nq8ia42/fd2',
          'group_nq8ia42/fd3',
          'group_nq8ia42/fd4',
          'group_nq8ia42/fd5',
          'group_nq8ia42/fd6',
          'group_nq8ia42/__018',
          'group_nq8ia42/_',
          'group_nq8ia42/__019',
          'group_nq8ia42/__001',
          'group_nq8ia42/kspp1',
          'group_nq8ia42/kspp2',
          'group_nq8ia42/__002',
          'group_nq8ia42/kdo1',
          'group_nq8ia42/kdo2',
          'group_nq8ia42/__021',
          'group_nq8ia42/__010',
          'group_nq8ia42/kdov1',
          'group_nq8ia42/kdov2',
          'group_nq8ia42/__020',
          'group_nq8ia42/ovd',
          'group_nq8ia42/kovd',
          'vpo/__022',
          'vpo/sph1',
          'vpo/vph1',
          'vpo/sph2',
          'vpo/vph2',
          'vpo/sph3',
          'vpo/vph3',
          'conflict/__026',
          'conflict/sph1k',
          'conflict/vph1k',
          'conflict/sph2k',
          'conflict/vph2k',
          'conflict/sph3k',
          'conflict/vph3k',
          'conflict/sph4k',
          'conflict/vph4k',
          'conflict/sph5k',
          'conflict/vph5k',
          'criteria_scoring/cs_sh',
          'criteria_scoring/cs_se',
          'criteria_scoring/cs_val',
          'result/__024',
          'result/__025',
          'result/__029',
          '_id',
          'group_nq8ia42/kspp',
          'meta/rootUuid',
          'group_va3uo30/fp5',
          'group_zo5vm88/__026',
          'group_zo5vm88/sph1k',
          'group_zo5vm88/vph1k',
          '__024',
          '__029',
          '__version__',
          '_uuid',
          '_submission_time',
          '_submitted_by',
          'group_xf3tq10/ppvi',
          'group_lb53s88/kpos',
          'group_lb53s88/kpbd',
          'group_lb53s88/ppda',
          'group_lb53s88/tm',
          'group_ln9da62/__022',
          'group_zo5vm88/sph2k',
          'group_zo5vm88/vph2k',
          'group_zo5vm88/sph3k',
          'group_zo5vm88/vph3k',
          'group_va3uo30/fp6',
          'group_zo5vm88/sph4k',
          'group_zo5vm88/vph4k',
          'group_uc1cp22/_Number_of_damaged_balcony',
          'group_va3uo30/fp7',
          '_validation_status.uid',
          'group_as7hj54/__023',
          'group_va3uo30/fp8',
          'group_va3uo30/fp9',
          'criteria_scoring/cal_tol',
          'result/cs_prot'
        ],
        'translation-index': 0
      },
      'description': 'інформація стосовно бенефіціар',
      'organization': '',
      'country_codes': [
        'UKR'
      ]
    },
    'kind': 'asset',
    'name': 'Shelter North',
    'asset_type': 'survey',
    'version_id': 'vDuPG6ok5zFR7TPyVBhNLu',
    'has_deployment': true,
    'deployed_version_id': 'vDuPG6ok5zFR7TPyVBhNLu',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/marchelo/forms/aCPdwVnnsYeReynJ7YnLGH',
    'deployment__active': true,
    'deployment__submission_count': 451,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/pTFXBDrGpxvFFnumAqCj8z/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/pDEcgc6GK6psi9NHQ26p67/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/pDh9BtDSdPF9EdtbtsVGH4/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/pAmuE6x7F8MKHjwCy3H9sp/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/pLh5YDGyoDJNF6Dgcea8bT/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/pDLiF4LoSw8zwjxNetxUAE/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/p89k7H9zXSZB8UHSNdxiJt/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/pNxFWJhSkhTknnb9xd3MZH/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/marchelo/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/pBFMYGWdz6YZ6YNuxKg996/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/pLMNAVGF6Cp6ds7tZBvY2L/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/pPNExeKzgeq84UfQrXDH8T/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/pAFPF3CkLKVmGPppPGwv7X/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/pLLmfq3ndKoCFvVZbKoZRC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/p83hdzb7KYtj6UnLUXdfAS/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/permission-assignments/p44SJiAtVkWwjfnuVtWfNR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'es4iS2UXXdYUtZpEjYVQ9A5',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/export-settings/es4iS2UXXdYUtZpEjYVQ9A5/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/export-settings/es4iS2UXXdYUtZpEjYVQ9A5/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/export-settings/es4iS2UXXdYUtZpEjYVQ9A5/data.xlsx',
        'name': '',
        'date_modified': '2023-05-08 12:32:05.586997+00:00',
        'export_settings': {
          'lang': 'Ukrainian (ukr)',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': false
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCPdwVnnsYeReynJ7YnLGH/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFaYBfRhCTjwZV5PNwvHCP/',
    'date_created': '2023-05-23T08:15:36.450482Z',
    'date_modified': '2023-05-23T08:16:15.997660Z',
    'date_deployed': null,
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': true,
      'labels': [
        'Intro',
        '1.1 Select Office',
        'Enumerator Name',
        'DRC is a Danish non-governmental humanitarian organization and that currently implements a project providing shelter support to households with damaged shelters. DRC is conducting an initial assessment to determine which households are eligible to be targeted by for the project.',
        'Consent'
      ],
      'columns': [
        'type',
        'label',
        'name',
        'required',
        'select_from_list_name',
        'hint',
        'relevant',
        'appearance',
        'choice_filter',
        'calculation',
        'repeat_count',
        'constraint',
        'constraint_message'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (uk)'
      ],
      'row_count': 144,
      'name_quality': {
        'ok': 9,
        'bad': 0,
        'good': 135,
        'total': 144,
        'firsts': {
          'ok': {
            'name': 'Intro',
            'index': 1,
            'label': [
              'Intro',
              'Вступ'
            ]
          }
        }
      },
      'naming_conflicts': [
        'total_apt_damage_light',
        'total_apt_damage_medium'
      ],
      'default_translation': 'English (en)'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aFaYBfRhCTjwZV5PNwvHCP',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Emergency Shelter',
        'value': 'Humanitarian - Emergency Shelter'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ]
    },
    'kind': 'asset',
    'name': 'Shelter non-technical assessment questionnaire_FINAL',
    'asset_type': 'survey',
    'version_id': 'vQsLwqiDcQn2jfec43hYu6',
    'has_deployment': false,
    'deployed_version_id': null,
    'deployment__identifier': null,
    'deployment__active': false,
    'deployment__submission_count': 0,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFaYBfRhCTjwZV5PNwvHCP/permission-assignments/p9TuJnQ6TMbVttZVAo7WD6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFaYBfRhCTjwZV5PNwvHCP/permission-assignments/pQNfZn6q2pndqGs9qememy/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFaYBfRhCTjwZV5PNwvHCP/permission-assignments/p9BxDEh8nW2thWEvkqtpxL/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFaYBfRhCTjwZV5PNwvHCP/permission-assignments/pKGPSsNNXZHvBa9ADBxaS6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFaYBfRhCTjwZV5PNwvHCP/permission-assignments/pFpyCRV9DotNgueRCRBCdr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFaYBfRhCTjwZV5PNwvHCP/permission-assignments/pGepWxs7y2j6CLDTgrVXSK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFaYBfRhCTjwZV5PNwvHCP/permission-assignments/pzv57T2e3eeVKkZVpJucys/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFaYBfRhCTjwZV5PNwvHCP/permission-assignments/pJkVtzZQNTswmRLo2m9h34/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFaYBfRhCTjwZV5PNwvHCP.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFaYBfRhCTjwZV5PNwvHCP.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFaYBfRhCTjwZV5PNwvHCP/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH/',
    'date_created': '2023-05-17T11:28:32.783146Z',
    'date_modified': '2023-05-17T11:31:12.670249Z',
    'date_deployed': '2023-05-17T11:29:33.944049Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': true,
      'labels': [
        'Section 1: Introduction & Consent',
        'My name is [name of enumerator].  I work for DRC, a humanitarian organisation. We are conducting a rapid needs assessment to inform our planning and response. This is not a registration and participating in this assessment will not mean that you or people in this site will definitely receive assistance.   Participation in the survey is voluntary, and you can choose to stop at any time. Your responses will be anonymous. The survey takes approximately 30 minutes, and your participation would be greatly appreciated. Do you agree to continue?',
        'Oblast',
        'Raion',
        'Hromada'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'hint',
        'select_from_list_name',
        'choice_filter',
        'relevant',
        'constraint',
        'constraint_message'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 86,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 86,
        'total': 86,
        'firsts': {}
      },
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aEvwuJkHVRiRQRKBNFNocH',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Multiple Clusters',
        'value': 'Humanitarian - Multiple Clusters'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': 'UKR RNA Tool Test ',
      'organization': '',
      'country_codes': [
        'UKR'
      ]
    },
    'kind': 'asset',
    'name': 'UKR Rapid Needs Assessment',
    'asset_type': 'survey',
    'version_id': 'vQsbEkmhYq6aCXAPXcKfN2',
    'has_deployment': true,
    'deployed_version_id': 'vBD9Ny4pTisujGKyXggs6y',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aEvwuJkHVRiRQRKBNFNocH',
    'deployment__active': true,
    'deployment__submission_count': 0,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH/permission-assignments/pGPaXFHkRV77CMHoV5GHxa/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/AnonymousUser/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH/permission-assignments/pT4LpFvxWQDyHeBVQurZEb/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH/permission-assignments/pRgWVeUaUWpNY9uqoAhH95/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH/permission-assignments/pwFNbdRB4iMjo6DLix73QF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH/permission-assignments/p8vDt2MqbNVmQJG4JfpBei/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH/permission-assignments/pQPdukKTueAnqzQmS549B9/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH/permission-assignments/p5xRfWE7fyrvmLywQaR2fj/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH/permission-assignments/pKy2Ag6zYRg8BGKeud2pQA/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH/permission-assignments/pHSZjiVTxF7iKMWGFhAxyE/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aEvwuJkHVRiRQRKBNFNocH/data/',
    'subscribers_count': 0,
    'status': 'public',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/',
    'date_created': '2023-04-13T09:37:45.097004Z',
    'date_modified': '2023-05-15T07:56:17.710206Z',
    'date_deployed': '2023-05-15T07:55:17.042074Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
    'summary': {
      'geo': false,
      'labels': [
        'Interview',
        'This assessment is not used to evaluate the performance but is a tool to inform programming on how to better support our local partners. The staff who conducted the activity cannot undertake this assessment for the same beneficiaries.',
        '**Read the note below to the interviewee:**',
        'The purpose of this interview is to obtain information about the distributions programs to understand whether they are being implemented properly and whether we are addressing the needs of vulnerable people. Your information and the data will be obtained from you are considered as confidential. The information will be used to prepare reports, but will not include any specific names. We would appreciate providing us with the most accurate answers that you can.',
        'Interviewer name'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'select_from_list_name',
        'hint',
        'relevant',
        'parameters'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (ukr)'
      ],
      'row_count': 63,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 63,
        'total': 63,
        'firsts': {}
      },
      'naming_conflicts': [
        'ECHO_Informed'
      ],
      'default_translation': 'English (en)'
    },
    'owner__username': 'col_hom',
    'parent': null,
    'uid': 'a4PqtA3gEhvC8rzTYqYCru',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Other',
        'value': 'Other'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ]
    },
    'kind': 'asset',
    'name': 'Partner Post Distribution Monitoring',
    'asset_type': 'survey',
    'version_id': 'vKpgsVaq37ujrhMd3odqv9',
    'has_deployment': true,
    'deployed_version_id': 'vKpgsVaq37ujrhMd3odqv9',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/col_hom/forms/a4PqtA3gEhvC8rzTYqYCru',
    'deployment__active': true,
    'deployment__submission_count': 1,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/pCSrvDks2642Sc5qzMyGuE/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/p6ZCRCM5ubUB768MThynKG/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/pkP9aFbmi9bkSKAMw4aYHi/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/pHLuN9roGcxxh7FP5wzSmR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/pGFpUFXQwwvXtgbMbBE29A/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/p8Ky7KepUKU4kxdNgMkZ3Q/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/pPWEY2R47Q8MQ3g5fHExbJ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/p4urF5PHJoaYpyabKyYy4b/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/p4KaxEKta2yJGojcNrB9BC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/p4Ju2UUA3WKmmsxEcGE58g/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/p7wwPvNiDjhWfhUERq5ABX/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/pQDny2L2ahReo7nc58cX9o/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/pBBqqVNPhQoRJ7JPLpAfVh/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/p6d3jgcZn8qYccsZR923FQ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/pEuoRrnX2jz3H9wwbFFJKP/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/permission-assignments/pKmYHDmQmzWbJiK8tM64fe/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4PqtA3gEhvC8rzTYqYCru/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4ur7M7fc7jRtJKs6cSSfw/',
    'date_created': '2023-04-19T14:31:44.701454Z',
    'date_modified': '2023-04-19T14:31:44.701477Z',
    'date_deployed': null,
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': true,
      'labels': [
        'Interview',
        'This assessment is not used to evaluate the performance of DRC but is a tool to inform programming and help better planning of future distribution. The staff who conducted the NFI distribution cannot undertake this assessment for the same beneficiaries.',
        '**Read the note below to the interviewee:**',
        'The purpose of this interview is to obtain information about the distributions programs to understand whether they are being implemented properly and whether we are addressing the needs of vulnerable people. Your information and the data will be obtained from you are considered as confidential. The information will be used to prepare reports, but will not include any specific names. We would appreciate providing us with the most accurate answers that you can.',
        'Interviewer name'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'select_from_list_name',
        'hint',
        'relevant',
        'parameters'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (ukr)'
      ],
      'row_count': 71,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 71,
        'total': 71,
        'firsts': {}
      },
      'default_translation': 'English (en)'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'a4ur7M7fc7jRtJKs6cSSfw',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Sanitation, Water & Hygiene',
        'value': 'Humanitarian - Sanitation, Water & Hygiene'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ]
    },
    'kind': 'asset',
    'name': 'Копия объекта PDM Baby Hygiene Kits BHA',
    'asset_type': 'survey',
    'version_id': 'vP8RfV4A2XP5AA9fBQm9mY',
    'has_deployment': false,
    'deployed_version_id': null,
    'deployment__identifier': null,
    'deployment__active': false,
    'deployment__submission_count': 0,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4ur7M7fc7jRtJKs6cSSfw/permission-assignments/pFvXSufzSgBcNd6j6udHQC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4ur7M7fc7jRtJKs6cSSfw/permission-assignments/pGZyWyQLDvp4n82FJTtUJ3/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4ur7M7fc7jRtJKs6cSSfw/permission-assignments/pCv6drkwK6ih98dMeXaQEg/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4ur7M7fc7jRtJKs6cSSfw/permission-assignments/pDnLpvgKVqqpYnQm3et2Vr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4ur7M7fc7jRtJKs6cSSfw/permission-assignments/p5wRVJrQF8FWpX73VPdnc9/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4ur7M7fc7jRtJKs6cSSfw/permission-assignments/p6wMeFzuNPYvzdJEKBkKWW/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4ur7M7fc7jRtJKs6cSSfw/permission-assignments/pKfYLPs38Wwy7Jre3T5uMC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4ur7M7fc7jRtJKs6cSSfw/permission-assignments/pPK7cHhygRzo67zDpbycCV/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4ur7M7fc7jRtJKs6cSSfw.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4ur7M7fc7jRtJKs6cSSfw.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a4ur7M7fc7jRtJKs6cSSfw/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/',
    'date_created': '2020-01-31T08:11:23.204440Z',
    'date_modified': '2023-04-19T09:56:41.964895Z',
    'date_deployed': '2023-04-19T09:56:24.991714Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
    'summary': {
      'geo': false,
      'labels': [
        'Загальна інформація',
        'Співробітник DRC',
        'Дата',
        'Область',
        'Район'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'select_from_list_name',
        'choice_filter',
        'disabled',
        'calculation',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'UKR',
        'EN'
      ],
      'row_count': 135,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 135,
        'total': 135,
        'firsts': {}
      },
      'default_translation': 'UKR'
    },
    'owner__username': 'vira_kholodniak',
    'parent': null,
    'uid': 'avj7vLcVGBJzTyyqPa3vU6',
    'tag_string': '',
    'settings': {
      'sector': {},
      'country': [],
      'description': '',
      'organization': '',
      'country_codes': [],
      'share-metadata': false
    },
    'kind': 'asset',
    'name': 'EORE PRE POST Test',
    'asset_type': 'survey',
    'version_id': 'v8J9PpBD9RpfbL8L8nbm4P',
    'has_deployment': true,
    'deployed_version_id': 'v8J9PpBD9RpfbL8L8nbm4P',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/vira_kholodniak/forms/avj7vLcVGBJzTyyqPa3vU6',
    'deployment__active': true,
    'deployment__submission_count': 2242,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/permission-assignments/p8DDNwQUZL4g4z47QPYGa8/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/AnonymousUser/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/permission-assignments/pF6udnUA9m6F6xJmTkopNN/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/AnonymousUser/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/permission-assignments/pXN4kmYhw8ZqH9XP8G7dZu/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/permission-assignments/pRYdFikU8Fz2bFeS3fbtmL/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/permission-assignments/pGZGLqyRrAYTPWeWvphRtS/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/permission-assignments/pDPAzC6qw3UETgVQmwRpeK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/permission-assignments/p45PnxyovSuxJUiHoNFbXJ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/permission-assignments/pELwdAcyUKwt2NF7YeTeJ6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/permission-assignments/pT4UiDTcxFfAQFAjL9G8Cs/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/permission-assignments/pXHanWgetvpYj3D8GNYXuU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/permission-assignments/pJeocbj6wBHdn4CzsGDTXE/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/permission-assignments/p3Q9nV2soN5EWPT4gyb6y2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/permission-assignments/p4uJX8oZJniDmFTiZU2tQe/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esWDMcQ7Uz4CoWK37TwM3sh',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/export-settings/esWDMcQ7Uz4CoWK37TwM3sh/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/export-settings/esWDMcQ7Uz4CoWK37TwM3sh/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/export-settings/esWDMcQ7Uz4CoWK37TwM3sh/data.xlsx',
        'name': '',
        'date_modified': '2023-02-03 08:49:47.408930+00:00',
        'export_settings': {
          'lang': 'UKR',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      },
      {
        'uid': 'esLVnZDsQgR7FCtpt74yHNS',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/export-settings/esLVnZDsQgR7FCtpt74yHNS/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/export-settings/esLVnZDsQgR7FCtpt74yHNS/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/export-settings/esLVnZDsQgR7FCtpt74yHNS/data.xlsx',
        'name': 'Power Bi',
        'date_modified': '2023-02-01 09:21:02.264004+00:00',
        'export_settings': {
          'lang': '_xml',
          'type': 'xls',
          'fields': [
            'general/ddg_staff_name',
            'general/date_of_submission',
            'general/region',
            'general/district',
            'general/hromada',
            'general/settlement',
            'general/admin_cod',
            'general/type_of_education',
            'general/gender_of_respondent',
            'general/ID_Project',
            'general/donor_name',
            'general/age_of_respondent',
            'children_6_11/pre_number_correct_answers',
            'children_6_11/post_number_correct_answers',
            'children_6_11/child_difference_number',
            'children_6_11/child_difference_if',
            'youth_12_15/y_pre_number_correct_answers',
            'youth_12_15/y_post_number_correct_answers',
            'youth_12_15/youth_difference_number',
            'youth_12_15/youth_difference_if',
            'adults_12_15/a_pre_number_correct_answers',
            'adults_12_15/a_post_number_correct_answers',
            'adults_12_15/adults_difference_number',
            'adults_12_15/adults_difference_if',
            'additional_questions/how_useful_was_this_session',
            'additional_questions/have_you_ever_seen_a_dangerous_item_before',
            'additional_questions/how_safe_did_you_feel',
            'additional_questions/how_accessible_was_the_session',
            'additional_questions/how_participatory_did_you_feel_the_session_was',
            '_id',
            '_uuid',
            '_status',
            '_index'
          ],
          'group_sep': '_',
          'multiple_select': 'both',
          'hierarchy_in_labels': true,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/avj7vLcVGBJzTyyqPa3vU6/data/',
    'subscribers_count': 0,
    'status': 'public',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aE6qzofhX3T2ZBzsiaqBtg/',
    'date_created': '2023-04-12T12:25:29.050187Z',
    'date_modified': '2023-04-13T14:11:25.579483Z',
    'date_deployed': null,
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Interview',
        '**Read the note below to the interviewee:**',
        'Hello, I am from DRC. We want to ask you some questions to obtain information about the hygiene kits for CC that your center has received from us. We want to hear your thoughts, so we can improve the way that we are doing our job. Your participation is voluntary and the questions will take around 20-30 minutes to answer. If you accept to participate, you have the option to stop answering or to not answer any question that you don\'t want to. This information will help us to understand what has been done appropriately in the process, what hasn\'t worked that good and what we should be doing differently. The information you share will be kept protected and will only be shared with a small group of people in DRC. Finally, please know that if you provide negative feedback about our work, this will not have any negative consequences to your permanence in this or future activities of this project.',
        'Interviewer name',
        'Area'
      ],
      'columns': [
        'name',
        'type',
        'required',
        'label',
        'appearance',
        'select_from_list_name',
        'relevant',
        'hint',
        'constraint',
        'parameters'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (ukr)'
      ],
      'row_count': 81,
      'name_quality': {
        'ok': 42,
        'bad': 0,
        'good': 39,
        'total': 81,
        'firsts': {
          'ok': {
            'name': '_Read_the_note_below_to_the_interviewee',
            'index': 2,
            'label': [
              '**Read the note below to the interviewee:**',
              '**Прочитайте примітку під інтерв’ю:**'
            ]
          }
        }
      },
      'default_translation': 'English (en)'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aE6qzofhX3T2ZBzsiaqBtg',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Sanitation, Water & Hygiene',
        'value': 'Humanitarian - Sanitation, Water & Hygiene'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'PDM   Hygiene Kits CC (PF)',
    'asset_type': 'survey',
    'version_id': 'vAgiXiF6DM9dTvpiwS9RjW',
    'has_deployment': false,
    'deployed_version_id': null,
    'deployment__identifier': null,
    'deployment__active': false,
    'deployment__submission_count': 0,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aE6qzofhX3T2ZBzsiaqBtg/permission-assignments/pLKVyepbsKyExhXWWYzAnm/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aE6qzofhX3T2ZBzsiaqBtg/permission-assignments/pNoWE5fkBWCcm4ZgHAFGgz/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aE6qzofhX3T2ZBzsiaqBtg/permission-assignments/p3JNuiknmcwfx88pQZ7ZzM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aE6qzofhX3T2ZBzsiaqBtg/permission-assignments/pp9rx8cStnzFHayDtTQnpj/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aE6qzofhX3T2ZBzsiaqBtg/permission-assignments/p4tdkh9sGCD4noxMp8rDmK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aE6qzofhX3T2ZBzsiaqBtg/permission-assignments/pPLjg2f2BLKLyWLsQ4RL9m/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aE6qzofhX3T2ZBzsiaqBtg/permission-assignments/pAFvEFeZWGipZtbPJkadu5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aE6qzofhX3T2ZBzsiaqBtg/permission-assignments/pSaCoWkuwisknWXM8fx3yZ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aE6qzofhX3T2ZBzsiaqBtg.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aE6qzofhX3T2ZBzsiaqBtg.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aE6qzofhX3T2ZBzsiaqBtg/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHoNwHoWWkT4L89HCeMDh6/',
    'date_created': '2023-04-12T07:17:18.742203Z',
    'date_modified': '2023-04-13T11:21:51.234093Z',
    'date_deployed': null,
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Interview',
        '**Read the note below to the interviewee:**',
        'Hello, I am from DRC. We want to ask you some questions to obtain information about the NFI kits that your family has received from us. We want to hear your thoughts, so we can improve the way that we are doing our job. Your participation is voluntary and the questions will take around 20-30 minutes to answer. If you accept to participate, you have the option to stop answering or to not answer any question that you don\'t want to. This information will help us to understand what has been done appropriately in the process, what hasn\'t worked that good and what we should be doing differently. The information you share will be kept protected and will only be shared with a small group of people in DRC. Finally, please know that if you provide negative feedback about our work, this will not have any negative consequences to your permanence in this or future activities of this project.',
        'Interviewer name',
        'Type of interview'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'select_from_list_name',
        'hint',
        'relevant',
        'parameters'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (ukr)'
      ],
      'row_count': 67,
      'name_quality': {
        'ok': 10,
        'bad': 0,
        'good': 57,
        'total': 67,
        'firsts': {
          'ok': {
            'name': 'Responsible_office',
            'index': 8,
            'label': [
              'Responsible office',
              'Відповідальний офіс'
            ]
          }
        }
      },
      'default_translation': 'English (en)'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aHoNwHoWWkT4L89HCeMDh6',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Sanitation, Water & Hygiene',
        'value': 'Humanitarian - Sanitation, Water & Hygiene'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ]
    },
    'kind': 'asset',
    'name': 'PDM Family NFI (+kitchen set)',
    'asset_type': 'survey',
    'version_id': 'v5tXkeiATnmsLrdUunPvQ4',
    'has_deployment': false,
    'deployed_version_id': null,
    'deployment__identifier': null,
    'deployment__active': false,
    'deployment__submission_count': 0,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHoNwHoWWkT4L89HCeMDh6/permission-assignments/pCJxqsJuT7Zueu7ZFHuUzv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHoNwHoWWkT4L89HCeMDh6/permission-assignments/pSXa67ksfKj6frNV9rfFnx/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHoNwHoWWkT4L89HCeMDh6/permission-assignments/pTEodZNCQVBeZqAHz85Fbc/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHoNwHoWWkT4L89HCeMDh6/permission-assignments/p3hyyZvgAMLa9bLcD9q4ER/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHoNwHoWWkT4L89HCeMDh6/permission-assignments/pAJu2MEKcAif73bR9hCesL/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHoNwHoWWkT4L89HCeMDh6/permission-assignments/p3fpkerNL93rKSCM65asWB/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHoNwHoWWkT4L89HCeMDh6/permission-assignments/p3yxqy4mVj5NFcBtEdJMRX/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHoNwHoWWkT4L89HCeMDh6/permission-assignments/p38PUoGQ9kN3XZhfePKf4R/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHoNwHoWWkT4L89HCeMDh6.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHoNwHoWWkT4L89HCeMDh6.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHoNwHoWWkT4L89HCeMDh6/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy/',
    'date_created': '2023-03-24T12:22:55.315740Z',
    'date_modified': '2023-03-27T09:20:33.784363Z',
    'date_deployed': '2023-03-27T09:20:20.083235Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Я представляю Данську раду у справах біженців в Україні (коротко поясніть, що таке DRC та ваша роль у ньому). Ми проводимо опитування, аби дізнатися більше про потреби місцевого населення та проблеми, з якими воно стикається. Ми були б дуже Вам вдячні, якби Ви погодилися відповісти на наші питання. Інформація, яку ви надаєте нам, буде зберігатися конфіденційно. Ми не будемо писати ваше ім\'я, воно ніколи не відображатиметься у наших звітах. ',
        'Ви маєте право в будь-який момент відмовитися від розмови або не відповідати на питання.  Ми будемо вдячні за якомога точніші відповіді. ',
        'Відповідальний офіс ',
        'Тип опитування ',
        'Ім\'я інтерв\'юера '
      ],
      'columns': [
        'type',
        'label',
        'required',
        'select_from_list_name',
        'name',
        'relevant',
        'hint'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'Ukrainian (ua)',
        'English (en)'
      ],
      'row_count': 39,
      'name_quality': {
        'ok': 32,
        'bad': 1,
        'good': 6,
        'total': 39,
        'firsts': {
          'ok': {
            'name': 'note_un3qg02',
            'index': 1,
            'label': [
              'Я представляю Данську раду у справах біженців в Україні (коротко поясніть, що таке DRC та ваша роль у ньому). Ми проводимо опитування, аби дізнатися більше про потреби місцевого населення та проблеми, з якими воно стикається. Ми були б дуже Вам вдячні, якби Ви погодилися відповісти на наші питання. Інформація, яку ви надаєте нам, буде зберігатися конфіденційно. Ми не будемо писати ваше ім\'я, воно ніколи не відображатиметься у наших звітах. ',
              'I represent the Danish Refugee Council in Ukraine (briefly explain what the DRC is and your role in it). We conduct surveys to learn more about the needs of the local population and the challenges they face. We would be very grateful if you would agree to answer our questions. The information you provide to us will be kept confidential. We will not write your name, it will never appear in our reports.'
            ]
          },
          'bad': {
            'name': '_1_',
            'index': 11,
            'label': [
              '1) Чи знаєте ви людей у вашій громаді, які стикаються з проблемами у задоволенні своїх базових потреб? ',
              null
            ]
          }
        }
      },
      'default_translation': 'Ukrainian (ua)'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aRWWixZLTzDHv6SFxTqZcy',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Protection',
        'value': 'Humanitarian - Protection'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'UHF_Needs assessment_Protection& Basic needs',
    'asset_type': 'survey',
    'version_id': 'vBD9rC2EmgogX8N82dDJ6Q',
    'has_deployment': true,
    'deployed_version_id': 'vBD9rC2EmgogX8N82dDJ6Q',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aRWWixZLTzDHv6SFxTqZcy',
    'deployment__active': true,
    'deployment__submission_count': 11,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy/permission-assignments/p65oNdA5BEy5svZc6Yn2M6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy/permission-assignments/pNq5ZvtfBbszTPkWDvpc77/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy/permission-assignments/pC2ke6Tms7wy7SBFRx92JB/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy/permission-assignments/pNH9bvRv7RcPxjcHjAcSad/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy/permission-assignments/p45wjo628o6VkLA72aYEWY/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy/permission-assignments/pNNh6HhaNMNbtKFfXecBGa/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy/permission-assignments/p9u7cFH53pvhXf5tkbANCt/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy/permission-assignments/pNAt5HY6Qmgxor9BNyvD8z/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'es6hacVK2SJf4TQZLSNNgp7',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy/export-settings/es6hacVK2SJf4TQZLSNNgp7/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy/export-settings/es6hacVK2SJf4TQZLSNNgp7/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy/export-settings/es6hacVK2SJf4TQZLSNNgp7/data.xlsx',
        'name': '',
        'date_modified': '2023-03-24 13:28:53.961897+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aRWWixZLTzDHv6SFxTqZcy/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc/',
    'date_created': '2023-03-24T11:59:15.734378Z',
    'date_modified': '2023-03-27T07:10:10.052546Z',
    'date_deployed': '2023-03-27T07:09:45.049872Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        '«Я представляю Данську раду у справах біженців в Україні (коротко поясніть, що таке DRC та ваша роль у ньому). Ми проводимо опитування, аби дізнатися більше про потреби місцевого населення та проблеми, з якими воно стикається. Ми були б дуже Вам вдячні, якби Ви погодилися відповісти на наші питання. Інформація, яку ви надаєте нам, буде зберігатися конфіденційно. Ми не будемо писати ваше ім\'я, воно ніколи не відображатиметься у наших звітах. Ви маєте право в будь-який момент відмовитися від розмови або не відповідати на питання. Ми будемо вдячні за якомога точніші відповіді.',
        'Відповідальний офіс',
        'Тип опитування ',
        'Ім\'я інтерв\'юера ',
        'Enter a date'
      ],
      'columns': [
        'type',
        'label',
        'required',
        'select_from_list_name',
        'name',
        'hint'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'Ukrainian (ua)',
        'English (en)'
      ],
      'row_count': 40,
      'name_quality': {
        'ok': 35,
        'bad': 0,
        'good': 5,
        'total': 40,
        'firsts': {
          'ok': {
            'name': 'note_wd4wc43',
            'index': 1,
            'label': [
              '«Я представляю Данську раду у справах біженців в Україні (коротко поясніть, що таке DRC та ваша роль у ньому). Ми проводимо опитування, аби дізнатися більше про потреби місцевого населення та проблеми, з якими воно стикається. Ми були б дуже Вам вдячні, якби Ви погодилися відповісти на наші питання. Інформація, яку ви надаєте нам, буде зберігатися конфіденційно. Ми не будемо писати ваше ім\'я, воно ніколи не відображатиметься у наших звітах. Ви маєте право в будь-який момент відмовитися від розмови або не відповідати на питання. Ми будемо вдячні за якомога точніші відповіді.',
              'I represent the Danish Refugee Council in Ukraine (briefly explain what the DRC is and your role in it). We conduct surveys to learn more about the needs of the local population and the challenges they face. We would be very grateful if you would agree to answer our questions. The information you provide to us will be kept confidential. We will not write your name, it will never appear in our reports. You have the right to refuse the conversation or not to answer questions at any time. We will be grateful for answers as precise as possible.'
            ]
          }
        }
      },
      'default_translation': 'Ukrainian (ua)'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aDZDuGRT2Pvfy7NmDy88Yc',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Multiple Clusters',
        'value': 'Humanitarian - Multiple Clusters'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'UHF_Needs assessment_EcRec_KII/FGDF',
    'asset_type': 'survey',
    'version_id': 'vSySjSheHDfJrUukBzAKuj',
    'has_deployment': true,
    'deployed_version_id': 'vSySjSheHDfJrUukBzAKuj',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aDZDuGRT2Pvfy7NmDy88Yc',
    'deployment__active': true,
    'deployment__submission_count': 9,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc/permission-assignments/pTN7bWgfVh75Lu6AcGFWLC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc/permission-assignments/pBHyGtbuu7w3qXp6AmmbRj/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc/permission-assignments/p4C924ZsJExmieUDh3Lc5h/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc/permission-assignments/p3UkKYYgEonDZHSmW3W6dC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc/permission-assignments/pE5ukTooQdfJUT6FWSFnXM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc/permission-assignments/pMe4ZT3vihSSLn5PKTzcUn/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc/permission-assignments/p8RUhxTahqqCfYyLk8nM2L/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc/permission-assignments/pBHRRgQwM8bKYmh9XhRiMT/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esGEL5avxXrkNEaGE6ZviVK',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc/export-settings/esGEL5avxXrkNEaGE6ZviVK/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc/export-settings/esGEL5avxXrkNEaGE6ZviVK/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc/export-settings/esGEL5avxXrkNEaGE6ZviVK/data.xlsx',
        'name': '',
        'date_modified': '2023-03-27 14:32:45.861871+00:00',
        'export_settings': {
          'lang': 'Ukrainian (ua)',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aDZDuGRT2Pvfy7NmDy88Yc/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG/',
    'date_created': '2023-03-24T13:21:14.783011Z',
    'date_modified': '2023-03-24T13:36:50.600246Z',
    'date_deployed': '2023-03-24T13:36:13.880799Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        '«Я представляю Данську раду у справах біженців в Україні (коротко поясніть, що таке DRC та ваша роль у ньому). Ми проводимо опитування, аби дізнатися більше про потреби місцевого населення та проблеми, з якими воно стикається. Ми були б дуже Вам вдячні, якби Ви погодилися відповісти на наші питання. Інформація, яку ви надаєте нам, буде зберігатися конфіденційно. Ми не будемо писати ваше ім\'я, воно ніколи не відображатиметься у наших звітах. Ви маєте право в будь-який момент відмовитися від розмови або не відповідати на питання. Ми будемо вдячні за якомога точніші відповіді.',
        'Відповідальний офіс',
        'Ім\'я інтерв\'юера ',
        'Enter a date',
        'Enter a time'
      ],
      'columns': [
        'type',
        'label',
        'required',
        'select_from_list_name',
        'name',
        'hint'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'Ukrainian (ua)',
        'English (eng)'
      ],
      'row_count': 39,
      'name_quality': {
        'ok': 34,
        'bad': 0,
        'good': 5,
        'total': 39,
        'firsts': {
          'ok': {
            'name': 'note_wd4wc43',
            'index': 1,
            'label': [
              '«Я представляю Данську раду у справах біженців в Україні (коротко поясніть, що таке DRC та ваша роль у ньому). Ми проводимо опитування, аби дізнатися більше про потреби місцевого населення та проблеми, з якими воно стикається. Ми були б дуже Вам вдячні, якби Ви погодилися відповісти на наші питання. Інформація, яку ви надаєте нам, буде зберігатися конфіденційно. Ми не будемо писати ваше ім\'я, воно ніколи не відображатиметься у наших звітах. Ви маєте право в будь-який момент відмовитися від розмови або не відповідати на питання. Ми будемо вдячні за якомога точніші відповіді.',
              'I represent the Danish Refugee Council in Ukraine (briefly explain what the DRC is and your role in it). We conduct surveys to learn more about the needs of the local population and the challenges they face. We would be very grateful if you would agree to answer our questions. The information you provide to us will be kept confidential. We will not write your name, it will never appear in our reports. You have the right to refuse the conversation or not to answer questions at any time. We will be grateful for answers as precise as possible.'
            ]
          }
        }
      },
      'default_translation': 'Ukrainian (ua)'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aJYJ4TVdT5rhisp5egsQeG',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Multiple Clusters',
        'value': 'Humanitarian - Multiple Clusters'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'UHF_Needs assessment_Rural livelihood',
    'asset_type': 'survey',
    'version_id': 'v3f7Md8232eNaNFPMa9Q5u',
    'has_deployment': true,
    'deployed_version_id': 'v3f7Md8232eNaNFPMa9Q5u',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aJYJ4TVdT5rhisp5egsQeG',
    'deployment__active': true,
    'deployment__submission_count': 3,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG/permission-assignments/pJZRZcvMdy3dipaeeBrqYk/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG/permission-assignments/p5HUMs2EDApdYgYGTkNv7b/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG/permission-assignments/pGa3Y2rnpF6YbPKBrkENQs/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG/permission-assignments/pTYqgBPN8tbN9tCZaX2EnM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG/permission-assignments/pCUeLQ7R5xATSv49BqhwWe/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG/permission-assignments/p4xEpkQtx6YgnnbGFdWG9V/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG/permission-assignments/p6eNcUCGR9CjFu4ooJ2TwN/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG/permission-assignments/p6zB9g6y4cTFSUnZcJHPZn/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esCmNfV9vd94kaJh68BLGW6',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG/export-settings/esCmNfV9vd94kaJh68BLGW6/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG/export-settings/esCmNfV9vd94kaJh68BLGW6/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG/export-settings/esCmNfV9vd94kaJh68BLGW6/data.xlsx',
        'name': '',
        'date_modified': '2023-03-27 14:30:11.707937+00:00',
        'export_settings': {
          'lang': 'Ukrainian (ua)',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJYJ4TVdT5rhisp5egsQeG/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/',
    'date_created': '2022-12-01T07:42:49.356291Z',
    'date_modified': '2023-03-17T08:48:57.450574Z',
    'date_deployed': '2023-03-17T08:48:30.492017Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
    'summary': {
      'geo': true,
      'labels': [
        'Providing non-food assistance and support to the most vulnerable households',
        'Unique ID ${ID}',
        'Record your current location',
        'Consent',
        'In order to register your application, we\'d need to ask you a few questions to understand the composition of your household and how to best transfer financial assistance to you if you are eligible. These questions will take between 10-15 minutes. If you are eligible, we’ll need to share some basic details with the bank in order to make the payment. We are also required to share Tax ID numbers of people we provide assistance to with other humanitarian agencies implementing financial assistance programs, to ensure we are not duplicating assistance. All the other information will be stored safely, in accordance with the Law on protection of personal data, and will not be shared outside of DRC and its partners.. Do you provide DRC consent to take photos or copies of your personal documentation at this time? Following DRC Data Protection Protocols and Ukraine Law on Data Protection, we will not share copies or photos of your documents with anyone outside DRC and these will only be used for the sole purpose of processing your information in order to provide you with cash assistance. You can decide to say no at this time and we will need to collect your documents at a later point in time.'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'calculation',
        'select_from_list_name',
        'relevant',
        'hint',
        'appearance',
        'choice_filter',
        'repeat_count',
        'parameters'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English',
        'Ukrainian'
      ],
      'row_count': 45,
      'name_quality': {
        'ok': 9,
        'bad': 1,
        'good': 35,
        'total': 45,
        'firsts': {
          'ok': {
            'name': 'WKB1_How_many',
            'index': 29,
            'label': [
              'WKB1: How many?',
              'WKB1: Скільки?'
            ]
          },
          'bad': {
            'name': '__021',
            'index': 6,
            'label': [
              'In order to register your application, we\'d need to ask you a few questions to understand the composition of your household and how to best transfer financial assistance to you if you are eligible. These questions will take between 10-15 minutes. If you are eligible, we’ll need to share some basic details with the bank in order to make the payment. We are also required to share Tax ID numbers of people we provide assistance to with other humanitarian agencies implementing financial assistance programs, to ensure we are not duplicating assistance. All the other information will be stored safely, in accordance with the Law on protection of personal data, and will not be shared outside of DRC and its partners.. Do you provide DRC consent to take photos or copies of your personal documentation at this time? Following DRC Data Protection Protocols and Ukraine Law on Data Protection, we will not share copies or photos of your documents with anyone outside DRC and these will only be used for the sole purpose of processing your information in order to provide you with cash assistance. You can decide to say no at this time and we will need to collect your documents at a later point in time.',
              'Щоб зареєструвати вашу заявку, нам потрібно поставити вам кілька запитань, щоб зрозуміти склад вашої сім’ї та як найкраще перерахувати вам фінансову допомогу, якщо ви маєте на це право. Ці запитання займуть 10-15 хвилин. Якщо ви відповідаєте вимогам, нам потрібно буде надати банку деякі основні дані, щоб здійснити платіж. Ми також зобов’язані надавати ідентифікаційні номери платника податків людей, яким ми надаємо допомогу, іншим гуманітарним організаціям, які впроваджують програми фінансової допомоги, щоб гарантувати, що ми не дублюємо допомогу. Вся інша інформація зберігатиметься в безпеці відповідно до Закону про захист персональних даних і не буде передана за межі DRC та його партнерів. Чи надаєте ви згоду DRC на фотографування або копіювання ваших особистих документів у цей час? Відповідно до протоколів захисту даних ДРК та Закону України «Про захист даних» ми не надаватимемо копії чи фотографії ваших документів нікому за межами ДРК, і вони використовуватимуться лише з єдиною метою обробки вашої інформації, щоб надати вам грошову допомогу. Ви можете відмовитися зараз, і нам потрібно буде забрати ваші документи пізніше.'
            ]
          }
        }
      },
      'default_translation': 'English'
    },
    'owner__username': 'col_hom',
    'parent': null,
    'uid': 'aBGVXW2N26DaLehmKneuyB',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Sanitation, Water & Hygiene',
        'value': 'Humanitarian - Sanitation, Water & Hygiene'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'data-table': {
        'sort-by': {
          'value': 'ASCENDING',
          'fieldId': 'start'
        }
      },
      'description': 'Trial version of super simplified form only for NAA',
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': true
    },
    'kind': 'asset',
    'name': '[NAA Trial] DRC Joint MPCA-NFI Registration Form',
    'asset_type': 'survey',
    'version_id': 'vEapSH7MXjTZn57Pd4a9wq',
    'has_deployment': true,
    'deployed_version_id': 'vEapSH7MXjTZn57Pd4a9wq',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/col_hom/forms/aBGVXW2N26DaLehmKneuyB',
    'deployment__active': true,
    'deployment__submission_count': 5389,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pFBP3eymW7qv96Ym759YcR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pLpsweEfo32yX3XJxe2AkC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pJ7XdXoNN3hf2fxg5ydRES/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/p6huaCuh3aPYTCT26ayvog/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pBs43ow8tVV26hd95p7DGd/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pB2X7VEADhghHWgaeydoea/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/p4MrtjdfKMrqbq3AUy9jAD/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pSjQuifQCqUchaZYdNJ6nm/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/alexandre_annic_drc/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pTcd2gxpMAWWCNo5fCWfTG/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pTSkrRs8xUHfdFG6n6vBRo/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pAY9Q6j7x7LP3i5agMnhVg/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pAVMK77YLRnRTEJBmYHWra/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pB28Q8hd9zShMji29rVCAR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/p7T6MubFvHuGhLi7YCW9UX/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pKihMqwhtEX8CjK6AiLCp8/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pMdogiKn7MdvoQzoXXQ2kf/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pJgtPTQhDjSqpzGvEfzDjH/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_hrk_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pR3mqBx5nrQ4S5vnk2ehJn/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_hrk_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/partial_submissions/',
        'partial_permissions': [
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_hrk_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_hrk_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_hrk_basicneeds'
                  ]
                }
              }
            ]
          },
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_hrk_basicneeds'
                  ]
                }
              }
            ]
          }
        ],
        'label': {
          'default': 'Act on submissions only from specific users',
          'view_submissions': 'View submissions only from specific users',
          'change_submissions': 'Edit submissions only from specific users',
          'delete_submissions': 'Delete submissions only from specific users',
          'validate_submissions': 'Validate submissions only from specific users'
        }
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pRky9sc6QTGp5e5cU9Krwm/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/drc_hrk_basicneeds/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pQrS25SfJuFetiyGeThtMU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pBnAhu7XCuEUUNST2J2xEv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pEqWxNSgrodcKAXLkZp527/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pLSqZUr8NTvsKDgLBqBhTC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pKaczqBGXjZVBCDQAkdrbe/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/p3L3xx96RAvHkN9BCAsxSy/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/martinkenny/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pGoTN5ZsmLxEkVhSnEZhHh/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/p6oGgJatB5UYcgLx85xUNT/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pKnCaeTPVEAGVmMpnnKdFm/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pCzaBzDXqRczDAncyDXx9y/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pAsUBfqdiRTVMLeFXmScoR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pPWw9zxtFPoySC5tHhbdqb/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pPCMViNjE2wDqjALoCMiGp/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pDnWqxKXgdYcVCGNhAZBCM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/pH6qZxwCSZyVTDYXxdqtfj/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/viktoriia_andriushchenko12/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/p6ZS7Z6Tzsd846h7yCTb3n/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/viktoriia_andriushchenko12/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/partial_submissions/',
        'partial_permissions': [
          {
            'url': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
            'filters': [
              {
                '_submitted_by': {
                  '$in': [
                    'drc_hrk_basicneeds'
                  ]
                }
              }
            ]
          }
        ],
        'label': {
          'default': 'Act on submissions only from specific users',
          'view_submissions': 'View submissions only from specific users',
          'change_submissions': 'Edit submissions only from specific users',
          'delete_submissions': 'Delete submissions only from specific users',
          'validate_submissions': 'Validate submissions only from specific users'
        }
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/permission-assignments/p6jN7QdoVwPQ99oRGHr4zU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/viktoriia_andriushchenko12/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      }
    ],
    'export_settings': [
      {
        'uid': 'esPEUnYB8HgB4gqYcqS4fTk',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/export-settings/esPEUnYB8HgB4gqYcqS4fTk/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/export-settings/esPEUnYB8HgB4gqYcqS4fTk/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/export-settings/esPEUnYB8HgB4gqYcqS4fTk/data.xlsx',
        'name': '',
        'date_modified': '2023-04-26 16:36:07.563090+00:00',
        'export_settings': {
          'lang': '_xml',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'summary',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBGVXW2N26DaLehmKneuyB/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFWdaTYPPhpw42FGWEPh7n/',
    'date_created': '2023-03-07T14:45:47.095147Z',
    'date_modified': '2023-03-10T13:33:31.352437Z',
    'date_deployed': '2023-03-10T13:33:23.289895Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Шановний респонденте, запрошуємо Вас надати зворотний зв\'язок щодо дослідження практик вирішення конфліктів та медіації в Україні, що було проведено в рамках проекту "Розбудова соціальної згуртованості та миру в Україні", який реалізується Данською Радою у справах біженців в Україні (ДРБ) у межах Програми зміцнення громадської довіри (UCBI) за фінансової підтримки Агентства США з міжнародного розвитку (USAID).',
        '1. Ім’я та прізвище (або анонімно):',
        '2. Стать:',
        '3. Вік:',
        '4. Організація, яку Ви представляєте:'
      ],
      'columns': [
        'hint',
        'type',
        'label',
        'required',
        'select_from_list_name',
        'name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 13,
      'name_quality': {
        'ok': 12,
        'bad': 1,
        'good': 0,
        'total': 13,
        'firsts': {
          'ok': {
            'name': '_USAID',
            'index': 1,
            'label': [
              'Шановний респонденте, запрошуємо Вас надати зворотний зв\'язок щодо дослідження практик вирішення конфліктів та медіації в Україні, що було проведено в рамках проекту "Розбудова соціальної згуртованості та миру в Україні", який реалізується Данською Радою у справах біженців в Україні (ДРБ) у межах Програми зміцнення громадської довіри (UCBI) за фінансової підтримки Агентства США з міжнародного розвитку (USAID).'
            ]
          },
          'bad': {
            'name': '_6_',
            'index': 9,
            'label': [
              '7. Чи вплинули результати дослідження на поточну діяльність Вашої організації?'
            ]
          }
        }
      },
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aFWdaTYPPhpw42FGWEPh7n',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Other',
        'value': 'Other'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'Форма зворотного зв’язку щодо дослідження практик вирішення конфліктів та медіації в Україні ',
    'asset_type': 'survey',
    'version_id': 'v5GDnqNWvAwAAm92jwMu42',
    'has_deployment': true,
    'deployed_version_id': 'v5GDnqNWvAwAAm92jwMu42',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aFWdaTYPPhpw42FGWEPh7n',
    'deployment__active': true,
    'deployment__submission_count': 1,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFWdaTYPPhpw42FGWEPh7n/permission-assignments/p9hFNKdbhcvpBdAHYQimMg/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFWdaTYPPhpw42FGWEPh7n/permission-assignments/pLxaKtR7wADKvM6Jyn52BE/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFWdaTYPPhpw42FGWEPh7n/permission-assignments/pB5iVjeNFaZrJMu6dzevq8/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFWdaTYPPhpw42FGWEPh7n/permission-assignments/pCqdoxbbAjBjWQjqgUJDEA/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFWdaTYPPhpw42FGWEPh7n/permission-assignments/pCYTsCdRW9yV8u3LN5dVMT/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFWdaTYPPhpw42FGWEPh7n/permission-assignments/pLsUhfzCPsiyCYfVn6X5TH/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFWdaTYPPhpw42FGWEPh7n/permission-assignments/pQTGKykMPcpKLv6nPBRv3Q/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFWdaTYPPhpw42FGWEPh7n/permission-assignments/p4rKuW2Epy3sNQPXDEi2Pe/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFWdaTYPPhpw42FGWEPh7n.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFWdaTYPPhpw42FGWEPh7n.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFWdaTYPPhpw42FGWEPh7n/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK/',
    'date_created': '2023-01-30T14:51:45.563570Z',
    'date_modified': '2023-01-30T14:53:17.697698Z',
    'date_deployed': '2023-01-30T14:53:06.845525Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Форма зворотного зв’язку щодо онлайн тренінгу з фасилітації діалогу від DRC Ukraine ',
        '1. Дата анкетування:',
        '2. Стать:',
        '3. Вік:',
        '4. Як би Ви оцінили  якість проведення тренінгу з фасилітації діалогу'
      ],
      'columns': [
        'hint',
        'type',
        'label',
        'required',
        'select_from_list_name',
        'name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 16,
      'name_quality': {
        'ok': 14,
        'bad': 2,
        'good': 0,
        'total': 16,
        'firsts': {
          'ok': {
            'name': '_DRC_Ukraine',
            'index': 1,
            'label': [
              'Форма зворотного зв’язку щодо онлайн тренінгу з фасилітації діалогу від DRC Ukraine '
            ]
          },
          'bad': {
            'name': '_6_',
            'index': 9,
            'label': [
              '6. Як Ви вважаєте, отриманні знання підвищать ефективність Вашої діяльності та Вашу оперативну спроможність (здатність надавати гуманітарну допомогу т.і.)?'
            ]
          }
        }
      },
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aAFukEQkWDTtmpqctVGbPK',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Other',
        'value': 'Other'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'UCBI III_Feedback Form_Dialogue_Facilitation_Training',
    'asset_type': 'survey',
    'version_id': 'vEkyuUP6fDXWieCXSMorct',
    'has_deployment': true,
    'deployed_version_id': 'vEkyuUP6fDXWieCXSMorct',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aAFukEQkWDTtmpqctVGbPK',
    'deployment__active': true,
    'deployment__submission_count': 11,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK/permission-assignments/pGu3Wo5TcEzKkCoumTQ5id/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK/permission-assignments/p7aY3BueLFbQAQsucVzWYN/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK/permission-assignments/pKEe7MSYZ8rNuvi3Lkp3cm/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK/permission-assignments/p4qfE7PRXfKfjaKHeuo58q/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK/permission-assignments/pM6AauivvSXQCHjJtsR4m5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK/permission-assignments/pQuwtpim9yJJVE3qP9Mbwh/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK/permission-assignments/pLbpYbVoMxgdMnsmnqPTXj/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK/permission-assignments/pN8BwbhoL727LsUZtLQAzg/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esGEZHA7RPhJbCQrUMAHTLS',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK/export-settings/esGEZHA7RPhJbCQrUMAHTLS/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK/export-settings/esGEZHA7RPhJbCQrUMAHTLS/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK/export-settings/esGEZHA7RPhJbCQrUMAHTLS/data.xlsx',
        'name': '',
        'date_modified': '2023-02-13 12:36:52.359372+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAFukEQkWDTtmpqctVGbPK/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX/',
    'date_created': '2023-01-30T14:49:24.415194Z',
    'date_modified': '2023-01-30T14:51:27.655609Z',
    'date_deployed': '2023-01-30T14:51:22.030534Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Форма зворотного зв’язку щодо онлайн тренінгу з моніторингу та оцінки проєктів від DRC Ukraine ',
        '1. Дата анкетування:',
        '2. Стать:',
        '3. Вік:',
        '4. Як би Ви оцінили  якість проведення тренінгу з моніторингу та оцінки проєктів'
      ],
      'columns': [
        'hint',
        'type',
        'label',
        'required',
        'select_from_list_name',
        'name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 16,
      'name_quality': {
        'ok': 14,
        'bad': 2,
        'good': 0,
        'total': 16,
        'firsts': {
          'ok': {
            'name': '_DRC_Ukraine',
            'index': 1,
            'label': [
              'Форма зворотного зв’язку щодо онлайн тренінгу з моніторингу та оцінки проєктів від DRC Ukraine '
            ]
          },
          'bad': {
            'name': '_6_',
            'index': 9,
            'label': [
              '6. Як Ви вважаєте, отриманні знання підвищать ефективність Вашої діяльності та Вашу оперативну спроможність (здатність надавати гуманітарну допомогу т.і.)?'
            ]
          }
        }
      },
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aAA6TzbDivMTrcDgHeUyzX',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Other',
        'value': 'Other'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'UCBI III_Feedback Form_M&E',
    'asset_type': 'survey',
    'version_id': 'vMcxXqXbRCwt5PxXnvujGf',
    'has_deployment': true,
    'deployed_version_id': 'vMcxXqXbRCwt5PxXnvujGf',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aAA6TzbDivMTrcDgHeUyzX',
    'deployment__active': true,
    'deployment__submission_count': 4,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX/permission-assignments/p9HqgzQHAN63PoJFN6aFPF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX/permission-assignments/pDZUDsRbRa8ZF9TfQoGzRT/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX/permission-assignments/p5SvqhCRU4VCrbRaB9v22Z/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX/permission-assignments/p95ueX3pcom3yaQkMTmeay/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX/permission-assignments/pGrTPrFYtgGATeeFkMYRe4/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX/permission-assignments/p7Yh2BjDyw3V3iVkioEXGA/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX/permission-assignments/pQbYfwHj9mmrXwQqPR9GKb/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX/permission-assignments/pG8c5EWF4c47RfKEvc6fqo/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esMFkcgYs8Uf7xNKZiheh9m',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX/export-settings/esMFkcgYs8Uf7xNKZiheh9m/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX/export-settings/esMFkcgYs8Uf7xNKZiheh9m/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX/export-settings/esMFkcgYs8Uf7xNKZiheh9m/data.xlsx',
        'name': '',
        'date_modified': '2023-02-13 12:35:41.690384+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAA6TzbDivMTrcDgHeUyzX/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT/',
    'date_created': '2023-01-27T13:21:31.325366Z',
    'date_modified': '2023-01-30T14:30:03.810322Z',
    'date_deployed': '2023-01-30T08:18:10.931049Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Форма зворотного зв’язку щодо онлайн тренінгу з комунікацій та нетворкінгу від DRC Ukraine',
        '1. Дата анкетування:',
        '2. Стать:',
        '3. Вік:',
        '4. Як би Ви оцінили  якість проведення тренінгу з комунікацій та нетворкінгу'
      ],
      'columns': [
        'hint',
        'type',
        'label',
        'required',
        'select_from_list_name',
        'name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 16,
      'name_quality': {
        'ok': 14,
        'bad': 2,
        'good': 0,
        'total': 16,
        'firsts': {
          'ok': {
            'name': '_DRC_Ukraine',
            'index': 1,
            'label': [
              'Форма зворотного зв’язку щодо онлайн тренінгу з комунікацій та нетворкінгу від DRC Ukraine'
            ]
          },
          'bad': {
            'name': '_6_',
            'index': 9,
            'label': [
              '6. Як Ви вважаєте, отриманні знання підвищать ефективність Вашої діяльності та Вашу оперативну спроможність (здатність надавати гуманітарну допомогу т.і.)?'
            ]
          }
        }
      },
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aC7QB8NsKDf2cpYq9zf8XT',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Other',
        'value': 'Other'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'UCBI III_Feedback Form_Comms&Networking Training',
    'asset_type': 'survey',
    'version_id': 'v6S3qhuRePzuDqoBQtwwE8',
    'has_deployment': true,
    'deployed_version_id': 'v6S3qhuRePzuDqoBQtwwE8',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aC7QB8NsKDf2cpYq9zf8XT',
    'deployment__active': true,
    'deployment__submission_count': 11,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT/permission-assignments/pNnqCmEkAHi53dGqtNkFEK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT/permission-assignments/p6dLCVyPHkDXJYP4EJiVgJ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT/permission-assignments/pTEDjkW5oUPDRRU6siwUUc/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT/permission-assignments/pCA4FWjfcGbTyFnxeFUGzS/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT/permission-assignments/pH9Rk3Ei9qen4g2563huD5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT/permission-assignments/pLQpTYgxCWxotoYiErYSR4/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT/permission-assignments/pDeJPKngeT86BbMmp4TAcQ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT/permission-assignments/pKKoQqRwyA33c2HqZsADcm/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'es85F8Q3nSmBCzJ8whja2Ry',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT/export-settings/es85F8Q3nSmBCzJ8whja2Ry/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT/export-settings/es85F8Q3nSmBCzJ8whja2Ry/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT/export-settings/es85F8Q3nSmBCzJ8whja2Ry/data.xlsx',
        'name': '',
        'date_modified': '2023-02-13 12:35:13.265989+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aC7QB8NsKDf2cpYq9zf8XT/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/',
    'date_created': '2022-12-06T17:36:47.623317Z',
    'date_modified': '2023-01-23T10:14:20.784399Z',
    'date_deployed': '2023-01-23T10:11:56.991435Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
    'summary': {
      'geo': true,
      'labels': [
        'Interview',
        'This assessment is not used to evaluate the performance of DRC but is a tool to inform programming and help better planning of future distribution. The staff who conducted the NFI distribution cannot undertake this assessment for the same beneficiaries.',
        '**Read the note below to the interviewee:**',
        'The purpose of this interview is to obtain information about the distributions programs to understand whether they are being implemented properly and whether we are addressing the needs of vulnerable people. Your information and the data will be obtained from you are considered as confidential. The information will be used to prepare reports, but will not include any specific names. We would appreciate providing us with the most accurate answers that you can.',
        'Interviewer name'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'select_from_list_name',
        'hint',
        'relevant',
        'parameters',
        'calculation'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (ukr)'
      ],
      'row_count': 72,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 72,
        'total': 72,
        'firsts': {}
      },
      'default_translation': 'English (en)'
    },
    'owner__username': 'col_hom',
    'parent': null,
    'uid': 'aFE6wJoQhBgbaLbUbfMFZE',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Sanitation, Water & Hygiene',
        'value': 'Humanitarian - Sanitation, Water & Hygiene'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': true
    },
    'kind': 'asset',
    'name': 'PDM Baby Hygiene Kits',
    'asset_type': 'survey',
    'version_id': 'vRUX36HNncjUX6yMADxKEy',
    'has_deployment': true,
    'deployed_version_id': 'vRUX36HNncjUX6yMADxKEy',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/col_hom/forms/aFE6wJoQhBgbaLbUbfMFZE',
    'deployment__active': true,
    'deployment__submission_count': 375,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/permission-assignments/pQoNFNBVXAVzxuXdg9DSj7/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/permission-assignments/pCuq4WVRmtSSYaphhNcj7U/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/permission-assignments/p9jwxdkjy4Z5KvFqu9A6tS/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/permission-assignments/p7vcCPLuTLdwYci6kaDmTJ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/permission-assignments/pN4LArqAfncfwCsCTHkLCv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/permission-assignments/pNuFHn3K5kfFExHqiAzGDv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/permission-assignments/pRq3JAcMJ8jCdKM3L9edFY/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/permission-assignments/pQfscF9fpStQmVWfxTzruU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/permission-assignments/pRTc35S4wUoX95aPyR2uSp/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/permission-assignments/pKraBAPf4XASxEqZrJ2S2t/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/permission-assignments/pKJPAFyhh4fPsSMsqjbWm5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/permission-assignments/p7fvgfXoNgPju4EKiCd8n3/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/permission-assignments/pJfD5jV39R6AwRZ5fEKFsk/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFE6wJoQhBgbaLbUbfMFZE/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/',
    'date_created': '2022-12-06T17:51:29.809800Z',
    'date_modified': '2023-01-23T10:14:03.874546Z',
    'date_deployed': '2023-01-23T10:11:31.860963Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
    'summary': {
      'geo': true,
      'labels': [
        'Interview',
        'This assessment is not used to evaluate the performance of DRC but is a tool to inform programming and help better planning of future distribution. The staff who conducted the NFI distribution cannot undertake this assessment for the same beneficiaries.',
        '**Read the note below to the interviewee:**',
        'The purpose of this interview is to obtain information about the distributions programs to understand whether they are being implemented properly and whether we are addressing the needs of vulnerable people. Your information and the data will be obtained from you are considered as confidential. The information will be used to prepare reports, but will not include any specific names. We would appreciate providing us with the most accurate answers that you can.',
        'Interviewer name'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'select_from_list_name',
        'hint',
        'relevant',
        'parameters',
        'calculation'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (ukr)'
      ],
      'row_count': 74,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 74,
        'total': 74,
        'firsts': {}
      },
      'default_translation': 'English (en)'
    },
    'owner__username': 'col_hom',
    'parent': null,
    'uid': 'aS5NnLWEaxQJ9SnX4shpdH',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Protection',
        'value': 'Humanitarian - Protection'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': true
    },
    'kind': 'asset',
    'name': 'PDM Baby Winter Kits',
    'asset_type': 'survey',
    'version_id': 'vDxsah23ZyCGEW3wxyUS5X',
    'has_deployment': true,
    'deployed_version_id': 'vDxsah23ZyCGEW3wxyUS5X',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/col_hom/forms/aS5NnLWEaxQJ9SnX4shpdH',
    'deployment__active': true,
    'deployment__submission_count': 348,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/permission-assignments/p3dyPHEtKFfNgCEjBhz9fB/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/permission-assignments/pPz32XtPiNhVcP4GopJEQL/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/permission-assignments/pPXqSvWKAba9aMHMk5toEV/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/permission-assignments/pJ8MJwTumLnhkfDXDmAFem/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/permission-assignments/pGuPvfdr6pDKCCwXUdSknj/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/permission-assignments/pNymZhwMk95A6WyZ4wgWVj/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/permission-assignments/p6CA4en2DveyED7oyN3hcw/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/permission-assignments/pAgDFYCKAMBygh94Eg8UXB/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/permission-assignments/pTbrBWnjQd7rRDdUVRfeuo/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/permission-assignments/p6BCQV6JwmuBfVop9DpDBs/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/permission-assignments/p4CRbQ3KaXCpzeQha7D8Js/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/permission-assignments/pPXMQxpSRUTw2uCgdNeRct/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/permission-assignments/p3BjjFTSamusVjVwmbenkt/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esKwX3ccAraFmo6fGkQJoxd',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/export-settings/esKwX3ccAraFmo6fGkQJoxd/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/export-settings/esKwX3ccAraFmo6fGkQJoxd/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/export-settings/esKwX3ccAraFmo6fGkQJoxd/data.xlsx',
        'name': '',
        'date_modified': '2023-03-22 13:57:29.578138+00:00',
        'export_settings': {
          'lang': 'English (en)',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aS5NnLWEaxQJ9SnX4shpdH/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP/',
    'date_created': '2022-10-21T09:15:33.740343Z',
    'date_modified': '2023-01-19T14:58:28.150556Z',
    'date_deployed': '2023-01-19T14:58:21.786322Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        '1. Інформована згода',
        'Вітаємо від  Данської Ради у справах біженців! Ми хочемо задати вам кілька запитань, щоб отримати інформацію про грошову допомогу, яку Ви та ваша сім\'я отримали від нас. Ми хочемо почути ваші думки, щоб ми могли поліпшити свою роботу. Ваша участь є добровільною, і відповідь на запитання займе близько 20 хвилин. Якщо Ви погодитесь на інтерв\'ю, у Вас є можливість перестати відповідати або не відповідати на будь-яке питання, якщо Ви не бажаєте. Ця інформація допоможе нам зрозуміти, що було зроблено належним чином, що не спрацювало,  і що ми повинні робити по-іншому в процесі видачі грошової допомоги. Інформація, якою Ви ділитеся, буде захищена і буде передана лише невеликій групі людей у нашій організації. Будь ласка, знайте, що якщо Ви надасте негативні відгуки про нашу роботу, це не матиме жодних негативних наслідків для вашої участі в тій чи іншій проектній діяльності нашої організації. ',
        '1.1 Ви згодні продовжити?',
        '1.2 Чи отримували ви грошову допомогу від організації Данської Ради у справах біженців?',
        '1.3 Офіс, відповідальний за видачу грошової допомоги '
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'select_from_list_name',
        'relevant',
        'hint'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'Ukrainian',
        'English',
        'Russian'
      ],
      'row_count': 71,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 71,
        'total': 71,
        'firsts': {}
      },
      'default_translation': 'Ukrainian'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aBWSEbN9eXiQasGcdQPpEP',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Multiple Clusters',
        'value': 'Humanitarian - Multiple Clusters'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': true
    },
    'kind': 'asset',
    'name': 'BHA_PDM_MPCA',
    'asset_type': 'survey',
    'version_id': 'vSHp6xjtUAa6W2qf8qdgGD',
    'has_deployment': true,
    'deployed_version_id': 'vSHp6xjtUAa6W2qf8qdgGD',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aBWSEbN9eXiQasGcdQPpEP',
    'deployment__active': true,
    'deployment__submission_count': 389,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP/permission-assignments/pMhSatkxnKT7uSUeVLyceP/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP/permission-assignments/pJvKYF33BcTZZRes8rDhWd/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP/permission-assignments/pAgKbFyHNpszyS9mp8PPHi/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP/permission-assignments/pPfrQ3LcVUaawMWMoAEUuN/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP/permission-assignments/p3tCKRT5cbhMxMpcS7BYp2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP/permission-assignments/pHyCchU4cxJ4sYfQH8zBEP/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP/permission-assignments/pAxDB23E7GSgnetKsF56ua/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP/permission-assignments/pMKnUi8tQQ8e6j478kYwLp/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esD2D5orRYnRtujFhnhNAqW',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP/export-settings/esD2D5orRYnRtujFhnhNAqW/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP/export-settings/esD2D5orRYnRtujFhnhNAqW/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP/export-settings/esD2D5orRYnRtujFhnhNAqW/data.xlsx',
        'name': '',
        'date_modified': '2023-02-01 07:47:33.995163+00:00',
        'export_settings': {
          'lang': 'English',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aBWSEbN9eXiQasGcdQPpEP/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g/',
    'date_created': '2022-12-12T10:21:30.286085Z',
    'date_modified': '2022-12-12T10:31:55.924517Z',
    'date_deployed': '2022-12-12T10:31:49.896298Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Шановний респонденте,  Вас запрошено надати зворотний зв’язок щодо отримання індивідуальної менторської підтримки в рамках проекту ‘Підтримка організацій громадянського суспільства (ОГС) у наданні багатогалузевої екстреної допомоги ВПО та особам, що постраждали від конфлікту в Україні’. Проект реалізується ДРБ за фінансової підтримки Гуманітарного фонду для України.  ДРБ збирає відповідні дані з метою вимірювання та оцінки впливу наданої підтримки, а також покращення якості надання гуманітарної допомоги у майбутньому.  Заповнюючи цю форму зворотного зв’язку, Ви погоджуєтесь брати участь в опитуванні. Всі дані, зібрані під час цього опитування, є конфіденційними та будуть використані лише для внутрішніх цілей проекту. Імена респондентів та організацій не будуть цитуватися у жодних зовнішніх звітах, а лише будуть проаналізовані та використані для подальшого програмного звітування донору проекту.  Дякуємо за співпрацю!',
        '1. Дата анкетування:',
        '2. Стать:',
        '3. Вік:',
        '4. Як би Ви оцінили  якість проведення індивідуальних сесій:'
      ],
      'columns': [
        'type',
        'label',
        'required',
        'select_from_list_name',
        'name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 20,
      'name_quality': {
        'ok': 17,
        'bad': 3,
        'good': 0,
        'total': 20,
        'firsts': {
          'ok': {
            'name': 'note_hn9zz98',
            'index': 1,
            'label': [
              'Шановний респонденте,  Вас запрошено надати зворотний зв’язок щодо отримання індивідуальної менторської підтримки в рамках проекту ‘Підтримка організацій громадянського суспільства (ОГС) у наданні багатогалузевої екстреної допомоги ВПО та особам, що постраждали від конфлікту в Україні’. Проект реалізується ДРБ за фінансової підтримки Гуманітарного фонду для України.  ДРБ збирає відповідні дані з метою вимірювання та оцінки впливу наданої підтримки, а також покращення якості надання гуманітарної допомоги у майбутньому.  Заповнюючи цю форму зворотного зв’язку, Ви погоджуєтесь брати участь в опитуванні. Всі дані, зібрані під час цього опитування, є конфіденційними та будуть використані лише для внутрішніх цілей проекту. Імена респондентів та організацій не будуть цитуватися у жодних зовнішніх звітах, а лише будуть проаналізовані та використані для подальшого програмного звітування донору проекту.  Дякуємо за співпрацю!'
            ]
          },
          'bad': {
            'name': '_6_',
            'index': 9,
            'label': [
              '6. Чи спостерігаєте Ви зараз покращення Ваших професійних навичок, підвищення рівня продуктивності, після отримання допомоги'
            ]
          }
        }
      },
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'a43bjbTJ8eFJfS7RsC599g',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Other',
        'value': 'Other'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'UHF 3_Feedback Form_Mentorship',
    'asset_type': 'survey',
    'version_id': 'v8aJcR5EGBhmsox54wvXWk',
    'has_deployment': true,
    'deployed_version_id': 'v8aJcR5EGBhmsox54wvXWk',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/a43bjbTJ8eFJfS7RsC599g',
    'deployment__active': true,
    'deployment__submission_count': 11,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g/permission-assignments/pS3vN8ikGVt4c65xZyxa8D/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g/permission-assignments/pLPeSfUahKq568rHKfiFwC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g/permission-assignments/pK78yoxYBKHfHrTrdVcRre/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g/permission-assignments/pNndpTSvzegJMMoqJnWMg6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g/permission-assignments/pP4tkQJuBGBEfYyT5u4Kj5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g/permission-assignments/pT22BecfDbbwMx83orZ68g/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g/permission-assignments/p9NAxUtGoyWsexrYNw6n9z/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g/permission-assignments/pQAmtVji72sUsVfUob6Sem/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esKifQu89PsgxJVuZE23Xqg',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g/export-settings/esKifQu89PsgxJVuZE23Xqg/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g/export-settings/esKifQu89PsgxJVuZE23Xqg/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g/export-settings/esKifQu89PsgxJVuZE23Xqg/data.xlsx',
        'name': '',
        'date_modified': '2023-02-01 07:53:51.713510+00:00',
        'export_settings': {
          'lang': '_xml',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a43bjbTJ8eFJfS7RsC599g/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV/',
    'date_created': '2022-12-09T08:23:20.937286Z',
    'date_modified': '2022-12-09T09:50:22.840699Z',
    'date_deployed': '2022-12-09T09:48:30.976153Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Шановний респонденте,  Вас запрошено надати зворотний зв’язок щодо отримання індивідуальної психосоціальної підтримки в рамках проекту ‘Підтримка організацій громадянського суспільства (ОГС) у наданні багатогалузевої екстреної допомоги ВПО та особам, що постраждали від конфлікту в Україні’. Проект реалізується ДРБ за фінансової підтримки Гуманітарного фонду для України.  ДРБ збирає відповідні дані з метою вимірювання та оцінки впливу наданої підтримки, а також покращення якості надання гуманітарної допомоги у майбутньому.  Заповнюючи цю форму зворотного зв’язку, Ви погоджуєтесь брати участь в опитуванні. Всі дані, зібрані під час цього опитування, є конфіденційними та будуть використані лише для внутрішніх цілей проекту. Імена респондентів та організацій не будуть цитуватися у жодних зовнішніх звітах, а лише будуть проаналізовані та використані для подальшого програмного звітування донору проекту.  Дякуємо за співпрацю!',
        '1. Дата анкетування:',
        '2. Стать:',
        '3. Вік:',
        '4. Як би Ви оцінили  якість проведення індивідуальних сесій:'
      ],
      'columns': [
        'type',
        'label',
        'required',
        'select_from_list_name',
        'name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 20,
      'name_quality': {
        'ok': 17,
        'bad': 3,
        'good': 0,
        'total': 20,
        'firsts': {
          'ok': {
            'name': 'note_hn9zz98',
            'index': 1,
            'label': [
              'Шановний респонденте,  Вас запрошено надати зворотний зв’язок щодо отримання індивідуальної психосоціальної підтримки в рамках проекту ‘Підтримка організацій громадянського суспільства (ОГС) у наданні багатогалузевої екстреної допомоги ВПО та особам, що постраждали від конфлікту в Україні’. Проект реалізується ДРБ за фінансової підтримки Гуманітарного фонду для України.  ДРБ збирає відповідні дані з метою вимірювання та оцінки впливу наданої підтримки, а також покращення якості надання гуманітарної допомоги у майбутньому.  Заповнюючи цю форму зворотного зв’язку, Ви погоджуєтесь брати участь в опитуванні. Всі дані, зібрані під час цього опитування, є конфіденційними та будуть використані лише для внутрішніх цілей проекту. Імена респондентів та організацій не будуть цитуватися у жодних зовнішніх звітах, а лише будуть проаналізовані та використані для подальшого програмного звітування донору проекту.  Дякуємо за співпрацю!'
            ]
          },
          'bad': {
            'name': '_6_',
            'index': 9,
            'label': [
              '6. Чи спостерігаєте Ви зараз покращення Вашого психоемоційного стану, зниження рівня стресу, після отримання допомоги:'
            ]
          }
        }
      },
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'ahD3FfayFdrYh5Coq62fSV',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Other',
        'value': 'Other'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': false,
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'UHF 3_Feedback Form_PSS',
    'asset_type': 'survey',
    'version_id': 'vSoxHqhzRLjxK7XguS4BGt',
    'has_deployment': true,
    'deployed_version_id': 'vSoxHqhzRLjxK7XguS4BGt',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/ahD3FfayFdrYh5Coq62fSV',
    'deployment__active': true,
    'deployment__submission_count': 10,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV/permission-assignments/pHsr28b84WKe7kUyckTdvU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV/permission-assignments/prHcXMNiKjTPEjpveM8GaY/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV/permission-assignments/p5tjVAudXwtkSZFe2Nu8SX/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV/permission-assignments/pKuJ6hnkWRg3iCYx2opPMN/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV/permission-assignments/p9HAKFo82Nyt4vHiH6t5gn/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV/permission-assignments/pCENQ2m8yLg3aEXPTRXX6v/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV/permission-assignments/pTJUdJbbr4t8qeNhApALQv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV/permission-assignments/pG9uVZHqZiAR7xQDZQQoBw/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esMU4cwXdxVb7MPght7pAsb',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV/export-settings/esMU4cwXdxVb7MPght7pAsb/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV/export-settings/esMU4cwXdxVb7MPght7pAsb/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV/export-settings/esMU4cwXdxVb7MPght7pAsb/data.xlsx',
        'name': '',
        'date_modified': '2023-02-01 07:55:58.862635+00:00',
        'export_settings': {
          'lang': '_xml',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/ahD3FfayFdrYh5Coq62fSV/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/',
    'date_created': '2022-11-04T09:49:11.084822Z',
    'date_modified': '2022-12-09T09:17:39.632982Z',
    'date_deployed': '2022-12-09T09:15:02.002093Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Шановні респонденти! Перш за все, висловлюємо Вам вдячність за участь у заходах у рамках проекту «Розбудова соціальної згуртованості та миру в Україні», що реалізуються Данською Радою у справах біженців в Україні  (ДРБ).  Просимо Вас допомогти у визначенні ефективності проведеного заходу, відповівши на декілька питань. Опитування проводиться виключно для аналізу роботи ДРБ та з метою покращення якості наступних заходів. Ми зобов’язуємося зберегти конфіденційність отриманої інформації. Дякуємо Вам, що погодилися відповісти на наші запитання, Ваша думка дуже важлива для нас!',
        '1. Посада ',
        '2. Стать',
        '3. Вік ',
        '4. Місто'
      ],
      'columns': [
        'type',
        'label',
        'required',
        'hint',
        'select_from_list_name',
        'name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 26,
      'name_quality': {
        'ok': 23,
        'bad': 3,
        'good': 0,
        'total': 26,
        'firsts': {
          'ok': {
            'name': 'note_mi0fb49',
            'index': 1,
            'label': [
              'Шановні респонденти! Перш за все, висловлюємо Вам вдячність за участь у заходах у рамках проекту «Розбудова соціальної згуртованості та миру в Україні», що реалізуються Данською Радою у справах біженців в Україні  (ДРБ).  Просимо Вас допомогти у визначенні ефективності проведеного заходу, відповівши на декілька питань. Опитування проводиться виключно для аналізу роботи ДРБ та з метою покращення якості наступних заходів. Ми зобов’язуємося зберегти конфіденційність отриманої інформації. Дякуємо Вам, що погодилися відповісти на наші запитання, Ваша думка дуже важлива для нас!'
            ]
          },
          'bad': {
            'name': '_6_',
            'index': 7,
            'label': [
              '6. Які з наведених активностей мобільних команд, на Вашу думку, виявились найбільш ефективними та затребуваними? (множинний вибір)'
            ]
          }
        }
      },
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'a6tS5Ss3vzXJphFh8ggQcS',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Other',
        'value': 'Other'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '\n',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': false,
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'Оцінка ефективності формату "мобільні команди"',
    'asset_type': 'survey',
    'version_id': 'vPYJksfSrMPxbSRU6cGPre',
    'has_deployment': true,
    'deployed_version_id': 'vPYJksfSrMPxbSRU6cGPre',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/a6tS5Ss3vzXJphFh8ggQcS',
    'deployment__active': true,
    'deployment__submission_count': 12,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/permission-assignments/pKa3K3GpVs9wVmUcbEbEqz/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/AnonymousUser/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/permission-assignments/pM4x4VHziX3GhejRuzFLkT/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/permission-assignments/pQzXQSVSUuqxw7kRBakVsQ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/permission-assignments/p6tJ3P7vfpBQqDerWY8xt2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/permission-assignments/pFPXtFK6sAKmrWHd4Sf7Zt/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/permission-assignments/pDXHPEQPQfULNbVwt445Wi/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/permission-assignments/p6kuwaw5eijRf6WgaWZLo4/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/permission-assignments/p799c5Q9DEj9Ks678sdXj2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/permission-assignments/phRm4Uk5aRBvGEFncGWaC8/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'es7PWNQb9ePGVumfkaBZmk2',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/export-settings/es7PWNQb9ePGVumfkaBZmk2/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/export-settings/es7PWNQb9ePGVumfkaBZmk2/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/export-settings/es7PWNQb9ePGVumfkaBZmk2/data.xlsx',
        'name': '',
        'date_modified': '2023-02-01 07:58:54.582755+00:00',
        'export_settings': {
          'lang': '_xml',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a6tS5Ss3vzXJphFh8ggQcS/data/',
    'subscribers_count': 0,
    'status': 'public',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7o5HCQKStN3M8rjFFWTgd/',
    'date_created': '2022-12-07T10:49:52.109050Z',
    'date_modified': '2022-12-07T15:10:38.134079Z',
    'date_deployed': '2022-12-07T15:10:20.851859Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': true,
      'labels': [
        'DRC Protection Ukraine — Last updated: 26.09.2022',
        'A) Interviewer to insert their email address',
        'B) Interviewer to insert their DRC office',
        '1. We are from Danish Refugee Council. DRC is a non-government organization that works in Ukraine. My name is XXXXXX. I will be facilitating the household interview. It will take approximately 30 minutes, with the purpose of collecting new information about the protection situation in your location. The information will be used to inform DRC’s programming, individual and community responses, and advocacy to respond to various needs. Your name will not be shared with anyone. You do not have to answer any question you do not wish to answer, and we can stop the interview at any point when you indicate you would like to stop. Do you consent to proceed with this interview?',
        '2. Have you filled out this form before?'
      ],
      'columns': [
        'name',
        'type',
        'required',
        'media::image',
        'label',
        'appearance',
        'select_from_list_name',
        'hint',
        'relevant',
        'constraint',
        'constraint_message',
        'calculation'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (eng)',
        'Ukraine (ukr)'
      ],
      'row_count': 235,
      'name_quality': {
        'ok': 0,
        'bad': 0,
        'good': 235,
        'total': 235,
        'firsts': {}
      },
      'naming_conflicts': [
        '__version__'
      ],
      'default_translation': 'English (eng)'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'a7o5HCQKStN3M8rjFFWTgd',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Protection',
        'value': 'Humanitarian - Protection'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ]
    },
    'kind': 'asset',
    'name': 'Protection Monitoring Tool: Household Interview_Final version',
    'asset_type': 'survey',
    'version_id': 'vHAYnJUDNYBZragNREibwi',
    'has_deployment': true,
    'deployed_version_id': 'vHAYnJUDNYBZragNREibwi',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/a7o5HCQKStN3M8rjFFWTgd',
    'deployment__active': true,
    'deployment__submission_count': 0,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7o5HCQKStN3M8rjFFWTgd/permission-assignments/pBfSPnEorvurGzxWUUem26/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7o5HCQKStN3M8rjFFWTgd/permission-assignments/pE93G7b3qUnZmAtsiZi9si/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7o5HCQKStN3M8rjFFWTgd/permission-assignments/pQWnQuFbY5JmDyZD2V5Ys9/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7o5HCQKStN3M8rjFFWTgd/permission-assignments/pKpcbj7QGjP4XAit4EfdhN/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7o5HCQKStN3M8rjFFWTgd/permission-assignments/pBnPmr7D4g9qqdzJEUxs9H/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7o5HCQKStN3M8rjFFWTgd/permission-assignments/pG72JaD7kN8ERqZCzefnGP/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7o5HCQKStN3M8rjFFWTgd/permission-assignments/pB4TX8Q55pN4mGxKrgSjAD/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7o5HCQKStN3M8rjFFWTgd/permission-assignments/p57Di4yMbFgmUUQWgQqcvX/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7o5HCQKStN3M8rjFFWTgd.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7o5HCQKStN3M8rjFFWTgd.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7o5HCQKStN3M8rjFFWTgd/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/',
    'date_created': '2022-10-05T13:30:48.155755Z',
    'date_modified': '2022-12-01T13:20:26.705100Z',
    'date_deployed': '2022-12-01T13:20:21.270742Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
    'summary': {
      'geo': true,
      'labels': [
        'Interview',
        'This assessment is not used to evaluate the performance of DRC but is a tool to inform programming and help better planning of future distribution. The staff who conducted the NFI distribution cannot undertake this assessment for the same beneficiaries.',
        '**Read the note below to the interviewee:**',
        'The purpose of this interview is to obtain information about the distributions programs to understand whether they are being implemented properly and whether we are addressing the needs of vulnerable people. Your information and the data will be obtained from you are considered as confidential. The information will be used to prepare reports, but will not include any specific names. We would appreciate providing us with the most accurate answers that you can.',
        'Interviewer name'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'select_from_list_name',
        'hint',
        'relevant',
        'parameters',
        'calculation'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (ukr)'
      ],
      'row_count': 73,
      'name_quality': {
        'ok': 44,
        'bad': 0,
        'good': 29,
        'total': 73,
        'firsts': {
          'ok': {
            'name': 'Analysis_group',
            'index': 8,
            'label': [
              'Analysis group',
              'Група для аналізу '
            ]
          }
        }
      },
      'default_translation': 'English (en)'
    },
    'owner__username': 'col_hom',
    'parent': null,
    'uid': 'aFFA5jMvhCnmksjPzJWENn',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Sanitation, Water & Hygiene',
        'value': 'Humanitarian - Sanitation, Water & Hygiene'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': true
    },
    'kind': 'asset',
    'name': 'PDM Family Hygiene Kits',
    'asset_type': 'survey',
    'version_id': 'vNFqwAy3qGBMNkaaAYLHwc',
    'has_deployment': true,
    'deployed_version_id': 'vNFqwAy3qGBMNkaaAYLHwc',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/col_hom/forms/aFFA5jMvhCnmksjPzJWENn',
    'deployment__active': true,
    'deployment__submission_count': 920,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/p46gWxv4Bf3BCh9BQTwDzh/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/AnonymousUser/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/pCuXUHjmiEV6zbEYxNuT6G/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/p7n5WBVxAXz8jsP6FC2kWS/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/pEmspXzYnhe2CppFxfeRLx/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/pDNUd3bR7dmkcDybWJVoJ6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/p6kQHvdSmACD9X3sMTxwUV/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/pNKVQ8m34uisxdE3yR4j5m/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/pJWzVHFAYpRAbEzNV9r9Ps/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/p7RttCsRUKspLdJYkz6gGP/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/pLy34U97rGbhrHD2Uugz5m/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/pKSkmyyn4dLgtZhhgno3ww/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/pTXCdcQ7UwMRrtr8pWmgnx/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/p7WZr2EwqGEJ4VQqTBiiWP/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/permission-assignments/pQMZedzSLzSv3msAWjjJSG/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'es488NL4CXzE8HMRz7hfL7N',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/export-settings/es488NL4CXzE8HMRz7hfL7N/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/export-settings/es488NL4CXzE8HMRz7hfL7N/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/export-settings/es488NL4CXzE8HMRz7hfL7N/data.xlsx',
        'name': '',
        'date_modified': '2023-01-07 17:59:56.191345+00:00',
        'export_settings': {
          'lang': 'English (en)',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFFA5jMvhCnmksjPzJWENn/data/',
    'subscribers_count': 0,
    'status': 'public',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/',
    'date_created': '2022-10-16T08:52:27.896805Z',
    'date_modified': '2022-12-01T13:20:05.250071Z',
    'date_deployed': '2022-12-01T13:19:59.748294Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
    'summary': {
      'geo': true,
      'labels': [
        'Interview',
        'This assessment is not used to evaluate the performance of DRC but is a tool to inform programming and help better planning of future distribution. The staff who conducted the NFI distribution cannot undertake this assessment for the same beneficiaries.',
        '**Read the note below to the interviewee:**',
        'The purpose of this interview is to obtain information about the distributions programs to understand whether they are being implemented properly and whether we are addressing the needs of vulnerable people. Your information and the data will be obtained from you are considered as confidential. The information will be used to prepare reports, but will not include any specific names. We would appreciate providing us with the most accurate answers that you can.',
        'Interviewer name'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'select_from_list_name',
        'hint',
        'relevant',
        'parameters',
        'calculation'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (ukr)'
      ],
      'row_count': 73,
      'name_quality': {
        'ok': 9,
        'bad': 0,
        'good': 64,
        'total': 73,
        'firsts': {
          'ok': {
            'name': 'Donor',
            'index': 10,
            'label': [
              'Donor',
              'Donor'
            ]
          }
        }
      },
      'naming_conflicts': [
        '__version__'
      ],
      'default_translation': 'English (en)'
    },
    'owner__username': 'col_hom',
    'parent': null,
    'uid': 'a78uCzAZyFd7yRGhwLsz9M',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Emergency Shelter',
        'value': 'Humanitarian - Emergency Shelter'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': true
    },
    'kind': 'asset',
    'name': 'PDM High thermal blankets',
    'asset_type': 'survey',
    'version_id': 'vSdwbJiuwhF5DE4jfiDY5j',
    'has_deployment': true,
    'deployed_version_id': 'vSdwbJiuwhF5DE4jfiDY5j',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/col_hom/forms/a78uCzAZyFd7yRGhwLsz9M',
    'deployment__active': true,
    'deployment__submission_count': 1077,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/pEXYgdMKq5hz87BFEHNH83/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/AnonymousUser/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/pTZ32jghfiEmS4JqsdCgk4/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/pRtwaTuvP5uuDvr7Yev5Fw/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/pHGYyGpNQsVzzUMvtyVczV/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/pFn7hGGLbQMjNGFSX9XvST/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/p8sGnnLv9K3bPJ3JtbYNZJ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/pJkE8ijzqHtPM4xe3HmnsT/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/pE5wfFiM9SyLD4TwffdaSW/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/p6g98Ww5pSckk9NnMQW3kC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/pKddEHTNQZwYXdnEQGQwgF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/pEBKQC9AatoKshSTa8TBwW/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/pKBjxM56b7xAescSXTpyL8/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/pRPohRb8HhdBoiNiSfAJ6F/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/permission-assignments/p586bXynetPJgNJosMowUD/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esJi9QGyPJPMW7f3vKeePWQ',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/export-settings/esJi9QGyPJPMW7f3vKeePWQ/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/export-settings/esJi9QGyPJPMW7f3vKeePWQ/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/export-settings/esJi9QGyPJPMW7f3vKeePWQ/data.xlsx',
        'name': '',
        'date_modified': '2023-01-07 17:59:49.428847+00:00',
        'export_settings': {
          'lang': 'English (en)',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a78uCzAZyFd7yRGhwLsz9M/data/',
    'subscribers_count': 0,
    'status': 'public',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/',
    'date_created': '2021-10-11T09:17:55.218936Z',
    'date_modified': '2022-11-25T10:06:15.080586Z',
    'date_deployed': '2022-11-25T10:06:10.362068Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
    'summary': {
      'geo': false,
      'labels': [
        'Загальна інформація',
        'Номер проекту',
        'Співробітник DRC',
        'Співробітник DRC MEAL',
        'Дата'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'select_from_list_name',
        'calculation'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'UKR',
        'EN'
      ],
      'row_count': 28,
      'naming_conflicts': [
        '__version__',
        '__version__'
      ],
      'default_translation': 'UKR'
    },
    'owner__username': 'vira_kholodniak',
    'parent': null,
    'uid': 'aHQZs9rhvQM3sogstS3U2W',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Coordination / Information Management',
        'value': 'Humanitarian - Coordination / Information Management'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'data-table': {
        'sort-by': {
          'value': 'DESCENDING',
          'fieldId': 'general/date_of_submission'
        }
      },
      'description': 'The aim is to evaluate a percentage of EORE recipients who accurately identify the key messages and actions to be taken if encountering a mine or item of ERW',
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': true
    },
    'kind': 'asset',
    'name': 'ECHO 000250 Post Test',
    'asset_type': 'survey',
    'version_id': 'vFx8WFGnaWJoDupiHWhT2B',
    'has_deployment': true,
    'deployed_version_id': 'vFx8WFGnaWJoDupiHWhT2B',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/vira_kholodniak/forms/aHQZs9rhvQM3sogstS3U2W',
    'deployment__active': true,
    'deployment__submission_count': 261,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/permission-assignments/ptt7teD6xKATHBNQcxYH3A/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/permission-assignments/pDw6nVhdaBTQx6YnDSz2AF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/permission-assignments/pm5jNMyPAUkJKr8LjyeZPo/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/permission-assignments/pBReiKdcK5ESU4hMQJs6sP/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/permission-assignments/p9pxdGAxy3eFUtQsoeKeh7/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/permission-assignments/p9SJZPD6DUc47zL3s9JeQc/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/permission-assignments/pGHxTFAxwBox7BvSygcTGD/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/permission-assignments/pDPYFEyh65QgNZBAXbiHaz/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/permission-assignments/pHgEG4CyDGRDreJMpsup7E/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/permission-assignments/pAAMvqUYRZ2QmBuhahd9fo/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/permission-assignments/pGqGAUiAoZy4eTufQnmsdh/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'eszRNsfnqAZidygPLGA8gSY',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/export-settings/eszRNsfnqAZidygPLGA8gSY/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/export-settings/eszRNsfnqAZidygPLGA8gSY/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/export-settings/eszRNsfnqAZidygPLGA8gSY/data.xlsx',
        'name': '',
        'date_modified': '2022-01-20 12:52:04.321212+00:00',
        'export_settings': {
          'lang': '_xml',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHQZs9rhvQM3sogstS3U2W/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx/',
    'date_created': '2022-11-15T14:00:30.626070Z',
    'date_modified': '2022-11-25T09:57:37.898966Z',
    'date_deployed': '2022-11-25T09:57:19.013557Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Данська рада у справах біженців проводить опитування бенефіціарів, які отримали гранти для підвищення конкурентоспроможності на ринку праці в рамках Програми економічного розвитку Східної України з 2017 року. Опитування зосереджене на тому, щоб дізнатися, які наслідки для бенефіціарів мала  ескалація конфлікту 24 лютого 2022 року ',
        'Опитування проведено (оберіть ім\'я): ',
        'Дата опитування',
        'Бенефіціар належить до програми (обрати зі списка Excel):',
        '1. Прізвище, ім\'я, по-батькові '
      ],
      'columns': [
        'hint',
        'type',
        'label',
        'required',
        'name',
        'select_from_list_name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 30,
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aTFfXLQ7T6ZAvFpui9pQRx',
    'tag_string': '',
    'settings': {
      'sector': {},
      'country': [],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [],
      'share-metadata': false,
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'LAP Impact Assessment (individuals - VET)',
    'asset_type': 'survey',
    'version_id': 'v3LzQavNKgxNXaxxRYMxYf',
    'has_deployment': true,
    'deployed_version_id': 'v3LzQavNKgxNXaxxRYMxYf',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aTFfXLQ7T6ZAvFpui9pQRx',
    'deployment__active': true,
    'deployment__submission_count': 389,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx/permission-assignments/pRAEMPBJ3ptZSkKZjDcRhG/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx/permission-assignments/pCa3XxRcp5zL5a4Jv4sQYp/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx/permission-assignments/pMdSHSEHC7MSjsNfDdgY3B/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx/permission-assignments/pPuSCF7y7vy4A4Qxobo9pS/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx/permission-assignments/pPNVLi6wFPEkRp5DK7g5Jc/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx/permission-assignments/pMSFjagMNT4W4ztux92r9F/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx/permission-assignments/pBawotVrecF6ZWtERi6qUi/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx/permission-assignments/pEaNXD5A29m9Xar2KUgyqY/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esGEurk5ezaQdusiDXm3o3z',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx/export-settings/esGEurk5ezaQdusiDXm3o3z/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx/export-settings/esGEurk5ezaQdusiDXm3o3z/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx/export-settings/esGEurk5ezaQdusiDXm3o3z/data.xlsx',
        'name': '',
        'date_modified': '2023-02-01 08:09:21.398638+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aTFfXLQ7T6ZAvFpui9pQRx/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw/',
    'date_created': '2022-11-14T12:48:37.947922Z',
    'date_modified': '2022-11-16T10:24:05.658467Z',
    'date_deployed': '2022-11-16T10:22:19.166284Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Вітаємо! Данська рада у справах біженців проводить опитування бізнесу, який було підтримано в рамках Програми економічного розвитку Східної України з 2017 року. Опитування зосереджене на тому, щоб дізнатися, які наслідки для бізнесу мала ескалація конфлікту 24 лютого 2022 року, а також поточний стан бізнесу, його майбутні плани та потреби.',
        'Опитування проведено (оберіть ім\'я): ',
        'Дата опитування ',
        'Бенефіціар належить до програми (обрати зі списка Excel): ',
        '1. Прізвище, ім’я та по-батькові (для самозайнятих та ФОП) / Назва організації згідно установчого документу (для юридичної особи)'
      ],
      'columns': [
        'hint',
        'type',
        'label',
        'required',
        'select_from_list_name',
        'name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 47,
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aLciCSgj8ZcqmKT5FPMUdw',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Economic/Social Development',
        'value': 'Economic/Social Development'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': false,
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'LAP impact assessment form (business)',
    'asset_type': 'survey',
    'version_id': 'vRtCWKc3mTitMiYaAt7NxS',
    'has_deployment': true,
    'deployed_version_id': 'vRtCWKc3mTitMiYaAt7NxS',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aLciCSgj8ZcqmKT5FPMUdw',
    'deployment__active': true,
    'deployment__submission_count': 415,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw/permission-assignments/p7hde2Jd9qabWy4sRKVCSg/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw/permission-assignments/pKdAN8nVjtPQypVSZKimzB/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw/permission-assignments/p3g4pNfMxfDn7PkXqojzpW/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw/permission-assignments/pQqxfYUwjBi7TtEB53SSxd/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw/permission-assignments/pF83wrVFJAcEsR4EoRS4gr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw/permission-assignments/pGCaBnBgPfnyn3Tgo28Vfy/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw/permission-assignments/pLEtAN87htJgRfLvXbQA39/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw/permission-assignments/p6phEYafawuptnUjLAY74p/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esG6bTYr5EFDij34Z6GRKyo',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw/export-settings/esG6bTYr5EFDij34Z6GRKyo/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw/export-settings/esG6bTYr5EFDij34Z6GRKyo/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw/export-settings/esG6bTYr5EFDij34Z6GRKyo/data.xlsx',
        'name': '',
        'date_modified': '2022-11-28 10:34:56.446687+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aLciCSgj8ZcqmKT5FPMUdw/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFQHXu4gtfsa74Y4WrKZKd/',
    'date_created': '2022-10-21T09:14:40.500158Z',
    'date_modified': '2022-10-21T09:14:42.502524Z',
    'date_deployed': null,
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        '1. Інформована згода',
        'Привіт від  Save the Children! Ми хочемо задати вам кілька запитань, щоб отримати інформацію про грошову допомогу, яку ви та ваша сім\'я отримали від нас. Ми хочемо почути ваші думки, щоб ми могли поліпшити те, як ми робимо свою роботу. Ваша участь є добровільною, і відповідь на запитання займе близько 10 хвилин. Якщо ви згодні взяти участь, у вас є можливість перестати відповідати або не відповідати на будь-яке питання, яке ви не хочете. Ця інформація допоможе нам зрозуміти, що було зроблено належним чином в процесі, що не спрацювало, що добре і що ми повинні робити по-іншому. Інформація, якою ви ділитеся, буде захищена і буде передана лише невеликій групі людей у Save the Children. Будь ласка, знайте, що якщо ви надасте негативні відгуки про нашу роботу, це не матиме жодних негативних наслідків для вашої участі в тій чи іншій діяльності Save the Children.',
        '1.1 Ви раді продовжити?',
        '1.2 Чи отримували ви грошову допомогу від організації (назвіть, будь ласка, назву вашої організації)?',
        '1.3 Чи відповідала отримана сума готівки сумі, яку вам повідомили?'
      ],
      'columns': [
        'type',
        'name',
        'required',
        'label',
        'select_from_list_name',
        'relevant',
        'hint'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'Ukrainian',
        'English',
        'Russian'
      ],
      'row_count': 71,
      'default_translation': 'Ukrainian'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aFQHXu4gtfsa74Y4WrKZKd',
    'tag_string': '',
    'settings': {
      'sector': {},
      'country': [],
      'description': '',
      'organization': '',
      'country_codes': []
    },
    'kind': 'asset',
    'name': 'PDM SURVEY/ОПИТУВАННЯ PDM/ОПРОС ДПМ',
    'asset_type': 'survey',
    'version_id': 'vKg8ykdiFG6QJyzJbtnwFF',
    'has_deployment': false,
    'deployed_version_id': null,
    'deployment__identifier': null,
    'deployment__active': false,
    'deployment__submission_count': 0,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFQHXu4gtfsa74Y4WrKZKd/permission-assignments/pC3V3Cxmq6TRsacjKjELbK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFQHXu4gtfsa74Y4WrKZKd/permission-assignments/p6HHxrsvxB4KzMMmyFbczr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFQHXu4gtfsa74Y4WrKZKd/permission-assignments/p6LYFRZUCGzfWHm7BirCUr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFQHXu4gtfsa74Y4WrKZKd/permission-assignments/p4u99wPpeVfVrLT3cbB69q/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFQHXu4gtfsa74Y4WrKZKd/permission-assignments/pCFzRBH7DEWW8MH7s4rNA5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFQHXu4gtfsa74Y4WrKZKd/permission-assignments/pChLNUHjvR26omYs8Jab7C/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFQHXu4gtfsa74Y4WrKZKd/permission-assignments/p4cz4jCm654ivB7DwL9uNR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFQHXu4gtfsa74Y4WrKZKd/permission-assignments/p5veKghVof7LsXjjjsL4Tr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFQHXu4gtfsa74Y4WrKZKd.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFQHXu4gtfsa74Y4WrKZKd.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aFQHXu4gtfsa74Y4WrKZKd/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg/',
    'date_created': '2022-10-18T10:07:21.089931Z',
    'date_modified': '2022-10-21T07:36:08.828404Z',
    'date_deployed': '2022-10-19T14:39:43.312142Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Шановні респонденти! Перш за все, висловлюємо Вам вдячність за участь у заходах у рамках проекту «Розбудова соціальної згуртованості та миру в Україні», що реалізуються Данською Радою у справах біженців в Україні  (ДРБ) за підтримки Агенції США з міжнародного розвитку.  Просимо Вас допомогти у визначенні ефективності проведеного заходу, відповівши на декілька питань. Опитування проводиться виключно для аналізу роботи ДРБ та з метою покращення якості наступних заходів. Ми зобов’язуємося зберегти конфіденційність отриманої інформації. Дякуємо Вам, що погодилися відповісти на наші запитання, Ваша думка дуже важлива для нас!',
        '1. Ім’я та Прізвище (або анонімно): ',
        '2. Стать:',
        '3. Вік:',
        '4. Дата заповнення:'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'hint',
        'select_from_list_name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 19,
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aHmgJswtRvwu7ZZEqHmLNg',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Other',
        'value': 'Other'
      },
      'country': [],
      'description': 'CB UCBI III activity 1',
      'collects_pii': null,
      'organization': '',
      'country_codes': [],
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'UCBI III Activity 1 _updated',
    'asset_type': 'survey',
    'version_id': 'vKHAr5ifsppd4zKtRuBH83',
    'has_deployment': true,
    'deployed_version_id': 'vKHAr5ifsppd4zKtRuBH83',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aHmgJswtRvwu7ZZEqHmLNg',
    'deployment__active': true,
    'deployment__submission_count': 1,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg/permission-assignments/pSpb7QzxwxbxXihFBfZDUn/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg/permission-assignments/pMkHWSwYiFNMs4ipvva7ns/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg/permission-assignments/pPgEW2QaQrghNd7MaXs84f/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg/permission-assignments/pRn3GFEu6FRjRrJBNkUyPR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg/permission-assignments/pSYTEMPgfgsqZApXiwuzcg/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg/permission-assignments/p5cCLCyfcnqty75KXDdmBK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg/permission-assignments/pKxjkwf4QeGMbJiPESuZXt/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg/permission-assignments/pQ5iphbKze4F6PGoAXUwDD/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esSxbf7P9f5i2nKBq69kxon',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg/export-settings/esSxbf7P9f5i2nKBq69kxon/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg/export-settings/esSxbf7P9f5i2nKBq69kxon/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg/export-settings/esSxbf7P9f5i2nKBq69kxon/data.xlsx',
        'name': '',
        'date_modified': '2022-11-29 15:12:09.816359+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aHmgJswtRvwu7ZZEqHmLNg/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/',
    'date_created': '2022-08-06T07:45:23.660256Z',
    'date_modified': '2022-09-16T14:02:16.019664Z',
    'date_deployed': null,
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
    'summary': {
      'geo': true,
      'labels': [
        'Interview',
        'This assessment is not used to evaluate the performance of DRC but is a tool to inform programming and help better planning of future distribution. The staff who conducted the NFI distribution cannot undertake this assessment for the same beneficiaries.',
        '**Read the note below to the interviewee:**',
        'The purpose of this interview is to obtain information about the distributions programs to understand whether they are being implemented properly and whether we are addressing the needs of vulnerable people. Your information and the data will be obtained from you are considered as confidential. The information will be used to prepare reports, but will not include any specific names. We would appreciate providing us with the most accurate answers that you can.',
        'Interviewer name'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'select_from_list_name',
        'relevant',
        'hint',
        '_isRepeat',
        'kobo--matrix_list',
        'constraint',
        'parameters'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English (en)',
        'Ukrainian (ukr)'
      ],
      'row_count': 90,
      'default_translation': 'English (en)'
    },
    'owner__username': 'col_hom',
    'parent': null,
    'uid': 'aJ6KjdmfRHKZQciNcKYUTe',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Sanitation, Water & Hygiene',
        'value': 'Humanitarian - Sanitation, Water & Hygiene'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'collects_pii': null,
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': true,
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'PDM Institutional Hygiene Kits',
    'asset_type': 'survey',
    'version_id': 'vNiygZGvaT5JE2JMdqN4uR',
    'has_deployment': true,
    'deployed_version_id': 'vSgMkKZtduAbeKeXVa3oCY',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/col_hom/forms/aJ6KjdmfRHKZQciNcKYUTe',
    'deployment__active': true,
    'deployment__submission_count': 27,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/pAazc6xghfFUkCodswPuzU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/AnonymousUser/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/pHLhAPY35k7zNR7o6c8zBp/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/pFHkxpHnEhVrT572sFaRzi/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/pLZVwyXLX8KtuWDpu2ourq/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/pLG5t87UyYw2eoF7TRzU2R/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/p5kdJ8psrcZ6tmYNkpiCNx/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/pJXAdSvPVgXAsMenUW64hL/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/pQrYEQixDTqofLUSjRMvdW/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/pKAkijKxYK5E6rnjSwaHVy/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/pLhtLRzbooi4DphJJcLdNK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/pNuK69tyVqgeVYAyGnpwVq/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/pAdTBPKnHjTTeMDvL2V3jQ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/pMWEjNfHAziFSS4invv2qS/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/pPqX73aQ46Jdci8j3YXYjQ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/permission-assignments/p9WHPARtuB9scEFzvpF6WK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esDAPq3qMWXWKk64oe6cgX8',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/export-settings/esDAPq3qMWXWKk64oe6cgX8/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/export-settings/esDAPq3qMWXWKk64oe6cgX8/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/export-settings/esDAPq3qMWXWKk64oe6cgX8/data.xlsx',
        'name': '',
        'date_modified': '2022-11-01 15:58:32.133388+00:00',
        'export_settings': {
          'lang': 'English (en)',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJ6KjdmfRHKZQciNcKYUTe/data/',
    'subscribers_count': 0,
    'status': 'public',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/',
    'date_created': '2022-07-05T13:29:40.552301Z',
    'date_modified': '2022-09-01T08:03:23.850251Z',
    'date_deployed': '2022-08-15T07:01:16.152604Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
    'summary': {
      'geo': true,
      'labels': [
        'Надання непродовольчої допомоги та підтримки найбільш незахищених домогосподарств',
        'Унікальний персональний код ${ID}',
        'Місцезнаходження',
        'Офіс, який відповідає за розподіл',
        'Запишіть своє поточне місцезнаходження'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'calculation',
        'select_from_list_name',
        'relevant',
        'hint',
        'appearance',
        'constraint',
        'constraint_message',
        'parameters'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'Ukrainian (ukr)',
        'English (en)'
      ],
      'row_count': 185,
      'naming_conflicts': [
        'name',
        'group_nt3jd14_total_1',
        'group_nt3jd14_total_1',
        'group_nt3jd14_total_1',
        'group_nt3jd14_total_2',
        'group_nt3jd14_total_2',
        'group_nt3jd14_total_2',
        'group_kits_total_1_001',
        'group_kits_total_1_note',
        'group_kits_total_1_kitstotal',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__'
      ],
      'default_translation': 'Ukrainian (ukr)'
    },
    'owner__username': 'col_hom',
    'parent': null,
    'uid': 'aonQiUjwaLXpg89sJ3b6Na',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Multiple Clusters',
        'value': 'Humanitarian - Multiple Clusters'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': true
    },
    'kind': 'asset',
    'name': 'NFI Database FV',
    'asset_type': 'survey',
    'version_id': 'v8ShUfGZRoD6PETGHmrU8Y',
    'has_deployment': true,
    'deployed_version_id': 'v8ShUfGZRoD6PETGHmrU8Y',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/col_hom/forms/aonQiUjwaLXpg89sJ3b6Na',
    'deployment__active': false,
    'deployment__submission_count': 1,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/permission-assignments/pmqEbXmjeAkCQFRVjjH2U2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/AnonymousUser/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/permission-assignments/pDVxZo9HgQBiKACbqrfU7C/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/permission-assignments/pDQxnM7ibe5My88qsK2knw/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/permission-assignments/p4JsttbieSasK8jZcVN5WZ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/permission-assignments/p96d7GeWCPinkdTUEx7D4q/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/permission-assignments/p9CCABC2wMdZZAQArSy9PR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/permission-assignments/pFL7tDJ7nen6FaMbj7GFVu/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/permission-assignments/pQc6DXNTLUYanmhtFCyMiD/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/permission-assignments/pGgPXKLhCPB6iWXAooB5yC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/col_hom/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/permission-assignments/pLvT5XcVSWaCBHrQndPyXP/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/permission-assignments/pBadpk2BeCyka8PmU4C5T8/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/permission-assignments/pk5TZNjLogRDdTWCSHjWPw/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esGjCiBVvpjwRQkwAnG9Whf',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/export-settings/esGjCiBVvpjwRQkwAnG9Whf/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/export-settings/esGjCiBVvpjwRQkwAnG9Whf/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/export-settings/esGjCiBVvpjwRQkwAnG9Whf/data.xlsx',
        'name': '',
        'date_modified': '2022-07-18 07:25:47.540253+00:00',
        'export_settings': {
          'lang': 'English (en)',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aonQiUjwaLXpg89sJ3b6Na/data/',
    'subscribers_count': 0,
    'status': 'public',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3XKjo3nx3cdyw6Qx7MJUd/',
    'date_created': '2022-08-02T09:36:52.532066Z',
    'date_modified': '2022-08-02T09:39:01.303187Z',
    'date_deployed': '2022-08-02T09:37:56.290172Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': true,
      'labels': [
        'Damag Assessment Survey',
        'Initial data for the survey',
        '1. Oblast',
        '1.1. Raion',
        '1.2. Hromada'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'media::image',
        'hint',
        'required',
        'appearance',
        'required_message',
        'select_from_list_name',
        'choice_filter',
        'relevant',
        'body::accuracyThreshold',
        'parameters'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'English',
        null,
        'Ukrainian'
      ],
      'row_count': 72,
      'default_translation': 'English'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'a3XKjo3nx3cdyw6Qx7MJUd',
    'tag_string': '',
    'settings': {
      'sector': {},
      'country': [],
      'description': '',
      'organization': '',
      'country_codes': []
    },
    'kind': 'asset',
    'name': 'Damage Assessment Survey, Shelter Unit, Ukraine, 2022',
    'asset_type': 'survey',
    'version_id': 'vFoWi6RhnTGzRoWnPcrNmG',
    'has_deployment': true,
    'deployed_version_id': 'vFoWi6RhnTGzRoWnPcrNmG',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/a3XKjo3nx3cdyw6Qx7MJUd',
    'deployment__active': true,
    'deployment__submission_count': 0,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3XKjo3nx3cdyw6Qx7MJUd/permission-assignments/pGBqb946JvCQGf3GmGHRSo/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3XKjo3nx3cdyw6Qx7MJUd/permission-assignments/p3UfYGPyyCtMUpuLvLHp26/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3XKjo3nx3cdyw6Qx7MJUd/permission-assignments/pCVfcCyArtBkNDCdfDahhg/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3XKjo3nx3cdyw6Qx7MJUd/permission-assignments/pHb5wNLhhvWNgUf2KhHoDd/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3XKjo3nx3cdyw6Qx7MJUd/permission-assignments/pHJVc8ErxzWRHg9kJeD9Fb/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3XKjo3nx3cdyw6Qx7MJUd/permission-assignments/pAj6ZonvSLUsWdLYWxBEo9/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3XKjo3nx3cdyw6Qx7MJUd/permission-assignments/pEPuefnJufaVqe7XrrFfF4/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3XKjo3nx3cdyw6Qx7MJUd/permission-assignments/pM2PVzCaGEFA3iXZ2sQXaZ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3XKjo3nx3cdyw6Qx7MJUd.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3XKjo3nx3cdyw6Qx7MJUd.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3XKjo3nx3cdyw6Qx7MJUd/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/',
    'date_created': '2019-08-02T13:16:33.885515Z',
    'date_modified': '2022-07-15T10:46:00.905898Z',
    'date_deployed': null,
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
    'summary': {
      'geo': false,
      'labels': [
        'Анкета для перенаправлений между MRE и LAU',
        '<span style="color:SteelBlue">Номер проекта</span>',
        '1. Дата опроса',
        '2. Имя сотрудника ДСБ-ДГР:',
        '3. Локация:'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'appearance',
        'select_from_list_name',
        'required',
        'calculation'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [
        'Russian'
      ],
      'row_count': 22,
      'naming_conflicts': [
        '__version__',
        '__version__',
        '__version__'
      ],
      'default_translation': 'Russian'
    },
    'owner__username': 'vira_kholodniak',
    'parent': null,
    'uid': 'adBfbtZZexZcoFReTjFLsQ',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Coordination / Information Management',
        'value': 'Humanitarian - Coordination / Information Management'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'data-table': {
        'sort-by': {
          'value': 'DESCENDING',
          'fieldId': 'referral/_1'
        }
      },
      'description': '',
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': true
    },
    'kind': 'asset',
    'name': 'Referrals for civilians with legal assistance needs at EECPs',
    'asset_type': 'survey',
    'version_id': 'v9q7huPL6vUsqesLPhNFHJ',
    'has_deployment': true,
    'deployed_version_id': 'veujmaAVqMPRTPEUaqfdpV',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/vira_kholodniak/forms/adBfbtZZexZcoFReTjFLsQ',
    'deployment__active': true,
    'deployment__submission_count': 976,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/pRpabujvAdFZEzxsf6xoeN/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/pKf4o3Uj4WqGihzWd2SKp8/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/p7LV6kNHwBzVZT9yBUJsy6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/paWfKGUHAD52F3ADARQFrf/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/pnPWDfetNkxgwkuXknrpEU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/pamecGquxZwAhA2xbiqqPo/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/pfzBQQuma6PnzmSFRuawqr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/pGmTjopUFzjwuLgSFamUra/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/p2TvEbSuQrtz6UWjZSwyiz/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/pzZCHrgFSy4kTJJmq2KKTk/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/pdKcPvXVacgCPa5wpkQK8E/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/poeRGAzHuEMszxWHbNXGuZ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/pTvcAa8q8hXKSXuityxrwr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/pB5JJ97LnHkdRSAvaT8onK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/permission-assignments/puzk6CCriTkxQUHzqDQa7o/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'es9UiMbyuQGZPTGvfu27J5m',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/export-settings/es9UiMbyuQGZPTGvfu27J5m/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/export-settings/es9UiMbyuQGZPTGvfu27J5m/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/export-settings/es9UiMbyuQGZPTGvfu27J5m/data.xlsx',
        'name': '',
        'date_modified': '2021-06-24 10:31:44.170559+00:00',
        'export_settings': {
          'lang': '_xml',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'hierarchy_in_labels': true,
          'fields_from_all_versions': true
        }
      },
      {
        'uid': 'esY76h9hPkWv2bWRjvWWNpo',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/export-settings/esY76h9hPkWv2bWRjvWWNpo/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/export-settings/esY76h9hPkWv2bWRjvWWNpo/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/export-settings/esY76h9hPkWv2bWRjvWWNpo/data.xlsx',
        'name': 'adBfbtZZexZcoFReTjFLsQ',
        'date_modified': '2021-06-22 10:39:35.975002+00:00',
        'export_settings': {
          'lang': '_xml',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'hierarchy_in_labels': false,
          'fields_from_all_versions': false
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/adBfbtZZexZcoFReTjFLsQ/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN/',
    'date_created': '2022-06-19T05:26:45.812056Z',
    'date_modified': '2022-06-20T14:39:55.375456Z',
    'date_deployed': '2022-06-20T14:38:11.635359Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Шановні респонденти! Перш за все, висловлюємо Вам вдячність за участь у заходах у рамках проекту «Розбудова соціальної згуртованості та миру в Україні», що реалізуються Данською Радою у справах біженців в Україні  (ДРБ) за підтримки Агенції США з міжнародного розвитку.  Просимо Вас допомогти у визначенні ефективності проведеного заходу, відповівши на декілька питань. Опитування проводиться виключно для аналізу роботи ДРБ та з метою покращення якості наступних заходів. Ми зобов’язуємося зберегти конфіденційність отриманої інформації. Дякуємо Вам, що погодилися відповісти на наші запитання, Ваша думка дуже важлива для нас!',
        '1. Ім’я та Прізвище (або анонімно): ',
        '2. Стать:',
        '3. Вік:',
        '4. Чи є Ви внутрішньо переміщеною особою (ВПО)? '
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'hint',
        'select_from_list_name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 24,
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aJXuHaiPGzYxBNGQaXFcVN',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Other',
        'value': 'Other'
      },
      'country': [],
      'description': 'CB UCBI III activity 1',
      'collects_pii': null,
      'organization': '',
      'country_codes': [],
      'share-metadata': false,
      'operational_purpose': null
    },
    'kind': 'asset',
    'name': 'Форма зворотного зв’язку',
    'asset_type': 'survey',
    'version_id': 'v55AZcNDmvQ7m7SkUuxkdX',
    'has_deployment': true,
    'deployed_version_id': 'v55AZcNDmvQ7m7SkUuxkdX',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aJXuHaiPGzYxBNGQaXFcVN',
    'deployment__active': true,
    'deployment__submission_count': 10,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN/permission-assignments/pqqreYGjStudvd4zswqoo5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN/permission-assignments/pnceAFN4gt6Q3DwKjVJvnd/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN/permission-assignments/pG85zfw6YD8g4osKMZneK6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN/permission-assignments/pmSccRFx6ezHhcyiSAYyzi/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN/permission-assignments/pusJUwAUByPHHwmtSgfona/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN/permission-assignments/p7MHSPtB8hqpdsjqZtBvU9/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN/permission-assignments/paWAWG4Rk2uYFwuXnNzcA6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN/permission-assignments/pwMAxweesMw5NvBR2TPiie/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esKnnUdDwU3rUkNEV9FeGqF',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN/export-settings/esKnnUdDwU3rUkNEV9FeGqF/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN/export-settings/esKnnUdDwU3rUkNEV9FeGqF/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN/export-settings/esKnnUdDwU3rUkNEV9FeGqF/data.xlsx',
        'name': '',
        'date_modified': '2022-07-14 02:25:53.948761+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aJXuHaiPGzYxBNGQaXFcVN/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/',
    'date_created': '2022-05-02T14:19:47.499453Z',
    'date_modified': '2022-05-02T15:18:29.239866Z',
    'date_deployed': '2022-05-02T15:16:04.604967Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'ПРОЄКТ "Надання непродовольчої допомоги та підтримки у сфері санітарії та гігієни найбільш уразливим домогосподарствам',
        'Локація*',
        'Прізвище Ім\'я по Батькові бенефіціара',
        'Телефон бенефіціара або довіреної людини',
        'Ідентифікаційний номер (ІПН) бенефіціара'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'hint',
        'select_from_list_name',
        'parameters'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 24,
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aqJjqD3jaGGqRhFs98EUU2',
    'tag_string': '',
    'settings': {
      'sector': {},
      'country': [],
      'description': '',
      'organization': '',
      'country_codes': []
    },
    'kind': 'asset',
    'name': 'UHF_1_Caritas_database',
    'asset_type': 'survey',
    'version_id': 'v7EGzWvG8orEGkH6atZ4H8',
    'has_deployment': true,
    'deployed_version_id': 'v7EGzWvG8orEGkH6atZ4H8',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aqJjqD3jaGGqRhFs98EUU2',
    'deployment__active': true,
    'deployment__submission_count': 0,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/pL57HUq3Z2Kxy32QxXLsE6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/genyakob/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/phgY24cKUq8hLhDNe8uMDF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/genyakob/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/pK39Rj8wEyePCapnioeosw/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/genyakob/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/pRqo9mqvoS4qDefjNMdqDu/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/genyakob/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/pU7cE9tAvgCxDipzQL6RNn/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/gyakubov/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/pChVq7VCrcckEEeoBEMVTK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/gyakubov/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/ptgy5SVF775Dv6b9UfVriC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/gyakubov/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/piSs4ZScm7cEgTsnJ94Pmw/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/gyakubov/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/pknGgXfoJTvyiPxX4hGNnZ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/pU9oEjDwt3DARS8RwVSGoJ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/p25sgpYhCvPcXGwPXNuSzt/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/phcRkLZuMvU8jgnGB4YxFa/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/pJ5dgEP83qFNLXQ57zoMbi/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/pWMABxyV4gCqQGPhXJooaE/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/puftMWLfQdscU7V8uHaFmU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/permission-assignments/poM2UtAY2RejhW6vPs5rZv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aqJjqD3jaGGqRhFs98EUU2/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/',
    'date_created': '2017-07-25T14:05:30.036892Z',
    'date_modified': '2022-04-14T13:09:54.501859Z',
    'date_deployed': '2022-04-14T13:07:48.904293Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
    'summary': {
      'geo': true,
      'labels': [
        'Reported by',
        'Other',
        'Date of session',
        'Donor',
        'Other donor'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'appearance',
        'select_from_list_name',
        'relevant',
        'disabled',
        'calculation',
        'choice_filter',
        'default',
        'constraint'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 107,
      'naming_conflicts': [
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__',
        '__version__'
      ],
      'default_translation': null
    },
    'owner__username': 'vira_kholodniak',
    'parent': null,
    'uid': 'aCqVVnopyyd8hEgbuveWUE',
    'tag_string': '',
    'settings': {
      'sector': {},
      'country': [],
      'description': '',
      'organization': '',
      'country_codes': []
    },
    'kind': 'asset',
    'name': 'Explosive Ordnance Risk Education',
    'asset_type': 'survey',
    'version_id': 'vXahFwrw2nkkZWE5rrFjAz',
    'has_deployment': true,
    'deployed_version_id': 'vXahFwrw2nkkZWE5rrFjAz',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/vira_kholodniak/forms/aCqVVnopyyd8hEgbuveWUE',
    'deployment__active': true,
    'deployment__submission_count': 7447,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/p7J6VVj3Rtci2EzUTjjBt4/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/AnonymousUser/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/puvnGhz6GPQgKQ79N3BGQb/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/AnonymousUser/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/pRe5CEGVpkQaRfy4R6ALzE/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/pkckqRhdpYuuuo4J8j3nyQ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/pevdZZwg5nCACDRMMqkKcJ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/pT743GRiVzpdSNRh9TzWJd/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/pCPW2dDGyX7vhwQfVoFq3X/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/paWEdh4HVPjyBBrUebEi6Z/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/pNm97EYWJ3rFWk9EBFFmoe/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/ppmmxwDnKbnHoHaBfpjuPp/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/pMovXgRiYVzY9xDZmEkWnu/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/pokfAnFpjnaphfQy4FcwGa/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/pufVtGLhC9FPhNK4Q9cyQa/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/pmYKwik4NZmVFX6J4SoCPx/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/pophbyRtwjjRqsp8DB9h6c/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/permission-assignments/p6rH95VRS9dSD6AWDWKukY/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/vira_kholodniak/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esFMhEL7WUS87i6UNtGSVEF',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/export-settings/esFMhEL7WUS87i6UNtGSVEF/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/export-settings/esFMhEL7WUS87i6UNtGSVEF/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/export-settings/esFMhEL7WUS87i6UNtGSVEF/data.xlsx',
        'name': '',
        'date_modified': '2021-06-24 09:12:37.214564+00:00',
        'export_settings': {
          'lang': '_xml',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'hierarchy_in_labels': true,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aCqVVnopyyd8hEgbuveWUE/data/',
    'subscribers_count': 0,
    'status': 'public',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz/',
    'date_created': '2022-01-31T14:37:18.580090Z',
    'date_modified': '2022-01-31T15:00:02.625180Z',
    'date_deployed': '2022-01-31T14:58:47.670696Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Датский совет по беженцам - Датская группа по разминированию (DRC-DDG) в рамках "Программы экономического развития восточной Украины" помогают реализовать проект «Создание хостела в г. Золотое». Такая помощь стала возможной благодаря поддержке Швейцарии через Швейцарское агентство по развитию и сотрудничеству, а также правительства Великобритании. ',
        '1. Укажите Ваш пол',
        '2. Укажите Ваш возраст',
        '3. Вы зарегистрированы как Внутренне Перемещенное Лицо (ВПЛ)?',
        '4. К какой категории населения вы относитесь? '
      ],
      'columns': [
        'type',
        'label',
        'required',
        'name',
        'select_from_list_name'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 16,
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'avGZH8xxCJA5rPb763ycMz',
    'tag_string': '',
    'settings': {
      'sector': {},
      'country': [],
      'description': '',
      'organization': '',
      'country_codes': [],
      'share-metadata': false
    },
    'kind': 'asset',
    'name': 'LAP2_MSD_hostel_in_Zolote',
    'asset_type': 'survey',
    'version_id': 'vwDckGntDJ2VvxLVoLrPHX',
    'has_deployment': true,
    'deployed_version_id': 'vwDckGntDJ2VvxLVoLrPHX',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/avGZH8xxCJA5rPb763ycMz',
    'deployment__active': true,
    'deployment__submission_count': 38,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz/permission-assignments/pBWQ4pXHHWkZdL49DkXiXW/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz/permission-assignments/pDfVLvSCdcmm5QLPLPAbqS/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz/permission-assignments/pguTs6dtN4byHaLw9k5CoH/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz/permission-assignments/pXuUgQHEjKY6jez6He5tjX/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz/permission-assignments/pFhXJddpzWiGtx3c2a8RTE/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz/permission-assignments/p74EfSgvV5vokvjYYDYFeB/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz/permission-assignments/puDqP66NCviyRauZi4BzBv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz/permission-assignments/p2zeDjuoFD9dcgWFUKxNkT/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esV8N9fjmNJeDn4vHSDrjte',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz/export-settings/esV8N9fjmNJeDn4vHSDrjte/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz/export-settings/esV8N9fjmNJeDn4vHSDrjte/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz/export-settings/esV8N9fjmNJeDn4vHSDrjte/data.xlsx',
        'name': '',
        'date_modified': '2022-02-02 10:02:06.376852+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/avGZH8xxCJA5rPb763ycMz/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb/',
    'date_created': '2022-01-27T10:07:03.133675Z',
    'date_modified': '2022-01-27T11:16:17.053506Z',
    'date_deployed': '2022-01-27T11:11:23.927538Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Data provided by/ Дані внесесні:',
        '1. Beneficiary’s name, surname /Ім’я та прізвище бенефіціара',
        '2. Phone number of responsible person / Контактний номер телефону відповідальної особи',
        '3. E-mail/ електронна адреса ',
        '4. Current address / Поточна адреса'
      ],
      'columns': [
        'type',
        'label',
        'required',
        'select_from_list_name',
        'name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 49,
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aadXPg4iVEbi6kAGuR5YAb',
    'tag_string': '',
    'settings': {
      'sector': {},
      'country': [],
      'description': 'Form to identify needs and conditions of credit products for small and medium-sized businesses',
      'organization': '',
      'country_codes': [],
      'share-metadata': false
    },
    'kind': 'asset',
    'name': 'DRC LAP2 Needs of credit products for SME',
    'asset_type': 'survey',
    'version_id': 'vYCAWKokryPawspMA8xZ4x',
    'has_deployment': true,
    'deployed_version_id': 'vYCAWKokryPawspMA8xZ4x',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aadXPg4iVEbi6kAGuR5YAb',
    'deployment__active': true,
    'deployment__submission_count': 28,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb/permission-assignments/pmjCwGSAvXEkFThP3Mikye/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb/permission-assignments/pnAuhuXn5gWezRTQNVcG9y/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb/permission-assignments/pJQ7SGSZ82LGoGgNvnEShx/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb/permission-assignments/p6GpFoz7NokgHbfqYtRhs2/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb/permission-assignments/pUVQuHJkzckrCd43UQTqXd/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb/permission-assignments/p3Jka6gKjXqkWeoYum6Bx9/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb/permission-assignments/pbjyQV8y4fYsYBwqVPqZsC/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb/permission-assignments/p5Qw2L3HrvQoUVWQ6XQatr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esCcHFSRZUnxhCKu8g8EYte',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb/export-settings/esCcHFSRZUnxhCKu8g8EYte/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb/export-settings/esCcHFSRZUnxhCKu8g8EYte/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb/export-settings/esCcHFSRZUnxhCKu8g8EYte/data.xlsx',
        'name': '',
        'date_modified': '2022-03-07 07:45:04.702710+00:00',
        'export_settings': {
          'lang': '_xml',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aadXPg4iVEbi6kAGuR5YAb/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp/',
    'date_created': '2021-09-28T12:49:38.450890Z',
    'date_modified': '2022-01-27T10:04:32.149383Z',
    'date_deployed': null,
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Датский совет по беженцам - Датская группа по разминированию (DRC-DDG) в рамках "Программы экономического развития восточной Украины" реализует проект поддержки центров занятости. Нами было предоставлено техническое оборудование для улучшения качества некоторых услуг, предоставляемых центром. Такая помощь стала возможной благодаря поддержке Швейцарии через Швейцарское агентство по развитию и сотрудничеству. Просим Вас помочь в определении эффективности предоставленной нами помощи и ответить на несколько вопросов.  Данный опрос проводится в целях получения обратной связи, а также улучшения качества нашей работы. Мы обязуемся сохранить конфиденциальность полученной информации. Благодарим Вас, что согласились ответить на наши вопросы, Ваше мнение очень важно для нас!',
        'ОБЩАЯ ИНФОРМАЦИЯ',
        '1. Укажите Ваш пол',
        '2. Укажите Ваш возраст',
        '3. Дата заполнения '
      ],
      'columns': [
        'type',
        'name',
        'label',
        'required',
        'select_from_list_name',
        'relevant',
        'hint'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 20,
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aSKwfiHojnbBN6tnz5estp',
    'tag_string': '',
    'settings': {
      'sector': {},
      'country': [],
      'description': '',
      'organization': '',
      'country_codes': [],
      'share-metadata': false
    },
    'kind': 'asset',
    'name': 'LAP_2_satisfaction form_EC_technical_assistance',
    'asset_type': 'survey',
    'version_id': 'vUTxrzHMAuAfPuaWGLU3Hb',
    'has_deployment': true,
    'deployed_version_id': 'vS4ZDVGqBQD7WKRAijBEFX',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aSKwfiHojnbBN6tnz5estp',
    'deployment__active': true,
    'deployment__submission_count': 532,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp/permission-assignments/pMKWPnxGrnaP5uNcZUuPhx/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp/permission-assignments/pwqQLegv4Q3QzVYssd2Jsz/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp/permission-assignments/pFQMuLWvnfwAtV2F72Fa7F/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp/permission-assignments/pGvELdC8Uoucqcs4bmtynV/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp/permission-assignments/pU2kWt7WYt9Xv4mjPqutbi/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp/permission-assignments/pRu4GcYEAwqWFvh2xM7F68/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp/permission-assignments/pp9JXf2bkpaq6VrPPoPWYh/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp/permission-assignments/pxMvb43y2theMakUwHyQTA/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esNae3uASD63emaZXdNDBDD',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp/export-settings/esNae3uASD63emaZXdNDBDD/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp/export-settings/esNae3uASD63emaZXdNDBDD/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp/export-settings/esNae3uASD63emaZXdNDBDD/data.xlsx',
        'name': '',
        'date_modified': '2022-05-26 08:44:44.064723+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aSKwfiHojnbBN6tnz5estp/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd/',
    'date_created': '2021-11-24T09:49:55.251562Z',
    'date_modified': '2021-11-24T09:57:24.700650Z',
    'date_deployed': '2021-11-24T09:56:44.921946Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        '1. Gender/Стать ',
        '2. IDP status / Статус ВПО: ',
        '3. How many members including yourself live in the household? / Скільки людей проживає в Вашій родині, включаючи Вас?',
        'SERVICES RECEIVED / ОТРИМАНІ ПОСЛУГИ  ',
        '4. Beneficiary confirms cooperation and/or receiving services from the beneficiary / Бенефіціар підтверджує співпрацю та/або отримання послуг від бенефіціара:'
      ],
      'columns': [
        'type',
        'label',
        'required',
        'select_from_list_name',
        'name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 23,
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'a7Pz5rC4hL24YZxx2ETFvd',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Economic/Social Development',
        'value': 'Economic/Social Development'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': 'In cooperation with the local mechanised farmers group, DRC-DDG will aim to improve access to agricultural machinery services for smallholder farmers residing in Chermalyk, Orlovske, Kyrylivka, Novoselivka, and Fedorivka villages. This will boost the production of forage crops for livestock and poultry, therefore, increasing the productivity in this sector.',
      'organization': '',
      'country_codes': [
        'UKR'
      ]
    },
    'kind': 'asset',
    'name': 'Agricultural machinery services in Kalchyk',
    'asset_type': 'survey',
    'version_id': 'vd2RC6YF8WLd2g9y2so9Bx',
    'has_deployment': true,
    'deployed_version_id': 'vd2RC6YF8WLd2g9y2so9Bx',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/a7Pz5rC4hL24YZxx2ETFvd',
    'deployment__active': true,
    'deployment__submission_count': 16,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd/permission-assignments/pAuhb7TFjNPRQnj9p28vqM/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd/permission-assignments/pgxEz6t3u3HxHbchDiso7q/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd/permission-assignments/ph8gUmrvyvSWnGtLh2oHx9/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd/permission-assignments/pvQcfyo6n66Ty6SGYJJHhq/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd/permission-assignments/pTC8US4CYG8EmcTkVniJ2Y/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd/permission-assignments/pk99TMh7LHAgd88u3gm2xL/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd/permission-assignments/pqmaPtnoFHWsu8k9UeQRHF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd/permission-assignments/p5bRAJFU5gpjk7xApksoTj/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esDjXUzbbjcrBxpCdnDKsLu',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd/export-settings/esDjXUzbbjcrBxpCdnDKsLu/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd/export-settings/esDjXUzbbjcrBxpCdnDKsLu/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd/export-settings/esDjXUzbbjcrBxpCdnDKsLu/data.xlsx',
        'name': '',
        'date_modified': '2021-11-24 10:45:58.941555+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a7Pz5rC4hL24YZxx2ETFvd/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4/',
    'date_created': '2021-11-11T11:49:40.530409Z',
    'date_modified': '2021-11-11T13:30:37.261410Z',
    'date_deployed': '2021-11-11T13:30:18.812483Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        '1. Gender/Стать ',
        '2. IDP status / Статус ВПО: ',
        '3. How many members including yourself live in the household? / Скільки людей проживає в Вашій родині, включаючи Вас?',
        'SERVICES RECEIVED / ОТРИМАНІ ПОСЛУГИ  ',
        '4. Beneficiary confirms cooperation and/or receiving services from the beneficiary / Бенефіціар підтверджує співпрацю та/або отримання послуг від бенефіціара:'
      ],
      'columns': [
        'type',
        'label',
        'required',
        'select_from_list_name',
        'name',
        'relevant'
      ],
      'lock_all': false,
      'lock_any': false,
      'languages': [],
      'row_count': 25,
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aYbowKgc97LnhizopehCE4',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Economic/Social Development',
        'value': 'Economic/Social Development'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': 'In cooperation with the local mechanised farmers group, DRC-DDG will aim to improve access to agricultural machinery services for smallholder farmers residing in Chermalyk, Orlovske, Kyrylivka, Novoselivka, and Fedorivka villages. This will boost the production of forage crops for livestock and poultry, therefore, increasing the productivity in this sector.',
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': false
    },
    'kind': 'asset',
    'name': 'Agricultural machinery services in Chermalyk',
    'asset_type': 'survey',
    'version_id': 'vLUwqYahP2vvTjbg85pzbN',
    'has_deployment': true,
    'deployed_version_id': 'vLUwqYahP2vvTjbg85pzbN',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aYbowKgc97LnhizopehCE4',
    'deployment__active': true,
    'deployment__submission_count': 50,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4/permission-assignments/pTo6B84Gkvev6KouyZSLMN/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4/permission-assignments/pPdALWi6wRBBSuZEzW5xph/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4/permission-assignments/pzuisBnLNFCtMWjAKWzjAr/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4/permission-assignments/pupxuxeqyspYEHbcmDTm6x/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4/permission-assignments/pFafbfusKgokC2Qe3te2EF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4/permission-assignments/pQCL7BFw6vT6FVpNycZGD9/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4/permission-assignments/pVm55bcY9SkJT7gUFsx9Dj/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4/permission-assignments/puNqoyKLiLN4L9RY743QXv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'es9Gs7A64fdYqgHnE6hVA2J',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4/export-settings/es9Gs7A64fdYqgHnE6hVA2J/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4/export-settings/es9Gs7A64fdYqgHnE6hVA2J/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4/export-settings/es9Gs7A64fdYqgHnE6hVA2J/data.xlsx',
        'name': '',
        'date_modified': '2021-11-12 09:44:02.262823+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aYbowKgc97LnhizopehCE4/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N/',
    'date_created': '2020-09-14T14:18:44.939739Z',
    'date_modified': '2020-09-15T07:46:27.640288Z',
    'date_deployed': '2020-09-15T07:46:18.936520Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        '<span style="color:red; font-family:sans-serif">INTRODUCTION</span>',
        '__1. OBJECTIVE__\nThe survey is conducted in order to collect feedback of Annual Review participants and programme staff regarding Covid-19 response impact on DRC-DDG Ukraine programme implementation and operations, to assess readiness and capacity to respond, and to identify lessons learnt to improve programming.',
        '__2. CONSENT__\nAll responses to this survey will be 100% anonymous. Answers will be analysed and documented by MEAL staff, analysed and discussed with PMT/CMT at the Annual Review. When downloading results, MEAL staff will not be able to trace responses back to individuals. This survey is not mandatory, however we highly encourage you to participate and would appreciate your feedback.',
        'Do we have your consent to take part in this survey?',
        '<span style="color:red; font-family:sans-serif">QUESTIONNAIRE</span>'
      ],
      'columns': [
        'name',
        'type',
        'label',
        'required',
        'select_from_list_name',
        'relevant'
      ],
      'languages': [],
      'row_count': 32,
      'naming_conflicts': [
        '_1'
      ],
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aZW2gtqbehXbyvSAZwFb4N',
    'tag_string': '',
    'settings': {
      'sector': {},
      'country': [],
      'description': '',
      'organization': '',
      'country_codes': [],
      'share-metadata': false
    },
    'kind': 'asset',
    'name': 'DRC-DDG Ukraine COVID-19 Lessons Learnt Survey',
    'asset_type': 'survey',
    'version_id': 'vJBtGduQ7eTmhqRLxsrC2y',
    'has_deployment': true,
    'deployed_version_id': 'vJBtGduQ7eTmhqRLxsrC2y',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aZW2gtqbehXbyvSAZwFb4N',
    'deployment__active': true,
    'deployment__submission_count': 40,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N/permission-assignments/pJJwXZN2wNpjN9DRewzNY5/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N/permission-assignments/psUmYR3ycpsbw45zJs5fzZ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N/permission-assignments/pk3r8fNUs8NW4QYM7YzStc/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N/permission-assignments/pjCeiFKWQ4xVkVpt7DUnnB/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N/permission-assignments/ppUiGujWSscHLXJ2nYEy2e/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N/permission-assignments/peMqzkjwX68qKKWRxEMGbJ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N/permission-assignments/pybgZqx8wfi37c4dupp3pv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N/permission-assignments/pSnxM3ozhqk7H4F4iQksMf/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esEYAMbJxcj3kcbBGHTmmj3',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N/export-settings/esEYAMbJxcj3kcbBGHTmmj3/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N/export-settings/esEYAMbJxcj3kcbBGHTmmj3/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N/export-settings/esEYAMbJxcj3kcbBGHTmmj3/data.xlsx',
        'name': '',
        'date_modified': '2023-02-01 08:47:50.362211+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aZW2gtqbehXbyvSAZwFb4N/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL/',
    'date_created': '2020-06-02T09:31:28.677025Z',
    'date_modified': '2020-06-02T12:43:00.911277Z',
    'date_deployed': '2020-06-02T12:42:52.431417Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        '<span style="color:red; font-family:sans-serif">DRC-DDG Ukraine COVID-19 Staff Wellbeing Check-in Surve/Опитування для співробітників ДРБ-ДГР в Україні щодо самопочуття у період коронавірусної хвороби (Covid-19)</span>',
        '1. CONSENT / Згода',
        'All responses to this survey will be 100% anonymous. Answers will be analysed and documented by selected staff in the independent MEAL team in a final report. When downloading results, MEAL staff will not be able to trace responses back to individuals. This survey is not mandatory.  /  <span style="color:blue">Всі відповіді в цьому опитуванні будуть 100% анонімними. Окремі співробітники незалежного відділу моніторингу та оцінки проаналізують їх та складуть результати у фінальний звіт. Під час завантаження відповідей співробітники не матимуть змоги співставити їх з респондентом. Це опитування не є обов’язковим.</span>',
        'Do we have your consent to take part in this survey? / <span style="color:blue">Чи в даєте згоду на участь в опитуванні?</span>',
        'QUESTIONNAIRE / Анкета'
      ],
      'columns': [
        'type',
        'name',
        'label',
        'select_from_list_name',
        'relevant',
        'hint'
      ],
      'languages': [],
      'row_count': 61,
      'default_translation': null
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'aNi8y3KZWZqVB9DdbCo7dL',
    'tag_string': '',
    'settings': {
      'sector': {},
      'country': [],
      'description': '',
      'organization': '',
      'country_codes': [],
      'share-metadata': false
    },
    'kind': 'asset',
    'name': 'DRC-DDG Ukraine COVID-19 Staff Wellbeing Check-in Survey',
    'asset_type': 'survey',
    'version_id': 'vsFyVwtfhgfJHVEFrGZSpR',
    'has_deployment': true,
    'deployed_version_id': 'vsFyVwtfhgfJHVEFrGZSpR',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/aNi8y3KZWZqVB9DdbCo7dL',
    'deployment__active': true,
    'deployment__submission_count': 89,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL/permission-assignments/p8KA6LJf2TNE9xDmbQoVSn/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL/permission-assignments/pV2rGL3ruzxwkfjtXPTpfQ/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL/permission-assignments/pHwt5PR5FHWGqa6YEuLre3/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL/permission-assignments/pPaM6ijqFUmPkdp3D8hhVF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL/permission-assignments/pWKE6cxbmPGf8oMw9fs8N9/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL/permission-assignments/pAPdeAeexXrrmzyAYiMEbS/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL/permission-assignments/pUtL3qBAXizEHhRM9QDDAb/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL/permission-assignments/pnnZhTtjwRXtv4jeNef7SL/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [
      {
        'uid': 'esRqSrNxZHgQoqQ5dqBonoC',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL/export-settings/esRqSrNxZHgQoqQ5dqBonoC/',
        'data_url_csv': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL/export-settings/esRqSrNxZHgQoqQ5dqBonoC/data.csv',
        'data_url_xlsx': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL/export-settings/esRqSrNxZHgQoqQ5dqBonoC/data.xlsx',
        'name': '',
        'date_modified': '2023-02-01 08:50:57.927297+00:00',
        'export_settings': {
          'lang': '_default',
          'type': 'xls',
          'fields': [],
          'group_sep': '/',
          'multiple_select': 'both',
          'include_media_url': true,
          'xls_types_as_text': false,
          'hierarchy_in_labels': false,
          'fields_from_all_versions': true
        }
      }
    ],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aNi8y3KZWZqVB9DdbCo7dL/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/',
    'date_created': '2019-11-03T19:59:47.755389Z',
    'date_modified': '2020-02-06T08:48:32.975338Z',
    'date_deployed': '2019-11-06T10:29:54.796998Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/kateryna02021986/',
    'summary': {
      'geo': false,
      'labels': [
        'Представництво Данської Ради у справах біженців в Україні (ДРБ), міжнародна неурядова організація, проводить оцінку ризиків, пов’язаних з надзвичайними ситуаціями, які виникли або загострились внаслідок збройного конфлікту на сході України.   Мінімізація ризиків з питань надзвичайних ситуацій у галузі освіти стосується заходів щодо захисту учнів та освітян від смерті, каліцтва та шкоди в школах, планування безперервної освіти за умови очікуваної небезпеки, захисту інвестицій в освіту, посилення через освіту інтелектуальної стійкості до стихійних лих, а саме:  Екологічні (природні небезпеки та критичні погодні умови через зміни клімату, такі як сильні спека / холод, смерчі, забруднення водоймищ та питної води, спалахи інфекційних захворювань, спричинених забрудненою водою, можливий дефіцит води у постраждалих від конфлікту районах); Промислові (відключення електроенергії, хімічне забруднення повітря, внаслідок пошкодження хлорного трубопроводу, забруднення навколишнього середовища кислотними та мінеральними відходами через підтоплення шахт). Будь ласка, надайте відповіді на наведені нижче запитання для того, щоб ми змогли зрозуміти ситуації у школі та громаді щодо мінімізації ризиків у надзвичайних ситуаціях. Всі відповіді будуть оброблятися, керуючись принципами конфіденційності та етики. ',
        '1. Вкажіть школу, в якій Ви працюєте',
        '2. Область',
        '2.1. Луганська Область',
        '2.2. Донецька Область'
      ],
      'columns': [
        'required',
        'type',
        'label',
        'select_from_list_name',
        'name',
        'relevant',
        'hint'
      ],
      'languages': [],
      'row_count': 20,
      'default_translation': null
    },
    'owner__username': 'kateryna02021986',
    'parent': null,
    'uid': 'aAuxUJq7EsU2iqfjCkFRPv',
    'tag_string': '',
    'settings': {
      'sector': {
        'label': 'Humanitarian - Education',
        'value': 'Humanitarian - Education'
      },
      'country': [
        {
          'label': 'Ukraine',
          'value': 'UKR'
        }
      ],
      'description': 'Представництво Данської Ради у справах біженців в Україні (ДРБ), міжнародна неурядова організація, проводить оцінку ризиків, пов’язаних з надзвичайними ситуаціями, які виникли або загострились внаслідок збройного конфлікту на сході України. ',
      'organization': '',
      'country_codes': [
        'UKR'
      ],
      'share-metadata': false
    },
    'kind': 'asset',
    'name': 'ОПИТУВАЛЬНИК для проведення швидкого оцінювання навчальних закладів щодо ризиків, пов’язаних з надзвичайною ситуацією (вчителі)',
    'asset_type': 'survey',
    'version_id': 'vwHoYCXqWxUpZkjeRzGux3',
    'has_deployment': true,
    'deployed_version_id': 'vwHoYCXqWxUpZkjeRzGux3',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/kateryna02021986/forms/aAuxUJq7EsU2iqfjCkFRPv',
    'deployment__active': false,
    'deployment__submission_count': 103,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/pfM8ViLUqNE8J7YvTzNHJR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/kateryna02021986/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/peNto7YjNDwrVk3feRTJKU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/kateryna02021986/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/pKdUyf4zspd74FioayZtCu/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/kateryna02021986/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/p7VL8Bxwa7UTudv8DkCD5g/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/kateryna02021986/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/pgVrrnKqCHRsYZWiwNuZtd/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/kateryna02021986/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/p7Biy9oHoACsV6APkEJCkK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/kateryna02021986/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/pcUkFoX5Uhy5G44XJ45CMK/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/kateryna02021986/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/pcmA5QWhkaP3uavFFvZTZU/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/kateryna02021986/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/p7GbR9kqbLLRBdL7SSShB7/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/pqqcSp9KLm4mYJS45qxNo7/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/pG84KSc5E5M9SkwU5VqqBG/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/pcDYagSCLtxTW2AqYsWU6o/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/pTpREN7nkQFniGouGauSEv/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/pUgLF4onZBPprHFF2Sgc8x/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/permission-assignments/pUVnEVuLAnAbEBtk4ytAjF/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/aAuxUJq7EsU2iqfjCkFRPv/data/',
    'subscribers_count': 0,
    'status': 'shared',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  },
  {
    'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3fEmJBcmBjSm8AxYNCtPZ/',
    'date_created': '2019-08-01T09:00:51.426542Z',
    'date_modified': '2019-08-01T13:09:32.625139Z',
    'date_deployed': '2019-08-01T13:09:20.465372Z',
    'owner': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
    'summary': {
      'geo': false,
      'labels': [
        'Анкета для перенаправлений между MRE и LAU',
        '1. Дата опроса',
        '2. Имя сотрудника ДСБ-ДГР:',
        '3. Локация:',
        'Информация о бенефициаре'
      ],
      'columns': [
        'type',
        'name',
        'label',
        'select_from_list_name',
        'appearance'
      ],
      'languages': [
        'Russian'
      ],
      'row_count': 17,
      'default_translation': 'Russian'
    },
    'owner__username': 'meal_drc_ddg_ukr',
    'parent': null,
    'uid': 'a3fEmJBcmBjSm8AxYNCtPZ',
    'tag_string': '',
    'settings': {
      'sector': {},
      'country': [],
      'description': '',
      'organization': '',
      'country_codes': [],
      'share-metadata': false
    },
    'kind': 'asset',
    'name': 'referrals_mre_lau_echo_gr00001357',
    'asset_type': 'survey',
    'version_id': 'vG6HzhrhkEHV7LwQjB4zUm',
    'has_deployment': true,
    'deployed_version_id': 'vG6HzhrhkEHV7LwQjB4zUm',
    'deployment__identifier': 'https://kc.humanitarianresponse.info/meal_drc_ddg_ukr/forms/a3fEmJBcmBjSm8AxYNCtPZ',
    'deployment__active': true,
    'deployment__submission_count': 0,
    'permissions': [
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3fEmJBcmBjSm8AxYNCtPZ/permission-assignments/ps2qcXSseeo8oNyRRitaPH/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/add_submissions/',
        'label': 'Add submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3fEmJBcmBjSm8AxYNCtPZ/permission-assignments/pxnetW6uSrCqhzCSw4e29g/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_asset/',
        'label': 'Edit form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3fEmJBcmBjSm8AxYNCtPZ/permission-assignments/pWtuWNFJGzJ7CiwQiuq7uB/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/change_submissions/',
        'label': 'Edit submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3fEmJBcmBjSm8AxYNCtPZ/permission-assignments/poWsntH47RXQR5aGMGwfti/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/delete_submissions/',
        'label': 'Delete submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3fEmJBcmBjSm8AxYNCtPZ/permission-assignments/phDGQgmaSrTPY3zaWHidNR/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/manage_asset/',
        'label': 'Manage project'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3fEmJBcmBjSm8AxYNCtPZ/permission-assignments/p4r3QMXKpRS8SmouXsYqak/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/validate_submissions/',
        'label': 'Validate submissions'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3fEmJBcmBjSm8AxYNCtPZ/permission-assignments/ppMQstwjtCAc4XYXhABXFd/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_asset/',
        'label': 'View form'
      },
      {
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3fEmJBcmBjSm8AxYNCtPZ/permission-assignments/pARCjFKc2PHj72iUcVhap6/',
        'user': 'https://kobo.humanitarianresponse.info/api/v2/users/meal_drc_ddg_ukr/',
        'permission': 'https://kobo.humanitarianresponse.info/api/v2/permissions/view_submissions/',
        'label': 'View submissions'
      }
    ],
    'export_settings': [],
    'downloads': [
      {
        'format': 'xls',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3fEmJBcmBjSm8AxYNCtPZ.xls'
      },
      {
        'format': 'xml',
        'url': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3fEmJBcmBjSm8AxYNCtPZ.xml'
      }
    ],
    'data': 'https://kobo.humanitarianresponse.info/api/v2/assets/a3fEmJBcmBjSm8AxYNCtPZ/data/',
    'subscribers_count': 0,
    'status': 'private',
    'access_types': null,
    'children': {
      'count': 0
    },
    'data_sharing': {}
  }
]
