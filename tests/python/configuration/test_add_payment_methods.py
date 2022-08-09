import runpy
import json


def test_add_payment_methods():
    result = runpy.run_path("../configuration/python/add-payment-methods.py")
    pid = json.loads(result['data'])['id']
    assert len(pid) > 0


