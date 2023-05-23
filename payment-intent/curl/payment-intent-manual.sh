# The sandbox API key passed in 'authorization' is public.
# Don’t submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

curl -v --request POST \
    --url https://api.dojo.tech/payment-intents \
    --header 'content-type: application/json' \
    --header 'Authorization: Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ' \
    --header 'version: 2022-07-04' \
    --data '{"captureMode":"Manual",
            "autoExpireAt": "2023-12-01T00:00:00",
            "autoExpireAction": "Release",
            "amount":{"value":1000,"currencyCode":"GBP"},
            "reference":"Order-0001"
            }'
