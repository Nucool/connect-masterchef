const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
  privateKeys: ['privateKey'],
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
