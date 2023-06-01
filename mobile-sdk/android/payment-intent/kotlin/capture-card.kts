// get the PaymentHandler
val dojoPayUI = DojoSDKDropInUI.createUIPaymentHandler(this) { result->
    // handle result
    Toast.makeText(this, result.name, Toast.LENGTH_SHORT).show()
}

// on pay clicked
dojoPayUI.startPaymentFlow(
DojoPaymentFlowParams(
  paymentId= "pi_sandbox_RBMHTJ4fIkmSppDILZVCGw", 
  // add this to enable Google Pay support
  GPayConfig = DojoGPayConfig(
      merchantName = "",
      merchantId = "",
      gatewayMerchantId = ""
  )
)
)