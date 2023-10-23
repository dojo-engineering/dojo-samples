// Get the PaymentHandler
val dojoPayUI =
    DojoSDKDropInUI.createUIPaymentHandler(this) { result ->
        // Handle result
        Toast.makeText(this, result.name, Toast.LENGTH_SHORT).show()
    }

// On Pay calicked
dojoPayUI.startPaymentFlow(
    DojoPaymentFlowParams(
        paymentId = "<paymentIntentId>",
        // Add this to enable Google Pay support
        GPayConfig = DojoGPayConfig(merchantName = "<Merchant_Name>", merchantId = "<Merchant_Id>", gatewayMerchantId = "<Gateway_Merchant_Id>")
    )
)
