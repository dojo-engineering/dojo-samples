# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

import http.client
import json

conn = http.client.HTTPSConnection("api.dojo.tech")
payload = ''
headers = {
  'Version': '2022-04-07',
  'Content-Type': 'application/json',
  'Authorization': 'Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ'
}
conn.request("POST", "/customers/cust_sandbox_6g-HvPv6VkG_Q_PXCpJqmw/create-secret", payload, headers) #"/customers/{customer-secret id you created}/create-secret
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
conn.close()