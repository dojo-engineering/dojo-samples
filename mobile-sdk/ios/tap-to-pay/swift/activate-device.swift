let dojoSDK = DojoTapToPayOniPhone(env: .staging) // use .staging or .production
let secret: String = "<secret>"
do {
    let initialStatus = try await dojoSDK.activateTerminal(secret)
    guard initialStatus != .operational { return } // proceed when the status is operational
    let terminalStatus = try await dojoSDK.getTerminalActivationStatus(notifyWhenOperational: true, secret: secret)
    print(terminalStatus)
} catch {
    print(error)
}