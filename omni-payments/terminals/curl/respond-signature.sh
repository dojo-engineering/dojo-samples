# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

curl --location --request PUT 'https://api.dojo.tech/terminal-sessions/ts_sandbox_65aa64bf637e6374ac244115/signature' \
    --header 'version: 2024-02-05' \
    --header 'software-house-id: softwareHouse1' \
    --header 'reseller-id: reseller1' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'Authorization: Basic sk_sandbox_1WYDtq7yAdqhmQ7KEUAvPlCCRBYc9HTY9KOPJKZtfWkzsSISj1L8c4GG5l4pBB5Bj85hkJgTL9vmOmki5QnQfQ' \
    --data-raw '{
        "accepted": true
}'
