let dojoSDK: DojoTapToPayOniPhone = DojoTapToPayOniPhone(env: .staging)
let secret: String = "<secret>"
do {
    if try await dojoSDK.isAccountLinked(secret) == false {
    	try await dojoSDK.linkAccount(secret)
    }
} catch {
    print(error)
}

