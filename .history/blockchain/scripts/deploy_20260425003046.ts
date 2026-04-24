import hre from "hardhat";

async function main() {
  const { ethers } = hre;

  const [deployer] = await ethers.getSigners();

  console.log("Deploying with:", deployer.address);

  const Token = await ethers.getContractFactory("NusaToken");

  const initialSupply = ethers.parseUnits("1000000", 18);
  const maxSupply = ethers.parseUnits("2000000", 18);

  const token = await Token.deploy(initialSupply, maxSupply);

  await token.waitForDeployment();

  console.log("Token deployed at:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});