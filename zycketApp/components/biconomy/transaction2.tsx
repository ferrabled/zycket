import { Hex } from "viem";

export async function Transaction2(smartAccount:any) {
    try {
        /* const parsedAbi = parseAbi(["function safeMint(address _to)"]);
        const nftData = encodeFunctionData({
            abi: parsedAbi,
            functionName: "safeMint",
            args: [saAddress as Hex],
        }); */
    
        const userOpResponse = await smartAccount.sendTransaction({
            to: "0xfdC91d0fFd95ECD7F84Bd9986befAE5BF5d7020c" as Hex,
            data: "0x0000000000000000000000000000000000000000" as Hex,
        });
        const { transactionHash } = await userOpResponse.waitForTxHash();
        console.log("transactionHash", transactionHash);
        const userOpReceipt  = await userOpResponse.wait();
        if(userOpReceipt.success == 'true') { 
            console.log("UserOp receipt", userOpReceipt)
            console.log("Transaction receipt", userOpReceipt.receipt)
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
        console.error("Transaction Error:", error.message);
        }
    }
}

