import { useState } from "react";
import { transferToken } from "../api/blockchain";

export default function TransferForm() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const submit = async () => {
    const res = await transferToken({ to, amount });
    alert("Transfer Success\nTX: " + res.data.txHash);
  };

  return (
    <div>
      <h2>Transfer Token</h2>

      <input
        placeholder="Address tujuan"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <input
        placeholder="Jumlah"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={submit}>Kirim</button>
    </div>
  );
}