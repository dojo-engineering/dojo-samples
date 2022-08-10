using System;
using Dojo.Net;
using Xunit;
using System.IO;
using DojoSamples.Tests.utils;

namespace DojoSamples.Tests.manage_payments
{
    public class CancelPaymentTest
    {
        [Fact]
        public async void TestSnippet()
        {
            var paymentIntent = await Intent.CreateIntent();
            Assert.True(paymentIntent.Id.Length > 0, "Expected payment intent to be created");
            
            var result = await CodeSnippet.Run("manage-payments/cs/cancel.cs", paymentIntent.Id);
            Assert.Equal(result.Id, paymentIntent.Id);
            Assert.Equal("Canceled", result.Status.ToString());
        }
    }
}
