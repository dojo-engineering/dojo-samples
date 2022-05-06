var receiptClient = new ReceiptClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"));
receiptClient.CreateAsync("<PAYMENT_INTENT_ID>", new SendEmailReceiptRequest{Emails = new List<string>(){"my@email.com"}});
