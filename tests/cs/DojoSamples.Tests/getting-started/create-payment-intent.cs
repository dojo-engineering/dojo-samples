using Dojo.Net;
using Xunit;
using System.IO;
using DojoSamples.Tests.utils;

namespace DojoSamples.Tests.getting_started
{
    public class CreatePaymentIntentTest
    {
        [Fact]
        public async void TestSnippet()
        {
            PaymentIntent result = await CodeSnippet.Run("getting-started/cs/create-payment-intent.cs");
            Assert.True(result.Id.Length > 0, "Expected a payment intent id in response");
        }
    }
}
