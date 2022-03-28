import http.client

conn = http.client.HTTPSConnection("api.dojo.tech")

headers = {
    'version': "2022-01-03",
    'Authorization': "Basic sk_sandbox_kqCwRaWEsl9OM0xNSxh00eayT9k8hAqURGeNQseeV62rMxO5ZiZHub0-XRqkzPLfES2fVUl0seMOyujCIiYaMTaDyiBPf25b7W3Gr3oE0qbpTeM4MRuUMgtDt_scAEfJdqYBlBB_gt_31Bw7FihTISp2WIXXGeTD5WbwhdIhraIJVWR7jo2Hy-xKlBpK-lE8"
    }

conn.request("POST", "/payment-intents/%7BpaymentIntentId%7D/reversal", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))