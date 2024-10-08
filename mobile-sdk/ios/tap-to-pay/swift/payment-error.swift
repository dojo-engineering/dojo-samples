import ProximityReader
do {
    let result = try await ...
    print(result.status)
} catch {
    let errorValue = AnyDojoSDKError(error: error)
    if let readerError = errorValue.error as? PaymentCardReaderError {
        // handle the card reader errors
    } else if let sessionError = errorValue.error as? PaymentCardReaderSession.ReadError {
        // handle the card reader session errors
    } else if let code = errorValue.code {
        // handle the sdk error
    } else {
        // retry payment
    }
}