val intent = Intent("com.dojo.action.TX_COMPLETE")
intent.putExtra("com.dojo.extra.SALE_STATUS", "OK")
intent.putExtra("com.dojo.extra.TRANSACTION_RESULT", "AUTHORISED") // enum: AUTHORISED, DECLINED, CANCELLED, FAILED
intent.putExtra("com.dojo.extra.TRANSACTION_ID", "123456789")
intent.putExtra("com.dojo.extra.AUTH_CODE", "654321")
intent.putExtra("com.dojo.extra.BASE_AMOUNT", 1000)
intent.putExtra("com.dojo.extra.GRATUITY_AMOUNT", 150)
intent.putExtra("com.dojo.extra.PAYMENT_METHOD", "CONTACTLESS") // enum: KEYED, MANUAL_ENTRY, SWIPE, ICC_CHIP, CONTACTLESS, UNKNOWN
intent.putExtra("com.dojo.extra.CARDHOLDER_VERIFICATION_METHOD", "PIN") // enum: PIN, SIGNATURE
intent.putExtra("com.dojo.extra.CARD_SCHEME", "VISA") // enum: VISA, MASTERCARD, MAESTRO, AMERICAN_EXPRESS, DISCOVER, DINERS, UNION_PAY, JCB, UNKNOWN
intent.putExtra("com.dojo.extra.CARD_APPLICATION_LABEL", "VISA DEBIT")
intent.putExtra("com.dojo.extra.CARD_APPLICATION_ID", "A0000000031010")
intent.putExtra("com.dojo.extra.CARD_PAN", "************0226") // masked PAN

with(requireActivity()) {
    setResult(Activity.RESULT_OK, intent)
    finish()
}
