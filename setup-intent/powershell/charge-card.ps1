# The sandbox API key passed in '$publicSandboxKey' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

$publicSandboxKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"

Invoke-WebRequest `
    -Uri 'https://api.dojo.tech/payment-intents/pi_sandbox_Dcqx7k8pUUKedgB6wD1J1A/charge' `
    -Method POST `
    -Headers @{
        "Version" = "2024-01-15"
        "Authorization" = "Basic $publicSandboxKey"
    }
