import http.client

conn = http.client.HTTPSConnection("api.dojo.tech")

headers = {
    'version': "2022-01-03",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"
    }
conn.request("DELETE", "/payment-intents/%7BpaymentIntentId%7D", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))