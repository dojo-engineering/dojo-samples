dojoUI.startPaymentFlow(
  paymentIntentId: "<paymentIntentId>",
  controller: self,
  applePayConfig: DojoUIApplePayConfig(merchantIdentifier: "<Merchant_Identifier>")
) { result in
  print(result)
}
