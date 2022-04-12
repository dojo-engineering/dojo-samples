var client = new RestClient("https://api.dojo.tech/payment-intents/%7BpaymentIntentId%7D/reversal");
var request = new RestRequest(Method.POST);
request.AddHeader("version", "2022-04-07");
request.AddHeader("Authorization", "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ");
IRestResponse response = client.Execute(request);