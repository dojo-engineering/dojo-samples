var dojoSDK: DojoTapToPayOniPhone? = DojoTapToPayOniPhone(env: .staging)
var terminalStatus: DojoTerminalStatus?
let secret: String = "secret"
do {
    try await dojoSDK?.activateTerminal(secret)
        terminalStatus = try await dojoSDK?.getTerminalActivationStatus(
                notifyWhenOperational: true, secret: secret)
        } catch {
            print(error)
        }