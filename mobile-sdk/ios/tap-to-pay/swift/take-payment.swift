var dojoSDK: DojoTapToPayOniPhone? = DojoTapToPayOniPhone(env: .staging)
let secret: String = "<secret>"
let paymentIntentId: String = "<paymenIntentId>"
var terminalStatus: DojoTerminalStatus = dojoSDK?.getTerminalActivationStatus(secret: secret)
guard terminalStatus == .operational else { return }
do {
    let result = try await dojoSDK?.startPayment(paymentIntentId: paymentIntentId, secret: secret)
    } catch {
        print(error)
    }