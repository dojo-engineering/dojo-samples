// get the PaymentHandler
val dojoPayUI = DojoSDKDropInUI.createUIPaymentHandler(this) { result -> showResult(result) }
// on pay clicked
dojoPayUI.startPaymentFlow(
  DojoPaymentFlowParams(
      paymentId= "pi_sandbox_RBMHTJ4fIkmSppDILZVCGw", //switch to production key when going live.
      // add this to enable Google Pay support
      GPayConfig = DojoGPayConfig(
          merchantName = "",
          merchantId = "",
          gatewayMerchantId = ""
      )
  )
)