import { startPaymentFlow } from "@dojo-engineering/react-native-pay-sdk";

const result = await startPaymentFlow({
  intentId: "<paymentIntentId>",
  applePayMerchantId: "<Merchant_Identifier>"
});

console.log(result);
