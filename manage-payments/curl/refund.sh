curl -v --request POST \
  --url https://api.dojo.tech/api/payment-intents/%7Bpi_pT08VyWG3EC_HQB4NBVliA%7D/refunds \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_sandbox_kqCwRaWEsl9OM0xNSxh00eayT9k8hAqURGeNQseeV62rMxO5ZiZHub0-XRqkzPLfES2fVUl0seMOyujCIiYaMTaDyiBPf25b7W3Gr3oE0qbpTeM4MRuUMgtDt_scAEfJdqYBlBB_gt_31Bw7FihTISp2WIXXGeTD5WbwhdIhraIJVWR7jo2Hy-xKlBpK-lE8' \
  --header 'version: 2022-01-03' \
  --header 'idempotencyKey: 656565gfyd65' \
  --data '{"amount":1000,"refundReason":"Demo refund","notes":"Duplicate transaction"}'