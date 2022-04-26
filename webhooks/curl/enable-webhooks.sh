curl -v --request POST \
  --url https://api.dojo.tech/webhooks \
  --header 'Authorization: Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ' \
  --header 'content-type: application/json' \
  --header 'version: 2022-04-07' \
  --data '{"events":["payment_intent.status_updated"],"url":"https://example.com/incoming-events"}'