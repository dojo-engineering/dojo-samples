// call this before u display the ui sdk on the screen
private void configureDojoThemeSettings() {
        // you can override any value you for lightColorPalette
        LightColorPalette lightColorPalette = new LightColorPalette(
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000");
    
        // you can override any value for the darkColorPalette
        DarkColorPalette darkColorPalette = new DarkColorPalette(
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000",
            "#DD000000");
    
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