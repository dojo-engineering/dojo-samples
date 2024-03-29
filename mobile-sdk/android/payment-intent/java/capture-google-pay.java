// Get the PaymentHandler
private final DojoPaymentFlowHandler dojoPaymentFlowHandler = DojoSDKDropInUI.INSTANCE.createUIPaymentHandler(
    this,
    ((dojoPaymentResult) -> {
        Toast.makeText(this, dojoPaymentResult.name(),
            Toast.LENGTH_LONG).show();
        return Unit.INSTANCE;
    }));

// Define dojoGPayConfig object  
DojoGPayConfig dojoGPayConfig = new DojoGPayConfig(
    "<Merchant_Name>",
    "<Merchant_Id>",
    "<Gateway_Merchant_Id>"
);
// On "Pay" tapped
dojoPaymentFlowHandler.startPaymentFlow(
    new DojoPaymentFlowParams(
        "<paymentIntentId>",
        null, // Add "<secret>" if you support "Save card" functionality, else pass null
        dojoGPayConfig // Add this if you support Google Pay, else pass null
    ));