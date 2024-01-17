$headers=@{}
$headers.Add("content-type", "application/json")
$headers.Add("version", "SOME_STRING_VALUE")
$headers.Add("Authorization", "REPLACE_KEY_VALUE")
$response = Invoke-WebRequest -Uri 'https://api.dojo.tech/payment-intents/pi_sandbox_RBMHTJ4fIkmSppDILZVCGw/initiate' -Method POST -Headers $headers -ContentType 'application/json' -Body '{"terminalId":"string"}'