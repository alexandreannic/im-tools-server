export const koboServerId = {
  prod: '4820279f-6c3d-47ba-8afe-47f86b16ab5d',
  dev: 'b90ec4b4-4426-48f3-a924-f6a1866ee698'
}

export const koboFormsId = {
  prod: {
    mealCfmInternal: 'aN3Y8JeH2fU3GthrWAs9FG',
    mealCfmExternal: 'aJaGLvGEdpYWk5ift8k87y',
    shelter_cashForRepair: 'a9CjhyhTKVojCdArKmw9yM',
    shelter_NTA: 'aL8oHMzJJ9soPepvK6YU9E',
    shelter_TA: 'aTP5nwZjpyR7oy7bdMZktC',
    bn_Re: 'aKgX4MNs6gCemDQKPeXxY8',
    bn_OldMpcaNfi: 'a4Sx3PrFMDAMZEGsyzgJJg',
    bn_OldMpcaNfiMyko: 'a8WAWB9Yxu2jkgk4Ei8GTk',
    bn_OldMpcaNfiNaa: 'aBGVXW2N26DaLehmKneuyB',
    bn_RapidResponse: 'aMJL9DG8qEcULqTZTKQbrq',
    bn_cashForRentApplication: 'aBupWbhtUmA7so3532tYLa',
    meal_VisitMonitoring: 'a8GkjWBQDfxVADGHWJDrUw',
    protection_Hhs2_1: 'aQDZ2xhPUnNd43XzuQucVR',
    protection_Hhs2: 'aRHsewShwZhXiy8jrBj9zf',
    protection_Hhs1: 'aFU8x6tHksveU2c3hK7RUG',
    protection_communityMonitoring: 'aQHBhYgevdzw8TR2Vq2ZdR',
    protection_groupSession: 'a8Tn94arrSaH2FQBhUa9Zo',
    protection_pss: 'a52hN5iiCW73mxqqfmEAfp',
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
