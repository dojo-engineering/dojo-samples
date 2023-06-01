// get the PaymentHandler
val dojoPayUI = DojoSDKDropInUI.createUIPaymentHandler(this) { result -> showResult(result) }
// on "Pay" tapped
dojoPayUI.startPaymentFlow(
  DojoPaymentFlowParams(
      paymentId= "pi_sandbox_RBMHTJ4fIkmSppDILZVCGw",  
      clientSecret = "<customer secret key>"   
  )
)