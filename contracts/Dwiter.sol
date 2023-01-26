// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract dwiter {
    struct dweet {
        uint256 id;
        address from;
        string message;
        uint256 timeStamp;
    }

    mapping(address => dweet) public userDweets;
    mapping(address => dweet[]) addressDweets;
    mapping(address => address[]) public followings;
    mapping(address => address[]) public followers;
    mapping(address => dweet[]) public bookMarks;

    dweet[] public dweets;
    uint256 public ID;

    event nweDweet(address from, string message, uint256 id, uint256 timeStamp);

    function createDweet(string memory _message) public {
        ID++;
        uint256 timeStamp = block.timestamp;
        string memory Message = _message;
        dweet memory Dweet = dweet(ID, msg.sender, Message, timeStamp);
        userDweets[msg.sender] = Dweet;
        dweets.push(Dweet);
        addressDweets[msg.sender].push(Dweet);
        emit nweDweet(msg.sender, Message, ID, timeStamp);
    }

    function addBookMark(uint256 _id) public {
        _id = _id - 1;
        dweet memory Dweet = dweets[_id];
        bookMarks[msg.sender].push(Dweet);
    }

    function reDweet(uint256 _id) public {
        _id = _id - 1;
        dweet memory Dweet = dweets[_id];
        string memory Message = Dweet.message;
        createDweet(Message);
    }

    function follow(address _profile) public payable {
        followers[_profile].push(msg.sender);
        followings[msg.sender].push(_profile);
    }

    // function getDweetByAdderss()
    //     public
    //     view
    //     returns(dweet[])
    // {

    // }

    function getFollowers(address _profile)
        public
        view
        returns (address[] memory)
    {
        return (followers[_profile]);
    }

    function getFollowings(address _profile)
        public
        view
        returns (address[] memory)
    {
        return (followings[_profile]);
    }

    function getDweet(uint256 _id) public view returns (dweet memory) {
        _id = _id - 1;
        return (dweets[_id]);
    }

    function getBookMark() public view returns (dweet[] memory) {
        return (bookMarks[msg.sender]);
    }
}
