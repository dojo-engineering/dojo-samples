import http.client

conn = http.client.HTTPSConnection("api.dojo.tech")

payload = "{\"tipsAmount\":{\"value\":200,\"currencyCode\":\"GBP\"}}"

headers = {
    'content-type': "application/json",
    'version': "2022-04-07",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"
    }

conn.request("POST", "/payment-intents/%7BpaymentIntentId%7D/tips-amount", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))