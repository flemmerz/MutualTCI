// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract H2OToken is ERC20, Ownable {
    constructor() ERC20("H2O Token", "H2O") {
        _mint(msg.sender, 1000000 * 10 ** decimals()); // Initial supply
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
