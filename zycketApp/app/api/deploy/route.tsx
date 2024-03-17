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
    
    //BASE
    const BASEprovider = new ethers.JsonRpcProvider(process.env.BASE_RPC_URL, {
      name: "Base Sepolia",
      chainId: 84532,
    });

    const BASEwallet = new ethers.Wallet(PRIVATE_KEY, BASEprovider);
    const BASEowner = BASEwallet.connect(BASEprovider);

    const BASEcontractFactory = new ethers.ContractFactory(abi, bytecode, BASEwallet);
    const BASEdeploy = await BASEcontractFactory.deploy(
      BASEowner.getAddress(),
      metadataUri
    );

    await BASEdeploy.waitForDeployment();
    const BASEcontractAddress = await BASEdeploy.getAddress();
    console.log("BASE Contract deployed to:", BASEcontractAddress);
    
    //SPICY
    const SPICYprovider = new ethers.JsonRpcProvider(process.env.SPICY_RPC_URL, {
      name: "Spicy Chiliz",
      chainId: 88882,
    });

    const SPICYwallet = new ethers.Wallet(PRIVATE_KEY, SPICYprovider);
    const SPICYowner = SPICYwallet.connect(SPICYprovider);

    const SPICYcontractFactory = new ethers.ContractFactory(abi, bytecode, SPICYwallet);
    const SPICYdeploy = await SPICYcontractFactory.deploy(
      SPICYowner.getAddress(),
      metadataUri
    );

    await SPICYdeploy.waitForDeployment();
    const SPICYcontractAddress = await SPICYdeploy.getAddress();
    console.log("SPICY Contract deployed to:", await SPICYdeploy.getAddress());

    //ARBITRUM
    const ARBprovider = new ethers.JsonRpcProvider(process.env.ARB_RPC_URL, {
      name: "Arbitrum Sepolia",
      chainId: 421614,
    });

    const ARBwallet = new ethers.Wallet(PRIVATE_KEY, ARBprovider);
    const ARBowner = ARBwallet.connect(ARBprovider);

    const ARBcontractFactory = new ethers.ContractFactory(abi, bytecode, ARBwallet);
    const ARBdeploy = await ARBcontractFactory.deploy(
      ARBowner.getAddress(),
      metadataUri
    );

    await ARBdeploy.waitForDeployment();
    const ARBcontractAddress = await ARBdeploy.getAddress();
    console.log("ARBITRUM SEPOLIA Contract deployed to:", await ARBdeploy.getAddress());

    //ALFAJORES
    const provider = new ethers.JsonRpcProvider(process.env.ALFAJORES_RPC_URL, {
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
    console.log("ALFAJORES Contract deployed to:", await deploy.getAddress());

    

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
