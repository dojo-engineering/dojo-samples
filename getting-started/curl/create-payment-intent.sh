curl -v --request POST \
  --url https://api.dojo.tech/payment-intents \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_sandbox_UrieoHWSzHeSYqk8Yw4Ti_d7GIBBXsJOkEyIl5L_TXzWcS7jFyrX6kn6xdtmBijP' \
  --header 'version: 2022-01-03' \
  --data '{"captureMode":"Auto",
            "amount":{"value":1000,"currencyCode":"GBP"},
            "reference":"Order-0001"
            }'