#import <dojo_ios_sdk_drop_in_ui-Swift.h>

@property DojoSDKDropInUI *dojoUI;

self.dojoUI = [[DojoSDKDropInUI alloc] init];
[self.dojoUI startPaymentFlowWithPaymentIntentId: @"payment-intent-id"
                                    controller: self
                                customerSecret: nil
                                applePayConfig: [[DojoUIApplePayConfig alloc] 
                                initWithMerchantIdentifier: @"merchant-identifier"]
                                 themeSettings: nil
                                    completion: ^(NSInteger result) {
  NSLog(@"%ld", (long)result);
}];