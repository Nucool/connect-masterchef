const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
  privateKeys: ['d44a9e2838bc78ecb10434f78c9085fd8b6c323a5b3f88fcd36a9c49567cde98'],
  providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
})
module.exports = {

  networks: {
     bscTestnet: {
      provider: () => provider,
      network_id: 97,
      skipDryRun: true
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.12",  
    }
  }
};
