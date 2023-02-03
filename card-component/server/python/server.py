# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

from hashlib import new
import http.client
import json
from urllib import response

from flask import Flask, jsonify, request, render_template
app = Flask(__name__, static_url_path="/static")

@app.route('/checkout', methods=['GET', 'POST'])
def hello():
    # POST request
    if request.method == 'POST':
        print('Incoming..')
        print(request.get_json())  # parse as JSON

        conn = http.client.HTTPSConnection("api.dojo.tech")
        
        # subscribe to an event
        subscribe_data = json.dumps({
          "events": [ "payment_intent.status_updated",
            "payment_intent.created",
            "payment_intent.send-receipt"],
          "url": "https://webhook.site/53a7a384-53c1-493b-9422-1f234a5712ad"
          })
        subscribe_headers = {
            'content-type': "application/json",
            'version': "2022-04-07",
            'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ" # <-- Change to your secret key
            }
        conn.request("POST", "/webhooks/", subscribe_data, subscribe_headers)
        subscribe_res = conn.getresponse()
        subscribe_data = subscribe_res.read()
        print(subscribe_data)

        # call post payment-intent 
        payload = json.dumps({
          "amount": {
            "value": 1000,
            "currencyCode": "GBP"
          },
          "reference": "Order 245",
          "paymentMethods": ["Card"]
          })
        headers = {
            'content-type': "application/json",
            'version': "2022-04-07",
            'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ" # <-- Change to your secret key
            }
        conn.request("POST", "/payment-intents/", payload, headers)

        # handling the response from POST
        res = conn.getresponse()
        data = res.read()
        resp_data = {}
        resp_data['clientSessionSecret'] = json.loads(data)["clientSessionSecret"]
        print(resp_data)
        json_data = json.dumps(resp_data)
        resp = app.response_class(
          response=json_data,
          mimetype='application/json'
          )
        return resp
        
@app.route('/webhook', methods=['POST'])
def webhook():
    event = None
    payload = request.data

    try:
        event = json.loads(payload)
        print('Received webhooks...')
        print(event)  
    except:
        print('⚠️  Webhook error while parsing basic request.' + str(e))
        return jsonify(success=False)

    return jsonify(success=True)

@app.route('/')
def test_page():
  # look inside `templates` and serve `index.html`
  return render_template('index.html')

  conn.close()