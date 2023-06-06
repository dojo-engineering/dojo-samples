// call this before u display the ui sdk on the screen
private void configureDojoThemeSettings() {
        // you can override any value you for lightColorPalette
        LightColorPalette lightColorPalette = new LightColorPalette(
            "#DD000000", // primaryLabelTextColor
            "#DD000000", // secondaryLabelTextColor
            "#DD000000", // headerTintColor
            "#DD000000", // headerButtonTintColor
            "#DD000000", // primarySurfaceBackgroundColor
            "#DD000000", // primaryCTAButtonActiveBackgroundColor
            "#DD000000", // primaryCTAButtonActiveTextColor
            "#DD000000", // primaryCTAButtonDisabledBackgroundColor
            "#DD000000", // primaryCTAButtonDisableTextColor
            "#DD000000", // secondaryCTAButtonActiveBorderColor
            "#DD000000", // secondaryCTAButtonActiveTextColor
            "#DD000000", // separatorColor
            "#DD000000", // errorTextColor
            "#DD000000", // loadingIndicatorColor
            "#DD000000", // inputFieldPlaceholderColor
            "#DD000000", // inputFieldBackgroundColor
            "#DD000000", // inputFieldDefaultBorderColor
            "#DD000000", // inputFieldSelectedBorderColor
            "#DD000000", // inputElementActiveTintColor
            "#DD000000"); // inputElementDefaultTintColor
    
        // you can override any value for the darkColorPalette
        DarkColorPalette darkColorPalette = new DarkColorPalette(
            "#DD000000", // primaryLabelTextColor
            "#DD000000", // secondaryLabelTextColor
            "#DD000000", // headerTintColor
            "#DD000000", // headerButtonTintColor
            "#DD000000", // primarySurfaceBackgroundColor
            "#DD000000", // primaryCTAButtonActiveBackgroundColor
            "#DD000000", // primaryCTAButtonActiveTextColor
            "#DD000000", // primaryCTAButtonDisabledBackgroundColor
            "#DD000000", // primaryCTAButtonDisableTextColor
            "#DD000000", // secondaryCTAButtonActiveBorderColor
            "#DD000000", // secondaryCTAButtonActiveTextColor
            "#DD000000", // separatorColor
            "#DD000000", // errorTextColor
            "#DD000000", // loadingIndicatorColor
            "#DD000000", // inputFieldPlaceholderColor
            "#DD000000", // inputFieldBackgroundColor
            "#DD000000", // inputFieldDefaultBorderColor
            "#DD000000", // inputFieldSelectedBorderColor
            "#DD000000", // inputElementActiveTintColor
            "#DD000000"); // inputElementDefaultTintColor
    
        DojoThemeSettings dojoThemeSettings = new DojoThemeSettings(
            lightColorPalette,
            darkColorPalette,
            // set that one to true if you don't support dark mode
            false,
            // set that one to false if you want to hide dojo brand
            true
        );
        DojoSDKDropInUI.INSTANCE.setDojoThemeSettings(dojoThemeSettings);
    }