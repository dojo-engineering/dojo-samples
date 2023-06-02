// get the PaymentHandler
private final DojoPaymentFlowHandler dojoPaymentFlowHandler = DojoSDKDropInUI.INSTANCE.createUIPaymentHandler(
    this,
    ((dojoPaymentResult) - > {
        Toast.makeText(this, dojoPaymentResult.name(),
            Toast.LENGTH_LONG).show();
        return Unit.INSTANCE;
    }));

// define dojoGPayConfig object  
DojoGPayConfig dojoGPayConfig = new DojoGPayConfig(
    false,
    null,
    false,
    false,
    false,
    "merchantName",
    "merchantId",
    "gatewayMerchantId",
    new ArrayList < > ()
);
// on Pay tapped
dojoPaymentFlowHandler.startPaymentFlow(
    new DojoPaymentFlowParams(
        "pi_sandbox_RBMHTJ4fIkmSppDILZVCGw", //switch to production key when going live.
        null, // add this if you support saved card, else pass null
        dojoGPayConfig // Google Pay support
    ));