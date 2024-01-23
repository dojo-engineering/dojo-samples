import http.client
import json

conn = http.client.HTTPSConnection("staging-api.dojo.dev")
payload = json.dumps({
    "terminalId": "tm_65a7e8c0bee9b6390862337c",
    "details": {
        "sale": {
            "paymentIntentId": "pi_sandbox_bwCK9L2q8kOq7QV1N5aPyQ"
        },
        "sessionType": "Sale"
    }
})
headers = {
    'Content-Type': "application/json",
    'version': '2023-12-15',
    'software-house-id': 'softwareHouse1',
    'reseller-id': 'reseller1',
    'Accept': 'application/json',
    'Authorization': 'Basic sk_sandbox_1WYDtq7yAdqhmQ7KEUAvPlCCRBYc9HTY9KOPJKZtfWkzsSISj1L8c4GG5l4pBB5Bj85hkJgTL9vmOmki5QnQfQ'
}
conn.request("POST", "/master/terminal-sessions", payload, headers)
res = conn.getresponse()
data = res.read()
json_data = json.loads(data.decode("utf-8"))
pretty_json = json.dumps(json_data, indent=2)
print(pretty_json)

conn.close()