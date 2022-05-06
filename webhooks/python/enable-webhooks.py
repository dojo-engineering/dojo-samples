import http.client

conn = http.client.HTTPSConnection("api.dojo.tech")

payload = "{\"events\":[\"payment_intent.status_updated\"],\"url\":\"https://example.com/incoming-events\"}"

headers = {
    'content-type': "application/json",
    'version': "2022-04-07",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ" # <-- Change to your secret key
    }

conn.request("POST", "/webhooks", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))