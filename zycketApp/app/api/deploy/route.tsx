import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
const abi = require("../../../contracts/abi.json").abi;
const bytecode = require("../../../contracts/abi.json").bytecode;

export async function POST(req: Request, res: Response) {
  try {
    const { metadataUri } = await req.json();

    if (!metadataUri) {
      return new Response(
        JSON.stringify({ message: "metadataUri is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const PRIVATE_KEY = process.env.PRIVATE_KEY ?? "";
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL, {
      name: "alfajores",
      chainId: 44787,
    });

    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    const owner = wallet.connect(provider);

    const contractFactory = new ethers.ContractFactory(abi, bytecode, wallet);
    const deploy = await contractFactory.deploy(
      owner.getAddress(),
      metadataUri
    );

    await deploy.waitForDeployment();
    const contractAddress = await deploy.getAddress();
    console.log("Contract deployed to:", await deploy.getAddress());

    return new Response(JSON.stringify({ status: "Sucess", contractAddress }), {
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
