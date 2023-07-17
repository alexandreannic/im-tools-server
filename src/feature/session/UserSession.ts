export interface UserSession {
  email: string
  name: string
  admin?: boolean
  accessToken: string
  drcJobTitle?: string
  drcOffice?: string
}