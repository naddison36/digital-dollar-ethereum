var AssetBackedTokens = artifacts.require("./AssetBackedTokens.sol");

module.exports = function(deployer) {
  deployer.deploy(AssetBackedTokens);
};
