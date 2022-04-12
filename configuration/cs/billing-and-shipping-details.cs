var client = new RestClient("https://api.dojo.tech/payment-intents/");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ");
request.AddHeader("Version", "2022-04-07");
request.AddHeader("Content-Type", "application/json");
var body = @"{" + "\n" +
@"  ""amount"": {" + "\n" +
@"    ""value"": 1000," + "\n" +
@"    ""currencyCode"": ""GBP""" + "\n" +
@"  }," + "\n" +
@"  ""reference"": ""Order-0001""," + "\n" +
@"  ""config"": {" + "\n" +
@"        ""billingAddress"": {" + "\n" +
@"            ""collectionRequired"": True" + "\n" +
@"        }," + "\n" +
@"        ""shippingDetails"": {" + "\n" +
@"            ""collectionRequired"": True" + "\n" +
@"        }," + "\n" +
@"        ""customerEmail"": {" + "\n" +
@"            ""collectionRequired"": True" + "\n" +
@"        }" + "\n" +
@"    }" + "\n" +
@"}";
request.AddParameter("application/json", body,  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);