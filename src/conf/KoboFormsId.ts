
export const koboFormsId = {
  
  prod: {
    protectionHh: 'aFU8x6tHksveU2c3hK7RUG',
    fcrmMpca: 'a4Sx3PrFMDAMZEGsyzgJJg',
    fcrmMpcaMyko: 'a8WAWB9Yxu2jkgk4Ei8GTk',
    fcrmMpcaNAA: 'aBGVXW2N26DaLehmKneuyB',
  },
  dev: {
    fcrmMpca: 'aQRGMGocoAhcMLaHDh2Tbn',
    fcrmMpcaMyko: 'aLRh952v3QJ6MdXd2M2WVq',
    fcrmMpcaNAA: 'aPPgvLA2YZUCX2hU8thw22',
  }
}

interface KoboForm {
  id: string
  name: string
  server: string
  groupName: string
}

// const x:  = [
//   { server: 'prod', id: '', name: '', groupName: ''},
//   { server: 'prod', id: '', name: 'global', groupName: ''},
//   { server: 'prod', id: '', name: 'myko', groupName: ''},
//   { server: 'prod', id: '', name: 'NAA', groupName: ''},
//   { server: 'dev', id: '', name: 'NAA', groupName: ''},
//   { server: 'dev', id: '', name: 'NAA', groupName: ''},
//   { server: 'dev', id: '', name: 'NAA', groupName: ''},
