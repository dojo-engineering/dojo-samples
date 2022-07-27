#import dojo_ios_sdk

DojoCardPaymentPayload* cardPaymentPayload = [[DojoCardPaymentPayload alloc]
                                                initWithCardDetails: [[DojoCardDetails alloc]
                                                                    initWithCardNumber:@"4456530000001096"
                                                                    cardName:@"Card Holder Name"
                                                                    expiryDate:@"12 / 24"
                                                                    cv2:@"020"]
                                                userEmailAddress: NULL
                                                userPhoneNumber: NULL
                                                billingAddress: NULL
                                                shippingDetails: NULL
                                                metaData: NULL
                                                isSandbox: YES];
NSString *token = @"Token from Payment Intent (connecteToken)";
[DojoSDK executeCardPaymentWithToken: token payload: cardPaymentPayload fromViewController: self completion:^(NSInteger result) {
    NSLog(@"%ld", (long)result);
}];