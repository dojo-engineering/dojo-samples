import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")
payload = json.dumps({
    "amount": {
        "value": 1000,
        "currencyCode": "GBP"
    },
    "reference": "Order-0001",
    "config": {
        "title": "The Company",
    }
})
headers = {
    'content-type': "application/json",
    'version': "2022-04-07",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"  # <-- Change to your secret key
}
conn.request("POST", "/payment-intents", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
