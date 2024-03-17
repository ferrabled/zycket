'useclient'
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Contract, ContractRunner, ethers } from "ethers";
import React from 'react'
import { MarketABI, MarketAddress } from "../NFTmarketplace";

export default function SellModal({ children, show, setShow }:any) {

    async function sellTicket() {
        const provider = new ethers.JsonRpcProvider(window.ethereum as unknown as string);
        const contract = new ethers.Contract(
            MarketAddress,
            MarketABI,
            await provider.getSigner()
          );
          const uri = contract.approve();
          return uri;
    }

    const content = show && (
        <div className="overlay">
        <Card className="flex flex-col pt-5 gap-2">
            <CardTitle className="px-5 pb-1">Sell your ticket</CardTitle>
            <CardContent className="flex flex-row gap-5">
               <Input placeholder="Price" /> 
               <Button onClick={sellTicket}>Submit</Button>
            </CardContent>
        </Card>
        <div className="modal-body">{children}</div>
        </div>
      )
    return content;
}