# The sandbox API key passed in '$publicSandboxKey' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

$publicSandboxKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"

# Replace <payment_intent_id> with ID of payment intent you want to change tips amount for.
Invoke-WebRequest `
    -Uri 'https://api.dojo.tech/payment-intents/<paymentIntentId>/tips-amount' `
    -Method POST `
    -Headers @{
        "Version" = "2024-02-05"
        "Authorization" = "Basic $publicSandboxKey"
    } `
    -ContentType 'application/json' `
    -Body '{
        "tipsAmount": {
            "value": 200,
            "currencyCode": "GBP"
        }
    }'
