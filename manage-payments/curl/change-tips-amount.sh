# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

curl -v --request POST \
  --url https://api.dojo.tech/payment-intents/<paymentIntentId> \
  --header 'Content-Type: application/json' \
  --header 'IdempotencyKey: 656565gfyd65' \
  --header 'Authorization: Basic <your_api_key>' \
  --header 'Version: 2024-02-05' \
  --data '{
    "tipsAmount": {
      "value": 200,
      "currencyCode": "GBP"
    }
}'
