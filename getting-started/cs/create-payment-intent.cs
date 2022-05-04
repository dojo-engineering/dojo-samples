var paymentIntentsClient = new PaymentIntentsClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_kqCwRaWEsl9OM0xNSxh00eayT9k8hAqURGeNQseeV62rMxO5ZiZHub0-XRqkzPLfES2fVUl0seMOyujCIiYaMTaDyiBPf25b7W3Gr3oE0qbpTeM4MRuUMgtDt_scAEfJdqYBlBB_gt_31Bw7FihTISp2WIXXGeTD5WbwhdIhraIJVWR7jo2Hy-xKlBpK-lE8"));
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