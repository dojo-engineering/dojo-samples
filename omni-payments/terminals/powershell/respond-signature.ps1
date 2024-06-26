# The sandbox API key passed in '$publicSandboxKey' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

$publicSandboxKey = "sk_sandbox_1WYDtq7yAdqhmQ7KEUAvPlCCRBYc9HTY9KOPJKZtfWkzsSISj1L8c4GG5l4pBB5Bj85hkJgTL9vmOmki5QnQfQ"

Invoke-WebRequest `
    -Uri 'https://api.dojo.tech/terminal-sessions/ts_sandbox_65aa64bf637e6374ac244115/signature'`
    -Method PUT `
    -Headers @{
        "Version" = "2024-02-05"
        "Authorization" = "Basic $publicSandboxKey"
        "software-house-id" = "softwareHouse1"
        "reseller-id" = "reseller1"
    }`
    -ContentType 'application/json' `
    -Body '{
        "accepted": true
    }'