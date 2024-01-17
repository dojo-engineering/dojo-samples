var client = new RestClient("https://api.dojo.tech/terminal-sessions/%7BterminalSessionId%7D/cancel");
var request = new RestRequest(Method.PUT);
request.AddHeader("version", "SOME_STRING_VALUE");
request.AddHeader("Authorization", "REPLACE_KEY_VALUE");
IRestResponse response = client.Execute(request);