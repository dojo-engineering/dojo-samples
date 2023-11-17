using Dojo.Net;
using Customer = server.Model.Customer;

namespace server.Repositories;

public interface IDojoCustomersRepository
{
    Task<CustomerFull> GetOrCreateDojoCustomerAsync(Customer customer);
}