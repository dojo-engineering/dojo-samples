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
    "merchantInitiatedTransactionType": "NoShow",
    "reference": "Dojo Cafe | Booking request for Table 4",
    "terms": "In case of no-show, the customer authorizes us to charge their card with table booking fee."
})
headers = {
    'Content-Type': "application/json",
    'Version': "2022-04-07",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ" # <-- Change to your secret key
}
conn.request("POST", "/payment-intents", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))

conn.close()
