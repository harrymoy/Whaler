// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IERC20} from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import {WhaleToken} from './WhaleToken.sol';
import {SafeMath} from "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Tournament {
    using SafeMath for uint;

    IERC20 private _dai;
    WhaleToken private _token;
    uint private _prizeMoney;
    mapping(address => uint) private _balances;

    modifier greaterThanZero(uint _amount) {
        require(_amount > 0, "Must be more than 0");
        _;
    }

    constructor(address _daiAddress, address _whaleToken) {
        _dai = IERC20(_daiAddress);
        _token = WhaleToken(_whaleToken);
    }

    function approveTournament() public returns (bool) {
        _dai.approve(address(this), 10);
        return true;
    }

    function deposit() public returns (uint) {
        uint amount = 10;
        _dai.transferFrom(msg.sender, address(this), amount);
        _prizeMoney += amount;
        uint toMint = amount.mul(100);
        _token.mintForPlayer(msg.sender, toMint);
        _balances[msg.sender] += toMint;
        return toMint;
    }

}