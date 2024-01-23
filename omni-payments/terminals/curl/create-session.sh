# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

curl --location --request POST 'https://staging-api.dojo.dev/master/terminal-sessions' \
    --header 'version: 2023-12-15' \
    --header 'software-house-id: softwareHouse1' \
    --header 'reseller-id: reseller1' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'Authorization: Basic sk_sandbox_1WYDtq7yAdqhmQ7KEUAvPlCCRBYc9HTY9KOPJKZtfWkzsSISj1L8c4GG5l4pBB5Bj85hkJgTL9vmOmki5QnQfQ' \
    --data-raw '{
        "terminalId": "tm_65a7e8c0bee9b6390862337c",
        "details": {
            "sale": {
                "paymentIntentId": "pi_sandbox_81Q7HAZSGkWLKFx_DFEe9Q"
        },
            "sessionType": "Sale"
        }
    }'