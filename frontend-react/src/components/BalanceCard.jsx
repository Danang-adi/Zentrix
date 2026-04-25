import { useEffect, useState } from "react";
import { getBalance } from "../api/blockchain";

export default function BalanceCard() {
  const [balance, setBalance] = useState("0");

  const address =
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  useEffect(() => {
    loadBalance();
  }, []);

  const loadBalance = async () => {
  const res = await getBalance(address);
  console.log(res.data);
  setBalance(res.data.balance);
};

  return (
    <div>
      <h2>Saldo Token</h2>
      <p>{balance} NUSA</p>
    </div>
  );
}