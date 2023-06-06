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
    false, // collectShipping
    null, // allowedCountryCodesForShipping
    false, // collectBilling
    false, // collectEmailAddress
    false, // collectPhoneNumber
    "<Merchant_Name>",
    "<Merchant_Id>",
    "<Gateway_Merchant_Id>",
    new ArrayList < > ()
);
// on Pay tapped
dojoPaymentFlowHandler.startPaymentFlow(
    new DojoPaymentFlowParams(
        "<paymentIntentId>",
        null, // add this if you support saved card, else pass null
        dojoGPayConfig // when you support Google Pay
    ));