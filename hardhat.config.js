require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/incident-logger",
      accounts: ["a343641c82d99e61589efb4a75380ed9a876ad681fb3b87879f49ed6c05c2ed9"]
    }
  }
};
