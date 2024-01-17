<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.dojo.tech/payment-intents/pi_sandbox_RBMHTJ4fIkmSppDILZVCGw/initiate",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"terminalId\":\"string\"}",
  CURLOPT_HTTPHEADER => [
    "Authorization: REPLACE_KEY_VALUE",
    "content-type: application/json",
    "version: SOME_STRING_VALUE"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}