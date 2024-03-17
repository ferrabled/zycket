"use client";

import PrimaryButton from "@/components/Button";
import { useEffect, useState } from "react";
import { useWeb3 } from "@/contexts/useWeb3";
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
        <div>
            <h1>Buy Your Ticket</h1>
            <div className="w-full px-3 mt-5 text-black">
                <PrimaryButton
                    loading={nftLoading}
                    onClick={mintNFT}
                    title="Mint Minipay NFT"
                    widthFull
                />
            </div>

        </div>
    )
}