import core from '@actions/core'
import SentryCli from "@sentry/cli";

try {
  const cli = new SentryCli()
  const inputs = core.getInput('INPUTS');
  console.log('actions inputs', inputs)
  const sentryMsg = inputs.sentry_msg
  console.log(`Sending event to Sentry: ${sentryMsg}`)
  cli.execute(['send-event', '-m', sentryMsg], true)
} catch (error) {
  core.setFailed(error.message);
}
