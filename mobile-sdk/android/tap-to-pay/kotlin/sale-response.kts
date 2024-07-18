val intent = Intent("com.dojo.action.SALE_COMPLETE")
intent.putExtra("com.dojo.extra.TRX_RESULT", [true|false] :Boolean)
intent.putExtra("com.dojo.extra.TRX_RESULT_DETAIL", "Approved")
intent.putExtra("com.dojo.extra.TRX_TRANSACTION_ID", transactionId: String)
intent.putExtra("com.dojo.extra.TRX_AUTH_CODE", authCode: String)

with(requireActivity()) {
    setResult(Activity.RESULT_OK, intent)
    finish()
}