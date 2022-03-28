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
        'Authorization': "Basic sk_sandbox_kqCwRaWEsl9OM0xNSxh00eayT9k8hAqURGeNQseeV62rMxO5ZiZHub0-XRqkzPLfES2fVUl0seMOyujCIiYaMTaDyiBPf25b7W3Gr3oE0qbpTeM4MRuUMgtDt_scAEfJdqYBlBB_gt_31Bw7FihTISp2WIXXGeTD5WbwhdIhraIJVWR7jo2Hy-xKlBpK-lE8"  # <-- Change to your secret key
    }
    conn.request("POST", "/master/payment-intents/", payload, headers)
    res = conn.getresponse()
    data = res.read()
    last_id = json.loads(data)["id"]
    url = 'https://pay.dojo.tech/checkout/' + last_id
    return redirect(url)
