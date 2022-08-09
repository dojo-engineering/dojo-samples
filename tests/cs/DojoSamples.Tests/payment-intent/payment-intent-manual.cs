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
            var script = Path.GetRelativePath(".", "../../../../../../payment-intent/cs/payment-intent-manual.cs");
            PaymentIntent result = await new CodeSnippet().Run(script);
            Assert.True(result.Id.Length > 0, "Expected a payment intent id in response");
            Assert.Equal("Manual", result.CaptureMode.ToString());
        }
    }
}
