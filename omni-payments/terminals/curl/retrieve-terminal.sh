# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

curl --location --request GET 'https://staging-api.dojo.dev/master/terminals/tm_sandbox_65aaa2a8637e6374ac2447c9' \
    --header 'version: 2024-02-05' \
    --header 'software-house-id: softwareHouse1' \
    --header 'reseller-id: reseller1' \
    --header 'Accept: application/json' \
    --header 'Authorization: Basic sk_sandbox_1WYDtq7yAdqhmQ7KEUAvPlCCRBYc9HTY9KOPJKZtfWkzsSISj1L8c4GG5l4pBB5Bj85hkJgTL9vmOmki5QnQfQ'
