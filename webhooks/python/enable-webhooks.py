# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

import http.client

conn = http.client.HTTPSConnection("api.dojo.tech")

payload = "{\"events\":[\"payment_intent.status_updated\"],\"url\":\"https://example.com/incoming-events\"}"

headers = {
    'Content-Type': "application/json",
    'Version': "2022-04-07",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ" # <-- Change to your secret key
    }

conn.request("POST", "/webhooks", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

conn.close()