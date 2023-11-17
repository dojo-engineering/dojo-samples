using Dojo.Net;
using Microsoft.AspNetCore.Mvc;
using server.Authorization;
using server.Model;
using server.Repositories;
using Customer = server.Model.Customer;

namespace server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IDojoCustomersRepository _dojoCustomersRepository;

        public AuthController(IDojoCustomersRepository dojoCustomersRepository)
        {
            _dojoCustomersRepository = dojoCustomersRepository;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest login)
        {
            var expectedCustomer = CustomersRepository.FindCustomer("best-customer-id");

            if (login.Email == expectedCustomer.Email && login.Password == expectedCustomer.Password)
            {
                // to be able to retrieve Dojo Customer payments methods, make sure you create one, and link it to your
                // internal customer
                var dojoCustomer = await _dojoCustomersRepository.GetOrCreateDojoCustomerAsync(expectedCustomer);
                CustomersRepository.UpdateDojoCustomerId(expectedCustomer.Id, dojoCustomer.Id);
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
    }
}