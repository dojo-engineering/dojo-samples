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
            var script = Path.GetRelativePath(".", "../../../../../../getting-started/cs/create-payment-intent.cs");
            PaymentIntent result = await new CodeSnippet().Run(script);
            Assert.True(result.Id.Length > 0, "Expected a payment intent id in response");
        }
    }
}
