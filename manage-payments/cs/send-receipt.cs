var client = new RestClient("https://api.dojo.tech/payment-intents/%7BpaymentIntentId%7D/receipt");
var request = new RestRequest(Method.POST);
request.AddHeader("content-type", "application/json");
request.AddHeader("version", "2022-04-07");
request.AddHeader("Authorization", "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ");
request.AddParameter("application/json", "{\"emails\":[\"gabriel@dojo.com\",\"mari@dojo.com\"]}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);