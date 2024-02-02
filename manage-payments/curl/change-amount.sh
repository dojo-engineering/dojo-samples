# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

curl -v --request POST \
  --url https://api.dojo.tech/payment-intents/<paymentIntentId> \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Basic <your_api_key>' \
  --header 'Version: 2024-01-15' \
  --data '{
    "amount": {
      "value": 1000,
      "currencyCode": "GBP"
    }
}'
