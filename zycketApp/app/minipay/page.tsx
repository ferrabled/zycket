"use client";

import PrimaryButton from "@/components/Button";
import { useEffect, useState } from "react";
import { useWeb3 } from "@/contexts/useWeb3";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export default function VerifyToken(){

    const {
        address,
        getUserAddress,
        sendCUSD,
        mintMinipayNFT,
        getNFTs,
        signTransaction,
    } = useWeb3();
    const [nftLoading, setNFTLoading] = useState(false);
    const [userOwnedNFTs, setUserOwnedNFTs] = useState<string[]>([]);

    useEffect(() => {
        const getData = async () => {
            const tokenURIs = await getNFTs();
            setUserOwnedNFTs(tokenURIs);
        }
        if(address) {
            getData();
        }
    }, [address, ]);

    async function mintNFT() {
        setNFTLoading(true);
        try {
            const tx = await mintMinipayNFT();
            const tokenURIs = await getNFTs();
            setUserOwnedNFTs(tokenURIs);
            setTx(tx);
        } catch (error) {
            console.log(error);
        } finally {
            setNFTLoading(false);
        }
    }

    return (
<div key="2" className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 p-8">            
<Card className="m-10">
            <CardHeader>
            <CardTitle>ETHLondon</CardTitle>
            <CardDescription>Bringing developers onchain to build for the future of the internet.</CardDescription>
            <CardDescription>91 Brick Ln, London E1 6QR.</CardDescription>
            <CardDescription>800 tickets</CardDescription>
            </CardHeader>
            <CardContent className="mt-[-10px] flex flex-row gap-5">
            <PrimaryButton
                    loading={nftLoading}
                    onClick={mintNFT}
                    title="Mint Minipay NFT"
                    widthFull
                />
            </CardContent>
        </Card>
        <Card className="m-10">
        <CardHeader>
          <CardTitle>Arsenal vs. Chelsea</CardTitle>
          <CardDescription>League match between the leader and 3rd place.</CardDescription>
          <CardDescription>Hornsey Rd, London N7 7AJ.</CardDescription>
          <CardDescription>127000 tickets</CardDescription>
        </CardHeader>
        <CardContent className="mt-[-10px] flex flex-row gap-5">
        <PrimaryButton
                    loading={nftLoading}
                    onClick={mintNFT}
                    title="Mint Minipay NFT"
                    widthFull
                />
        </CardContent>
      </Card>
      <Card className="m-10">
        <CardHeader>
          <CardTitle>Techno Party</CardTitle>
          <CardDescription>House & Techno Party All Night Long (East London).</CardDescription>
          <CardDescription>Bow Bridge LDN.</CardDescription>
          <CardDescription>125 tickets</CardDescription>
        </CardHeader>
        <CardContent className="mt-[-10px] flex flex-row gap-5">
        <PrimaryButton
                    loading={nftLoading}
                    onClick={mintNFT}
                    title="Mint Minipay NFT"
                    widthFull
                />
        </CardContent>
      </Card>
        </div>
    )
}