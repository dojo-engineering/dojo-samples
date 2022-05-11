var webhooksClient = new Dojo.Net.WebhooksClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"));
webhooksClient.SubscribeAsync(new SubscriptionRequest()
{
    Events = new List<string>() { "payment_intent.status_updated" },
    Url = new Uri("https://example.com/incoming-events")
});