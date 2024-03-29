# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

curl -v --request POST \
  --url https://api.dojo.tech/payment-intents \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Basic sk_sandbox_kqCwRaWEsl9OM0xNSxh00eayT9k8hAqURGeNQseeV62rMxO5ZiZHub0-XRqkzPLfES2fVUl0seMOyujCIiYaMTaDyiBPf25b7W3Gr3oE0qbpTeM4MRuUMgtDt_scAEfJdqYBlBB_gt_31Bw7FihTISp2WIXXGeTD5WbwhdIhraIJVWR7jo2Hy-xKlBpK-lE8' \
  --header 'Version: 2024-02-05' \
  --data '{
    "amount": {
      "value": 1000,
      "currencyCode": "GBP"
    },
    "reference": "Order-0001",
    "config": {
      "customerEmail": {
        "collectionRequired": true
      },
      "billingAddress": {
        "collectionRequired": true
      }
    }
  }'

