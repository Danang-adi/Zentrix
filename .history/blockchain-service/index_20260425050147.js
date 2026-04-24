const express = require("express");
const { ethers } = require("ethers");

const app = express();
app.use(express.json());

// koneksi ke Hardhat
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

// ⚠️ ganti dengan contract address kamu
const contractAddress = "ISI_ADDRESS_KAMU";

// ⚠️ paste ABI di sini
const abi = [
  // paste ABI dari artifact
];

// ⚠️ wallet (sementara pakai Hardhat account)
const wallet = new ethers.Wallet(
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  provider
);

// contract instance
const contract = new ethers.Contract(contractAddress, abi, wallet);

---

# 🔹 ENDPOINT 1: CEK BALANCE TOKEN

app.get("/token/:address", async (req, res) => {
  try {
    const balance = await contract.balanceOf(req.params.address);

    res.json({
      address: req.params.address,
      balance: ethers.formatUnits(balance, 18),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

---

# 🔹 ENDPOINT 2: TRANSFER TOKEN

app.post("/transfer", async (req, res) => {
  try {
    const { to, amount } = req.body;

    const tx = await contract.transfer(
      to,
      ethers.parseUnits(amount, 18)
    );

    await tx.wait();

    res.json({
      status: "success",
      txHash: tx.hash,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

---

app.listen(3001, () => {
  console.log("Blockchain Service running on port 3001");
});