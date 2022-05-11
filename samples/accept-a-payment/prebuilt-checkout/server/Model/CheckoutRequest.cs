namespace server.Model
{
    public class CheckoutRequest
    {
        public long Amount { get; set; }
        public string? Description { get; set; }
        public string? RedirectUrl { get; set; }
        public string? CancelUrl { get; set; }
    }
}
