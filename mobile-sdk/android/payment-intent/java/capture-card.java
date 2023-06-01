// get the PaymentHandler
private final DojoPaymentFlowHandler dojoPaymentFlowHandler = DojoSDKDropInUI.INSTANCE.createUIPaymentHandler(
          this,
          ((dojoPaymentResult) -> {
              return Unit.INSTANCE;
          }));

// on Pay tapped
dojoPaymentFlowHandler.startPaymentFlow(
        new DojoPaymentFlowParams(
                "pi_sandbox_RBMHTJ4fIkmSppDILZVCGw",
                null, // add this if you support saved card, else pass null
                null // add this if you support Google Pay, else pass null
        ));