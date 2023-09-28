import { startSetupFlow } from "@dojo-engineering/react-native-pay-sdk";

const result = await startSetupFlow({
  intentId: "<paymentIntentId>"
});

console.log(result);