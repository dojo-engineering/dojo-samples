# The sandbox API key passed in 'authorization' is public.
# Don’t submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

from hashlib import new
import http.client
import json
from urllib import response

from flask import Flask, jsonify, request, render_template
app = Flask(__name__)

@app.route('/checkout', methods=['GET', 'POST'])
def hello():
    # POST request
    if request.method == 'POST':
        print(request.get_json())  # parse as JSON

        conn = http.client.HTTPSConnection("api.dojo.tech")

        # call post payment-intent 
        payload = json.dumps({
          "amount": {
            "value": 1000,
            "currencyCode": "GBP"
          },
          "reference": "Order 245"
          })
        headers = {
            'Content-Type': "application/json",
            'Version': "2024-02-05",
            'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ" # <-- Change to your secret key
            }
        conn.request("POST", "/payment-intents/", payload, headers)

        # handling the response from POST
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

@app.route('/')
def test_page():
  # look inside `templates` and serve `index.html`
  return render_template('online-checkout-client.html')

conn.close()
