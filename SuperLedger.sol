// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SuperLedger {
    struct DataEntry {
        address contributor;
        string dataHash; // IPFS or other storage hash
        uint256 timestamp;
    }

    mapping(uint256 => DataEntry) public ledger;
    uint256 public entryCount;

    function addData(string memory dataHash) public {
        ledger[entryCount] = DataEntry(msg.sender, dataHash, block.timestamp);
        entryCount++;
    }
}
