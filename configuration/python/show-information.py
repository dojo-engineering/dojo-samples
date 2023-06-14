# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")
payload = json.dumps({
    "amount": {
        "value": 1510,
        "currencyCode": "GBP"
    },
    "reference": "Order 245",
    "itemLines": [
        {
            "id": "item 1",
            "quantity": 4,
            "caption": "Dog socks",
            "amountTotal": {
                "value": 400,
                "currencyCode": "GBP"
            }
        },
        {
            "id": "item 5",
            "quantity": 1,
            "caption": "Dog bandana",
            "amountTotal": {
                "value": 600,
                "currencyCode": "GBP"
            }
        }
    ],
    "taxLines": [
        {
            "id": "vat",
            "caption": "VAT",
            "subCaption": "10%",
            "amountTotal": {
                "value": 10,
                "currencyCode": "GBP"
            }
        },
        {
            "id": "delivery",
            "caption": "Delivery",
            "amountTotal": {
                "value": 500,
                "currencyCode": "GBP"
            }
        }
    ],
    "config": {
        "details":
        {
            "showTotal": True
        }
    }
})
headers = {
    'Content-Type': "application/json",
    'Version': "2022-04-07",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"  # <-- Change to your secret key
}
conn.request("POST", "/payment-intents", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))

conn.close()
