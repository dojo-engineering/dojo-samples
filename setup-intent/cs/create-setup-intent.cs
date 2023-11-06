// The sandbox API key passed in 'ApiKeyClientAuthorization' is public.
// Don't submit any personally identifiable information in any requests made with this key.
// Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
// for secure testing.

var setupIntentsClient = new SetupIntentsClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"));
var result = await setupIntentsClient.CreateAsync(new CreateSetupIntentRequest
{
    IntendedAmount = new()
    {
        Value = 1000,
        CurrencyCode = "GBP"
    },
    MerchantInitiatedTransactionType = MerchantInitiatedTransactionType.NoShow,
    Reference = "Dojo Cafe | Booking request for Table 4",
    Terms = "In case of no-show, the customer authorizes us to charge their card with table booking fee."
});