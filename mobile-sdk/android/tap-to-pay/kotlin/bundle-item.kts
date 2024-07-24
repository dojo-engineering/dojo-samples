val baseAmount = bundle.getInt("com.dojo.extra.BASE_AMOUNT", -1)
val gratuityAmount = bundle.getInt("com.dojo.extra.GRATUITY_AMOUNT", -1)
val txResult = bundle.getString("com.dojo.extra.TRANSACTION_RESULT”)
val authCode = bundle.getString("com.dojo.extra.AUTH_CODE")
val txId = bundle.getString("com.dojo.extra.TRANSACTION_ID")
val paymentMethod = bundle.getString("com.dojo.extra.PAYMENT_METHOD")

if (paymentMethod == "KEYED") return

val cvmString =  bundle.getString("com.dojo.extra.CARDHOLDER_VERIFICATION_METHOD")
val cardScheme = bundle.getString("com.dojo.extra.CARD_SCHEME")
val appLabel = bundle.getString("com.dojo.extra.CARD_APPLICATION_LABEL")
val appId = bundle.getString("com.dojo.extra.CARD_APPLICATION_ID")