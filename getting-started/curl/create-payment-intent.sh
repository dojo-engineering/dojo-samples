curl -v --request POST \
  --url https://api.dojo.tech/payment-intents \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_sandbox_c8oLGaI__msxsXbpBDpdt5Fbi5WA7QChf4rI7pFvt8vUx3X2a0RsB0q-2rmqp6T7HF3d1yw06WD81RbaFXiX2A' \
  --header 'version: 2022-01-03' \
  --data '{"captureMode":"Auto",
            "amount":{"value":1000,"currencyCode":"GBP"},
            "reference":"Order-0001"
            }'