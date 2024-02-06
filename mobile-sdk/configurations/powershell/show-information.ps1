# The sandbox API key passed in '$publicSandboxKey' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

$publicSandboxKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"

Invoke-WebRequest `
    -Uri 'https://api.dojo.tech/payment-intents' `
    -Method POST `
    -Headers @{
        "version" = "2024-02-05"
        "authorization" = "Basic $publicSandboxKey"
    } `
    -ContentType 'application/json' `
    -Body '{
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
