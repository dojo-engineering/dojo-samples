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
    "transactionSource": "MOTO"
})
headers = {
    'content-type': "application/json",
    'version': "2022-04-07",
    'authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"  # <-- Change to your secret key
}
conn.request("POST", "/payment-intents/", payload, headers)
res = conn.getresponse()
data = res.read()
last_id = json.loads(data)["id"]
url = 'https://pay.dojo.tech/checkout/' + last_id
conn.close()