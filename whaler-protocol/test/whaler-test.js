const { expect } = require("chai");
const {ethers} = require("hardhat");

describe("Whaler", function() {

  let whaler;

  before(async () => {
    const [owner, addr1] = await ethers.getSigners();
    const daiInstance = ethers.getContractFactory("Dai");
    const dai = await daiInstance.deploy("5777");
    const priceOracleInstance = ethers.getContractFactory("PriceOracle");
    const priceOracle = await priceOracleInstance.deploy("5777");
    const WhalerContractFactory = ethers.getContractFactory("Whaler");
    const whalerFactory = await WhalerContractFactory.connect(owner).deploy(dai.address, priceOracle.address);
    whaler = whalerFactory;
  });

  it("Should return the new greeting once it's changed", async function() {

  });
});
