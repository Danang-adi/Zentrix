import './App.css'
import BalanceCard from './components/BalanceCard'
import TransferForm from './components/TransferForm'
import LogoLoop from './components/LogoLoop'
function App() {
    return (
    <div style={{ padding: "30px" }}>
      <h1>NusaDex Dashboard</h1>

      <BalanceCard />
      <hr />
      <TransferForm />
      <LogoLoop
        logos={[
          { name: "Ethereum", img: "/dispersion.png" },
          { name: "Bitcoin", img: "/faction.png" },
          { name: "Solana", img: "/hashglbal.png" }
        ]}
      />
    </div>
  );
}

export default App
