// Get the PaymentHandler
private final DojoPaymentFlowHandler dojoPaymentFlowHandler = DojoSDKDropInUI.INSTANCE.createUIPaymentHandler(
    this,
    ((dojoPaymentResult) -> {
        Toast.makeText(this, dojoPaymentResult.name(),
            Toast.LENGTH_LONG).show();
        return Unit.INSTANCE;
    }));

// On "Pay" tapped
dojoPaymentFlowHandler.startPaymentFlow(
    new DojoPaymentFlowParams(
        "<paymentIntentId>",
        "<secret>" // Customer secret key
    ));