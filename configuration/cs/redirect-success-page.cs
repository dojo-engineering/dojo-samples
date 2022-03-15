var client = new RestClient("https://api.dojo.tech/payment-intents/");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A");
request.AddHeader("Version", "2022-01-03");
request.AddHeader("Content-Type", "application/json");
var body = @"{" + "\n" +
@"  ""amount"": {" + "\n" +
@"    ""value"": 1000," + "\n" +
@"    ""currencyCode"": ""GBP""" + "\n" +
@"  }," + "\n" +
@"  ""reference"": ""Order-0001""," + "\n" +
@"  ""config"": {" + "\n" +
@"        ""redirectUrl"": ""http://site.com/checkout/success_pay""," + "\n" +
@"    }" + "\n" +
@"}";
request.AddParameter("application/json", body,  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);