// Get the PaymentHandler
val dojoPayUI =
    DojoSDKDropInUI.createUIPaymentHandler(this) { result ->
        // handle result
        Toast.makeText(this, result.name, Toast.LENGTH_SHORT).show()
    }

// On Pay clicked
dojoPayUI.startPaymentFlow(DojoPaymentFlowParams(paymentId = "<paymentIntentId>"))
