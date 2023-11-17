using Dojo.Net;
using Customer = server.Model.Customer;

namespace server.Repositories
{
    public class DojoCustomersRepository : IDojoCustomersRepository
    {
        private readonly ICustomersClient _customersClient;

        public DojoCustomersRepository(ICustomersClient customersClient)
        {
            _customersClient = customersClient;
        }

        public async Task<CustomerFull> GetOrCreateDojoCustomerAsync(Customer customer)
        {
            if (!string.IsNullOrEmpty(customer?.DojoCustomerId))
            {
                var dojoCustomer = (await _customersClient.GetAsync(customer.DojoCustomerId)).SingleOrDefault();
                if (dojoCustomer != null)
                {
                    return dojoCustomer;
                }
            }

            var newCustomerRequest = new CreateCustomerRequest
            {
                Name = customer.Name,
                EmailAddress = customer.Email
            };
            var newCustomer = await _customersClient.CreateAsync(newCustomerRequest);

            return newCustomer;
        }
    }
}
