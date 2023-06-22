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
use Dojo_PHP\Model\CreatePaymentIntentRequestConfig;
use Dojo_PHP\Model\PaymentIntentConfigRequestDetails;
use Dojo_PHP\Model\ItemLine;
use Dojo_PHP\Model\TaxLine;

$apiKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ";
$apiPaymentIntent = ApiFactory::createPaymentIntentApi($apiKey);

$req = new CreatePaymentIntentRequest();
$req->setDescription("Demo payment intent");
$req->setReference("Order - 1");

$money = new Money();
$money->setValue(1000);
$money->setCurrencyCode("GBP");

$req->setAmount($money);

$config = new CreatePaymentIntentRequestConfig();

$details = new PaymentIntentConfigRequestDetails();
$details->setShowTotal(true);

$config->setDetails($details);

$req->setConfig($config);

$itemLine1 = new ItemLine(
    ['id' => "item 1", 'quantity' => 4, 'caption' => "Dog socks", 'amount_total' => new Money(['value' => 400, 'currency_code' => "GBP"])]);
$itemLine2 = new ItemLine(
    ['id' => "item 5", 'quantity' => 1, 'caption' => "Dog bandana", 'amount_total' => new Money(['value' => 600, 'currency_code' => "GBP"])]);


$taxLine1 = new TaxLine(
    ['id' => "vat", 'caption' => "VAT", 'amount_total' => new Money(['value' => 10, 'currency_code' => "GBP"])]);
$taxLine2 = new TaxLine(
    ['id' => "delivery", 'caption' => "Delivery", 'amount_total' => new Money(['value' => 500, 'currency_code' => "GBP"])]);

$req->setItemLines([$itemLine1, $itemLine2]);
$req->setTaxLines([$taxLine1, $taxLine2]);

$pi = $apiPaymentIntent->paymentIntentsCreatePaymentIntent(\Dojo_PHP\API_VERSION, $req);