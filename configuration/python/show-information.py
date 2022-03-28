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
    'version': "2022-01-03",
    'Authorization': "Basic sk_sandbox_kqCwRaWEsl9OM0xNSxh00eayT9k8hAqURGeNQseeV62rMxO5ZiZHub0-XRqkzPLfES2fVUl0seMOyujCIiYaMTaDyiBPf25b7W3Gr3oE0qbpTeM4MRuUMgtDt_scAEfJdqYBlBB_gt_31Bw7FihTISp2WIXXGeTD5WbwhdIhraIJVWR7jo2Hy-xKlBpK-lE8"  # <-- Change to your secret key
}
conn.request("POST", "/payment-intents", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
