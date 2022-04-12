var client = new RestClient("https://api.dojo.tech/payment-intents/%7BpaymentIntentId%7D/tips-amount");
var request = new RestRequest(Method.POST);
request.AddHeader("content-type", "application/json");
request.AddHeader("version", "2022-01-03");
request.AddHeader("Authorization", "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ");
request.AddParameter("application/json", "{\"tipsAmount\":{\"value\":200,\"currencyCode\":\"GBP\"}}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);