import requests
import json

url = "https://api.dojo.tech/payment-intents/"

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
  "captureMode": "Manual",
  "details": {
    "showTotal": "true",
    "showReference": "true"
  },
  "afterExpireAction": "Capture",
  "afterExpireAt": "2022-05-26T22:37:32.9699998Z",
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

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)