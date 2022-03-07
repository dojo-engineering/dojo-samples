var client = new RestClient("https://api.dojo.tech/payment-intents/%7BpaymentIntentId%7D/refunds");
var request = new RestRequest(Method.POST);
request.AddHeader("content-type", "application/json");
request.AddHeader("version", "2022-01-03");
request.AddHeader("idempotencyKey", "656565gfyd65");
request.AddHeader("Authorization", "Basic sk_test_m302B3jKTdyIXCOgMJwTrZBlIN4_bFBeuRsuUJqC3QS0w6XR-HTcXT9vfcxPHjw_fPmWFinEitRoGusuxjuM0hTYkO2YQQmalTSRAxX1yQsQWSSLWU3TsJ4ImPRdMKzjP88IJVookJQQ7DgQoD4JK9tbdLbID1h7gNa9d8AtgV24mR0dR1Nwc8rDZxcWRFH_WaOoPfKoaM8TdwZV7PiR3A");
request.AddParameter("application/json", "{\"amount\":1000,\"refundReason\":\"Demo refund\",\"notes\":\"Duplicate transaction\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);