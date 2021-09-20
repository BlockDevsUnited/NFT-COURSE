// run this script with
// node pinata-pinJSON.js image_number IpfsHash_of_image
//
const process = require('process');
const secrets = require('../.secrets-pinata.json');
const jsonFileLocation = "./metadata/json1010/";


const pinataSDK = require('@pinata/sdk');

const pinata = pinataSDK(secrets.myPinataApiKey, secrets.myPinataSecretApiKey);
const fs = require('fs');
 
// image CID
const fileName = process.argv[2];
let imageCID = process.argv[3];

    // JSON options
    const options = {
      pinataMetadata: {
          name: 'pinJSON#' + fileName,
          keyvalues: {
              customKey: 'customValue',
              customKey2: 'customValue2'
          }
      },
      pinataOptions: {
          cidVersion: 0
      }
  };

  // read JSON body
  fs.readFile(jsonFileLocation + fileName + '.json','utf8',
    (err, jsonString) => {
      if (err) {
          console.log("Error reading file from disk:", err)
          return
      }
      try {
          const nftmetadata = JSON.parse(jsonString);
          nftmetadata.image = "ipfs://" + imageCID;
          //console.log(nftmetadata);
          //console.log("nft dna is:", nftmetadata.attributes); 

          fs.writeFileSync(jsonFileLocation + fileName + '.json', JSON.stringify(nftmetadata,null,2));

          pinata.pinJSONToIPFS(nftmetadata, options).then((result) => {
            //handle results here
            console.log(result['IpfsHash']);
          }).catch((err) => {
            //handle error here
            console.log(err);
          });

      } catch(err) {
          console.log('Error parsing JSON string:', err)
      }
  });
