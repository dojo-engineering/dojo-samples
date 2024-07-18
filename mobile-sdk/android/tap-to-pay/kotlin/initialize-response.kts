val intent = Intent("com.dojo.action.INIT_COMPLETE")

with(intent) {
    putExtra("com.dojo.extra.INIT_RESULT", [true|false] :Boolean)
    putExtra("com.dojo.extra.INIT_RESULT_DETAIL", "OK")
}

with(requireActivity()) {
    setResult(Activity.RESULT_OK, intent)
    finish()
}