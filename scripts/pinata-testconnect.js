// scripts/index.js
//require('@nomiclabs/hardhat-ethers');
const {myPinataApiKey, myPinataSecretApiKey, myPinataJWT } = require('../.secrets-pinata.json');
const pinataBaseURL = "https://api.pinata.cloud";

async function main () {
    const pinataSDK = require('@pinata/sdk');
    //console.log(myPinataApiKey);
    //console.log(myPinataSecretApiKey);
    //console.log(myPinataJWT);

    const pinata = pinataSDK(myPinataApiKey, myPinataSecretApiKey);
 
    // quick test to connect to Pinata
    pinata.testAuthentication().then((result) => {
        //handle successful authentication here
        console.log(result);
    }).catch((err) => {
        //handle error here
        console.log(err);
    });
    }
    
    (() => {
      main();
    })();
    