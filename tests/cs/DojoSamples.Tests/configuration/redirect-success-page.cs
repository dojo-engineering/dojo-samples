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
            var script = Path.GetRelativePath(".", "../../../../../../configuration/cs/redirect-success-page.cs");
            PaymentIntent result = await new CodeSnippet().Run(script);
            Assert.True(result.Id.Length > 0, "Expected a payment intent id in response");
        }
    }
}
