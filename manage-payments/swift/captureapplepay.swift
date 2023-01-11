import dojo_ios_sdk

let applePayConfig = DojoApplePayConfig(merchantIdentifier:"merchant.uk.co.paymentsense.sdk.demo.app")
let applePayPayload = DojoApplePayPayload(applePayConfig: applePayConfig, isSandbox: true)
let paymentIntent = DojoPaymentIntent(connecteToken: "Token from Payment Intent (connecteToken)", totalAmount: DojoPaymentIntentAmount(value: 120, currencyCode: "GBP")) // TODO - this values should be populated from payment intent
DojoSDK.executeApplePayPayment(paymentIntent: paymentIntent, payload: applePayPayload, fromViewController: self) { [weak self] result in
    print(result) 
}