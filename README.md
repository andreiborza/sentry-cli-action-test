# Test for Sentry-CLI via actions

Example usage:

```yaml
uses: actions/sentry-cli-action-test@e76147da8e5c81eaf017dede5645551d4b94427b
env: 
  SENTRY_DSN: ${{ secrets.SENTRY_DSN }}
with:
  event: 'Hello from actions'
```