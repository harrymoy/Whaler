// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IPriceOracle {
    function getLatestDogecoinPrice() external view returns (int);
    function getLatestBitconPrice() external view returns (int);
    function getLatestEthereumPrice() external view returns (int);
    function getLatestUniswapPrice() external view returns (int);
}