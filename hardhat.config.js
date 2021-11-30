require("@nomiclabs/hardhat-waffle");

const fs = require('fs');

const projectId = "2ef5f3e11d7d4ab6803d4aa378bff4bf";
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      cjainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      acccounts: [privateKey],
    },
    mainnet: {
      // Need to update
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      acccounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
