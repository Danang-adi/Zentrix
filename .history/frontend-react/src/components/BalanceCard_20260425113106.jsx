import { useEffect, useState } from "react";
import { getBalance } from "../api/blockchain";

export default function BalanceCard() {
  const [balance, setBalance] = useState("0");

  const address =
    "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  useEffect(() => {
    loadBalance();
  }, []);

  const loadBalance = async () => {
    const res = await getBalance(address);
    setBalance(res.data.balance);
  };

  return (
    <div>
      <h2>Saldo Token</h2>
      <p>{balance} NUSA</p>
    </div>
  );
}