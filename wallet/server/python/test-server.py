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

        conn = http.client.HTTPSConnection("dev-api.dojo.dev")
        
        # subscribe to an event
        subscribe_data = json.dumps({
          "events": [ "payment_intent.status_updated",
            "payment_intent.created",
            "payment_intent.send-receipt"],
          "url": "https://webhook.site/53a7a384-53c1-493b-9422-1f234a5712ad"
          })
        subscribe_headers = {
            'content-type': "application/json",
            'version': "2022-01-03",
            'Authorization': "Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A" # <-- Change to your secret key
            }
        conn.request("POST", "/master/webhooks/", subscribe_data, subscribe_headers)
        subscribe_res = conn.getresponse()
        subscribe_data = subscribe_res.read()
        print(subscribe_data)

        # call post payment-intent 
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
        conn.request("POST", "/master/payment-intents/", payload, headers)

        # handling the response from POST
        res = conn.getresponse()
        data = res.read()
        resp_data = {}
        resp_data['paymentToken'] = json.loads(data)["connecteToken"]
        # resp_data['amount'] = json.loads(data)["amount"]["value"]
        # resp_data['currencyCode'] = "826"
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
  return render_template('card.html')
