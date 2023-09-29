import { startSetupFlow } from "@dojo-engineering/react-native-pay-sdk";

const result = await startSetupFlow({
  intentId: "<setupIntentId>"
});

console.log(result);