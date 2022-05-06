var capturesClient = new Dojo.Net.CapturesClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"));
capturesClient.CreateAsync("<PAYMENT_INTENT_ID>", new CreateCaptureRequest
{
    Amount = 1000
});