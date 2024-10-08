do {
    let terminalStatus = try await ...
    print(terminalStatus)
} catch {
    let errorValue = AnyDojoSDKError(error: error)
    if let code = errorValue.code {
        //  handle the sdk error
    } else {
        // retry activation
    }
}