import http.client

conn = http.client.HTTPSConnection("api.dojo.tech")

payload = "{\"emails\":[\"gabriel@dojo.com\",\"mari@dojo.com\"]}"

headers = {
    'content-type': "application/json",
    'version': "SOME_STRING_VALUE",
    'Authorization': "Basic REPLACE_BASIC_AUTH"
    }

conn.request("POST", "/payment-intents/%7BpaymentIntentId%7D/receipt", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))

conn.close()