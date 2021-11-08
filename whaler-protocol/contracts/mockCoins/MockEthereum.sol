// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20} from '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract MockEthereum is ERC20 {
    address private _owner;

    constructor() ERC20("MOCKETHEREUM", "ETH") {
        _owner = msg.sender;
        _mint(address(this), 1e18);
    }
}