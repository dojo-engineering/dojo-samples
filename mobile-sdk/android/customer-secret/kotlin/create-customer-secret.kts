// Get the PaymentHandler
val dojoPayUI =
    DojoSDKDropInUI.createUIPaymentHandler(this) { result ->
        // Handle result
        Toast.makeText(this, result.name, Toast.LENGTH_SHORT).show()
    }

// On "Pay" tapped
dojoPayUI.startPaymentFlow(
    DojoPaymentFlowParams(
        paymentId = "<paymentIntentId>",
        clientSecret = "<secret>"// Customer secret key
    )
)
