import {EcrecClient} from './EcrecClient'
import {EcrecGetDataFilters, EcrecGetDataResponse, EcrecMsdStatus, EcrecSmeStatus} from './EcrecSdkType'
import {format} from 'date-fns'

export class EcrecSdk {

  constructor(private client: EcrecClient) {
  }

  private static readonly dateFormat = 'dd.MM.yyyy HH:mm:ss'

  private static readonly formatDate = (d: Date) => format(d, EcrecSdk.dateFormat)

  readonly getMsd = async (params: EcrecGetDataFilters<EcrecMsdStatus>) => {
    const body = {
      parameters: null,
      page: params.offset && params.limit ? (params.offset / params.limit) : 1,
      count: params.limit ?? 10,
      filterData: {
        filterRangeInts: [],
        filterRangeDoubles: [],
        filterLongs: params.status ? [{
          fieldName: 'typeStatusId',
          values: params.status,
        }] : [],
        filterStrings: [],
        filterTimes: [],
        filterDates: params.end || params.start ? [{
          dateEnd: params.end && EcrecSdk.formatDate(params.end),
          dateStart: params.start && EcrecSdk.formatDate(params.start),
          dateFormat: EcrecSdk.dateFormat,
          fieldName: 'tmspDtCreate',
        }] : []
      },
      searchData: [],
      sortData: {
        fieldName: 'tmspDtCreate',
        type: 'DESC'
      }
    }
    console.log(body)
    return this.client.post<EcrecGetDataResponse<any>>(`/admin/msd-redesigned/get-list-data`, {
        body,
        ...params,
      }
    )
  }

  readonly getData = async () => {
    return this.client.post('https://lap.drc.ngo/admin/msd/get-list-data', {
      body: {
        'parameters': null,
        'page': 1,
        'count': 10,
        'filterData': {'filterRangeInts': [], 'filterRangeDoubles': [], 'filterLongs': [], 'filterStrings': [], 'filterTimes': [], 'filterDates': []},
        'searchData': [],
        'sortData': {'fieldName': 'tmspDtCreate', 'type': 'DESC'}
      }
    })
  }

}
