// The sandbox API key passed in 'ApiKeyClientAuthorization' is public.
// Don't submit any personally identifiable information in any requests made with this key.
// Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
// for secure testing.

var receiptClient = new ReceiptClient(new HttpClient(), new ApiKeyClientAuthorization("<your_api_key>"));
receiptClient.CreateAsync("<paymentIntentId>", new SendEmailReceiptRequest{ Emails = new List<string>() { "my@email.com" }});
