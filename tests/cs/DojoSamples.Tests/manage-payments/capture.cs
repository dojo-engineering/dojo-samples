using System;
using Dojo.Net;
using Xunit;
using System.IO;
using DojoSamples.Tests.utils;

namespace DojoSamples.Tests.manage_payments
{
    public class CaptureTest
    {
        [Fact(Skip="ignore because a payment with status Created cannot be Captured")]
        public async void TestSnippet()
        {
            var paymentIntent = await Intent.CreateIntent();
            Assert.True(paymentIntent.Id.Length > 0, "Expected payment intent to be created");
            
            var script = Path.GetRelativePath(".", "../../../../../../manage-payments/cs/capture.cs");
            Capture result = await new CodeSnippet().Run(script, paymentIntent.Id);
            Assert.True(result.CaptureId.Length > 0, "Expected capture ID");
        }
    }
}
