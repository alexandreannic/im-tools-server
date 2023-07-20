export interface UserSession {
  email: string
  name: string
  admin?: boolean
  accessToken: string
  drcJob?: string
  drcOffice?: string
}