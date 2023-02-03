// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract QuickFoodToken is ERC20 {
    constructor() ERC20("QuickFoodToken", "QFT") {}

    function buyToken() public payable {
        _mint(msg.sender, msg.value);
    }
}
