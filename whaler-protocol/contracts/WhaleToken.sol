// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20} from '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract WhaleToken is ERC20 {
    address private _owner;
    mapping(address => uint) private _tournaments;

    constructor () ERC20("WHALETOKEN", "WHLE") {
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Only the owner can call this");
        _;
    }

    modifier onlyTournament() {
        require(_tournaments[msg.sender] == 1, "Only a tournament can call this");
        _;
    }

    function addTournament(address _tournament) public onlyOwner() returns (bool){
        _tournaments[_tournament] = 1;
        return true;
    }

    function mintForPlayer(address _player, uint _amount) public onlyTournament() returns (bool success) {
        _mint(_player, _amount);
        return true;
    }
}