
export const koboServerId = {
  prod: '4820279f-6c3d-47ba-8afe-47f86b16ab5d',
  dev: 'b90ec4b4-4426-48f3-a924-f6a1866ee698'
}

export const koboFormsId = {
  prod: {
    mealCfmInternal: 'aN3Y8JeH2fU3GthrWAs9FG',
    mealCfmExternal: 'aJaGLvGEdpYWk5ift8k87y',
    shelterNTA: 'aL8oHMzJJ9soPepvK6YU9E',
    shelterTA: 'aTP5nwZjpyR7oy7bdMZktC',
    bnre: 'aKgX4MNs6gCemDQKPeXxY8',
    mealVisitMonitoring: 'a8GkjWBQDfxVADGHWJDrUw',
    mpcaEmergencyRegistration: 'aMJL9DG8qEcULqTZTKQbrq',
    protectionHh_2_1: 'aQDZ2xhPUnNd43XzuQucVR',
    protectionHh_2: 'aRHsewShwZhXiy8jrBj9zf',
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
