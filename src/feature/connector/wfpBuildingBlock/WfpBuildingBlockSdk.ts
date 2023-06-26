import {ApiClient} from '../../../core/client/ApiClient'

interface WfpBbPagination {
  limit?: number
  offset?: number
}

interface WFPBuildingBlockSdkProps {
  otpUrl: string
}

export class WFPBuildingBlockSdk {

  constructor(private client: ApiClient) {

  }

  readonly getAssistanceProvided = ({limit = 1000, offset = 0}: WfpBbPagination) => {
    return this.client.post(`/manager/deduplicated-entitlements/list`, {
      body: {
        organization: 'DRC',
        _limit: limit,
        _offset: offset,
      }
    })
  }


}