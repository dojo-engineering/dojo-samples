var paymentIntentsClient = new PaymentIntentsClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"));
paymentIntentsClient.SetCustomAmountAsync("<PAYMENT_INTENT_ID>", new SetAmountRequest{Amount = new Money {Value = 500, CurrencyCode = "GBP"}});
