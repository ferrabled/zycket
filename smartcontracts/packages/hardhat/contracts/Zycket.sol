// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Zycket is ERC721, Ownable {
    uint256 private _nextTokenId;
    string private _uri;

    constructor(address initialOwner, string memory uri)
        ERC721("Zycket", "ZKT")
        Ownable()
    {
        _uri = uri;
        transferOwnership(initialOwner);
    }

    function _baseURI() internal view override returns (string memory) {
        return _uri;
    }
    
    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }
}