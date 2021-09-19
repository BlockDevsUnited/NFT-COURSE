# How to create and post NFT metadata

## Purpose
These are our notes on how we set up the metadata for our course projects. 
We assume that there is already a deployed contract and we know its <contract_address>.


## Set up .secrets.json
A few access keys and accounts will be needed for this tutorial. Create ```.secrets.json``` with your keys (note that there is no '0x' in front of the "ethereumAccount"):
```
{
    "alchemyAPIKey" : "https://eth-rinkeby.alchemyapi.io/v2/xxx",
    "ethereumAccount" : "xxx"
}
```

Make sure that add ```.secrets.json``` to your .gitignore to protect your private keys from being published by git.

## Set up a project
Review [OpenZeppelin Lear documentation](https://docs.openzeppelin.com/learn/)
Create empty hardhat project.
```
npm init
npm install --save-dev hardhat
npx hardhat
npm install --save-dev @nomiclabs/hardhat-ethers ethers
```
## Test on local network
### In the first terminal start the local network
```
npx hardhat node
```
### Test using the console
In the second terminal run list accounts
```
 npx hardhat console --network localhost
 const accounts = await ethers.provider.listAccounts();
 console.log(accounts);
```
### Test programatically
With the local network still running, create ```scripts/index.js``` with
```
// scripts/index.js
async function main () {

  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts();
  console.log(accounts);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
```
Then run index.js:
```
npx hardhat run --network localhost scripts/index.js
```
## Test on Rinkeby testnet
We use the following application stack:
* Rinkeby testnet with tokens from its faucet
* Metamask set up with Rinkeby testnet 
* Alchemy account and Application created for the Rinkeby testnet

Update your hardhat.config.js file to list Rinkeby testnet under networks.

If everything is configured correctly, you should be able to connect to Rinkeby testnet console and list your accounts:
```
npx hardhat console --network rinkeby
const accounts = await ethers.provider.listAccounts();
console.log(accounts);
.exit
```
To list your accounts using a script you can do:
```
npx hardhat run scripts/index.js
```

## Post metadata on IPFS
Review [NTFs page on pinata.cloud](https://docs.pinata.cloud/nfts) for general introduction.
Review [Metadata Standards page on Opensea](https://docs.opensea.io/docs/metadata-standards).

The NFT-metadata folder in this repo contains sample metadata that you can download and use. 

### Manually pin the metadata files to Pinata
1. Download the metadata folder to your computer.
1. Save the images to IPFS by uploading them to Pinata.
1. Find ipfs addresses of the saved images.
1. Update json metadata files with the ipfs addresses of the saved images.
1. Save the json metadata files to IPFS.

Note the ipfs address of the saved json metadata files. You will use them as tokenURI when minting your NTF. 

### Programatically pin the metadata files to Pinata
Review [Getting Started](https://docs.pinata.cloud/#GettingStarted) on Pinata to generate your Pinata keys.

Review [PinataJS SDK](https://docs.pinata.cloud/pinata-node-sdk) on interacting programatically with Pinata API.

Create ```.secrets-pinata.json``` with your pinata keys
```
{
    "myPinataApiKey" : "xxx",
    "myPinataSecretApiKey" : "xxx",
    "myPinataJWT" : "xxx"
}
```
Then test authentication with
```
npx hardhat run scripts/pinata-testconnect.js 
```

Then pin an image file to pinata with

```
npx hardhat run scripts/pinata-pinFile.js
```

TODO: Create sript to pin the image and its json metadata using ipfs:// uri. This is needed for minting NFTs.
