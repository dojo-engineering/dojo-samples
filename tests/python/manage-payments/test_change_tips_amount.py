import runpy
import json
import utils


def test_change_tips_amount():
    pid = utils.create_payment_intent()
    result = runpy.run_path("../manage-payments/python/change-tips-amount.py", init_globals={'paymentIntentId': pid})
    result = json.loads(result['data'])
    assert result["id"] == pid
    assert result["status"] == "Created"
    assert result["tipsAmount"]["value"] == 200
