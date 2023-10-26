<?php
// The sandbox API key used in this example is public.
// Don't submit any personally identifiable information in any requests made with this key.
// Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
// for secure testing.

namespace Test;
require_once "vendor/autoload.php";

use Dojo_PHP\ApiFactory;
use Dojo_PHP\Model\Money;
use Dojo_PHP\Model\SetAmountRequest;

$apiKey = "<your_api_key>";
$apiPaymentIntent = ApiFactory::createPaymentIntentApi($apiKey);

$customAmountRequest = new SetAmountRequest(["amount" => new Money(['value' => 1000, 'currency_code' => "GBP"])]);

$apiPaymentIntent->paymentIntentsSetCustomAmount(\Dojo_PHP\API_VERSION, "<paymentIntentId>", $customAmountRequest);