# This is a public sandbox API key.
# Don’t submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.
$publicSandboxKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"
Invoke-WebRequest `
    -Uri 'https://api.dojo.tech/payment-intents' `
    -Method POST `
    -Headers @{ "version" = "2022-04-07"; "Authorization" = "Basic $publicSandboxKey" } `
    -ContentType 'application/json' `
    -Body '{
            "amount": {
                "value": 1510,
                "currencyCode": "GBP"
            },
            "reference": "Order-0001",
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
                "details": {
                    "showTotal": true
                }
            }
        }'