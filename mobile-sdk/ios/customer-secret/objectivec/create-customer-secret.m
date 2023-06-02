[self.dojoUI startPaymentFlowWithPaymentIntentId:@"<paymentIntentId>"
                                      controller:self
                                  customerSecret:@"<secret>" // Customer secret key
                                  applePayConfig:nil
                                   themeSettings:nil
                                      completion:^(NSInteger result) {
                                        NSLog(@"%ld", (long)result);
}];