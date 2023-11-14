using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Dojo.Net;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;
using ProblemDetails = Dojo.Net.ProblemDetails;
using server.Model;
using server.Repositories;
using Customer = Dojo.Net.Customer;

namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class CheckoutController : ControllerBase
{
    private readonly ILogger<CheckoutController> _logger;
    private readonly IPaymentIntentsClient _paymentIntentsClient;
    private readonly ICustomersClient _customersClient;

    public CheckoutController(ILogger<CheckoutController> logger, IPaymentIntentsClient paymentIntentsClient, ICustomersClient customersClient)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _paymentIntentsClient = paymentIntentsClient ?? throw new ArgumentNullException(nameof(paymentIntentsClient));
        _customersClient = customersClient ?? throw new ArgumentNullException(nameof(customersClient));
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<string> CheckoutAsync(CheckoutRequest checkoutRequest, CancellationToken cancellationToken)
    {
        try
        {
            var result = await _paymentIntentsClient.CreatePaymentIntentAsync(new CreatePaymentIntentRequest
            {
                Amount = new Money()
                {
                    Value = checkoutRequest.Amount,
                    CurrencyCode = "GBP"
                },
                Config = new ()
                {
                    CancelUrl = new Uri(checkoutRequest.CancelUrl),
                    RedirectUrl = new Uri(checkoutRequest.RedirectUrl),
                },
                PaymentMethods = new List<PaymentMethod>() { PaymentMethod.Card , PaymentMethod.Wallet},
                Description = checkoutRequest.Description,
                Reference = Guid.NewGuid().ToString() // can be you order id
            }, cancellationToken);

            return result.Id;
        }
        catch (ApiClientException<ProblemDetails> e)
        {
            // Check Dojo Documentation for error handling https://docs.dojo.tech/api#section/Errors
            _logger.LogError(e, $"StatusCode:{e.Result.Status}, Response: {e.Result.Detail}, TraceId: {e.Result.TraceId}");
            throw;
        }
        catch (ApiClientException e)
        {
            _logger.LogError(e, "Unhandled error");
            throw;
        }
    }

    [HttpPost("customer")]
    [Authorize]
    public async Task<IActionResult> CheckoutWithCustomerAsync([FromBody, Required] CheckoutRequest checkoutRequest, CancellationToken cancellationToken)
    {
        try
        {
            var customerId = User.Claims.FirstOrDefault(c => c.Type == "CustomerId").Value;
            var customer = CustomersRepository.FindCustomer(customerId);
            var dojoCustomer = (await _customersClient.GetAsync(customer.DojoCustomerId, cancellationToken)).SingleOrDefault();

            if (dojoCustomer == null)
            {
                return BadRequest($"Could not find any customer with id '{customerId}'");
            }

            var customerSecret = await _customersClient.CreateCustomerSecretAsync(dojoCustomer.Id, cancellationToken);

            //var customerPaymentMethods = await _customersClient.GetPaymentMethodsAsync(dojoCustomer.Id, $"Basic {customerSecret.Secret}", cancellationToken);
            var customerPaymentMethods = await GetCustomerPaymentMethodsAsync(dojoCustomer.Id, customerSecret.Secret);

            var result = await _paymentIntentsClient.CreatePaymentIntentAsync(new CreatePaymentIntentRequest
            {
                Amount = new Money()
                {
                    Value = checkoutRequest.Amount,
                    CurrencyCode = "GBP"
                },
                Config = new()
                {
                    CancelUrl = new Uri(checkoutRequest.CancelUrl),
                    RedirectUrl = new Uri(checkoutRequest.RedirectUrl),
                },
                PaymentMethods = new List<PaymentMethod>() { PaymentMethod.Card, PaymentMethod.Wallet },
                Description = checkoutRequest.Description,
                Reference = Guid.NewGuid().ToString(),
                Customer = new Customer
                {
                    EmailAddress = dojoCustomer.EmailAddress,
                    Id = dojoCustomer.Id
                }
            }, cancellationToken);

            return Ok(new CustomerCheckoutResponse
            {
                PaymentIntentId = result.Id,
                CustomerPaymentMethods = customerPaymentMethods
            });
        }
        catch (ApiClientException<ProblemDetails> e)
        {
            // Check Dojo Documentation for error handling https://docs.dojo.tech/api#section/Errors
            _logger.LogError(e, $"StatusCode:{e.Result.Status}, Response: {e.Result.Detail}, TraceId: {e.Result.TraceId}");
            throw;
        }
        catch (ApiClientException e)
        {
            _logger.LogError(e, "Unhandled error");
            throw;
        }
    }

    [HttpGet("customer/{paymentIntentId}")]
    [Authorize]
    public async Task<IActionResult> GetCustomerCheckoutAsync([FromRoute, Required] string paymentIntentId, CancellationToken cancellationToken)
    {
        var paymentIntent = await _paymentIntentsClient.GetAsync(paymentIntentId, cancellationToken);
        if (paymentIntent == null)
        {
            return NotFound();
        }

        try
        {
            var customerId = User.Claims.FirstOrDefault(c => c.Type == "CustomerId").Value;
            var customer = CustomersRepository.FindCustomer(customerId);
            var dojoCustomer = (await _customersClient.GetAsync(customer.DojoCustomerId, cancellationToken)).SingleOrDefault();

            if (dojoCustomer == null)
            {
                return BadRequest($"Could not find any customer with id '{customerId}'");
            }

            if (paymentIntent.Customer?.Id != dojoCustomer.Id)
            {
                return Unauthorized();
            }

            var customerSecret = await _customersClient.CreateCustomerSecretAsync(dojoCustomer.Id, cancellationToken);

            //var customerPaymentMethods = await _customersClient.GetPaymentMethodsAsync(dojoCustomer.Id, $"Basic {customerSecret.Secret}", cancellationToken);
            var customerPaymentMethods = await GetCustomerPaymentMethodsAsync(dojoCustomer.Id, customerSecret.Secret);

            return Ok(new CustomerCheckoutResponse
            {
                PaymentIntentId = paymentIntentId,
                CustomerPaymentMethods = customerPaymentMethods
            });
        }
        catch (ApiClientException<ProblemDetails> e)
        {
            // Check Dojo Documentation for error handling https://docs.dojo.tech/api#section/Errors
            _logger.LogError(e, $"StatusCode:{e.Result.Status}, Response: {e.Result.Detail}, TraceId: {e.Result.TraceId}");
            throw;
        }
        catch (ApiClientException e)
        {
            _logger.LogError(e, "Unhandled error");
            throw;
        }
    }

    [HttpGet("{paymentIntentId}")]
    public async Task<PaymentIntent> GetAsync(string paymentIntentId, CancellationToken cancellationToken)
    {
        try
        {
            return await _paymentIntentsClient.GetAsync(paymentIntentId, cancellationToken);
        }
        catch (ApiClientException<ProblemDetails> e)
        {
            // Check Dojo Documentation for error handling https://docs.dojo.tech/api#section/Errors
            _logger.LogError(e, $"StatusCode:{e.Result.Status}, Response: {e.Result.Detail}, TraceId: {e.Result.TraceId}");
            throw;
        }
        catch (ApiClientException e)
        {
            _logger.LogError(e, "Unhandled error");
            throw;
        }
    }

    [HttpPost("refresh-client-session/{paymentIntentId}")]
    public async Task<PaymentIntent> RefreshClientSessionSecretAsync(string paymentIntentId, CancellationToken cancellationToken)
    {
        try
        {
            return await _paymentIntentsClient.RefreshClientSessionSecretAsync(paymentIntentId, cancellationToken);
        }
        catch (ApiClientException<ProblemDetails> e)
        {
            // Check Dojo Documentation for error handling https://docs.dojo.tech/api#section/Errors
            _logger.LogError(e, $"StatusCode:{e.Result.Status}, Response: {e.Result.Detail}, TraceId: {e.Result.TraceId}");
            throw;
        }
        catch (ApiClientException e)
        {
            _logger.LogError(e, "Unhandled error");
            throw;
        }
    }

    private async Task<CustomerPaymentMethods> GetCustomerPaymentMethodsAsync(string customerId, string secret)
    {
        var httpClient = new HttpClient
        {
            BaseAddress = new Uri("https://api.dojo.tech", UriKind.Absolute),
        };

        httpClient.DefaultRequestHeaders.Add("Version", "2023-10-11");

        var request = new HttpRequestMessage(HttpMethod.Get,
            $"/customers/public/{customerId}/payment-methods");
        request.Headers.Add("Authorization", $"Basic {secret}");

        var response = await httpClient.SendAsync(request);

        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();

        return JsonConvert.DeserializeObject<CustomerPaymentMethods>(content);
    }
}
