val intent = Intent("com.dojo.action.ENABLE_SPLIT_BILLS_COMPLETE")
intent.putExtra("com.dojo.extra.ENABLE_SPLIT_BILLS_RESULT", [true|false] :Boolean)
intent.putExtra("com.dojo.extra.ENABLE_GRATUITIES_RESULT", [true|false] :Boolean)

with(requireActivity()) {
    setResult(Activity.RESULT_OK, intent)
    finish()
}