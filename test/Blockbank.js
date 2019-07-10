var Blockbank = artifacts.require("./Blockbank.sol");

contract("Election",  function(accounts) {

    it("initialize with 2 candidates", function(){
        return Blockbank.deployed().then(function(instance) {
            return instance.candidatesCount();
        }).then(function(count) {
            assert.equal(count, 2);
        });
    });

    it("validate candidates", function(){
        return Blockbank.deployed().then(function(instance) {
            return instance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "contains correct id");
            assert.equal(candidate[1], "Durai", "check candidate name");
            assert.equal(candidate[2], 0, "check the count");
        })   
    });
});