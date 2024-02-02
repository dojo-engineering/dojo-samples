# This is a public sandbox API key.
# Don’t submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

$publicSandboxKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"

Invoke-WebRequest `
    -Uri 'https://api.dojo.tech/webhooks' `
    -Method POST `
    -Headers @{
        "version" = "2024-01-15"
        "Authorization" = "Basic $publicSandboxKey"
    } `
    -ContentType 'application/json' `
    -Body '{
        "events": [ "payment_intent.status_updated" ],
        "url": "https://example.com/incoming-events"
    }'
