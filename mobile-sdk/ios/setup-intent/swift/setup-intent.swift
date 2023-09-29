import dojo_ios_sdk_drop_in_ui

let dojoUI = DojoSDKDropInUI()
dojoUI.startSetupFlow(setupIntentId: "<setupIntentId>", controller: self) {
  result in
  print(result)
}
