# The sandbox API key passed in 'authorization' is public.
# Don't submit any personally identifiable information in any requests made with this key.
# Sign in to developer.dojo.tech to create your own private sandbox key and use that instead
# for secure testing.

curl -v --request POST \
  --url https://api.dojo.tech/payment-intents/<paymentIntentId>/reversal \
  --header 'Authorization: Basic <your_api_key>' \
  --header 'Version: 2022-04-07'