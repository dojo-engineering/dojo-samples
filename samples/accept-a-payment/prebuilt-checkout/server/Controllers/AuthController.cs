using Dojo.Net;
using Microsoft.AspNetCore.Mvc;
using server.Authorization;
using server.Repositories;
using Customer = server.Repositories.Customer;

namespace server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ICustomersClient _customersClient;

        public AuthController(ICustomersClient customersClient)
        {
            _customersClient = customersClient;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel login)
        {
            var expectedCustomer = CustomersRepository.FindCustomer("best-customer-id");

            if (login.Email == expectedCustomer.Email && login.Password == expectedCustomer.Password)
            {
                var dojoCustomer = await GetOrCreateDojoCustomerAsync(expectedCustomer);
                var token = JwtTokenService.GetToken(expectedCustomer.Id);

                var response = new
                {
                    CustomerId = expectedCustomer.Id,
                    Token = token,
                    CustomerName = expectedCustomer.Name,
                    expectedCustomer.Email,
                    DojoCustomerId = dojoCustomer.Id,
                };

                return Ok(response);
            }

            return Unauthorized();
        }

        private async Task<CustomerFull> GetOrCreateDojoCustomerAsync(Customer customer)
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

    public class LoginModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}