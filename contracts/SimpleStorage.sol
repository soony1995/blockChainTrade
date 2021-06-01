pragma solidity >=0.4.21 <0.8.5;

contract SimpleStorage {
    uint256 storedData;
    address private owner;

    //event Change(string message, uint indexed newVal);
    event Change(string message, uint256 newVal);

    constructor(uint256 s) public {
        storedData = s;
        owner = msg.sender;
        
    }

    function set(uint256 x) public {
        require(x < 10000000, "Should be less than 1000");
        storedData = x;
        emit Change("set", x);
    }

    function get() public view returns (uint256) {
        return storedData;
    }

    
    
   
}
