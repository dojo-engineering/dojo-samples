using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dojo.Net;
using Microsoft.Extensions.Logging;
using ProblemDetails = Dojo.Net.ProblemDetails;
using Dojo.Net.Webhooks;
using Microsoft.Extensions.Configuration;
using server.Model;

namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class CheckoutController : ControllerBase
{
    private readonly ILogger<CheckoutController> _logger;
    private readonly IPaymentIntentsClient _paymentIntentsClient;
    private readonly string _webhookSecret;

    public CheckoutController(IConfiguration configuration, ILogger<CheckoutController> logger, IPaymentIntentsClient paymentIntentsClient)
    {
        // do not store secrets as plain text in the config files, consider to use secret managers
        _webhookSecret = configuration.GetSection("Dojo")["WebhookSecret"];

        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _paymentIntentsClient = paymentIntentsClient ?? throw new ArgumentNullException(nameof(paymentIntentsClient));
    }

    [HttpPost]
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
                Config = new PaymentIntentConfig()
                {
                    CancelUrl = new Uri(checkoutRequest.CancelUrl),
                    RedirectUrl = new Uri(checkoutRequest.RedirectUrl),
                },
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
}
