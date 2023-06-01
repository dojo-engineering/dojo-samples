using Dojo.Net;
using Xunit;
using System.IO;
using DojoSamples.Tests.utils;

namespace DojoSamples.Tests.configuration
{
    public class RedirectSuccessPageTest
    {
        [Fact]
        public async void TestSnippet()
        {
            PaymentIntent result = await CodeSnippet.Run("configuration/cs/redirect-success-page.cs");
            Assert.True(result.Id.Length > 0, "Expected a payment intent id in response");
        }
    }
}
