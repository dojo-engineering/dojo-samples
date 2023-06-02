// get the PaymentHandler
private final DojoPaymentFlowHandler dojoPaymentFlowHandler = DojoSDKDropInUI.INSTANCE.createUIPaymentHandler(
    this,
    ((dojoPaymentResult) - > {
        Toast.makeText(this, dojoPaymentResult.name(),
            Toast.LENGTH_LONG).show();
        return Unit.INSTANCE;
    }));

// on Pay tapped
dojoPaymentFlowHandler.startPaymentFlow(
    new DojoPaymentFlowParams(
        "<paymentIntentId>",
        null, // add this if you support saved card, else pass null
        null // add this if you support Google Pay, else pass null
    ));