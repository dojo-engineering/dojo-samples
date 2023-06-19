dojoUI.startPaymentFlow(
  paymentIntentId: "<paymentIntentId>",
  controller: self,
  customerSecret: "<secret>" // Customer secret key
) { result in
  print(result)
}
