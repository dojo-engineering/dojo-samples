# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

curl -v --request POST \
  --url https://api.dojo.tech/payment-intents \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ' \
  --header 'Version: 2024-02-05' \
  --data '{
        "amount": {
            "value": 1000,
            "currencyCode": "GBP"
        },
        "reference": "Order-0001",
        "config": {
            "customerEmail": {
                "collectionRequired": true
            },
            "billingAddress": {
                "collectionRequired": true
            },
            "shippingDetails": {
                "collectionRequired": true
            }
        }
    }'
