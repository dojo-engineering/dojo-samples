using Dojo.Net;
using Xunit;
using System.IO;
using DojoSamples.Tests.utils;

namespace DojoSamples.Tests.manage_payments
{
    public class ChangeTipsAmountTest
    {
        [Fact]
        public async void TestSnippet()
        {
            var paymentIntent = await Intent.CreateIntent();
            Assert.True(paymentIntent.Id.Length > 0, "Expected payment intent to be created");
            
            PaymentIntent result = await CodeSnippet.Run("manage-payments/cs/change-tips-amount.cs", paymentIntent.Id);
            Assert.True(result.Id.Length > 0, "Expected payment intent ID");
            Assert.Equal("Created", result.Status.ToString());
            Assert.Equal(200, result.TipsAmount.Value);
        }
    }
}
