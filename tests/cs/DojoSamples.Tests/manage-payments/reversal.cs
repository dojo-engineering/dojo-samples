using Dojo.Net;
using Xunit;
using System.IO;
using DojoSamples.Tests.utils;

namespace DojoSamples.Tests.manage_payments
{
    public class ReversalTest
    {
        [Fact(Skip = "ignore because a payment with status Created cannot be Reversed")]
        public async void TestSnippet()
        {
            var paymentIntent = await Intent.CreateIntent();
            Assert.True(paymentIntent.Id.Length > 0, "Expected payment intent to be created");
            
            Reversal result = await CodeSnippet.Run("manage-payments/cs/reversal.cs", paymentIntent.Id);
            Assert.True(result.ReversalId.Length > 0, "Expected reversal ID");
        }
    }
}
