import {
  createSmartAccountClient,
} from "@biconomy/account";

export const createSmartAccount = async (signer:any) => {
  return await createSmartAccountClient({
    signer ,
    bundlerUrl:  process.env.NEXT_PUBLIC_BICONOMY_BUNDLER_URL!,
    biconomyPaymasterApiKey: process.env.NEXT_PUBLIC_BICONOMY_PAYMASTER_URL!,
  });
};