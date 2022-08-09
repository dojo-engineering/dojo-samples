import runpy
import json


def test_redirect_success_page():
    result = runpy.run_path("../configuration/python/redirect-success-page.py")
    pid = json.loads(result['data'])['id']
    assert len(pid) > 0
