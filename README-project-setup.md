# Notes on project set up for development

## Set up Git Repo
1. Set up empty repo on GitHub without license, readme or gitignore
1. Set up your gitHub access keys
1. Create a folder on your system and initialize it for git
1. Run the following commands inside the folder created in the previous step. Replace the github URL with the URL for your newly created repo.
```
git init
git add .
git commit -m "initial setup"
git commit -m "initial setup"
git remote add origin https://github.com/<your_repo>
git push -u origin main
```
##  Set Up dev project with hardhat
```
npm init -y
npm install --save-dev hardhat
npx hardhat 
  - create empty hardhat project 
```
## Set up connection to a testnet
Set up .secrets.json
```
{
    "alchemyAPIKey" : "https://eth-rinkeby.alchemyapi.io/v2/<rinkeby_private_key>",
    "ethereumAccount" : "<rinkeby_account_secret_key>",
    "etherscanAPIKey" : "<etherscan_api_key>"
}
```

Set up hardhat.config.js
```
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

const { alchemyAPIKey, ethereumAccount, etherscanAPIKey} = require('./.secrets.json');

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
    },
    rinkeby: {
      
      // On https://dashboard.alchemyapi.io/ display the key with "View Key" button
      url: alchemyAPIKey,
      // In methamask, choose "Account details", then "Export Private Key".
      accounts: [ethereumAccount]
    }
  },
  etherscan: {
    apiKey: etherscanAPIKey
  }
};
```

## Work on a contract

We will need these packages
```
npm install --save-dev @openzeppelin/contracts
npm install --save-dev @nomiclabs/hardhat-ethers ethers
npm install --save-dev @nomiclabs/hardhat-etherscan
```

Compile, deploy and run
```
npx hardhat compile
npx hardhat run scripts/deploy.js 
# save the contract address outputed by deploy.js
```

Check the contract etherscan: https://rinkeby.etherscan.io/address/<contract_address>

Verify the contract
```
npx hardhat verify --network rinkeby <contract_address>
```
When verify completes successfully, it prints the eterscan URL for the contract. One can use the etherscan URL to interact with the cntract, i.e. create NFTs.
