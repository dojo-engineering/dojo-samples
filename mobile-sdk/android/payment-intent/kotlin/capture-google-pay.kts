// get the PaymentHandler
val dojoPayUI =
    DojoSDKDropInUI.createUIPaymentHandler(this) { result ->
        // handle result
        Toast.makeText(this, result.name, Toast.LENGTH_SHORT).show()
    }

// on pay clicked
dojoPayUI.startPaymentFlow(
    DojoPaymentFlowParams(
        paymentId = "<paymentIntentId>",
        // add this to enable Google Pay support
        GPayConfig = DojoGPayConfig(merchantName = "<Merchant_Name>", merchantId = "<Merchant_Id>", gatewayMerchantId = "<Gateway_Merchant_Id>")
    )
)
