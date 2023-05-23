.
.
.

async function addMaticNetwork() {
  try {
    const result = await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [{
        chainId: "0x44D",
        rpcUrls: ["https://zkevm-rpc.com"],
        chainName: "Polygon zkEVM",
        nativeCurrency: {
          name: "Ether",
          symbol: "ETH",
          decimals: 18
        },
        blockExplorerUrls: ["https://zkevm.polygonscan.com/"]
      }]
    });
  } catch (error){
    console.log(error)
  }
}

.
.
.

 <button onClick={addMaticNetwork}> Add Network </button>
