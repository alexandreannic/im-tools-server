import {appConf, AppConf} from '../core/conf/AppConf'
import * as Sentry from '@sentry/node'
import {ProfilingIntegration} from '@sentry/profiling-node'
import {logger} from '../helper/Logger'

export class IpSentry {

  constructor(
    private conf: AppConf = appConf,
    private expressApp: any,
    private log = logger('Sentry'),
  ) {
  }

  readonly init = () => {
    if (!this.conf.sentry.dns) {
      this.log.info('Cannot start sentry: No DNS configured.')
      return
    }
    Sentry.init({
      dsn: this.conf.sentry.dns,
      integrations: [
        new Sentry.Integrations.Http({tracing: true}),
        new Sentry.Integrations.Express({app: this.expressApp}),
        new ProfilingIntegration(),
      ],
      tracesSampleRate: 1.0,
      profilesSampleRate: 1.0,
    })
  }
}