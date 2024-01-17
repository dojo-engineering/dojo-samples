var client = new RestClient("https://api.dojo.tech/payment-intents/pi_sandbox_RBMHTJ4fIkmSppDILZVCGw/initiate");
var request = new RestRequest(Method.POST);
request.AddHeader("content-type", "application/json");
request.AddHeader("version", "SOME_STRING_VALUE");
request.AddHeader("Authorization", "REPLACE_KEY_VALUE");
request.AddParameter("application/json", "{\"terminalId\":\"string\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);