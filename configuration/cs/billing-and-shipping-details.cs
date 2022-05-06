var paymentIntentsClient = new PaymentIntentsClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"));
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