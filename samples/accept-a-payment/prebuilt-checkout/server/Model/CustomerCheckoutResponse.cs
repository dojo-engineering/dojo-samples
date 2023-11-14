using Dojo.Net;

namespace server.Model
{
    public class CustomerCheckoutResponse
    {
        public string PaymentIntentId { get; set; }

        public CustomerPaymentMethods CustomerPaymentMethods { get; set; }
    }
}
