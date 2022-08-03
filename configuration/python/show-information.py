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
            "showTotal": true
        }
    }
})
headers = {
    'content-type': "application/json",
    'version': "2022-04-07",
    'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"  # <-- Change to your secret key
}
conn.request("POST", "/payment-intents", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))

conn.close()
