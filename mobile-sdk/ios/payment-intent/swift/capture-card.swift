import dojo_ios_sdk_drop_in_ui

let dojoUI = DojoSDKDropInUI()
dojoUI.startPaymentFlow(paymentIntentId: "<paymentIntentId>", controller: self) {
  result in
  print(result)
}
