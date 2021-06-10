// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract Wnft is ERC721 {
    string[] public collectibles;
    mapping(string => bool) _collectibleExists;

    constructor() ERC721("MyCollectible", "MCO") {
    }

    function mint(string memory _collectible) public  {
        // Check whether collectible is present
        require(!_collectibleExists[_collectible]);
        // require collectibles
        collectibles.push(_collectible);
        uint _id = collectibles.length;
        _mint(msg.sender, _id);
        _collectibleExists[_collectible] = true;
    }

    function lengthReturn() public view returns(uint) {
        return collectibles.length;
    }

    function tokenTransfer(address _to, uint _id) public {
        // check if the reciever and sender is same 
        require(msg.sender!= _to);
        // check if the token _id is valid
        require(_id <= lengthReturn());
        safeTransferFrom(msg.sender, _to, _id);
    }
}