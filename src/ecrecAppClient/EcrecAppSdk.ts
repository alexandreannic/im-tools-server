import {EcrecAppClient} from './EcrecAppClient'

export class EcrecAppSdk {
  
  constructor(private client: EcrecAppClient) {
  }

  readonly getData = async () => {
    return this.client.post('https://lap.drc.ngo/admin/msd/get-list-data', {
      headers: {
        // Important otherwise we are redirected to the home page
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: '{"parameters":null,"page":1,"count":10,"filterData":{"filterRangeInts":[],"filterRangeDoubles":[],"filterLongs":[],"filterStrings":[],"filterTimes":[],"filterDates":[]},"searchData":[],"sortData":{"fieldName":"tmspDtCreate","type":"DESC"}}'
    })
  }

}
