var client = new RestClient("https://api.dojo.tech/payment-intents/");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Basic sk_sandbox_kqCwRaWEsl9OM0xNSxh00eayT9k8hAqURGeNQseeV62rMxO5ZiZHub0-XRqkzPLfES2fVUl0seMOyujCIiYaMTaDyiBPf25b7W3Gr3oE0qbpTeM4MRuUMgtDt_scAEfJdqYBlBB_gt_31Bw7FihTISp2WIXXGeTD5WbwhdIhraIJVWR7jo2Hy-xKlBpK-lE8");
request.AddHeader("Version", "2022-01-03");
request.AddHeader("Content-Type", "application/json");
var body = @"{" + "\n" +
@"  ""amount"": {" + "\n" +
@"    ""value"": 1000," + "\n" +
@"    ""currencyCode"": ""GBP""" + "\n" +
@"  }," + "\n" +
@"  ""reference"": ""Order-0001""," + "\n" +
@"  ""paymentMethods"": [" + "\n" +
@"               ""Card"", ""Wallet""" + "\n" +
@"            ]" + "\n" +
@"}";
request.AddParameter("application/json", body,  ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);