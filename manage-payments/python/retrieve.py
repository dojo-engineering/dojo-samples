# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")

headers = {
    'Version': "2022-04-07",
    'Authorization': "Basic <your_api_key>"
    }

conn.request("GET", f"/payment-intents/{paymentIntentId}", headers=headers)

res = conn.getresponse()
data = res.read()
resp_data = {}
resp_data['status'] = json.loads(data)["status"]

print(resp_data)

conn.close()