import { FC, FormEventHandler, useState } from "react";

import {
  Account,
  Chain,
  Hex,
  Transport,
  WalletClient,
  PublicClient,
  parseEther,
} from "viem";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { getChain } from "@dynamic-labs/utils";

const SendTransaction: FC = () => {
  const { primaryWallet } = useDynamicContext();

  const [txnHash, setTxnHash] = useState("");

  if (!primaryWallet) return null;

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const address = formData.get("address") as string;
    const amount = formData.get("amount") as string;
    const provider = await primaryWallet.connector.getSigner<
      WalletClient<Transport, Chain, Account>
    >();
    if (!provider) return;

    const transaction = {
      account: primaryWallet.address as Hex,
      chain: getChain(await provider.getChainId()),
      to: address as Hex,
      value: amount ? parseEther(amount) : undefined,
    };

    const hash = await provider.sendTransaction(transaction);

    const client =
      await primaryWallet.connector.getPublicClient<PublicClient>();

    const { transactionHash } = await client.getTransactionReceipt({
      hash,
    });
    setTxnHash(transactionHash);
  };

  return (
    <form onSubmit={onSubmit}>
      <p>Send to ETH address</p>
      <input name="address" type="text" required placeholder="Address" />
      <input name="amount" type="text" required placeholder="0.05" />
      <button type="submit">Send</button>
      <span data-testid="transaction-section-result-hash">{txnHash}</span>
    </form>
  );
};

export default SendTransaction;