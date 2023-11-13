import {LegalaidSdk} from '../../feature/connector/legalaid/LegalaidSdk'
import {seq} from '@alexandreannic/ts-utils'
import {MaybePeriod} from '../../core/Type'

interface Filters extends MaybePeriod {
}

export class ServiceLegalAid {

  constructor(
    private sdk: LegalaidSdk,
  ) {
  }

  readonly getStats = async ({start, end}: Filters) => {
    const offices = await this.sdk.fetchOfficesAll()
      .then(_ => Object.values(_).flatMap(_ => _.id))

    const groups$ = this.sdk.fetchGroupsByOffices({
      offices,
      start,
      end
    }).then(_ => seq(_.data).sum(_ => _.women + _.men))

    const individuals$ = await this.sdk.fetchBeneficiariesByOffices({
      offices, start, end
    }).then(_ => _.data.length)

    return Promise.all([groups$, individuals$])
      .then(([group, individuals]) => ({
        individuals,
        group,
        printedMaterial: 50,
        localAidPartner: 23,
      }))
  }

}
