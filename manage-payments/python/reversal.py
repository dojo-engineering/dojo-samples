import http.client

conn = http.client.HTTPSConnection("api.dojo.tech")

headers = {
    'version': "2022-04-07",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"
    }

conn.request("POST", f"/payment-intents/{paymentIntentId}/reversal", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
conn.close()