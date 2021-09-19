// scripts/index.js
//require('@nomiclabs/hardhat-ethers');
const {myPinataApiKey, myPinataSecretApiKey, myPinataJWT } = require('../.secrets-pinata.json');
const pinataBaseURL = "https://api.pinata.cloud";
const imageFile = "";

async function main () {
    const pinataSDK = require('@pinata/sdk');
    //console.log(myPinataApiKey);
    //console.log(myPinataSecretApiKey);
    //console.log(myPinataJWT);

    const pinata = pinataSDK(myPinataApiKey, myPinataSecretApiKey);
 
    // pin File
    const fs = require('fs');
    const readableStreamForFile = fs.createReadStream('./metadata/images/11.png');
    const options = {
      pinataMetadata: {
        name: 'piFile#11',
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
      },
      pinataOptions: {
        cidVersion: 0
      }
    };
    pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    //handle results here
      console.log(result);
    }).catch((err) => {
    //handle error here
    console.log(err);
    });
  
  }
    
  (() => {
    main();
  })();
  