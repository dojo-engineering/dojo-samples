<?php
// The sandbox API key used in this example is public.
// Don't submit any personally identifiable information in any requests made with this key.
// Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
// for secure testing.

namespace Test;
require_once "vendor/autoload.php";

use Dojo_PHP\ApiFactory;
use Dojo_PHP\Model\SendEmailReceiptRequest;

$apiKey = "<your_api_key>";
$api = ApiFactory::createPaymentIntentApi($apiKey);

$request = new SendEmailReceiptRequest(["emails" => ["gabriel@dojo.com", "mari@dojo.com"]]);
$api->receiptCreate(\Dojo_PHP\API_VERSION, "<paymentIntentId>", $request);