// The sandbox API key passed in 'ApiKeyClientAuthorization' is public.
// Don't submit any personally identifiable information in any requests made with this key.
// Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
// for secure testing.

var paymentIntentsClient = new PaymentIntentsClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_<your_secret_key>"));
var result = await paymentIntentsClient.SetCustomAmountAsync("<PAYMENT_INTENT_ID>", new SetAmountRequest{Amount = new Money {Value = 500, CurrencyCode = "GBP"}});
