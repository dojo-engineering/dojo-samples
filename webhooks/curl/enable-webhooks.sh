# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

curl -v --request POST \
  --url https://api.dojo.tech/webhooks \
  --header 'Authorization: Basic sk_sandbox_<your_secret_key>' \
  --header 'content-type: application/json' \
  --header 'version: 2022-04-07' \
  --data '{"events":["payment_intent.status_updated"],"url":"https://example.com/incoming-events"}'