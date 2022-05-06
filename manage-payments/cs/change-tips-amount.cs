var paymentIntentsClient = new PaymentIntentsClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"));
paymentIntentsClient.SetTipsAmountAsync("<PAYMENT_INTENT_ID>", new SetTipsAmountRequest{TipsAmount = new Money {Value = 200, CurrencyCode = "GBP"}});
