var refundsClient = new RefundsClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"));
refundsClient.CreateAsync("<PAYMENT_INTENT_ID>", "656565gfyd65", new CreateRefundRequest(){Amount = 50, Notes = "Demo refund", RefundReason= "Duplicate transaction" }});
