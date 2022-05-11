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
public class WebhookController : ControllerBase
{
    private readonly ILogger<WebhookController> _logger;
    private readonly IPaymentIntentsClient _paymentIntentsClient;
    private readonly string _webhookSecret;

    public WebhookController(IConfiguration configuration, ILogger<WebhookController> logger, IPaymentIntentsClient paymentIntentsClient)
    {
        // do not store secrets as plain text in the config files, consider to use secret managers
        _webhookSecret = configuration.GetSection("Dojo")["WebhookSecret"];

        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _paymentIntentsClient = paymentIntentsClient ?? throw new ArgumentNullException(nameof(paymentIntentsClient));
    }

    [HttpPost]
    public async Task WebhookCallback(CancellationToken cancellationToken)
    {
        using var streamReader = new StreamReader(HttpContext.Request.Body);
        var body = await streamReader.ReadToEndAsync();

        if (HttpContext.Request.Headers.TryGetValue(WebhookPayloadUtils.SignatureHeaderName, out var signatureHeader))
        {
            var payload = WebhookPayloadUtils.ReadPayload(body, _webhookSecret, signatureHeader);

            if (payload.Data.PaymentStatus == PaymentIntentStatus.Captured)
            {
                var paymentIntent = await _paymentIntentsClient.GetAsync(payload.Data.PaymentIntentId, cancellationToken);
                // TODO: update your database or do some action based on successful payment
                _logger.LogInformation($"Payment successfull for paymentIntentId: {payload.Data?.PaymentIntentId}");
            }

            _logger.LogInformation($"Received event. PaymentIntentId: {payload.Data?.PaymentIntentId}, Status: {payload.Data?.PaymentStatus}");
        }
    }
}
