// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20} from '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract MockBitcoin is ERC20 {
    address private _owner;

    constructor() ERC20("MOCKBITCOIN", "BTC") {
        _owner = msg.sender;
        _mint(address(this), 1e18);
    }
}