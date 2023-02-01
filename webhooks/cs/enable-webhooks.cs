/*The sandbox API key passed in 'ApiKeyClientAuthorization' is public.
Don’t submit any personally identifiable information in any requests made with this key.
Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
for secure testing. */

var webhooksClient = new Dojo.Net.WebhooksClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_<your_secret_key>"));
webhooksClient.SubscribeAsync(new SubscriptionRequest()
{
    Events = new List<string>() { "payment_intent.status_updated" },
    Url = new Uri("https://example.com/incoming-events")
});