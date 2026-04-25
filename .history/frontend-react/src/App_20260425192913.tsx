import './App.css'
import BalanceCard from './components/BalanceCard'
import TransferForm from './components/TransferForm'

function App() {
    return (
    <div style={{ padding: "30px" }}>
      <h1>NusaDex Dashboard</h1>

      <BalanceCard />
      <hr />
      <TransferForm />
      <LogoLoop />
    </div>
  );
}

export default App
