<?php
// The sandbox API key used in this example is public.
// Don't submit any personally identifiable information in any requests made with this key.
// Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
// for secure testing.

namespace Test;
require_once "vendor/autoload.php";

use Dojo_PHP\ApiFactory;

$apiKey = "<your_api_key>";
$api = ApiFactory::createPaymentIntentApi($apiKey);

$pi = $api->paymentIntentsGet("<paymentIntentId>", \Dojo_PHP\API_VERSION);