# The sandbox API key passed in '$publicSandboxKey' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

$publicSandboxKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"

# Replace <payment_intent_id> with ID of payment intent you want to reverse.
Invoke-WebRequest `
    -Uri 'https://api.dojo.tech/payment-intents/<paymentIntentId>/reversal' `
    -Method POST `
    -Headers @{
        "Version" = "2022-04-07"
        "Authorization" = "Basic $publicSandboxKey"
    }
    -ContentType 'application/json'
