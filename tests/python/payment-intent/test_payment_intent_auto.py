import runpy
import json


def test_payment_intent_auto():
    result = runpy.run_path("../payment-intent/python/payment-intent-auto.py")
    data = json.loads(result['data'])
    assert data["captureMode"] == "Auto"
    assert len(data["id"]) > 0


