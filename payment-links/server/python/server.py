# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

import http.client
import json
from urllib import response
import urllib.parse
from urllib.parse import urlunsplit, urlencode

from flask import Flask, jsonify, request, render_template, redirect
app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def hello():
    print(request.get_json())  # parse as JSON

    conn = http.client.HTTPSConnection("api.dojo.tech")
    payload = json.dumps({
        "amount": {
            "value": 1000,
            "currencyCode": "GBP"
        },
        "reference": "Order 245",
        "paymentSource": "payment-links"
    })
    headers = {
        'Content-Type': "application/json",
        'Version': "2024-01-15",
        'Authorization': "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"  # <-- Change to your secret key
    }
    conn.request("POST", "/payment-intents/", payload, headers)
    res = conn.getresponse()
    data = res.read()
    last_id = json.loads(data)["id"]
    url = 'https://pay.dojo.tech/checkout/' + last_id
    return redirect(url)

    conn.close()
