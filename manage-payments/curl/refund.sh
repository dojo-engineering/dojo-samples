# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

curl -v --request POST \
  --url https://api.dojo.tech/payment-intents/pi_sandbox_sBkIfznr1Em0vCE0MkZpc/refunds \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ' \
  --header 'Version: 2022-04-07' \
  --header 'IdempotencyKey: 656565gfyd65' \
  --data '{
    "amount": 1000,
    "refundReason": "Demo refund",
    "notes": "Duplicate transaction"
}'
