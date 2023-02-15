// This example shows how to do this for Microsoft ASP.NET MVC project (https://learn.microsoft.com/en-us/aspnet/mvc/).
// However just, reading the HTTP request body of the webhook call as UTF-8 string and 
// signature header ('dojo-signature') value to compare with would work.

// Read request body as a byte stream
using var streamReader = new StreamReader(HttpContext.Request.Body);
string body = await streamReader.ReadToEndAsync();

// Get signature header value
if (HttpContext.Request.Headers.TryGetValue(WebhookPayloadUtils.SignatureHeaderName, out var signatureHeader))
{
    // Use Dojo.Net SDK to deserialize and validate webhook payload
    // _webhookSecret is the webhook secret value, created in the Developer portal (i.e. developer.dojo.tech)
    var payload = WebhookPayloadUtils.ReadPayload(body, _webhookSecret, signatureHeader);

    // TODO: update your database or do some action based on successful payment
}