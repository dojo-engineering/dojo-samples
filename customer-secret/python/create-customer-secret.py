import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")
payload = ''
headers = {
  'version': '2023-01-10',
  'Accept': 'application/json',
  'Authorization': 'Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ'
}
conn.request("POST", "/customers/cust_sandbox_6g-HvPv6VkG_Q_PXCpJqmw/create-secret", payload, headers) #"/customers/{customer-secret id you created}/create-secret
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
conn.close()