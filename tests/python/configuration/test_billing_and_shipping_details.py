import runpy
import json


def test_bulling_and_shipping_details():
    result = runpy.run_path("../configuration/python/billing-and-shipping-details.py")
    pid = json.loads(result['data'])['id']
    assert len(pid) > 0
