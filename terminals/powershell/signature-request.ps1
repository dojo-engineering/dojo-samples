$headers=@{}
$headers.Add("content-type", "application/json")
$headers.Add("version", "SOME_STRING_VALUE")
$headers.Add("Authorization", "REPLACE_KEY_VALUE")
$response = Invoke-WebRequest -Uri 'https://api.dojo.tech/terminal-sessions/%7BterminalSessionId%7D/signature' -Method PUT -Headers $headers -ContentType 'application/json' -Body '{"accepted":true}'