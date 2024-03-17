import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
const abi = require("../../../contracts/abi.json").abi;

export async function POST(req: Request, res: Response) {
  try {
    const { BASEcollectionAddress, SPICYcollectionAddress, ALFAcollectionAddress, sentToAddress } = await req.json();

    if (!BASEcollectionAddress || !SPICYcollectionAddress || !ALFAcollectionAddress) {
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

    //BASE
    const BASEprovider = new ethers.JsonRpcProvider(process.env.BASE_RPC_URL, {
      name: "Base Sepolia",
      chainId: 84532,
    });

    const BASEwallet = new ethers.Wallet(PRIVATE_KEY, BASEprovider);
    const BASEowner = BASEwallet.connect(BASEprovider);

    const BASEyourContract = new ethers.Contract(BASEcollectionAddress, abi, BASEowner);
    await BASEyourContract.safeMint(sentToAddress);


    //SPICY
    const SPICYprovider = new ethers.JsonRpcProvider(process.env.SPICY_RPC_URL, {
      name: "Spicy Chiliz",
      chainId: 88882,
    });

    const SPICYwallet = new ethers.Wallet(PRIVATE_KEY, SPICYprovider);
    const SPICYowner = SPICYwallet.connect(SPICYprovider);

    const SPICYyourContract = new ethers.Contract(SPICYcollectionAddress, abi, SPICYowner);
    await SPICYyourContract.safeMint(sentToAddress);


    //ALFAJORES
    const provider = new ethers.JsonRpcProvider(process.env.ALFAJORES_RPC_URL, {
      name: "alfajores",
      chainId: 44787,
    });

    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    const owner = wallet.connect(provider);

    const yourContract = new ethers.Contract(ALFAcollectionAddress, abi, owner);
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
