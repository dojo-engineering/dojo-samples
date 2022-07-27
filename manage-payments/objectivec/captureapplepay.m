#import dojo_ios_sdk

DojoApplePayConfig *applePayConfig = [[DojoApplePayConfig alloc] initWithMerchantIdentifier: @"merchant.uk.co.paymentsense.sdk.demo.app"
                                                                        collectBillingAddress: FALSE
                                                                        collectShippingAddress: FALSE
                                                                        collectEmail: FALSE];
DojoApplePayPayload *applePayPayload = [[DojoApplePayPayload alloc] initWithApplePayConfig: applePayConfig email: NULL metaData: NULL isSandbox: YES];
DojoPaymentIntent *paymentIntent = [[DojoPaymentIntent alloc] initWithConnecteToken: @"Token from Payment Intent (connecteToken)" totalAmount: [[DojoPaymentIntentAmount alloc] initWithValue: 120 currencyCode:@"GBP"]];  / TODO - this values should be populated from payment intent 
[DojoSDK executeApplePayPaymentWithPaymentIntent: paymentIntent payload: applePayPayload fromViewController:self completion: ^(NSInteger result) {
    NSLog(@"%ld", (long)result);
}];