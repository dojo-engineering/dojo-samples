# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")
payload = json.dumps({
    "amount": {
        "value": 1000,
        "currencyCode": "GBP"
    },
    "reference": "Order 245",
    "paymentMethods": ["Card","Wallet"]
})
headers = {
    'content-type': "application/json",
    'version': "2023-01-30",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"  # <-- Change to your secret key
}
conn.request("POST", "/payment-intents", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))

conn.close()
