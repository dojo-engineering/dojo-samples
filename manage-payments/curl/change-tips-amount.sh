curl -v --request POST \
  --url https://api.dojo.tech/api/payment-intents/%7Bpi_pT08VyWG3EC_HQB4NBVliA%7D/tips-amount \
  --header 'content-type: application/json' \
  --header 'idempotencyKey: 656565gfyd65' \
  --header 'Authorization: Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ' \
  --header 'version: 2022-04-07' \
  --data '{"tipsAmount":{"value":200,"currencyCode":"GBP"}}'