import http.client

conn = http.client.HTTPSConnection("api.dojo.tech")

payload = "{\"amount\":1000,\"refundReason\":\"Demo refund\",\"notes\":\"Duplicate transaction\"}"

headers = {
    'content-type': "application/json",
    'idempotencyKey': "656565gfyd65",
    'version': "2022-01-03",
    'Authorization': "Basic sk_sandbox_kqCwRaWEsl9OM0xNSxh00eayT9k8hAqURGeNQseeV62rMxO5ZiZHub0-XRqkzPLfES2fVUl0seMOyujCIiYaMTaDyiBPf25b7W3Gr3oE0qbpTeM4MRuUMgtDt_scAEfJdqYBlBB_gt_31Bw7FihTISp2WIXXGeTD5WbwhdIhraIJVWR7jo2Hy-xKlBpK-lE8"
    }

conn.request("POST", "/payment-intents/%7BpaymentIntentId%7D/refunds", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))