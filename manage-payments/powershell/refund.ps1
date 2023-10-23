# The sandbox API key passed in '$publicSandboxKey' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

$publicSandboxKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"

# Replace <payment_intent_id> with ID of payment intent you want to refund.
Invoke-WebRequest `
    -Uri 'https://api.dojo.tech/payment-intents/<paymentIntentId>/refunds' `
    -Method POST `
    -Headers @{
        "Version" = "2022-04-07"
        "Authorization" = "Basic $publicSandboxKey"
        "IdempotencyKey" = "656565gfyd65"
    } `
    -ContentType 'application/json' `
    -Body '{
        "amount": 1000,
        "refundReason": "Demo refund",
        "notes": "Duplicate transaction"
    }'
