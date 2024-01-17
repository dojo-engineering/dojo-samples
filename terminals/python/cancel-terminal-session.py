import requests

url = "https://api.dojo.tech/terminal-sessions/%7BterminalSessionId%7D/cancel"

headers = {
    "version": "SOME_STRING_VALUE",
    "Authorization": "REPLACE_KEY_VALUE"
}

response = requests.request("PUT", url, headers=headers)

print(response.text)