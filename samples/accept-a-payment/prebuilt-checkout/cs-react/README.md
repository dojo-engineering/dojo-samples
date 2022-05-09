## Test webhooks
1. Setup free ngrok account at https://dashboard.ngrok.com/signup
2. Follow the instructions there to download and setup ngrok
3. Start the sample website 
```shell
dotnet run
```
4. Test that the sample app is working by going to http://localhost:44488
5. Run
```shell
ngrok http 44488
```

Check the ngrok output, and copy the forwarding url

```shell
ngrok                                                                                                                                                                                                                         (Ctrl+C to quit)
                                                                                                                                                                                                                                              
Session Status                online                                                                                                                                                                                                          
Account                       <your  email> (Plan: Free)                                                                                                                                                                     
Version                       3.0.3                                                                                                                                                                                                           
Region                        Europe (eu)                                                                                                                                                                                                     
Latency                       14.893693ms                                                                                                                                                                                                     
Web Interface                 http://127.0.0.1:4040                                                                                                                                                                                           
Forwarding                    https://5355-195-224-145-249.eu.ngrok.io -> http://localhost:44488                                                                                                                                              
                                                                                                                                                                                                                                              
Connections                   ttl     opn     rt1     rt5     p50     p90                                                                                                                                                                     
                              3       1       0.00    0.00    5.08    5.38     
```

6. Register webhook url

Please read the docs [here](https://docs.dojo.tech/docs/development-resources/webhooks)

```shell
curl --request POST \
  --url https://api.dojo.tech/webhooks \
  --header 'Authorization: Basic $APIKEY' \
  --header 'content-type: application/json' \
  --header 'version: 2022-04-07' \
  --data '{"events":["payment_intent.status_updated"],"url":"https://5355-195-224-145-249.eu.ngrok.io/webhook"}'
```

You should see a response like this:
```shell
{"id":"ws_sandbox_I_KlHbCwJkGz6aByUNgSSQ","secrets":[{"id":"sc_NjuaPEUzSkiYMtu4GHKyxg","value":"SECRET_VALUE","isActive":true,"createdAt":"2022-05-03T13:35:09.9111809Z"}]}
```
Copy secret value and put it into appsettings.json

```json
{
  "Dojo": {
    "WebhookSecret": "SECRET_VALUE",
    "ApiKey": "API_KEY"
  }
}
```
