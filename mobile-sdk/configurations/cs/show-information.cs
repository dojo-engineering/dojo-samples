// The sandbox API key passed in 'ApiKeyClientAuthorization' is public.
// Don't submit any personally identifiable information in any requests made with this key.
// Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
// for secure testing.

var paymentIntentsClient = new PaymentIntentsClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"));
var result = await paymentIntentsClient.CreatePaymentIntentAsync(new CreatePaymentIntentRequest
{
    Amount = new()
    {
        Value = 4000,
        CurrencyCode = "GBP"
    },
    ItemLines = new List<ItemLine>()
    {
        new() {AmountTotal = new() { Value=1200, CurrencyCode="GBP" }, Caption = "Baseball hat", Id="item 1"},
        new() {AmountTotal = new() { Value=350, CurrencyCode="GBP" }, Caption = "Baseball ball", Id="item 2"},
        new() {AmountTotal = new() { Value=2500, CurrencyCode="GBP" }, Caption = "Baseball bat", Id="item 3"},        
    },
    Config = new()
    {
        Details = new()
        {
            ShowTotal = true
        }
    },
    PaymentMethods = new List<PaymentMethod>() { PaymentMethod.Card , PaymentMethod.Wallet},
    Reference = "Order-0001"
});