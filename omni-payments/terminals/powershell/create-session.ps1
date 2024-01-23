# The sandbox API key passed in '$publicSandboxKey' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

$publicSandboxKey = "sk_sandbox_1WYDtq7yAdqhmQ7KEUAvPlCCRBYc9HTY9KOPJKZtfWkzsSISj1L8c4GG5l4pBB5Bj85hkJgTL9vmOmki5QnQfQ"

Invoke-WebRequest `
    -Uri 'https://staging-api.dojo.dev/master/terminal-sessions' `
    -Method POST `
    -Headers @{
        "Version" = "2023-12-15"
        "Authorization" = "Basic $publicSandboxKey"
        "software-house-id" = "softwareHouse1"
        "reseller-id" = "reseller1"
    } `
    -ContentType 'application/json' `
    -Body '{
        "terminalId": "tm_65a7e8c0bee9b6390862337c",
        "details": {
            "sale": {
                "paymentIntentId": "pi_sandbox_bwCK9L2q8kOq7QV1N5aPyQ"
            },
            "sessionType": "Sale"
        }
    }'