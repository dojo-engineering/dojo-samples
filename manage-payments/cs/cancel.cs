var paymentIntentsClient = new PaymentIntentsClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"));
var result = await paymentIntentsClient.DeleteAsync("<PAYMENT_INTENT_ID>");
