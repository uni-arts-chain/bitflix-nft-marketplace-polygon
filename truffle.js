require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const PrivateKeyProvider = require("truffle-privatekey-provider");

const mainnetUrl = `https://mainnet.infura.io/${process.env.INFURA}`;
const ropstenUrl = `https://ropsten.infura.io/${process.env.INFURA}`;
const rinkebyUrl = `https://rinkeby.infura.io/${process.env.INFURA}`;
const kovanUrl = `https://kovan.infura.io/${process.env.INFURA}`;
const mumbaiUrl = 'https://rpc-mumbai.maticvigil.com';
const maticUrl = 'https://rpc-mainnet.matic.quiknode.pro';
const privateKey = "9944bf61b22c97d7c238057148....";

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gas: 4712388,
      gasPrice: 2000000000,
    },
    // development: {
    //   provider() {
    //     return new PrivateKeyProvider(privateKey, "http://testnet.uniarts.me:9933/");
    //   },
    //   network_id: '*',
    //   gas: 4712388,
    //   gasPrice: 2000000000,
    // },
    ropsten: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, ropstenUrl, 0);
      },
      network_id: 3,
      gasPrice: 2000000000,
      gas: 4712388,
    },
    rinkeby: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, rinkebyUrl, 0);
      },
      network_id: 4,
      gasPrice: 2000000000,
      gas: 4712388,
    },
    kovan: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, kovanUrl, 0);
      },
      network_id: 42,
      gasPrice: 2000000000,
      gas: 4712388,
    },
    mumbai: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, mumbaiUrl, 0);
      },
      network_id: 80001,
      gasPrice: 2000000000,
      gas: 4712388,
    },
    matic: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, maticUrl, 0);
      },
      network_id: 137,
      gasPrice: 2000000000,
      gas: 4712388,
    },
    live: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, mainnetUrl, 0);
      },
      network_id: 1,
      gasPrice: 2000000000,
      gas: 4712388,
    },
  },
  mocha: {
    useColors: true,
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
