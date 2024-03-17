"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { EthersExtension } from "@dynamic-labs/ethers-v6";

import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { useEffect, useState } from "react";
import { createSmartAccount } from "@/components/biconomy/biconomy_chiliz";

const inter = Inter({ subsets: ["latin"] });
import { evmNetworks } from "@/components/dynamic/evm-networks";
import Main from "@/components/biconomy/main";
import ZHeader from "@/components/zheader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [provider, setProvider] = useState<any>(null);
  const [signer, setSigner] = useState<any>(null);
  const [smartAccount, setSmartAccount] = useState<any>(null);
  const [smartAddress, setSmartAddress] = useState<any>(null);

  useEffect(() => {
    const createAndSetSmartAccount = async () => {
      const newSmartAccount = await createSmartAccount(signer);
      setSmartAccount(newSmartAccount);
    };

    if (provider && signer && !smartAccount) {
      console.log("creating smart account");
      createAndSetSmartAccount();
    }
  }, [provider, signer, smartAccount]);

  useEffect(() => {
    const getBalanceAndAddress = async () => {
      if (smartAccount) {
        const address = await smartAccount.getAccountAddress();
        setSmartAddress(address);
        const cfAddress = await smartAccount.getCounterFactualAddress();
        console.log("address", address);
        console.log("cfaddress", cfAddress);
      }
    };

    getBalanceAndAddress();
  }, [smartAccount]);

  return (
    <html lang="en">
      <body className={inter.className}>
          <DynamicContextProvider
          settings={{
            environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || "",
            walletConnectors: [EthereumWalletConnectors],
            walletConnectorExtensions: [EthersExtension],
            evmNetworks,
          }}
        >
         
          <DynamicWagmiConnector>
            <div className="h-20 flex flex-row justify-between align-center px-10">
            <ZHeader />
            <div className="pt-[16px]">
              <DynamicWidget />
            </div>
            </div>

            <Main
              provider={provider}
              setProvider={setProvider}
              signer={signer}
              setSigner={setSigner}
            />
           
            {children}
          </DynamicWagmiConnector>
        </DynamicContextProvider>
      </body>
    </html>
  );
}
