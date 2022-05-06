var paymentIntentsClient = new PaymentIntentsClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"));
var result = await paymentIntentsClient.CreatePaymentIntentAsync(new CreatePaymentIntentRequest
{
    Amount = new()
    {
        Value = checkoutRequest.Amount,
        CurrencyCode = "GBP"
    },
    Config = new()
    {
        CancelUrl = new Uri(checkoutRequest.CancelUrl),
        RedirectUrl = new Uri(checkoutRequest.RedirectUrl),
    },
    Description = checkoutRequest.Description,
    Reference = "Order - 1"
});