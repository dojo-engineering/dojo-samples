# This is a public sandbox API key.
# Don’t submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

$publicSandboxKey = "sk_sandbox_<your_secret_key>"
Invoke-WebRequest `
    -Uri 'https://api.dojo.tech/webhooks' `
    -Method POST `
    -Headers @{ "version" = "2022-04-07"; "Authorization" = "Basic $publicSandboxKey" } `
    -ContentType 'application/json' `
    -Body '{ "events": [ "payment_intent.status_updated" ], "url": "https://example.com/incoming-events" }'