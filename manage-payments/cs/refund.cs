var client = new RestClient("https://api.dojo.tech/payment-intents/%7BpaymentIntentId%7D/refunds");
var request = new RestRequest(Method.POST);
request.AddHeader("content-type", "application/json");
request.AddHeader("version", "2022-01-03");
request.AddHeader("idempotencyKey", "656565gfyd65");
request.AddHeader("Authorization", "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ");
request.AddParameter("application/json", "{\"amount\":1000,\"refundReason\":\"Demo refund\",\"notes\":\"Duplicate transaction\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);