# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")
payload = json.dumps({
    "amount": {
        "value": 4000,
        "currencyCode": "GBP"
    },
    "reference": "Order 245",
    "itemLines": [
        {
          "id": "item 1",
          "name": "Baseball hat",
          "amountTotal": {
                  "value": 1200,
                  "currencyCode": "GBP"
              }
        },
        {
          "id": "item 2",
          "name": "Baseball ball",
          "amountTotal": {
                  "value": 350,
                  "currencyCode": "GBP"
              }
        },
        {
          "id": "item 3",
          "name": "Baseball bat",
          "amountTotal": {
                  "value": 2500,
                  "currencyCode": "GBP"
              }
        }
    ],
})
headers = {
    'Content-Type': "application/json",
    'Version': "2022-04-07",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"  # <-- Change to your secret key
}
conn.request("POST", "/payment-intents", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))

conn.close()