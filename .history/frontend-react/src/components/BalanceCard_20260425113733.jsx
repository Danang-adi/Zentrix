import { useEffect, useState } from "react";
import { getBalance } from "../api/blockchain";

export default function BalanceCard() {
  const [balance, setBalance] = useState("0");

  const address =
    "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

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