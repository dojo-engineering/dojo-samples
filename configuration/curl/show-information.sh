curl --request POST \
  --url https://api.dojo.tech/payment-intents \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A' \
  --header 'version: 2022-01-03'\
  --data '{
           "amount":{"value":1000,"currencyCode":"GBP"},
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
            ]
            }'