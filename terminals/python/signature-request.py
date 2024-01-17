import requests

url = "https://api.dojo.tech/terminal-sessions/%7BterminalSessionId%7D/signature"

payload = {"accepted": True}
headers = {
    "content-type": "application/json",
    "version": "SOME_STRING_VALUE",
    "Authorization": "REPLACE_KEY_VALUE"
}

response = requests.request("PUT", url, json=payload, headers=headers)

print(response.text)