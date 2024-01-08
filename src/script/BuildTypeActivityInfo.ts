import {ActivityInfoBuildType} from '../feature/activityInfo/databaseInterface/AiGenerateDataseInterface'


(async () => {
  await ActivityInfoBuildType.gbv()
  // await ActivityInfoBuildType.snfiRmm()
  // await ActivityInfoBuildType.generalProtectionRmm()
  // await ActivityInfoBuildType.mpcaRmm()
  // await ActivityInfoBuildType.washRMM()
})()
