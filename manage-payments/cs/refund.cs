// The sandbox API key passed in 'ApiKeyClientAuthorization' is public.
// Don't submit any personally identifiable information in any requests made with this key.
// Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
// for secure testing.

var refundsClient = new RefundsClient(new HttpClient(), new ApiKeyClientAuthorization("<your_api_key>"));
refundsClient.CreateAsync("<paymentIntentId>", "656565gfyd65", new CreateRefundRequest() { Amount = 50, Notes = "Demo refund", RefundReason = "Duplicate transaction" });
