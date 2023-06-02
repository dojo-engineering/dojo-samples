dojoUI.startPaymentFlow(
  paymentIntentId: "payment-intent-id",
  controller: self,
  applePayConfig: DojoUIApplePayConfig(merchantIdentifier: "merchant-identifier")
) { result in
  print(result)
}
