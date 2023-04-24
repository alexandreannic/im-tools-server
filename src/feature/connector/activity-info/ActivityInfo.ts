export interface Form {
  resources: {
    id: AIID
    parentId: AIID
    label: string
    type: 'FORM',
    visibility: 'PRIVATE'
  }[]
}

export type AIID = string

export type FormDescs = Record<AIID, FormDesc>

export type FormDesc = {
  id: AIID
  permissions: {
    viewFilter?: string,
  },
  schema: {
    elements: {
      id: AIID
      code: string,
      label: string
      description: string
      relevanceCondition: string,
      validationCondition: string,
      required: boolean,
      type: 'subform' | 'reference' | 'enumerated' | 'calculated' | string,
      typeParameters: {
        formId?: AIID,
        cardinality?: 'single'
        range?: [{formId: AIID}]
        // formula?: string
      }
    }[]
  }
}

export interface Database {
  databaseId: string
  label: string
  description: string
  ownerId: string
}

const dbId = 'cbi4e3dlbs86afe2'
export const formId = {
  general_protection_rmm: 'cas3n26ldsu5aea5',
  activities_and_people: 'cy3vehlldsu5aeb6'
}
