// npm i hardhat-gas-reporter

require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");

module.exports = {
  solidity: "0.8.18",
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_key,// required for USD data fetching
    token: "MATIC",// if you want gas cos in Matic
  },
};
