// call this before you display the UI SDK on the screen
private fun configureDojoThemeSettings() {
    val lightColorPalette =
        LightColorPalette(
            // you can override any property value to `lightColorPalette`
            primaryLabelTextColor = "#DD000000"
        )
    val darkColorPalette =
        DarkColorPalette(
            // you can override any property value to `darkColorPalette`
            primaryLabelTextColor = "#FFFFFFFF"
        )
    DojoSDKDropInUI.dojoThemeSettings =
        DojoThemeSettings(
            lightColorPalette = lightColorPalette,
            DarkColorPalette = darkColorPalette,
            // set to true if you don't support dark mode
            forceLightMode = false,
            // set to false if you want to hide Dojo branding
            showBranding = true
        )
}
