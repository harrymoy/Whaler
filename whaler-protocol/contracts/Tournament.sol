// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IERC20} from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import {WhaleToken} from './WhaleToken.sol';
import {SafeMath} from "@openzeppelin/contracts/utils/math/SafeMath.sol";
import {IPriceOracle} from './interfaces/IPriceOracle.sol';

contract Tournament {
    using SafeMath for uint;

    enum Coin {DOGE, BTC, ETH, UNI}

    IERC20 private dai;
    WhaleToken private token;
    uint private prizeMoney;
    mapping(uint => address) private _mockTokens;
    mapping(address => uint) private whaleTokenBalances;
    mapping(address => uint[]) private tokenHoldings;
    mapping(address => mapping(uint => uint)) private tokenHoldingBalance;
    IPriceOracle private priceOracle;

    event Redemption(address _sender, uint _amount);

    modifier greaterThanZero(uint _amount) {
        require(_amount > 0, "Must be more than 0");
        _;
    }

    constructor(address _daiAddress, address _whaleToken, address _priceOracle) {
        dai = IERC20(_daiAddress);
        token = WhaleToken(_whaleToken);
        priceOracle = IPriceOracle(_priceOracle);
    }

    function approveTournament() public returns (bool) {
        dai.approve(address(this), 10);
        return true;
    }

    function deposit() public returns (uint) {
        uint amount = 10;
        dai.transferFrom(msg.sender, address(this), amount);
        prizeMoney += amount;
        uint toMint = amount.mul(100);
        token.mintForPlayer(msg.sender, toMint);
        whaleTokenBalances[msg.sender] += toMint;
        return toMint;
    }

    function buyToken(uint _coin, uint _quantity) public returns (bool) {
        uint price = getCoinPrice(_coin);
        uint whaleTokenPrice = price.mul(100);
        uint purchaseAmount = whaleTokenPrice.mul(_quantity);
        IERC20 mockToken = IERC20(_mockTokens[_coin]);
        whaleTokenBalances[msg.sender] -= purchaseAmount;
        mockToken.approve(address(this), purchaseAmount);
        mockToken.transferFrom(address(this), msg.sender, purchaseAmount);
        return true;
    }

    function getCoinPrice(uint _coin) private view returns(uint) {
        require(_coin < 4, "value must be less than 4 to be valid for enum");
        int price;
        Coin coin = Coin(_coin);
        if (coin == Coin.DOGE) {
            price = priceOracle.getLatestDogecoinPrice();
        }
        if (coin == Coin.BTC) {
            price = priceOracle.getLatestBitconPrice();
        }
        if (coin == Coin.ETH) {
            price = priceOracle.getLatestEthereumPrice();
        }
        if (coin == Coin.UNI) {
            price = priceOracle.getLatestUniswapPrice();
        }
        uint whalePrice = uint(price).mul(100);
        return whalePrice;
    }

    function redeemValue() public returns(uint) {
        uint whaleTokenAmount = 0;
        for (uint i = 0; i < tokenHoldings[msg.sender].length; i++) {
            uint price  = getCoinPrice(i);
            uint dollarAmount = tokenHoldingBalance[msg.sender][i] * price;
            uint whaleTokens = dollarAmount.mul(100);
            whaleTokenAmount += whaleTokens;
        }
        whaleTokenBalances[msg.sender] += whaleTokenAmount;
        emit Redemption(msg.sender, whaleTokenBalances[msg.sender]);
        return whaleTokenBalances[msg.sender];
    }

}