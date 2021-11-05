// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {WhaleToken} from './WhaleToken.sol';
import {Tournament} from './Tournament.sol';

contract Whaler {
    WhaleToken private token;
    address private dai;
    address private owner;
    address private priceOracle;
    uint private tournamentId;
    mapping(uint => address) private tournaments;
    
    constructor(address _daiAddress, address _priceOracleAddress) {
        token = new WhaleToken();
        dai = _daiAddress;
        owner = msg.sender;
        tournamentId = 0;
        priceOracle = _priceOracleAddress;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "You are not owner");
        _;
    }

    function createTournament() public onlyOwner() returns (bool) {
        Tournament tournament = new Tournament(dai, address(token), priceOracle);
        tournaments[tournamentId] = address(tournament);
        tournamentId++;
        token.addTournament(address(tournament));
        return true;
    }
}

