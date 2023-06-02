#import <dojo_ios_sdk_drop_in_ui-Swift.h>

@property DojoSDKDropInUI *dojoUI;

self.dojoUI = [[DojoSDKDropInUI alloc] init];
[self.dojoUI startPaymentFlowWithPaymentIntentId:@"<paymentIntentId>"
                                      controller:self
                                  customerSecret:nil
                                  applePayConfig:[[DojoUIApplePayConfig alloc]
                                                     initWithMerchantIdentifier:
                                                         @"<Merchant_Identifier>"]
                                   themeSettings:nil
                                      completion:^(NSInteger result) {
                                        NSLog(@"%ld", (long)result);
}];