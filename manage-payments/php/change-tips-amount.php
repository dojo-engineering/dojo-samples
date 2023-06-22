<?php
// The sandbox API key used in this example is public.
// Don't submit any personally identifiable information in any requests made with this key.
// Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
// for secure testing.

namespace Test;
require_once "vendor/autoload.php";

use Dojo_PHP\ApiFactory;
use Dojo_PHP\Model\Money;
use Dojo_PHP\Model\SetTipsAmountRequest;

$apiKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ";
$apiPaymentIntent = ApiFactory::createPaymentIntentApi($apiKey);

$tipsAmount = new SetTipsAmountRequest(["tips_amount" => new Money(['value' => 1000, 'currency_code' => "GBP"])]);

$apiPaymentIntent->paymentIntentsSetTipsAmount(\Dojo_PHP\API_VERSION, "<pi_id>", $tipsAmount);