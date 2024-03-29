# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

import http.client
import json

import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")

payload = json.dumps({
    "amount": {
        "value": 1000,
        "currencyCode": "GBP"
    },
    "autoExpireAt": "2023-12-01T00:00:00",
    "autoExpireAction": "Release",
    "reference": "Order 234",
    "captureMode": "Manual"
})

headers = {
    'Version': '2022-07-04',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ'
}

conn.request("POST", "/payment-intents/", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))

conn.close()
