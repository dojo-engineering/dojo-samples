import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")
payload = json.dumps({
    "amount": {
        "value": 1000,
        "currencyCode": "GBP"
    },
    "reference": "Order 245",
    "config": {
        "billingAddress": {
            "collectionRequired": True
        },
        "shippingDetails": {
            "collectionRequired": True
        },
        "customerEmail": {
            "collectionRequired": True
        }
    }
})
headers = {
    'content-type': "application/json",
    'version': "2022-01-03",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"  # <-- Change to your secret key
}
conn.request("POST", "/payment-intents", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
