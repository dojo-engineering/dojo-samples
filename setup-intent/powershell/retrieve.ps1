# The sandbox API key passed in '$publicSandboxKey' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

$publicSandboxKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"

# Replace <PAYMENT_INTENT_ID> with ID of payment intent you want to cancel.
Invoke-WebRequest `
    -Uri 'https://api.dojo.tech/setup-intents/<PAYMENT_INTENT_ID>' `
    -Method GET `
    -Headers @{
        "Version" = "2024-02-05"
        "Authorization" = "Basic $publicSandboxKey"
    }
