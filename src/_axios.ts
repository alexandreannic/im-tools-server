import axios, {AxiosResponse} from 'axios'
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';
import * as http from 'http'
import * as https from 'https'


class CookieJar2 {
  getCookieString = async (currentUrl: string): Promise<string> => {
    return ''
  }

  setCookie = async (cookieString: string, currentUrl: string, opts: {ignoreError: boolean}): Promise<any> => {
    console.log('> Set-cookie', cookieString)
    return ''
  }
}
const jar = new CookieJar2();


export const extractCookie = (cookies: string) => {
  return cookies?.split(';')[0]
  // return cookies
}

export const email = 'alexandre.annic@drc.ngo'
export const password = '4awH1ulU'
export const authBuffer = 'Basic ' + btoa(`${email}:${password}`)

const c = wrapper(axios.create({
  jar,
  baseURL: 'https://lap.drc.ngo',
  withCredentials: true,
  // maxRedirects: 0,
  httpAgent: new http.Agent({keepAlive: true}),
  httpsAgent: new https.Agent({keepAlive: true}),
  beforeRedirect: (options: Record<string, any>, responseDetails: {headers: Record<string, string>}) => {
    console.info('> beforeRedirect', options.path, responseDetails?.headers)
  },
  transformRequest: (...x: any[]) => {
    console.info('> transformRequest', x[1], '\n')
    return x[2]
  }
}))


const extractTokens = (r: AxiosResponse): [string, string] => {
  const csrf = r.headers['x-csrf-token']!
  const cookie = extractCookie(r.headers['set-cookie']?.[0]!)
  return [csrf, cookie]
}

const getTokenAndSession = async (): Promise<[string, string]> => {
  const init = await c.get('/login/root')
  return extractTokens(init)
}

const login = async ([csrf, session]: [string, string]) => {
  const formData = new FormData()
  formData.append('_csrf', csrf)
  // const formData = {'_csrf': csrf}

  return await c.post('/j_spring_security_check',
    formData,
    {
      withCredentials: true,
      // auth: {
      //   username: 'alexandre.annic@drc',
      //   password: '4awH1ulU',
      // },
      headers: {
        Authorization: authBuffer,
        'Cookie': session
      }
    })
}

const getData = async ([csrf, session]: [string, string]) => {
  return c.post('/admin/msd/get-list-data', {
    withCredentials: true,
    headers: {
      'Cookie': session,
      'X-CSRF-TOKEN': csrf,
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json, text/javascript, */*; q=0.01',
    },
    body: {
      'parameters': null,
      'page': 1,
      'count': 10,
      'filterData': {'filterRangeInts': [], 'filterRangeDoubles': [], 'filterLongs': [], 'filterStrings': [], 'filterTimes': [], 'filterDates': []},
      'searchData': [],
      'sortData': {'fieldName': 'tmspDtCreate', 'type': 'DESC'}
    }
  })
}

export const _axios = {
  getTokenAndSession,
  login,
  getData,
  extractTokens
}
