pragma solidity ^0.5.8;

contract Blockbank {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    } 

    mapping (uint => Candidate) public candidates;

    uint public candidatesCount;
    constructor() public {
        addCandidate("Durai");
        addCandidate("Agalya");
    }

    function addCandidate(string memory _name ) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}