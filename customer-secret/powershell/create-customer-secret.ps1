# This is a public sandbox API key.
# Don’t submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.
$publicSandboxKey = "sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ"
Invoke-WebRequest `
    -Uri 'https://api.dojo.tech/customers/cust_sandbox_6g-HvPv6VkG_Q_PXCpJqmw/create-secret' `
    -Method POST `
    -Headers @{ "version" = "2023-01-10"; "Authorization" = "Basic $publicSandboxKey" } `
    -ContentType 'application/json'