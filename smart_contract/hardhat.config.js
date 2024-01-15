//https://eth-sepolia.g.alchemy.com/v2/M_c0fWdtm_f5GUDQlGL_hPda57UWQEwr

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/M_c0fWdtm_f5GUDQlGL_hPda57UWQEwr',
      accounts: [ '3b7201f2060109661bb08a24a8d519f819a101958f2ee499c1010669f95bf18d' ]
    }
  }
};
