// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {WhaleToken} from './WhaleToken.sol';
import {Tournament} from './Tournament.sol';

contract Whaler {
    address private _whaleTokenAddress;
    address private _daiAddress;
    address private _owner;
    uint private _tournamentId;
    mapping(uint => address) private _tournaments;
    
    constructor(address _whaleAddress, address _dai) {
        WhaleToken _token = new WhaleToken();
        _daiAddress = _dai;
        _owner = msg.sender;
        _tournamentId = 0;
        _whaleTokenAddress = address(_token);
    }

    modifier onlyOwner() {
        require(_owner == msg.sender, "You are not owner");
        _;
    }

    function createTournament() public onlyOwner() returns (bool) {
        Tournament tournament = new Tournament(_daiAddress, _whaleTokenAddress);
        _tournaments[_tournamentId] = address(tournament);
        _tournamentId++;
        _token.addTournament(address(tournament));
        return true;
    }
}

