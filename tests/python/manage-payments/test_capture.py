import runpy
import json
import pytest as pytest
import utils


@pytest.mark.skip(reason="ignore because a payment with status Created cannot be Captured")
def test_capture():
    pid = utils.create_payment_intent()

    result = runpy.run_path("../manage-payments/python/capture.py", init_globals={'paymentIntentId': pid})
    result = json.loads(result['data'])
    assert len(result["captureId"]) > 0
