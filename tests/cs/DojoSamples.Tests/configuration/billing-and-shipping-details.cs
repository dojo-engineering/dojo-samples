using Dojo.Net;
using Xunit;
using System.IO;
using DojoSamples.Tests.utils;

namespace DojoSamples.Tests.configuration
{
    public class BillingAndShippingDetailsTest
    {
        [Fact]
        public async void TestSnippet()
        {
            PaymentIntent result = await CodeSnippet.Run("configuration/cs/billing-and-shipping-details.cs");
            Assert.True(result.Id.Length > 0, "Expected a payment intent id in response");
        }
    }
}
