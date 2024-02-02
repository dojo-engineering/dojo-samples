# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

curl -v --request POST \
  --url https://api.dojo.tech/payment-intents \
  --header 'content-type: application/json' \
  --header 'authorization: Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ' \
  --header 'version: 2024-01-15' \
  --data '{
    "amount": {
      "value": 4000,
      "currencyCode": "GBP"
    },
    "reference": "Order-0001",
    "itemLines": [
      {
        "id": "item 1",
        "caption": "Baseball hat",
        "amountTotal": {
          "value": 1200,
          "currencyCode": "GBP"
        }
      },
      {
        "id": "item 2",
        "caption": "Baseball ball",
        "amountTotal": {
          "value": 350,
          "currencyCode": "GBP"
        }
      },
      {
        "id": "item 3",
        "caption": "Baseball bat",
        "amountTotal": {
          "value": 2500,
          "currencyCode": "GBP"
        }
      }
    ]
  }'
