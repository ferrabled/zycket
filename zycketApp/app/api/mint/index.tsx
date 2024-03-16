import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
const abi = require("../../../contracts/Zycket.json").abi;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const collectionAddress = req.body.collectionAddress;
    const sentToAddress = req.body.sentToAddress;

    if (!collectionAddress) {
      res.status(400).json({ message: "contractAddress is required" });
      return;
    }
    if (!sentToAddress) {
      res.status(400).json({ message: "sentToAddress is required" });
      return;
    }

    const PRIVATE_KEY = process.env.PRIVATE_KEY ?? "";
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    const owner = wallet.connect(provider);

    const yourContract = new ethers.Contract(collectionAddress, abi, owner);
    await yourContract.safeMint(sentToAddress);

    res.status(200).json({
      message: "Sucess",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error", output: error });
  }
}