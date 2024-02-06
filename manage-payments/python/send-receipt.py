# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

import http.client

conn = http.client.HTTPSConnection("api.dojo.tech")

payload = "{\"emails\":[\"gabriel@dojo.com\",\"mari@dojo.com\"]}"

headers = {
    'Content-Type': "application/json",
    'Version': "2024-02-05",
    'Authorization': "Basic <your_api_key>"
    }

conn.request("POST", "/payment-intents/<paymentIntentId>/receipt", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

conn.close()