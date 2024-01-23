import http.client
import json

conn = http.client.HTTPSConnection("staging-api.dojo.dev")
payload = ''
headers = {
    'version': '2023-12-15',
    'software-house-id': 'softwareHouse1',
    'reseller-id': 'reseller1',
    'Accept': 'application/json',
    'Authorization': 'Basic sk_sandbox_1WYDtq7yAdqhmQ7KEUAvPlCCRBYc9HTY9KOPJKZtfWkzsSISj1L8c4GG5l4pBB5Bj85hkJgTL9vmOmki5QnQfQ'
}
conn.request("GET", "/master/terminals?statuses=Available", payload, headers)

res = conn.getresponse()
data = res.read()
json_data = json.loads(data.decode("utf-8"))
pretty_json = json.dumps(json_data, indent=2)
print(pretty_json)

conn.close()