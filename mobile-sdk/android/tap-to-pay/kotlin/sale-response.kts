val intent = Intent("com.dojo.action.TX_COMPLETE")
intent.putExtra(“com.dojo.extra.SALE_STATUS”, "OK")
intent.putExtra("com.dojo.extra.TRANSACTION_RESULT", transactionResult: String (enum: SUCCESSFUL, DECLINED, CANCELLED, UNSUCCESSFUL))
intent.putExtra("com.dojo.extra.TRANSACTION_ID", transactionId: String)
intent.putExtra("com.dojo.extra.AUTH_CODE", authCode: String)
intent.putExtra("com.dojo.extra.BASE_AMOUNT", baseAmount: Integer)
intent.putExtra("com.dojo.extra.GRATUITY_AMOUNT", gratuityAmount: Integer)
intent.putExtra("com.dojo.extra.PAYMENT_METHOD", paymentMethod: String (enum: KEYED, SWIPED, ICC_CHIP, CONTACTLESS))
intent.putExtra("com.dojo.extra.CARDHOLDER_VERIFICATION_METHOD", cardholderVerificationMethod: String (enum: NONE, PIN, DEVICE))
intent.putExtra("com.dojo.extra.CARD_SCHEME", cardScheme: String (enum: VISA, MASTERCARD, MAESTRO, AMEX, DISCOVER, DINERS, UNKNOWN))
intent.putExtra("com.dojo.extra.CARD_APPLICATION_LABEL", cardApplicationLabel: String)
intent.putExtra("com.dojo.extra.CARD_APPLICATION_ID", cardApplicationId: String)

with(requireActivity()) {
    setResult(Activity.RESULT_OK, intent)
    finish()
}
