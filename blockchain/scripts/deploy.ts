import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  // pakai private key dari Hardhat account #0
  const wallet = new ethers.Wallet(
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
    provider
  );

  console.log("Deploying with:", wallet.address);

  // load artifact hasil compile
  const artifact = await import("../artifacts/contracts/NusaToken.sol/NusaToken.json");

  const factory = new ethers.ContractFactory(
    artifact.abi,
    artifact.bytecode,
    wallet
  );

  const initialSupply = ethers.parseUnits("1000000", 18);
  const maxSupply = ethers.parseUnits("2000000", 18);

  const contract = await factory.deploy(initialSupply, maxSupply);

  await contract.waitForDeployment();

  console.log("Token deployed at:", await contract.getAddress());
}

main().catch(console.error);