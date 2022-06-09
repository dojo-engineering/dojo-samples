import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")
payload = json.dumps({
  "amount": {
    "value": 1000,
    "currencyCode": "GBP"
  },
  "tipsAmount": {
    "value": 10,
    "currencyCode": "GBP"
  },
  "reference": "Order 234",
  "description": "Demo payment intent",
  "captureMode": "Auto",
  "details": {
    "showTotal": "true",
    "showReference": "true"
  },
  "config": {
    "payment": {
      "customAmountAllowed": "true",
      "tipsAllowed": "true"
    }
  }
})
headers = {
  'version': '2022-05-26',
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ'
}
conn.request("POST", "/payment-intents/", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))