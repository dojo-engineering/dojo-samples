# The sandbox API key passed in 'authorization' is public.
# Don’t submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

curl -v --request POST \
    --url https://api.dojo.tech/payment-intents/pi_sandbox_Dcqx7k8pUUKedgB6wD1J1A/charge \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Basic sk_sandbox_c8oLGaI__msxsXbpBDpdtwJEz_eIhfQoKHmedqgZPCdBx59zpKZLSk8OPLT0cZolbeuYJSBvzDVVsYvtpo5RkQ' \
    --header 'Version: 2024-01-15'
