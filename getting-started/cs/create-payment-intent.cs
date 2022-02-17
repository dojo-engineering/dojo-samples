var client = new RestClient("https://api.dojo.tech/payment-intents");
var request = new RestRequest(Method.POST);
request.AddHeader("content-type", "application/json");
request.AddHeader("version", "2022-01-03");
request.AddHeader("Authorization", "YOUR_API_KEY_HERE");
request.AddParameter("application/json", "{\"captureMode\":\"Auto\",\"amount\":{\"value\":1000,\"currencyCode\":\"GBP\"},\"reference\":\"Order 245\"}}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);