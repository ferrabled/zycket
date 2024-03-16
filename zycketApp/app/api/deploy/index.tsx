import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
import { Zycket } from "../../../../smartcontracts/packages/hardhat/typechain-types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    const metadataUri = req.body.metadataUri;

    if (!metadataUri) {
        res.status(400).json({ message: "metadataUri is required" });
        return;
    }

    const PRIVATE_KEY = process.env.PRIVATE_KEY ?? "";
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    const owner = wallet.connect(provider);

    const yourContractFactory = new ethers.ContractFactory("Zycket", [], owner);
    const yourContract = (await yourContractFactory
        .connect(owner)
        .deploy(owner.address, metadataUri)) as unknown as Zycket;
    await yourContract.waitForDeployment();

    res.status(200).json({
        message: "Sucess",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error", output: error });
  }
}
