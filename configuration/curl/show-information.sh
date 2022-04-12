curl -v --request POST \
  --url https://api.dojo.tech/payment-intents \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ' \
  --header 'version: 2022-01-03'\
  --data '{
           "amount":{"value":1510,"currencyCode":"GBP"},
           "reference":"Order-0001",
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
            }'