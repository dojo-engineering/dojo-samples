// Obtain an instance of the desired theme
DojoThemeSettings *lightTheme = [DojoThemeSettings getLightTheme];
DojoThemeSettings *darkTheme = [DojoThemeSettings getDarkTheme];

// Set an individual property to a custom color
lightTheme.primaryLabelTextColor = [UIColor red];

// Pass the desired theme to the SDK when starting the payment flow
DojoSDKDropInUI *dojoUI = [[DojoSDKDropInUI alloc] init];
[dojoUI startPaymentFlowWithPaymentIntentId:@"-" themeSettings:darkTheme];