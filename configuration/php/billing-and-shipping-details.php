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
use Dojo_PHP\Model\PaymentIntentConfigRequestCustomerEmail;
use Dojo_PHP\Model\PaymentIntentConfigRequestBillingAddress;
use Dojo_PHP\Model\PaymentIntentConfigRequestShippingDetails;

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

$emailRequired = new PaymentIntentConfigRequestCustomerEmail();
$emailRequired->setCollectionRequired(true);

$billingAddressRequired = new PaymentIntentConfigRequestBillingAddress();
$billingAddressRequired->setCollectionRequired(true);

$shippingAddressRequired = new PaymentIntentConfigRequestShippingDetails();
$shippingAddressRequired->setCollectionRequired(true);

$config->setCustomerEmail($emailRequired);
$config->setBillingAddress($billingAddressRequired);
$config->setShippingDetails($shippingAddressRequired);
$req->setConfig($config);

$pi = $apiPaymentIntent->paymentIntentsCreatePaymentIntent(\Dojo_PHP\API_VERSION, $req);