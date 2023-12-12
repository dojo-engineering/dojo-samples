# The sandbox API key passed in '$publicSandboxKey' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

$publicSandboxKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"

Invoke-WebRequest `
    -Uri 'https://api.dojo.tech/payment-intents' `
    -Method POST `
    -Headers @{
        "Version" = "2022-04-07"
        "Authorization" = "Basic $publicSandboxKey"
    } `
    -ContentType 'application/json' `
    -Body '{
        "amount": {
            "value": 1000,
            "currencyCode": "GBP"
        },
        "reference": "Dojo Cafe | Table no. 4.",
        "setupIntentId": "<setupIntentId>"
    }'