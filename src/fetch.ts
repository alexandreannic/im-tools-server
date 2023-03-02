import makeFetchCookie from 'fetch-cookie'
import {authBuffer} from '../lib/axios'
import { CookieJar } from 'tough-cookie';


const fetchCookie = makeFetchCookie(fetch, new CookieJar())

const extractCookie = (cookies: string) => {
  return cookies?.split(';')[0]
}

const email = 'alexandre.annic@drc.ngo'
const password = '4awH1ulU'


const extractTokens = (r: any): [string, string] => {
  const csrf = r.headers.get('x-csrf-token')!
  const cookie = extractCookie(r.headers.get('set-cookie')!)
  return [csrf, cookie]
}

const getTokenAndSession = async (): Promise<[string, string]> => {
  const init = await fetchCookie('https://lap.drc.ngo/login/root', {
    keepalive: true,
    credentials: 'same-origin',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json, text/javascript, */*; q=0.01',
    },
  })
  return extractTokens(init)
}

const login = async ([csrf, session]: [string, string]) => {
  return await fetchCookie('https://lap.drc.ngo/j_spring_security_check', {
    // redirect: 'manual',
    mode: 'cors',
    keepalive: true,
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Cookie': session,
      // 'cookie': session,
      Authorization: authBuffer
    },
    body: new URLSearchParams({
      _csrf: csrf,
      // login: email,
      // password: password,
    })
  })
}

const getData = async ([csrf, session]: [string, string]) => {
  return fetchCookie('https://lap.drc.ngo/admin/msd/get-list-data', {
    keepalive: true,
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'X-CSRF-TOKEN': csrf,
      // 'Cookie': session,
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: '{"parameters":null,"page":1,"count":10,"filterData":{"filterRangeInts":[],"filterRangeDoubles":[],"filterLongs":[],"filterStrings":[],"filterTimes":[],"filterDates":[]},"searchData":[],"sortData":{"fieldName":"tmspDtCreate","type":"DESC"}}'
  })
}

export const Fetch = {
  getData,
  login,
  getTokenAndSession,
  extractTokens,
}
