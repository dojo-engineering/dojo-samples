curl --location --request POST 'https://api.dojo.tech/payment-intents/' \
--header 'version: 2022-05-26' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ' \
--data-raw '{
    "amount": {
        "value": 1000,
        "currencyCode": "GBP"
    },
    "tipsAmount": {
        "value": 10,
        "currencyCode": "GBP"
    },
    "reference": "Order 234",
    "description": "Demo payment intent",
    "captureMode": "Auto",
    "details": {
        "showTotal": "true",
        "showReference": "true"
    },
    "config": {
        "payment": {
            "customAmountAllowed": "true",
            "tipsAllowed": "true"
        }
    }
}'