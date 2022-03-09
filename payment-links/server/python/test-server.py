import http.client
import json
from urllib import response
import urllib.parse
from urllib.parse import urlunsplit, urlencode

from flask import Flask, jsonify, request, render_template, redirect
app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def hello():
    print('Incoming..')
    print(request.get_json())  # parse as JSON

    conn = http.client.HTTPSConnection("dev-api.dojo.dev")
    payload = json.dumps({
        "amount": {
            "value": 1000,
            "currencyCode": "GBP"
        },
        "reference": "Order 245",
        "paymentSource": "payment-links"
    })
    headers = {
        'content-type': "application/json",
        'version': "2022-01-03",
        'Authorization': "Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A"  # <-- Change to your secret key
    }
    conn.request("POST", "/master/payment-intents/", payload, headers)
    res = conn.getresponse()
    data = res.read()
    last_id = json.loads(data)["id"]
    url = 'https://pay.dojo.tech/checkout/' + last_id
    return redirect(url)
