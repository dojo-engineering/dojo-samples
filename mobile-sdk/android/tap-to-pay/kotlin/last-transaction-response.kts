with(intent) {
    putExtra("com.dojo.extra.SPLIT_BILL", false)
    putExtra("com.dojo.extra.TX_STATUS", "OK")
    putExtra("com.dojo.extra.TRANSACTION_RESULT", toThirdPartyTxResult())
    putExtra("com.dojo.extra.AUTH_CODE", txItem.authCode)
    putExtra("com.dojo.extra.PAYMENT_METHOD", txItem.paymentMethod.name)
    putExtra("com.dojo.extra.CARDHOLDER_VERIFICATION_METHOD", txItem.cvm.name)
    putExtra("com.dojo.extra.CARD_SCHEME", txItem.cardScheme.name)
    putExtra("com.dojo.extra.CARD_APPLICATION_LABEL", txItem.applicationLabel)
    putExtra("com.dojo.extra.CARD_APPLICATION_ID", txItem.applicationId.value)
    putExtra("com.dojo.extra.TRANSACTION_ID", txItem.txId.value)
    putExtra("com.dojo.extra.BASE_AMOUNT", txItem.baseAmount.value)
    putExtra("com.dojo.extra.GRATUITY_AMOUNT", txItem.gratuityAmount.value)
}

with(requireActivity()) {
    setResult(Activity.RESULT_OK, intent)
    finish()
}