import { callReadOnlyFunction, cvToValue, principalCV } from "@stacks/transactions";
import { StacksMainnet } from "@stacks/network";

const network = new StacksMainnet();

async function getBalance(address: string) {
  const result = await callReadOnlyFunction({
    contractAddress: "SP...",
    contractName: "points-rewards",
    functionName: "get-balance",
    functionArgs: [principalCV(address)],
    network,
    senderAddress: address,
  });
  return cvToValue(result);
}

getBalance("SP...").then(console.log);
