import makeFetchCookie from 'fetch-cookie'

class CookieJar {
  getCookieString = async (currentUrl: string): Promise<string> => {
    return ''
  }

  setCookie = async (cookieString: string, currentUrl: string, opts: {ignoreError: boolean}): Promise<any> => {
    console.log('===========================================setcookie', cookieString)
    return ''
  }
}

const jar = new CookieJar();


const fetchCookie = makeFetchCookie(fetch, new CookieJar())
//
// const fetchCookie = fetch

const extractCookie = (cookies: string) => {
  return cookies?.split(';')[0]
  // return cookies
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
    keepalive: true,
    // credentials: 'same-origin',
    method: 'POST',

    'referrer': 'https://lap.drc.ngo/login/root',
    'referrerPolicy': 'strict-origin-when-cross-origin',
    'body': '_csrf=feb59fc5-57bc-4f1d-a1fd-149c09389783&login=alexandre.annic%40drc.ngo&password=4awH1ulU',
    'mode': 'cors',
    'credentials': 'include',

    headers: {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
      'cache-control': 'max-age=0',
      'content-type': 'application/x-www-form-urlencoded',
      'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1'
      // 'Cookie': session,
      // Authorization: authBuffer
    },
    // body: new URLSearchParams({
    //   _csrf: csrf,
    //   login: email,
    //   password: password,
    // })
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
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json, text/javascript, */*; q=0.01',
    },
    body: JSON.stringify({
      'parameters': null,
      'page': 1,
      'count': 10,
      'filterData': {'filterRangeInts': [], 'filterRangeDoubles': [], 'filterLongs': [], 'filterStrings': [], 'filterTimes': [], 'filterDates': []},
      'searchData': [],
      'sortData': {'fieldName': 'tmspDtCreate', 'type': 'DESC'}
    })
  })
}

export const Fetch = {
  getData,
  login,
  getTokenAndSession,
  extractTokens,
}
