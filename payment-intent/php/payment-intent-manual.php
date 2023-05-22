<?php
// The sandbox API key used in this example is public.
// Don't submit any personally identifiable information in any requests made with this key.
// Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
// for secure testing.

namespace Test;
require_once "vendor/autoload.php";

use Dojo_PHP\ApiFactory;
use Dojo_PHP\Model\CreatePaymentIntentRequest;
use Dojo_PHP\Model\Money;
use Dojo_PHP\Model\CaptureMode;
use Dojo_PHP\Model\AutoExpireAction;

$apiKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ";
$apiPaymentIntent = ApiFactory::createPaymentIntentApi($apiKey);

$req = new CreatePaymentIntentRequest();
$req->setDescription("Demo payment intent");
$req->setReference("Order - 234");

$money = new Money();
$money->setValue(1000);
$money->setCurrencyCode("GBP");

$req->setAmount($money);

$req->setCaptureMode(CaptureMode::MANUAL);
$req->setAutoExpireAction(AutoExpireAction::RELEASE);
$req->setAutoExpireAt("2023-12-01T00:00:00");

$pi = $apiPaymentIntent->paymentIntentsCreatePaymentIntent(\Dojo_PHP\API_VERSION, $req);