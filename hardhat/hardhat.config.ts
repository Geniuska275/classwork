import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("@nomicfoundation/hardhat-verify");

require("dotenv").config();

const { PRIVATE_KEY, CELO_SEPOLIA_URL,ETHERSCAN_API_KEY} = process.env;
const config: HardhatUserConfig = {
  solidity: "0.8.28",
   networks: {
    celoSepolia: {
      url: CELO_SEPOLIA_URL!,
        accounts: [process.env.PRIVATE_KEY!]
    },
   
  },

  etherscan: {
    apiKey: {
      celoSepolia: process.env.ETHERSCAN_API_KEY!
    },
    customChains: [
      {
        network: "celoSepolia",
        chainId: 11142220,
        urls: {
          apiURL: "https://forno.celo-sepolia.celo-testnet.org",
          browserURL: "https://forno.celo-sepolia.celo-testnet.org",
        },
      },
      {
        network: "arc",
        chainId: 5042002,
        urls: {
          apiURL: "https://rpc.testnet.arc.network",
          browserURL: "https://rpc.testnet.arc.network",
        },
      },
    ],
  },
   sourcify: {
  enabled: true
}

};

export default config;
