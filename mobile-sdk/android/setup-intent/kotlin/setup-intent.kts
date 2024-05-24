val dojoHandler = DojoSDKDropInUI.createUIPaymentHandler(this) {
    // handle result
    Toast.makeText(this, it.name, Toast.LENGTH_SHORT).show()
}
    // On "Pay" tapped
dojoHandler.startPaymentFlow(
    DojoPaymentFlowParams(
        paymentId = "pi_sandbox_mDvzElFkoU2QH440cwoOEg",
        GPayConfig = null, // add this if your app supports Google Pay.
        paymentType = DojoPaymentType.SETUP_INTENT,
    ),
)