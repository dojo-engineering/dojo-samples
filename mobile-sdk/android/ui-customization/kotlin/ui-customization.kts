  // call this before u display the ui sdk on the screen
  private fun configureDojoThemeSettings() {
    val lightColorPalette= LightColorPalette(
        // you can override any value you for the lightColorPalette
        primaryLabelTextColor= "#DD000000"
    )
    val darkColorPalette = DarkColorPalette(
        // you can override any value you for the darkColorPalette
        primaryLabelTextColor= "#FFFFFFFF"
    )
    DojoSDKDropInUI.dojoThemeSettings = DojoThemeSettings(
        lightColorPalette = lightColorPalette,
        DarkColorPalette = darkColorPalette,
        // set that one to true if you don't support dark mode
        forceLightMode = false,
        // set that one to false if you want to hide dojo brand
        showBranding = true
    )
}