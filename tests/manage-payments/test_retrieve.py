import runpy
import json
import utils


def test_retrieve():
    pid = utils.create_payment_intent()
    result = runpy.run_path("../manage-payments/python/retrieve.py", init_globals={'paymentIntentId': pid})
    result = json.loads(result['data'])
    assert result["id"] == pid
    assert result["status"] == "Created"

