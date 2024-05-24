private final DojoPaymentFlowHandler dojoPaymentFlowHandler = DojoSDKDropInUI.INSTANCE.createUIPaymentHandler(
            this,
            ((dojoPaymentResult) -> {
                Toast.makeText(this, dojoPaymentResult.name(),
                        Toast.LENGTH_LONG).show();
                return Unit.INSTANCE;
            }));

        // on pay clicked
        DojoGPayConfig dojoGPayConfig = new DojoGPayConfig(
                false,
                null,
                false,
                false,
                false,
                "merchantName",
                "merchantId",
                "gatewayMerchantId",
                new ArrayList<>()
        );
        DojoPaymentType paymentType = DojoPaymentType.SETUP_INTENT;
        // On "Pay" tapped
        dojoPaymentFlowHandler.startPaymentFlow(
                new DojoPaymentFlowParams(
                        "pi_sandbox_RBMHTJ4fIkmSppDILZVCGw",
                        dojoGPayConfig, // add this if your app supports Google Pay else pass null.
                        paymentType
                )
        );