import http.client

conn = http.client.HTTPSConnection("api.dojo.tech")

payload = "{\"tipsAmount\":{\"value\":200,\"currencyCode\":\"GBP\"}}"

headers = {
    'content-type': "application/json",
    'version': "2022-01-03",
    'Authorization': "Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A"
    }

conn.request("POST", "/payment-intents/%7BpaymentIntentId%7D/tips-amount", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))