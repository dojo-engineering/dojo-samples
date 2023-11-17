using server.Model;

namespace server.Repositories
{
    public static class CustomersRepository
    {
        // in a real case scenario this will be saved in a persistent storage location
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

        public static void UpdateDojoCustomerId(string customerId, string dojoCustomerId)
        {
            _customers[customerId].DojoCustomerId = dojoCustomerId;
        }

        public static Customer FindCustomer(string customerId)
        {
            return _customers[customerId];
        }
    }
}
