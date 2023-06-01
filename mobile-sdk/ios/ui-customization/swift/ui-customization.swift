  // Obtain an instance of the desired theme
  var lightTheme = DojoThemeSettings.getLightTheme()
  let darkTheme = DojoThemeSettings.getDarkTheme()

  // Set an individual property to a custom color
  lightTheme.primaryLabelTextColor = .red

  // Pass the desired theme to the SDK when starting the payment flow
  let dojoUI = DojoSDKDropInUI()
  dojoUI.startPaymentFlow(themeSettings: darkTheme)