'use client'
import { useEffect } from "react";
import { useUserWallets } from "@dynamic-labs/sdk-react-core";

import { ChainId } from "@biconomy/core-types";

  const Main = ({ provider, setProvider, signer, setSigner }:any) => {
  const userWallets = useUserWallets();

  useEffect(() => {
    const fetchClients = async (embeddedWallet:any) => {
      if (embeddedWallet.chain !== ChainId.CHILIZ_TESTNET) {
        await embeddedWallet.connector.switchNetwork({
          networkChainId: ChainId.CHILIZ_TESTNET,
        });
      }
      //console.log(embeddedWallet.connector?.getPublicClient().then((res:any) => console.log(res)));
      //TODO provider is being shown as undefined
      const newProvider = await embeddedWallet.connector?.getPublicClient();
      const newSigner = await embeddedWallet.connector?.ethers?.getSigner();
      console.log("Provider")
      console.log(newProvider);
      setProvider(newProvider);
      setSigner(newSigner);
      return;
    };

    if (userWallets.length > 0 && (!provider || !signer)) {
      const embeddedWallet = userWallets.find(
        (wallet) => wallet?.connector?.isEmbeddedWallet === true
      );

      if (embeddedWallet) {
        fetchClients(embeddedWallet);
      }
    }
  }, [userWallets]);

  return <></>;
};

export default Main;