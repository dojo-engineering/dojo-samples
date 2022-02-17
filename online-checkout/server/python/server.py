import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")
payload = json.dumps({
  "amount": {
    "value": 1000,
    "currencyCode": "GBP"
  },
  "reference": "Order 245"
})
headers = {
    'content-type': "application/json",
    'version': "2022-01-03",
    'Authorization': "Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A" # <-- Change to your secret key
    }
conn.request("POST", "/payment-intents/", payload, headers)
res = conn.getresponse()
data = res.read()
resp_data = {}
resp_data['id'] = json.loads(data)["id"]
json_data = json.dumps(resp_data)
resp = app.response_class(
  response=json_data,
  mimetype='application/json'
  )
return resp