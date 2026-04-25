import { useEffect, useState } from "react";
import { getBalance } from "../api/blockchain";

export default function BalanceCard() {
  const [balance, setBalance] = useState("0");

  const address =
    "0xbcd4042de499d14e55001ccbb24a551f3b954096";

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