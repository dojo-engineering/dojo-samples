import dojo_ios_sdk

let cardPaymentPayload = DojoCardPaymentPayload(cardDetails: DojoCardDetails(cardNumber: "4456530000001096", cardName: "Card Holder Name", expiryDate: "12 / 24", cv2: "020"), isSandbox: true)
let token = "Token from Payment Intent (connecteToken)"
DojoSDK.executeCardPayment(token: token,
                            payload: cardPaymentPayload,
                            fromViewController: self) { [weak self] result in
    print(result)
}