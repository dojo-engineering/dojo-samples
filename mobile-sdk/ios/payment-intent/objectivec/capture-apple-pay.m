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