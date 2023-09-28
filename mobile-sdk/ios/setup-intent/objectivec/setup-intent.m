#import <dojo_ios_sdk_drop_in_ui-Swift.h>

@property DojoSDKDropInUI *dojoUI;

self.dojoUI = [[DojoSDKDropInUI alloc] init];
[self.dojoUI startSetupFlowWithPaymentIntentId:@"<paymentIntentId>"
                                    controller:self
                                 themeSettings:nil
                                    completion:^(NSInteger result) {
                                        NSLog(@"%ld", (long)result);
}];