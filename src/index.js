import core from '@actions/core'
import SentryCli from "@sentry/cli";

try {
  const cli = new SentryCli()
  const sentryMsg = core.getInput('sentry_msg');
  const cacheHit = core.getInput('cache_hit');
  console.log('Got cache hit: ', cacheHit)

  console.log(`Sending event to Sentry: ${sentryMsg}`)
  cli.execute(['send-event', '-m', sentryMsg], true)
} catch (error) {
  core.setFailed(error.message);
}
