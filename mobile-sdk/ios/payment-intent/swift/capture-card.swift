import dojo_ios_sdk_drop_in_ui

let dojoUI = DojoSDKDropInUI()
dojoUI.startPaymentFlow(paymentIntentId: "pi_sandbox_RBMHTJ4fIkmSppDILZVCGw", controller: self) {
  result in
  print(result)
}