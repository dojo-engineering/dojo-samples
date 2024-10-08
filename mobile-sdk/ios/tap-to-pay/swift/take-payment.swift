let dojoSDK: DojoTapToPayOniPhone = DojoTapToPayOniPhone(env: .staging)
let secret: String = "<secret>"
let paymentIntentId: String = "<paymentIntentId>"
do {
    let terminalStatus = try await dojoSDK.getTerminalActivationStatus(secret: secret)
    if initialStatus != .operational { 
	// restart activation
        return
    }
    let result = try await dojoSDK.startPayment(paymentIntentId: paymentIntentId, secret: secret)
    print(result.status)
} catch {
    print(error)
}