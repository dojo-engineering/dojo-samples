import { startPaymentFlow } from "@dojo-engineering/react-native-pay-sdk";

const result = await startPaymentFlow({
  intentId: "<paymentIntentId>",
  gPayMerchantId: "<Merchant_Id>",
  gPayGatewayMerchantId: "<Gateway_Merchant_Id>",
  gPayMerchantName: "<Merchant_Name>"
});

console.log(result);
