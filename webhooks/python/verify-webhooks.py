from hashlib import new
import http.client
import hmac
import json
from urllib import response

from flask import Flask, jsonify, request, render_template
app = Flask(__name__, static_url_path="/static")


@app.route('/webhook', methods=['POST'])
def webhook():
    event = None
    payload = request.data

    try:
        event = json.loads(payload)
        print('Received webhooks...')
        print(event)
        # signature verification
        secret = "ws_ZcLv5J2H10eqH15dMjKI2A"
        signatureHeader = request.header.get('Dojo-Signature')

        signature = hmac.new(secret, str(payload))

        if hmac.compare_digest(signatureHeader, signature):
            print(True)
            return jsonify(success=True)
        else:
            print('⚠️  Invalid signature.' + str(e))
            return jsonify(success=False)
    except:
        print('⚠️  Webhook error while parsing basic request.' + str(e))
        return jsonify(success=False)

    conn.close()
