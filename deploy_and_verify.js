const { ethers, run, network } = require("hardhat");
//run allows to run any hardhat test

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log(`Contract deployed to ${simpleStorage.address}`);
  
  // !!! Notice the chainId here.
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    await simpleStorage.deployTransaction.wait(3);
    await verify(simpleStorage.address, []);// Don't forget to add the parameters inside '[]' present in the constructor.
  }
}

const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
