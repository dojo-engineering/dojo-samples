// Get the PaymentHandler
private final DojoPaymentFlowHandler dojoPaymentFlowHandler = DojoSDKDropInUI.INSTANCE.createUIPaymentHandler(
    this,
    ((dojoPaymentResult) - > {
        Toast.makeText(this, dojoPaymentResult.name(),
            Toast.LENGTH_LONG).show();
        return Unit.INSTANCE;
    }));

// On "Pay" tapped
dojoPaymentFlowHandler.startPaymentFlow(
    new DojoPaymentFlowParams(
        "<paymentIntentId>",
        null, // Add "<secret>" if you support "Save card" functionality, else pass null
        null // Add "dojoGPayConfig" if you support Google Pay, else pass null
    ));