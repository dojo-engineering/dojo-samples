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
            'content-type': "application/json",
            'version': "2022-01-03",
            'Authorization': "Basic sk_sandbox_kqCwRaWEsl9OM0xNSxh00eayT9k8hAqURGeNQseeV62rMxO5ZiZHub0-XRqkzPLfES2fVUl0seMOyujCIiYaMTaDyiBPf25b7W3Gr3oE0qbpTeM4MRuUMgtDt_scAEfJdqYBlBB_gt_31Bw7FihTISp2WIXXGeTD5WbwhdIhraIJVWR7jo2Hy-xKlBpK-lE8A" # <-- Change to your secret key
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
