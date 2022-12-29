// const options = {
//   method: 'GET',
//   headers: {Authorization: 'Token 8eafb975ac74bc2c8cfe57fb6879ea362368089c'}
// }
//
// fetch('https://kf.kobotoolbox.org/api/v2/assets/a5bMNqnRbitCHuM9j4Kbd3.json', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err))


import {ApiClient} from './client/ApiClient'
import {KoboClient} from './client/KoboClient/KoboClient'
import {Server} from './Server'
import {appConf} from './conf/AppConf'


(async () => {
  const conf = appConf
  const http = new ApiClient({
    baseUrl: conf.kobo.url + '/api',
    headers: {
      Authorization: conf.kobo.token,
    }
  })
  const client = new KoboClient(http)

  new Server(conf).start()
})()
