import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
const abi = require("../../../contracts/abi.json").abi;

export async function POST(req: Request, res: Response) {
  try {
    const { collectionAddress, sentToAddress } = await req.json();

    if (!collectionAddress) {
      return new Response(
        JSON.stringify({ message: "contractAddress is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    if (!sentToAddress) {
      return new Response(
        JSON.stringify({ message: "sentToAddress is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const PRIVATE_KEY = process.env.PRIVATE_KEY ?? "";
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    const owner = wallet.connect(provider);

    const yourContract = new ethers.Contract(collectionAddress, abi, owner);
    await yourContract.safeMint(sentToAddress);

    return new Response(JSON.stringify({ status: "Sucess" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ message: "Error", output: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
