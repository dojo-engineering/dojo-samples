var paymentIntentsClient = new PaymentIntentsClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"));
var result = await paymentIntentsClient.CreatePaymentIntentAsync(new CreatePaymentIntentRequest
{
    Amount = new()
    {
        Value = 1000,
        CurrencyCode = "GBP"
    },
    ItemLines = new List<ItemLine>()
    {
        new() {AmountTotal = new() { Value=400, CurrencyCode="GBP" }, Caption = "Dog socks", Id="item 1", Quantity = 4},
        new() {AmountTotal = new() { Value=600, CurrencyCode="GBP" }, Caption = "Dog bandana", Id="item 1", Quantity = 1}
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
