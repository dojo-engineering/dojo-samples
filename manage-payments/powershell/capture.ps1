# The sandbox API key passed in '$publicSandboxKey' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

$publicSandboxKey = "sk_sandbox_<your_secret_key>"

# Replace <PAYMENT_INTENT_ID> with ID of payment intent you want to capture.
Invoke-WebRequest `
    -Uri 'https://api.dojo.tech/payment-intents/<PAYMENT_INTENT_ID>/captures' `
    -Method POST `
    -Headers @{ "version" = "2022-04-07"; "Authorization" = "Basic $publicSandboxKey" } `
    -ContentType 'application/json' `
    -Body '{ "amount": 1000 }'