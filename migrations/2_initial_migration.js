var Blockbank = artifacts.require("./Blockbank.sol");

module.exports = function(deployer) {
  deployer.deploy(Blockbank);
};
