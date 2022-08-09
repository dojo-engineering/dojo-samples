import runpy
import json
import pytest as pytest
import utils


@pytest.mark.skip(reason="ignore because a payment with status Created cannot be Reversed")
def test_reversal():
    pid = utils.create_payment_intent("manual")
    result = runpy.run_path("../manage-payments/python/reversal.py", init_globals={'paymentIntentId': pid})
    result = json.loads(result['data'])
    assert result["pid"] == pid

