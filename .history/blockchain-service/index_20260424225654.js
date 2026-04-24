const express = require("express");
const { ethers } = require("ethers");

const app = express();
app.use(express.json());

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

app.get("/", (req, res) => {
    res.send("Blockchain Service Running");
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});