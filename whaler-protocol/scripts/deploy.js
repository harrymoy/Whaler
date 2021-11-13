// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const PriceOracle = await hre.ethers.getContractFactory("Whaler");
  const priceOracle = await PriceOracle.deploy();

  const daiAddress = priceOracle.address

  const Whaler = await hre.ethers.getContractFactory("Whaler");
  const whaler = await Whaler.deploy(daiAddress,);

  const Tournament = await hre.ethers.getContractFactory("Whaler");
  const tournament = await Tournament.deploy();

  const WhaleToken = await hre.ethers.getContractFactory("Whaler");
  const whaleToken = await WhaleToken.deploy();

  await whaler.deployed();
  await priceOracle.deployed();
  await tournament.deployed();
  await whaleToken.deployed();

  console.log("Whaler deployed to:", whaler.address);
  console.log("Whaler deployed to:", priceOracle.address);
  console.log("Whaler deployed to:", tournament.address);
  console.log("Whaler deployed to:", whaleToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
