// get the PaymentHandler
private final DojoPaymentFlowHandler dojoPaymentFlowHandler = DojoSDKDropInUI.INSTANCE.createUIPaymentHandler(
        this,
        ((dojoPaymentResult) -> {
            return Unit.INSTANCE;
        }));

// on "Pay" tapped
dojoPaymentFlowHandler.startPaymentFlow(
      new DojoPaymentFlowParams(
              "pi_sandbox_RBMHTJ4fIkmSppDILZVCGw",
              "<customer secret key>" ,
              null
      ));