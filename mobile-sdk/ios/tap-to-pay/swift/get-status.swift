var dojoSDK: DojoTapToPayOniPhone? = DojoTapToPayOniPhone(env: .staging)
var terminalStatus: DojoTerminalStatus?
let secret: String = "<secret>"
do {
    terminalStatus = try await dojoSDK?.getTerminalActivationStatus(secret: secret)
    } catch {
        print(error)
    }