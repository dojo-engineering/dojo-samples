namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class CheckoutController : ControllerBase
{
    private readonly ILogger<CheckoutController> _logger;
    private readonly IPaymentIntentsClient _paymentIntentsClient;

    public CheckoutController(ILogger<CheckoutController> logger, IPaymentIntentsClient paymentIntentsClient)
    {
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
