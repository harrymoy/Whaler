// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import {IPriceOracle} from './interfaces/IPriceOracle.sol';

contract PriceOracle is IPriceOracle {
    AggregatorV3Interface internal _dogePriceFeed;
    AggregatorV3Interface internal _btcPriceFeed;
    AggregatorV3Interface internal _ethPriceFeed;
    AggregatorV3Interface internal _uniPriceFeed;

    constructor() {
        _dogePriceFeed = AggregatorV3Interface(0x2465CefD3b488BE410b941b1d4b2767088e2A028);
        _btcPriceFeed = AggregatorV3Interface(0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c);
        _ethPriceFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419);
        _uniPriceFeed = AggregatorV3Interface(0x553303d460EE0afB37EdFf9bE42922D8FF63220e);
    }

    function getLatestDogecoinPrice() external override view returns (int) {
        (
            uint80 roundId,
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = _dogePriceFeed.latestRoundData();
        return price;
    }

    function getLatestBitconPrice() external override view returns (int) {
        (
            uint80 roundId,
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = _btcPriceFeed.latestRoundData();
        return price;
    }

    function getLatestEthereumPrice() external override view returns (int) {
        (
            uint80 roundId,
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = _ethPriceFeed.latestRoundData();
        return price;
    }

    function getLatestUniswapPrice() external override view returns (int) {
        (
            uint80 roundId,
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = _uniPriceFeed.latestRoundData();
        return price;
    }
}