import makeFetchCookie from 'fetch-cookie'
import {CookieJar} from 'tough-cookie'

interface EcrecAppTokens {
  readonly csrf: string
  readonly cookie: string
}

export class EcrecAppClient {

  constructor(private params: {
    login: string,
    password: string
  }) {
  }

  private readonly fetchCookie = makeFetchCookie(fetch, new CookieJar())

  private static readonly extractCookie = (cookies: string) => {
    return cookies?.split(';')[0]
  }

  private static readonly extractTokens = (r: any): EcrecAppTokens => {
    const csrf = r.headers.get('x-csrf-token')!
    const cookie = EcrecAppClient.extractCookie(r.headers.get('set-cookie')!)
    return {csrf, cookie}
  }

  private readonly getTokenAndSession = async (): Promise<EcrecAppTokens> => {
    const init = await this.fetchCookie('https://lap.drc.ngo/login/root', {
      keepalive: true,
      credentials: 'same-origin',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
      },
    })
    return EcrecAppClient.extractTokens(init)
  }

  private readonly login = async ({csrf}: EcrecAppTokens) => {
    return await this.fetchCookie('https://lap.drc.ngo/j_spring_security_check', {
      mode: 'cors',
      keepalive: true,
      credentials: 'include',
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${this.params.login}:${this.params.password}`)
      },
      body: new URLSearchParams({
        _csrf: csrf,
      })
    })
  }

  private request = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const tokens = await this.getTokenAndSession()
    const logins = await this.login(tokens)
    const token = EcrecAppClient.extractTokens(logins).csrf
    return this.fetchCookie(input, {
      ...init,
      keepalive: true,
      credentials: 'same-origin',
      headers: {
        ...init?.headers,
        'X-CSRF-TOKEN': token,
      },
    })
  }

  readonly post = async (input: RequestInfo | URL, init?: Omit<RequestInit, 'method'>): Promise<Response> => {
    return this.request(input, {...init, method: 'POST'})
  }

  readonly get = async (input: RequestInfo | URL, init?: Omit<RequestInit, 'method'>): Promise<Response> => {
    return this.request(input, {...init, method: 'GET'})
  }

  readonly put = async (input: RequestInfo | URL, init?: Omit<RequestInit, 'method'>): Promise<Response> => {
    return this.request(input, {...init, method: 'PUT'})
  }

  readonly delete = async (input: RequestInfo | URL, init?: Omit<RequestInit, 'method'>): Promise<Response> => {
    return this.request(input, {...init, method: 'DELETE'})
  }
}
