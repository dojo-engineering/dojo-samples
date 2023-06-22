<?php
// The sandbox API key used in this example is public.
// Don't submit any personally identifiable information in any requests made with this key.
// Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
// for secure testing.

namespace Test;
require_once "vendor/autoload.php";

use Dojo_PHP\WebHooksUtil;

$json = "{\"id\":\"evt_hnnHxIKR_Uy6bhZCusCltw\",\"event\":\"payment_intent.created\",\"accountId\":\"acc_test\",\"createdAt\":\"2022-02-01T13:07:41.8667859Z\",\"data\":{\"paymentIntentId\":\"pi_vpwd4ooAPEqyNAQe4z89WQ\",\"paymentStatus\":\"Created\",\"captureMode\":\"Auto\"}}";
$secret = "PDYkJQq6sESYHp_zJuTTBQ";
$dojoSignature = "sha256=4B-49-F8-FE-25-A7-E6-7D-00-4F-A7-9C-F8-0B-63-00-C7-77-B4-F2-2D-E5-E1-22-84-FA-04-18-50-A1-76-FD";

// If signature is invalid, this method throws an exception
WebHooksUtil::validatePayloadSignature($json, $secret, $dojoSignature);