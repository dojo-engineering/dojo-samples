using Dojo.Net;
using System.Net.Http;
using System.Threading.Tasks;
using DojoSamples.Tests.utils;
using System.Collections.Generic;

namespace DojoSamples.Tests.utils
{
    public static class Intent
    {
        public static async Task<PaymentIntent> CreateIntent() {
            var paymentIntentsClient = new PaymentIntentsClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"));
            return await paymentIntentsClient.CreatePaymentIntentAsync(new CreatePaymentIntentRequest
            {
                Amount = new()
                {
                    Value = 1000,
                    CurrencyCode = "GBP"
                },
                Config = new()
                {
                    Payment = new PaymentConfigDetails()
                    {
                        CustomAmountAllowed = true,
                        TipsAllowed = true
                    }
                },
                PaymentMethods = new List<PaymentMethod>() { PaymentMethod.Card , PaymentMethod.Wallet},
                Reference = "Order-0001"
            });
        }
    }
}
