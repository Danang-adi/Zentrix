// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NusaToken is ERC20, Ownable {

    uint256 public maxSupply;

    constructor(uint256 _initialSupply, uint256 _maxSupply)
        ERC20("Nusa Token", "NUSA")
        Ownable(msg.sender)
    {
        require(_initialSupply <= _maxSupply, "Initial > Max");
        
        maxSupply = _maxSupply;

        _mint(msg.sender, _initialSupply);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(totalSupply() + amount <= maxSupply, "Exceeds max supply");
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}