const { expect } = require("chai");
const {ethers} = require("hardhat");

describe("PriceOracle", function() {

  let priceOracle;

  before(async () => {
    const priceOracleInstance = ethers.getContractFactory("PriceOracle");
    const deployedPriceOracle = await priceOracleInstance.deploy("5777");
    priceOracle = deployedPriceOracle;
  });

  it("Should return the price of Doge", async function() {
    const dogePrice = await priceOracle.getLatestDogecoinPrice();
    console.log(dogePrice);
    expect(dogePrice.to.be.above(0));
  });
  
  it("Should return the price of Bitcoin", async function() {
    const bitcoinPrice = await priceOracle.getLatestBitcoinPrice();
    console.log(bitcoinPrice);
    expect(bitcoinPrice.to.be.above(0));
  });
  
  it("Should return the price of Ethereum", async function() {
    const ethereumPrice = await priceOracle.getLatestEthereumPrice();
    console.log(ethereumPrice);
    expect(ethereumPrice.to.be.above(0));
  });
  
  it("Should return the price of Uniswap", async function() {
    const uniswapPrice = await priceOracle.getLatestUniswapPrice();
    console.log(uniswapPrice);
    expect(uniswapPrice.to.be.above(0));
  });
});