# Week 2 - NFT Metadata and Marketplace integration

After creating an NFT contract, you still need to attach metadata

We are working with Ethereum NFT's, and creating them on Ethereum testnet.

If at any point you feel stuck, feel free to reach out on the discord for help.

### NFT metadata

More Information
* https://docs.opensea.io/docs/metadata-standards



### NFT Marketplaces

To make your NFT to be accessible to the public, you can make it visible and tradeable on an NFT marketplace.

Popular Marketplaces
* opensea.io
* rarible.com

## Tutorial

### Create Metadata file

* Create a json file

add the image, name, description, external_url
* host your metadata file on github

### Mint NFT with tokenURI

* Get your deployed contract from week 1
* make sure you know how to interact with your smart contract functions
* easiest way is to verify your contract on etherscan, and call functions from Ethereum
* call the "Create" function, with your metadata link as a parameter
* you can try minting an NFT on this contract instead of your own for practice.  

* If you haven't created your own smart contract, you can use ours to practice: 
** https://rinkeby.etherscan.io/address/0x43b5e86b029bb08e46a895c2f89227130194c4e7#writeContract


### View NFT on Opensea

* Go to testnets.opensea.io, and log in with your metamask address
* Find your minted NFT. You can see what NFT's are in your wallet
* Make sure the name, image and description are all there.


## Conclusion

Once you have completed this tutorial, post the link to your NFT on testnets.opensea.io in the discord to pass Week2!

This exact process can be used to deploy NFT's on Ethereum mainnet, and other EVM compatible blockchains such as xDAIchain, RSK, and Polygon. 
