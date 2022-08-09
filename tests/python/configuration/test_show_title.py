import runpy
import json


def test_show_information():
    result = runpy.run_path("../configuration/python/show-title.py")
    pid = json.loads(result['data'])['id']
    assert len(pid) > 0
