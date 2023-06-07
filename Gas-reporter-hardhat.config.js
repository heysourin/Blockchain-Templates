//npm i hardhat-gas-reporter

require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  solidity: "0.8.17",
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY, // required for USD data fetching
    token: "MATIC", // if you want gas cos in Matic
  },
};
