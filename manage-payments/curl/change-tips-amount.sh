curl -v --request POST \
  --url https://api.dojo.tech/payment-intents/pi_sandbox_sBkIfznr1Em0vCE0MkZpc/tips-amount \
  --header 'content-type: application/json' \
  --header 'idempotencyKey: 656565gfyd65' \
  --header 'Authorization: Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ' \
  --header 'version: 2022-04-07' \
  --data '{"tipsAmount":{"value":200,"currencyCode":"GBP"}}'