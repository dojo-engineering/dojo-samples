namespace server.Repositories
{
    public static class CustomersRepository
    {
        private static readonly IDictionary<string, Customer> _customers = new Dictionary<string, Customer>
        {
            {"best-customer-id", new Customer
            {
                Id = "best-customer-id",
                Email = "best-customer@dojo.tech",
                Password = "save-my-card",
                Name = "Best Customer",
                DojoCustomerId = "cust_72V8Z4f8gEmRrSSAXBikug"
            }}
        };

        public static Customer FindCustomer(string customerId)
        {
            return _customers[customerId];
        }
    }

    public class Customer
    {
        public string Id { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Name { get; set; }

        public string DojoCustomerId { get; set; }
    }
}
