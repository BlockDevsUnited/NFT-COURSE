# Notes on creating metadata for ERC1155 contract

## Resources
Review the [Metadata section in EIP 1155](https://eips.ethereum.org/EIPS/eip-1155).

There is step by step tutorial on how to create the ERC 1155 metadata files in the [Ultimate NFT Programming Tutorial - FULL COURSE](https://www.youtube.com/watch?v=tBMk1iZa85Y)

## Setting up project

The set up for ERC 1155 is the same as the setup for ERC 721 in [README-NFT-Metadata.md](README-NFT-Metadata.md)

## Sample Contract code
```
// File: contracts/WisdomHubMulti.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract WisdomHubMulti is ERC1155, Ownable {
    uint256 public constant WISDOM = 0;
 
    constructor() ERC1155("https://raw.githubusercontent.com/BDU-NFT-Course/NFT-Metadata/main/sample-stones-erc1155/{id}.json"){
        _mint(msg.sender,WISDOM,2,"");
    }

    function mint(address account, uint256 id, uint256 amount) public onlyOwner {
        _mint(account, id, amount, "");
    }

    function burn(address account, uint256 id, uint256 amount) public {
        require(msg.sender == account);
        _burn(account, id, amount);
    }

    function contractURI() public pure returns (string memory) {
        return "https://raw.githubusercontent.com/BDU-NFT-Course/NFT-Metadata/main/sample-stones-erc1155/contract-metadata-erc1155.json";
    }

}
```
Note that the constructor refers to [sample-stones-erc1155](https://raw.githubusercontent.com/BDU-NFT-Course/NFT-Metadata/main/sample-stones-erc1155/) folder that contains NFT item json and images.

Note that cotractURI() function refers to the contract metadata.
