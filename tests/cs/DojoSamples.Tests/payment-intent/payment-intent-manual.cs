using Dojo.Net;
using Xunit;
using System.IO;
using DojoSamples.Tests.utils;

namespace DojoSamples.Tests.payment_intent
{
    public class PaymentIntentManualTest
    {
        [Fact]
        public async void TestSnippet()
        {
            PaymentIntent result = await CodeSnippet.Run("payment-intent/cs/payment-intent-manual.cs");
            Assert.True(result.Id.Length > 0, "Expected a payment intent id in response");
            Assert.Equal("Manual", result.CaptureMode.ToString());
        }
    }
}
