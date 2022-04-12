import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")
payload = json.dumps({
    "amount": {
        "value": 1000,
        "currencyCode": "GBP"
    },
    "reference": "Order 245"
})
headers = {
    'content-type': "application/json",
    'version': "2022-01-03",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdt5Fbi5WA7QChf4rI7pFvt8vUx3X2a0RsB0q-2rmqp6T7HF3d1yw06WD81RbaFXiX2A"  # <-- Change to your secret key
}
conn.request("POST", "/payment-intents", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
