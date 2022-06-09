using RestSharp;
var client = new RestClient("https://api.dojo.tech/payment-intents/");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("version", "2022-05-26");
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ");
var body = @"{" + "\n" +
@"    ""amount"": {" + "\n" +
@"        ""value"": 1000," + "\n" +
@"        ""currencyCode"": ""GBP""" + "\n" +
@"    }," + "\n" +
@"    ""tipsAmount"": {" + "\n" +
@"        ""value"": 10," + "\n" +
@"        ""currencyCode"": ""GBP""" + "\n" +
@"    }," + "\n" +
@"    ""reference"": ""Order 234""," + "\n" +
@"    ""description"": ""Demo payment intent""," + "\n" +
@"    ""captureMode"": ""Auto""," + "\n" +
@"    ""details"": {" + "\n" +
@"        ""showTotal"": ""true""," + "\n" +
@"        ""showReference"": ""true""" + "\n" +
@"    }," + "\n" +
@"    ""config"": {" + "\n" +
@"        ""payment"": {" + "\n" +
@"            ""customAmountAllowed"": ""true""," + "\n" +
@"            ""tipsAllowed"": ""true""" + "\n" +
@"        }" + "\n" +
@"    }" + "\n" +
@"}";
request.AddParameter("application/json", body,  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);