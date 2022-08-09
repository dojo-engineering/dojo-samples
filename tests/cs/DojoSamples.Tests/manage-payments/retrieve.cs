using Dojo.Net;
using Xunit;
using System.IO;
using DojoSamples.Tests.utils;

namespace DojoSamples.Tests.manage_payments
{
    public class RetrieveTest
    {
        [Fact]
        public async void TestSnippet()
        {
            var paymentIntent = await Intent.CreateIntent();
            Assert.True(paymentIntent.Id.Length > 0, "Expected payment intent to be created");
            
            var script = Path.GetRelativePath(".", "../../../../../../manage-payments/cs/retrieve.cs");
            PaymentIntent result = await new CodeSnippet().Run(script, paymentIntent.Id);
            Assert.True(result.Id.Length > 0, "Expected payment intent ID");
            Assert.Equal("Created", result.Status.ToString());
        }
    }
}
