import runpy
import json


def test_show_information():
    result = runpy.run_path("../configuration/python/show-information.py")
    pid = json.loads(result['data'])['id']
    assert len(pid) > 0
