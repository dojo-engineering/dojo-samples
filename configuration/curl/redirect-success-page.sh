curl -v --request POST \
  --url https://api.dojo.tech/payment-intents \
  --header 'content-type: application/json' \
  --header 'Authorization: Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ' \
  --header 'version: 2022-01-03'\
  --data '{
           "amount":{"value":1000,"currencyCode":"GBP"},
           "reference":"Order-0001",
           "config": {
               "redirectUrl": "http://site.com/checkout/success_pay"
                }
          }'