curl -v --request POST \
  --url https://api.dojo.tech/api/payment-intents/%7Bpi_pT08VyWG3EC_HQB4NBVliA6%7D/receipt \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ' \
  --header 'version: 2022-04-07'\
  --data '{"emails":["gabriel@dojo.com","mari@dojo.com"]}'