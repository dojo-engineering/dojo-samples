import { startPaymentFlow } from "@dojo-engineering/react-native-pay-sdk";

const result = await startPaymentFlow({
  intentId: "<paymentIntentId>"
});

console.log(result);
