// get the PaymentHandler
val dojoPayUI =
    DojoSDKDropInUI.createUIPaymentHandler(this) { result ->
        // handle result
        Toast.makeText(this, result.name, Toast.LENGTH_SHORT).show()
    }

// on "Pay" tapped
dojoPayUI.startPaymentFlow(
    DojoPaymentFlowParams(
        paymentId = "pi_sandbox_RBMHTJ4fIkmSppDILZVCGw",
        clientSecret = "<customer secret key>"
    )
)
