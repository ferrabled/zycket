import type { NextApiRequest, NextApiResponse } from "next";
import { ethers, providers } from "ethers";
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
    const provider = new providers.JsonRpcProvider(process.env.RPC_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    const owner = wallet.connect(provider);

    const contractFactory = new ethers.ContractFactory(
      abi,
      bytecode,
      owner
    );
    const deploy = await contractFactory.connect(owner).deploy(
      owner.getAddress(),
      metadataUri
    );

    await deploy.deployed();

    console.log("Contract deployed to:", deploy.address);

    return new Response("Sucess", {
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ message: "Error", output: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
