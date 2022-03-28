var client = new RestClient("https://dev-api.dojo.dev/master/payment-intents");
client.Timeout = -1;
var request = new RestRequest(Method.POST);
request.AddHeader("Authorization", "Basic sk_sandbox_kqCwRaWEsl9OM0xNSxh00eayT9k8hAqURGeNQseeV62rMxO5ZiZHub0-XRqkzPLfES2fVUl0seMOyujCIiYaMTaDyiBPf25b7W3Gr3oE0qbpTeM4MRuUMgtDt_scAEfJdqYBlBB_gt_31Bw7FihTISp2WIXXGeTD5WbwhdIhraIJVWR7jo2Hy-xKlBpK-lE8");
request.AddHeader("version", "2022-01-03");
request.AddHeader("Content-Type", "application/json");
var body = @"{" + "\n" +
@"           ""amount"":{""value"":1510,""currencyCode"":""GBP""}," + "\n" +
@"           ""reference"":""Order-0001""," + "\n" +
@"           ""itemLines"": [" + "\n" +
@"                {" + "\n" +
@"                ""id"": ""item 1""," + "\n" +
@"                ""quantity"": 4," + "\n" +
@"                ""caption"": ""Dog socks""," + "\n" +
@"                ""amountTotal"": {" + "\n" +
@"                        ""value"": 400," + "\n" +
@"                        ""currencyCode"": ""GBP""" + "\n" +
@"                    }" + "\n" +
@"                }," + "\n" +
@"                {" + "\n" +
@"                ""id"": ""item 5""," + "\n" +
@"                ""quantity"": 1," + "\n" +
@"                ""caption"": ""Dog bandana""," + "\n" +
@"                ""amountTotal"": {" + "\n" +
@"                        ""value"": 600," + "\n" +
@"                        ""currencyCode"": ""GBP""" + "\n" +
@"                    }" + "\n" +
@"                }" + "\n" +
@"                ]," + "\n" +
@"            ""taxLines"": [" + "\n" +
@"                {" + "\n" +
@"                ""id"": ""vat""," + "\n" +
@"                ""caption"": ""VAT""," + "\n" +
@"                ""subCaption"": ""10%""," + "\n" +
@"                ""amountTotal"": {" + "\n" +
@"                        ""value"": 10," + "\n" +
@"                        ""currencyCode"": ""GBP""" + "\n" +
@"                    }" + "\n" +
@"                }," + "\n" +
@"                {" + "\n" +
@"                ""id"": ""delivery""," + "\n" +
@"                ""caption"": ""Delivery""," + "\n" +
@"                ""amountTotal"": {" + "\n" +
@"                        ""value"": 500," + "\n" +
@"                        ""currencyCode"": ""GBP""" + "\n" +
@"                    }" + "\n" +
@"                }" + "\n" +
@"                ]," + "\n" +
@"            ""config"": {" + "\n" +
@"                ""details"": " + "\n" +
@"                        {" + "\n" +
@"                        ""showTotal"": true" + "\n" +
@"                        }" + "\n" +
@"                }" + "\n" +
@"            }";
request.AddParameter("application/json", body, ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);