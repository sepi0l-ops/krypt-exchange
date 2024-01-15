
const hre = require("hardhat");

const main = async () => {
  //const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  //const unlockTime = currentTimestampInSeconds + 60;

  //const lockedAmount = hre.ethers.parseEther("0.001");

  const Transactions = await hre.ethers.deployContract('Transactions');

  await Transactions.waitForDeployment();

  // console.log(
  //   `Lock with ${ethers.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${Transactions.target}`
  // `Transaction deployed to: ${Transactions.address}`);
  console.log(`Transaction deployed to: ${Transactions.target}`);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
