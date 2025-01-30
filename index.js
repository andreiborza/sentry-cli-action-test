import core from '@actions/core'
import SentryCli from "@sentry/cli";

try {
  const cli = new SentryCli()
  const event = core.getInput('event');
  console.log(`Sending event to Sentry: ${event}`)
  cli.execute(['send-event', '-m', event], true)
} catch (error) {
  core.setFailed(error.message);
}
