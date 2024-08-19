var dojoSDK: DojoTapToPayOniPhone? = DojoTapToPayOniPhone(env: .staging)
let secret: String = "<secret>"
if let isAccountLinked = try? await dojoSDK?.isAccountLinked(secret),
  !isAccountLinked {
    try await dojoSDK?.linkAccount(secret)
  }