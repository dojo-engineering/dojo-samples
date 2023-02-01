// The sandbox API key passed in 'ApiKeyClientAuthorization' is public.
// Don't submit any personally identifiable information in any requests made with this key.
// Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
// for secure testing.

var paymentIntentsClient = new PaymentIntentsClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_<your_secret_key>"));
var result = await paymentIntentsClient.CreatePaymentIntentAsync(new CreatePaymentIntentRequest
{
    Amount = new()
    {
        Value = 1000,
        CurrencyCode = "GBP"
    },
    Config = new()
    {
        BillingAddress = new() {CollectionRequired = true},
        ShippingDetails = new() {CollectionRequired = true},
        CustomerEmail = new() {CollectionRequired = true}
    },
    PaymentMethods = new List<PaymentMethod>() { PaymentMethod.Card , PaymentMethod.Wallet},
    Reference = "Order-0001"
});