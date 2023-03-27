import {AIID, columnsListMap, Database, Form, FormDescs} from './ActivityInfo'

interface ActicityInfoBody {
  [key: string]: any
}

interface ApiParams extends Omit<RequestInit, 'body'> {
  body?: object
}

class Api {

  readonly request = (path: string, init?: ApiParams) => {
    return fetch('https://www.activityinfo.org/' + path, {
      ...init,
      credentials: 'include',
      // body: init?.method === 'POST' ? body as any : undefined,
      body: init?.body ? JSON.stringify(init.body) : undefined,
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
        'authorization': 'a3e219a525a78ef54ddff7ad4225381c',
      },
    })
  }

  readonly get = <T = any>(path: string, init?: ApiParams): Promise<T> => {
    return this.request(path, {...init, method: 'GET'}).then(_ => _.json())
  }

  readonly post = (path: string, init?: ApiParams) => {
    return this.request(path, {...init, method: 'POST'}).then(_ => _.json())
  }
}

export class ActivityInfoSdk {

  constructor(private api = new Api()) {
  }

  readonly fetchDatabases = () => {
    return this.api.get<Database[]>(`/resources/databases`)
  }

  readonly fetchForms = (dbId: string = 'cas3n26ldsu5aea5') => {
    return this.api.get<Form>(`/resources/databases/${dbId}`)//.then(_ => _.resources.map(_ => _.id === dbId))
  }

  readonly fetchForm = (formId: string = 'cas3n26ldsu5aea5'): Promise<FormDescs> => {
    return this.api.get(`/resources/form/${formId}/tree/translated`)
      .then(_ => {
        return _.forms
      })
  }

  readonly fetchColumns = async (formId: AIID, optionDefId: AIID, filter?: string): Promise<{id: AIID, label: string}[]> => {
    return this.api.post(`/resources/query/columns`, {
      body: {
        // filter: filter ? `_id == \\"${filter}\\"` : undefined,
        rowSources: [{'rootFormId': formId}],
        columns: [{'id': 'id', 'expression': '_id'}, {'id': 'k1', 'expression': optionDefId}],
        truncateStrings: false
      }
    }).then(_ => _.columns)
      .then(res => {
        return res.id.values.map((col, i) => ({
          id: col,
          label: res.k1.values[i],
        }))
      })
  }
}

const body = {
  'changes': [{
    'formId': 'cas3n26ldsu5aea5',
    'recordId': 'c9whq5slfm7bj0l2',
    'parentRecordId': null,
    'fields': {
      'ci607odlbs8w4pe2': 'cr4xx3dlbs86w9y2:cv9umq8lehiq43f103',
      'cu3do47ldu8x1eg4m': 'cqnfuewldtzuhuf2:crsa7psleo7l08n4',
      'cva2znrle7pd83vd': 'cg7v61llbunvy9t9:c247whblebrkckc6',
      'cb7h23tle7pdocme': 'cjy8nbnlbunzcnh1h:csq4sprlecp1fu1n',
      'cqai21ple7pe0bif': 'c700rjplbuo1fjq5m:cq8epmplebsu1w5c0'
    }
  }, {
    'formId': 'cy3vehlldsu5aeb6',
    'recordId': 'cbz4jqklfm7ug8g3',
    'parentRecordId': 'c9whq5slfm7bj0l2',
    'fields': {
      'cmxllh3ldsuvom9g': '2023-02',
      'c19j8p9ldsv4qa3o': 'cqjd0o4ld4hbyo12:co8y3rvld4hchx14',
      'c79be77ldswj831t': 'c3vbxtgldsw1as42:cwefhkle4efhhpa',
      'ceij8s2lbs8mvnx3f': 200000,
      'cpbkputlbs8mvny3h': 0,
      'cmyfyd8lbs8mvny3l': 0,
      'cpkkgqulbs8mvny3j': 0,
      'cgwjgg2ldsx1nzsv': 200000,
      'cj41459lbs8mvny3n': 200000
    }
  }, {
    'formId': 'cy3vehlldsu5aeb6',
    'recordId': 'cwbn2zxlfm7zayp4',
    'parentRecordId': 'c9whq5slfm7bj0l2',
    'fields': {
      'cmxllh3ldsuvom9g': '2023-02',
      'c19j8p9ldsv4qa3o': 'cqjd0o4ld4hbyo12:co8y3rvld4hchx14',
      'c79be77ldswj831t': 'c3vbxtgldsw1as42:c9n7ovzle4efhhp5',
      'cn37fnmlbs8mvny3r': 12
    }
  }]
}

const payload = {
  'changes': [{
    'formId': 'cas3n26ldsu5aea5',
    'recordId': 'cqn1imolfmbgi7w6',
    'parentRecordId': null,
    'fields': {
      // partner: Partner: DRC
      'ci607odlbs8w4pe2': 'cr4xx3dlbs86w9y2:cv9umq8lehiq43f103',
      // planCode: Activity Planning Module (General Protection): value_id
      'cu3do47ldu8x1eg4m': 'cqnfuewldtzuhuf2:cfbgfipleo7dg222',
      // oblast: Admin1: oblast_id
      'cva2znrle7pd83vd': 'cg7v61llbunvy9t9:clo1x4vlebrkckc4',
      // raion: Admin2: raion_id
      'cb7h23tle7pdocme': 'cjy8nbnlbunzcnh1h:cfr1ne8lecp1fu23s',
      // hromada: Admin3: hromada_id
      'cqai21ple7pe0bif': 'c700rjplbuo1fjq5m:cly53qflebsue991bw'
    }
  }, {
    'formId': 'cy3vehlldsu5aeb6',
    'recordId': 'ckygfqelfmbgux97',
    'parentRecordId': 'cqn1imolfmbgi7w6',
    'fields': {
      'cmxllh3ldsuvom9g': '2023-02',
      'c19j8p9ldsv4qa3o': 'cqjd0o4ld4hbyo12:co8y3rvld4hchx14',
      'c79be77ldswj831t': 'c3vbxtgldsw1as42:cntvm8fle4efhhpn',
      'c62l7s0lbs8mvnx3b': 1,
      'cqvizd5lbs8mvnx3d': 2,
      'ceij8s2lbs8mvnx3f': 3,
      'cpbkputlbs8mvny3h': 4,
      'cmyfyd8lbs8mvny3l': 6,
      'cpkkgqulbs8mvny3j': 5,
      'cgwjgg2ldsx1nzsv': 21,
      'cj41459lbs8mvny3n': 7
    }
  }]
}
//
// const post = (body: ActicityInfoBody) => {
//   fetch('https://www.activityinfo.org/resources/update', {
//     'headers': {
//       'accept': '*/*',
//       'accept-language': 'en-US,en;q=0.9,fr;q=0.8',
//       'authorization': 'a3e219a525a78ef54ddff7ad4225381c',
//       'content-type': 'application/json',
//       'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
//       'sec-ch-ua-mobile': '?0',
//       'sec-ch-ua-platform': '"macOS"',
//       'sec-fetch-dest': 'empty',
//       'sec-fetch-mode': 'cors',
//       'sec-fetch-site': 'same-origin',
//       'x-translation': 'en'
//     },
//     'referrer': 'https://www.activityinfo.org/',
//     'referrerPolicy': 'strict-origin',
//     'body': JSON.stringify(body),
//     'method': 'POST',
//     'mode': 'cors',
//     'credentials': 'include'
//   }).then(console.log)
// }


//
// const api = new ApiClient({
//   baseUrl: 'https://www.activityinfo.org',
//   headers: {
//     authorization: 'Bearer f8d37e665b9a7e1d496f3b74b68cca29'
//   },
// })
// // api.get(`/resources/databases`).then(console.log).catch(console.error)
// // api.post(`/resources/update`, {
// //   body: {
// //     changes: [
// //       {
// //         'formId': 'cas3n26ldsu5aea5',
// //         'recordId': 'c9whq5slfm7bj0l2',
// //         'parentRecordId': null,
// //         'fields': {
// //           'ci607odlbs8w4pe2': 'cr4xx3dlbs86w9y2:cv9umq8lehiq43f103',
// //           'cu3do47ldu8x1eg4m': 'cqnfuewldtzuhuf2:crsa7psleo7l08n4',
// //           'cva2znrle7pd83vd': 'cg7v61llbunvy9t9:c247whblebrkckc6',
// //           'cb7h23tle7pdocme': 'cjy8nbnlbunzcnh1h:csq4sprlecp1fu1n',
// //           'cqai21ple7pe0bif': 'c700rjplbuo1fjq5m:cq8epmplebsu1w5c0'
// //         }
// //       },
// //       {
// //         'formId': 'cy3vehlldsu5aeb6',
// //         'recordId': 'cbz4jqklfm7ug8g3',
// //         'parentRecordId': 'c9whq5slfm7bj0l2',
// //         'fields': {
// //           'cmxllh3ldsuvom9g': '2023-02',
// //           'c19j8p9ldsv4qa3o': 'cqjd0o4ld4hbyo12:co8y3rvld4hchx14',
// //           'c79be77ldswj831t': 'c3vbxtgldsw1as42:cwefhkle4efhhpa',
// //           'ceij8s2lbs8mvnx3f': 200000,
// //           'cpbkputlbs8mvny3h': 0,
// //           'cmyfyd8lbs8mvny3l': 0,
// //           'cpkkgqulbs8mvny3j': 0,
// //           'cgwjgg2ldsx1nzsv': 200000,
// //           'cj41459lbs8mvny3n': 200000
// //         }
// //       },
// //       {
// //         'formId': 'cy3vehlldsu5aeb6',
// //         'recordId': 'cwb200n2zxlfm7zayp4',
// //         'parentRecordId': 'c9whq5slfm7bj0l2',
// //         'fields': {
// //           'cmxllh3ldsuvom9g': '2023-02',
// //           'c19j8p9ldsv4qa3o': 'cqjd0o4ld4hbyo12:co8y3rvld4hchx14',
// //           'c79be77ldswj831t': 'c3vbxtgldsw1as42:c9n7ovzle4efhhp5',
// //           'cn37fnmlbs8mvny3r': 12
// //         }
// //       }
// //     ]
// //   }
// // }).then(console.log)
//

