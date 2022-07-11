import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")
payload = json.dumps({
  "amount": {
    "value": 1000,
    "currencyCode": "GBP"
  },
  "reference": "Order 234"
})
headers = {
  'version': '2022-07-04',
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ'
}
conn.request("POST", "/payment-intents/", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
conn.close()