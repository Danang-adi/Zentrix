const express = require("express");
const { ethers } = require("ethers");

const app = express();
app.use(express.json());

// connect ke Hardhat node
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

// endpoint test blockchain
app.get("/block", async (req, res) => {
    try {
        const blockNumber = await provider.getBlockNumber();
        res.json({ blockNumber });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// endpoint ambil saldo address
app.get("/balance/:address", async (req, res) => {
    try {
        const balance = await provider.getBalance(req.params.address);
        res.json({
            address: req.params.address,
            balance: ethers.formatEther(balance)
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});