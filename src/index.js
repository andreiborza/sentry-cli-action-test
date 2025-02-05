import core from '@actions/core'
import SentryCli from "@sentry/cli";

try {
  const cli = new SentryCli()

  const workingDirectory = core.getInput('working_directory')

  const currentWorkingDirectory = process.cwd();
  if (workingDirectory !== null && workingDirectory.length > 0) {
    process.chdir(workingDirectory);
  }

  const sentryMsg = core.getInput('sentry_msg');
  const cacheHit = process.env['CACHE_HIT'];
  console.log('Got cache hit: ', cacheHit)

  console.log(`Sending event to Sentry: ${sentryMsg}`)
  cli.execute(['send-event', '-m', sentryMsg], true)
} catch (error) {
  core.setFailed(error.message);
}
