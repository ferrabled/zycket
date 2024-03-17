// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Ownable} from "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import { Mailbox} from "./interfaces/Hyperlane.sol";

// Message Sender
// contract address in Base Sepolia: 0x576f592347fb77d66B3E388E5113DAAac02d8E0f


contract ZycketSender is Ownable {

    // Chiliz Spicy Testnet
    address constant MailboxAddressSpicy = 0x3f014140D810C522A4a67B2d6AbDe822370a839e;
    uint32 constant MailboxIdSpicy = 88882;
    address constant receiverAddressSpicy = 0x4E453999F70c91E60e5e75FA527D37BF32ca82Ef;

    // Celo Alfajores Testnet
    address constant MailboxAddressAlfajores = 0x3f014140D810C522A4a67B2d6AbDe822370a839e;
    uint32 constant MailboxIdAlfajores = 44787;
    address constant receiverAddressAlfajores = 0x3f014140D810C522A4a67B2d6AbDe822370a839e;

    // Arbitrum Sepolia Testnet
    address constant MailboxAddressArbitrumSepolia = 0x3f014140D810C522A4a67B2d6AbDe822370a839e;
    uint32 constant MailboxIdArbitrumSepolia = 421614;
    address constant receiverAddressArbitrumSepolia = 0x4E453999F70c91E60e5e75FA527D37BF32ca82Ef;

    function decode(bytes memory data) private pure returns(bytes4 selector, address to, uint256 amount) {
        assembly {
            // load 32 bytes into `selector` from `data` skipping the first 32 bytes
            selector := mload(add(data, 32))
            to := mload(add(data, 168))
            amount := mload(add(data, 200))
        }
    }

    // alignment preserving cast
    function addressToBytes32(address _addr) internal pure returns (bytes32) {
        return bytes32(uint256(uint160(_addr)));
    }

    function bytes32ToAddress(bytes32 _buf) internal pure returns (address) {
        return address(uint160(uint256(_buf)));
    }

    function handle(
        int _network,
        bytes calldata _body
    ) external {

        if (_network == 1) {
            //  Chiliz Spicy Testnet
            Mailbox(MailboxAddressSpicy).dispatch(MailboxIdSpicy, addressToBytes32(receiverAddressSpicy), _body);
        } else if (_network == 2) {
            // Celo Alfajores Testnet
            Mailbox(MailboxAddressAlfajores).dispatch(MailboxIdAlfajores, addressToBytes32(receiverAddressAlfajores), _body);
        } else if (_network == 3) {
            // Arbitrum Sepolia Testnet
            Mailbox(MailboxAddressArbitrumSepolia).dispatch(MailboxIdArbitrumSepolia, addressToBytes32(receiverAddressArbitrumSepolia), _body);
        } else {
            // Default case if the input doesn't match any expected value
            revert("Invalid input: accepted values are 1, 2, or 3");
        }
        
    }
}