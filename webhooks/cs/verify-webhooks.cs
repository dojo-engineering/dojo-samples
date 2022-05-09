// read request body as a byte stream
using var streamReader = new StreamReader(HttpContext.Request.Body);
var body = await streamReader.ReadToEndAsync();

// Get signature header value
if (HttpContext.Request.Headers.TryGetValue(WebhookPayloadUtils.SignatureHeaderName, out var signatureHeader))
{
    // use Dojo.Net SDK to deserialize and validate webhook payload
    var payload = WebhookPayloadUtils.ReadPayload(body, _webhookSecret, signatureHeader);

    // TODO: update your database or do some action based on successful payment
}