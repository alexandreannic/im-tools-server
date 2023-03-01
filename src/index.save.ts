import {ApiClient} from './client/ApiClient'
import {KoboClient} from './kobo/KoboClient/KoboClient'
import {appConf} from './conf/AppConf'
import {Server} from './Server'
import {Database} from './db/Database'
import {logger} from './utils/Logger'
import axios from 'axios'
import * as http from 'http'
import * as https from 'https'
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

axios.defaults.withCredentials = true

// const fetchCookie = makeFetchCookie(fetch, new CookieJar())
const fetchCookie = fetch

const extractCookie = (cookies: string) => {
  return cookies?.split(';')[0]
  // return cookies
}

const email = 'alexandre.annic@drc.ngo'
const password = '4awH1ulU'

const c = axios.create({
  baseURL: 'https://lap.drc.ngo',
  withCredentials: true,
  httpAgent: new http.Agent({keepAlive: true}),
  httpsAgent: new https.Agent({keepAlive: true}),
  beforeRedirect: console.log
})


const getTokensFromFetchResponse = (r: any): [string, string] => {
  // const csrf = r.headers['x-csrf-token']!
  // const cookie = extractCookie(r.headers['set-cookie']!)
  const csrf = r.headers.get('x-csrf-token')!
  const cookie = extractCookie(r.headers.get('set-cookie')!)
  return [csrf, cookie]
}

const getTokenAndSessionFetch = async (): Promise<[string, string]> => {
  const init = await fetchCookie('https://lap.drc.ngo/admin/main', {
    keepalive: true,
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json, text/javascript, */*; q=0.01',
    },
  })
  return getTokensFromFetchResponse(init)
}

const getTokenAndSessionAxios = async (): Promise<[string, string]> => {
  const init = await c.get('/admin/main')
  return getTokensFromFetchResponse(init)
}

const loginWithAxios = async ([csrf, session]: [string, string]) => {
  return await c.post('/j_spring_security_check',
    new URLSearchParams({
      '_csrf': csrf
    }),
    {
      withCredentials: true,
      headers: {
        Authorization: 'Basic ' + Buffer.from('alexandre.annic@drc.ngo:4awH1ulU').toString('base64'),
        // 'Cookie': session
      }
    })
}

const loginWithFetch = async ([csrf, session]: [string, string]) => {
  return await fetchCookie('https://lap.drc.ngo/j_spring_security_check', {
    // redirect: 'manual',
    keepalive: true,
    credentials: 'include',
    method: 'POST',
    headers: {
      // 'Cookie': session,
      Authorization: 'Basic ' + Buffer.from('alexandre.annic@drc.ngo:4awH1ulU').toString('base64')
    },
    body: new URLSearchParams({_csrf: csrf})
  })
}

const getDataWithFetch = async ([csrf, session]: [string, string]) => {
  console.log('get data ', csrf, session)
  return fetchCookie('https://lap.drc.ngo/admin/msd/get-list-data', {
    keepalive: true,
    credentials: 'include',
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

const withAxios2 = async () => {
  const init = await c.get('/admin/main')
  const session = extractCookie(init.headers['set-cookie']![0])
  const csrf = init.headers['x-csrf-token']!
  console.log(session, csrf)

  // const data = new FormData()
  const login = await c.post('/j_spring_security_check',
    new URLSearchParams({
      '_csrf': '8fcaa07f-7ea2-4715-8f2e-6a42e4137220'
    }),
    {
      // auth: {
      //   username: 'alexandre.annic@drc.ngo',
      //   password: '4awH1ulU'
      // },
      headers: {
        // 'Content-Type': 'application/json; charset=UTF-8',
        // 'Accept': 'application/json, text/javascript, */*; q=0.01',
        // 'Cookie': session,
        // Authorization: 'Basic ' + Buffer.from('alexandre.annic@drc.ngo:4awH1ulU').toString('base64')
        //--
        'Authorization': 'Basic YWxleGFuZHJlLmFubmljQGRyYy5uZ286NGF3SDF1bFU=',
        'Cookie': 'JSESSIONID=F7AE0E634D2397B17A3ED584F2F82A11'
      }
    })
  console.log(login.data)

  // await fetch('https://lap.drc.ngo/admin/msd/get-list-data', {
  //   keepalive: true,
  //   credentials: 'include',
  //   method: 'POST',
  //   headers: {
  //     'X-CSRF-TOKEN': login.headers['login.headers']!,
  //     'Cookie': login.headers['login.headers']!,
  //     'X-Requested-With': 'XMLHttpRequest',
  //     'Content-Type': 'application/json; charset=UTF-8',
  //     'Accept': 'application/json, text/javascript, */*; q=0.01',
  //     // Authorization: 'Basic ' + Buffer.from('alexandre.annic@drc.ngo:4awH1ulU').toString('base64')
  //   },
  //   body: JSON.stringify({
  //     'parameters': null,
  //     'page': 1,
  //     'count': 10,
  //     'filterData': {'filterRangeInts': [], 'filterRangeDoubles': [], 'filterLongs': [], 'filterStrings': [], 'filterTimes': [], 'filterDates': []},
  //     'searchData': [],
  //     'sortData': {'fieldName': 'tmspDtCreate', 'type': 'DESC'}
  //   })
  // })
  //   .then(response => response.json())
}

const withFetch = async () => {
  const init = await fetch('https://lap.drc.ngo/admin/main', {
    keepalive: true,
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json, text/javascript, */*; q=0.01',
    },
  })
  let csrf = init.headers.get('x-csrf-token')!
  let cookie = extractCookie(init.headers.get('set-cookie')!)
  // console.log(init.headers)
  // console.log(cookie, csrf)

  // console.log('cSRF', csrf)
  // console.log('===============')
  const login = await fetch('https://lap.drc.ngo/j_spring_security_check', {
    redirect: 'manual',
    keepalive: true,
    credentials: 'include',
    method: 'POST',
    headers: {
      'Cookie': cookie,
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      Authorization: 'Basic ' + Buffer.from('alexandre.annic@drc.ngo:4awH1ulU').toString('base64')
    },
    body: new URLSearchParams({_csrf: csrf})
  })
  console.log(login.status, login.headers)
  // cookie = extractCookie(login.headers.get('set-cookie')!)
  csrf = login.headers.get('x-csrf-token')!

  // console.log(login.headers)
  // console.log(cookie, csrf)
  // console.log('COOKIE', cookie)
  // console.log('===============')
  //
  // await fetch('https://lap.drc.ngo/admin/msd/get-list-data', {
  //   keepalive: true,
  //   credentials: 'include',
  //   method: 'POST',
  //   headers: {
  //     // 'cookie': 'JSESSIONID=25C16E12CCEAFDA10ABADF2FDC438191',
  //     'X-CSRF-TOKEN': '9fdaf7e3-cba5-400a-9cfd-a64511b5c1ad',
  //     // 'Cookie': cookie,
  //     // 'X-CSRF-TOKEN': csrf,
  //     'X-Requested-With': 'XMLHttpRequest',
  //     'Content-Type': 'application/json; charset=UTF-8',
  //     'Accept': 'application/json, text/javascript, */*; q=0.01',
  //     // Authorization: 'Basic ' + Buffer.from('alexandre.annic@drc.ngo:4awH1ulU').toString('base64')
  //   },
  //   body: JSON.stringify({
  //     'parameters': null,
  //     'page': 1,
  //     'count': 10,
  //     'filterData': {'filterRangeInts': [], 'filterRangeDoubles': [], 'filterLongs': [], 'filterStrings': [], 'filterTimes': [], 'filterDates': []},
  //     'searchData': [],
  //     'sortData': {'fieldName': 'tmspDtCreate', 'type': 'DESC'}
  //   })
  // })
  //   .then(response => response.json())
  //   // .then(response => console.log(response))
  //   .catch(err => console.error(err))
  //
  // console.log('==')
  // console.log(csrf)
  // console.log(cookie)
}
const old = async () => {
  const client = axios.create({
    baseURL: 'https://lap.drc.ngo',
    // headers: {...headers},
  })


  // const x = await client.post(`/j_spring_security_check`)
  // let csrf = x.headers['x-csrf-token']

  // const formData = new FormData()
  // formData.append('_csrf', csrf1!)
  // formData.append('login', 'alexandre.annic@drc.ngo')
  // formData.append('password', '4awH1ulU')
  // const test = await axios({
  //   method: 'POST',
  //   url: 'https://lap.drc.ngo/j_spring_security_check',
  //   data: formData,
  //   headers: { "Content-Type": "multipart/form-data" },
  // })
  // console.log(test.headers)

  const co = await client.post(`/j_spring_security_check`, undefined,
    {
      // data: {'_csrf': csrf},
      auth: {
        username: 'alexandre.annic@drc.ngo',
        password: '4awH1ulU'
      }
    })

  // console.log(csrf)
  // const token = co.headers['set-cookie']![0].split(';')[0]
  // const csrf = co.headers['x-csrf-token']

  // const cookie = co.headers['set-cookie']![0].split(';')[0]

  try {
    const csrf = '72a7ffd8-7ecd-4943-87f4-cffde472b614'
    const token = 'JSESSIONID=1710A16BBC07D9FBBDA9562157266A5E'
    const res = await axios.post(
      'https://lap.drc.ngo/admin/sme/get-list-data',
      {
        'parameters': null,
        'page': 1,
        'count': 10,
        'filterData': {
          'filterRangeInts': [],
          'filterRangeDoubles': [],
          'filterLongs': [],
          'filterStrings': [],
          'filterTimes': [],
          'filterDates': []
        },
        'searchData': [],
        'sortData': {
          'fieldName': 'tmspDtCreate',
          'type': 'DESC'
        }
      },
      {
        headers: {
          // 'Accept': 'application/json, text/javascript, */*; q=0.01',
          // 'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8',
          // 'Connection': 'keep-alive',
          // 'Content-Type': 'application/json; charset=UTF-8',
          'Cookie': token,
          // 'Origin': 'https://lap.drc.ngo',
          // 'Referer': 'https://lap.drc.ngo/admin/sme/list',
          // 'Sec-Fetch-Dest': 'empty',
          // 'Sec-Fetch-Mode': 'cors',
          // 'Sec-Fetch-Site': 'include',
          // 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
          'X-CSRF-TOKEN': csrf,
          'X-Requested-With': 'XMLHttpRequest',
          // 'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
          // 'sec-ch-ua-mobile': '?0',
          // 'sec-ch-ua-platform': '"macOS"'
        }
      }
    )
    console.log(res)
  } catch (e: any) {
    console.log(e.code)
  }
  // const res = await axios.post(
  //   'https://lap.drc.ngo/j_spring_security_check',
  //   {
  //     'parameters': null,
  //     'page': '2',
  //     'count': 10,
  //     'filterData': {'filterRangeInts': [], 'filterRangeDoubles': [], 'filterLongs': [], 'filterStrings': [], 'filterTimes': [], 'filterDates': []},
  //     'searchData': [],
  //     'sortData': {'fieldName': 'tmspDtCreate', 'type': 'DESC'}
  //   },
  //   {
  //     withCredentials: true,
  //     headers: {
  //       'accept': 'application/json, text/javascript, */*; q=0.01',
  //       'accept-language': 'en-US,en;q=0.9,fr;q=0.8',
  //       'content-type': 'application/json; charset=UTF-8',
  //       'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
  //       'sec-ch-ua-mobile': '?0',
  //       'sec-ch-ua-platform': '"macOS"',
  //       'sec-fetch-dest': 'empty',
  //       'sec-fetch-mode': 'cors',
  //       'sec-fetch-site': 'include',
  //       'x-csrf-token': '4994596d-80b3-4f62-9558-3e8d53278b13',
  //       'x-requested-with': 'XMLHttpRequest',
  //       'Cookie': 'JSESSIONID=823DDA1AA5807B33E938287F33BC7160',
  //     }
  //   }
  // )

  // console.log(res.status)

  // console.log(x.headers['x-csrf-token'])
  console.log('----')
}

const loggingToCref = async () => {
  try {
    // const axiosCookie = wrapper(axios)
    // const jar = new CookieJar()
    const client = axios.create({
      // jar: jar,
      // httpAgent: new http.Agent({keepAlive: true}),
      // httpsAgent: new https.Agent({keepAlive: true}),
      withCredentials: true,
      baseURL: 'https://lap.drc.ngo',
    })
    // const res = await client.get(`/login/root`)
    // const csrf = res.headers['x-csrf-token']!.trim()
    // const cookie = res.headers['set-cookie']![0].split(';')[0]!.trim()
    // const formdata = new URLSearchParams()
    // formdata.append('_csrf', csrf)

    const x = await client.post(`/j_spring_security_check`,
      undefined,
      {
        headers: {
          'Date': 'Tue, 28 Feb 2023 07:51:11 GMT',
          'Server': 'Apache/2.4.41 (Ubuntu)',
          'X-CSRF-HEADER': 'X-CSRF-TOKEN',
          'X-CSRF-PARAM': '_csrf',
          'X-CSRF-TOKEN': '9fdaf7e3-cba5-400a-9cfd-a64511b5c1ad',
          'X-Content-Type-Options': 'nosniff',
          'X-XSS-Protection': '1; mode=block',
          'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'X-Frame-Options': 'DENY',
          'Content-Type': 'text/html;charset=UTF-8',
          'Content-Language': 'en-US',
          'Vary': 'Accept-Encoding',
          'Transfer-Encoding': 'chunked',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // headers: {Cookie: cookie},
        auth: {
          username: 'alexandre.annic@drc.ngo',
          password: '4awH1ulU'
        }
      })
    // const x = await client.post(`/j_spring_security_check`, {
    //   _csrf: csrf,
    //   username: 'alexandre.annic@drc.ngo',
    //   password: '4awH1ulU'
    // }, {
    //   headers: {'Cookie': cookie}
    // })
    console.log(x.data)
    // console.log(cookie)
    // console.log(csrf)
  } catch (e: any) {
    console.log(e)
  }
}

const loggin = async () => {
  console.log('...')
  console.log('_------------------PING---------------------')
  const tokens = await getTokenAndSessionFetch()
  // const tokens = await getTokenAndSessionAxios()
  // console.log(tokens)
  // // const res = await loginWithAxios(tokens).then(_ => _.data)
  console.log('_------------------LOGIN---------------------')
  const res = await loginWithFetch(tokens).then(x => {
    return x
  })
  console.log(getTokensFromFetchResponse(res))
  console.log('_------------------FETCH---------------------')
  const res1 = await getDataWithFetch(getTokensFromFetchResponse(res))
  // const res1 = await getDataWithFetch(['55417f87-20bb-4d4e-9235-e22801b13f1f', 'JSESSIONID=6E0EE4A13A9FEA228CA18D963E93F343'])
  console.log(getTokensFromFetchResponse(res1))

  console.log(await res1.text())
}

(async () => {
  // await loggin()
  
  await loginWithFetch([] as any).then(_ => _.text()).then(console.log)
  
  // await withAxios2()
  // await withFetch()
  // await loggingToCref()
  process.exit(0)
  const conf = appConf
  const http = new ApiClient({
    baseUrl: conf.kobo.url + '/api',
    headers: {
      Authorization: KoboClient.genAuthorizationHeader(conf.kobo.token),
    }
  })
  const pgClient = new Database(conf).client
  const koboClient = new KoboClient(http)
  // const mongo = await Mongo.connect()
  // const res = await db.collection('answers').countDocuments()
  // await mongo.answers.insertMany(answers)
  // const cursor = await mongo.answers.find()

  logger.info(`Connecting to ${conf.db.database}...`)
  await pgClient.connect()
  // logger.info(`Applying evolutions...`)
  // await new EvolutionManager(pgClient).run()


  new Server(conf, pgClient, koboClient, logger).start()
})()
