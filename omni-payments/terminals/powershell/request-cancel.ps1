# The sandbox API key passed in '$publicSandboxKey' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

$publicSandboxKey = "sk_sandbox_1WYDtq7yAdqhmQ7KEUAvPlCCRBYc9HTY9KOPJKZtfWkzsSISj1L8c4GG5l4pBB5Bj85hkJgTL9vmOmki5QnQfQ"

Invoke-WebRequest `
    -Uri 'https://staging-api.dojo.dev/master/terminal-sessions/ts_sandbox_65af01524a36e6a14356dbc0/cancel'`
    -Method PUT `
    -Headers @{
        "Version" = "2024-02-05"
        "Authorization" = "Basic $publicSandboxKey"
        "software-house-id" = "softwareHouse1"
        "reseller-id" = "reseller1"
    }
