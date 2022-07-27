import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")

headers = {
    'version': "2022-04-07",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"
    }

conn.request("GET", f"/payment-intents/{paymentIntentId}", headers=headers)

res = conn.getresponse()
data = res.read()
resp_data = {}
resp_data['status'] = json.loads(data)["status"]

print(resp_data)
conn.close()