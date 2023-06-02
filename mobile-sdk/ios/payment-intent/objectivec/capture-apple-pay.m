[self.dojoUI startPaymentFlowWithPaymentIntentId:@"Payment Intent ID"
                                      controller:self
                                  customerSecret:nil
                                  applePayConfig:[[DojoUIApplePayConfig alloc]
                                                     initWithMerchantIdentifier:
                                                         @"Merchant Identifier"]
                                   themeSettings:nil
                                      completion:^(NSInteger result) {
                                        NSLog(@"%ld", (long)result);
}];