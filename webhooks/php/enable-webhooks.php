<?php
// The sandbox API key used in this example is public.
// Don't submit any personally identifiable information in any requests made with this key.
// Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
// for secure testing.

namespace Test;
require_once "vendor/autoload.php";

use Dojo_PHP\ApiFactory;
use Dojo_PHP\Model\SubscriptionRequest;

$apiKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ";
$api = ApiFactory::createWebhooksApi($apiKey);

$req = new SubscriptionRequest(["url" => "https://example.com/incoming-events", "events" => ["payment_intent.status_updated"]]);

$api->webhooksSubscribe(\Dojo_PHP\API_VERSION, $req);