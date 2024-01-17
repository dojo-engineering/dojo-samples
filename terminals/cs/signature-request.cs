var client = new RestClient("https://api.dojo.tech/terminal-sessions/%7BterminalSessionId%7D/signature");
var request = new RestRequest(Method.PUT);
request.AddHeader("content-type", "application/json");
request.AddHeader("version", "SOME_STRING_VALUE");
request.AddHeader("Authorization", "REPLACE_KEY_VALUE");
request.AddParameter("application/json", "{\"accepted\":true}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);