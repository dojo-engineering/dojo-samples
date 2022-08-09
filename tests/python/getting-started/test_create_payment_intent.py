import runpy
import json


def test_create_payment_intent():
    result = runpy.run_path("../getting-started/python/create-payment-intent.py")
    pid = json.loads(result['data'])['id']
    assert len(pid) > 0
