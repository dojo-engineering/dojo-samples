import http.client
import json


def create_payment_intent(capture_mode="Auto"):
    conn = http.client.HTTPSConnection("api.dojo.tech")
    payload = json.dumps({
        "amount": {
            "value": 500,
            "currencyCode": "GBP"
        },
        "captureMode": capture_mode,
        "reference": "Order 245",
        "config": {
            "payment": {
                "customAmountAllowed": True,
                "tipsAllowed": True
            }
        }
    })
    headers = {
        'Content-Type': "application/json",
        'Version': "2022-04-07",
        'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"
        # <-- Change to your secret key
    }
    conn.request("POST", "/payment-intents", payload, headers)
    res = conn.getresponse()
    data = res.read()
    conn.close()

    return json.loads(data)['id']
