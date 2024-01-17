import http.client

conn = http.client.HTTPSConnection("api.dojo.tech")

payload = "{\"terminalId\":\"string\"}"

headers = {
    'content-type': "application/json",
    'version': "SOME_STRING_VALUE",
    'Authorization': "REPLACE_KEY_VALUE"
    }

conn.request("POST", "/payment-intents/pi_sandbox_RBMHTJ4fIkmSppDILZVCGw/initiate", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))