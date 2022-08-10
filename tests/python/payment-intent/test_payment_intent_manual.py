import runpy
import json


def test_payment_intent_manual():
    result = runpy.run_path("../payment-intent/python/payment-intent-manual.py")
    data = json.loads(result['data'])
    assert data["captureMode"] == "Manual"
    assert len(data["id"]) > 0


