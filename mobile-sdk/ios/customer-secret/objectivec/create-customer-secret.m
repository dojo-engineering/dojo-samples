[self.dojoUI startPaymentFlowWithPaymentIntentId:@"paymentIntentId"
                                      controller:self
                                  customerSecret:@"customer secret"
                                  applePayConfig:nil
                                   themeSettings:nil
                                      completion:^(NSInteger result) {
                                        NSLog(@"%ld", (long)result);
}];