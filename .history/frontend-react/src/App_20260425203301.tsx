import BalanceCard from "./components/BalanceCard";
import TransferForm from "./components/TransferForm";
import LogoLoop from "./components/LogoLoop";

import dispersion from "./assets/dispersion.png";
import faction from "./assets/faction.png";
import hashglobal from "./assets/hashglobal.png";

function App() {
  const cryptoLogos = [
    { src: dispersion, alt: "Ethereum", href: "#" },
    { src: faction, alt: "Bitcoin", href: "#" },
    { src: hashglobal, alt: "Solana", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10 overflow-x-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            NusaDex Dashboard
          </h1>
          <p className="mt-3 text-zinc-400 text-lg">
            Sistem tokenisasi komunitas modern berbasis blockchain
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Balance */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-xl backdrop-blur">
            <h2 className="mb-4 text-xl font-semibold text-cyan-400">
              Saldo Wallet
            </h2>
            <BalanceCard />
          </div>

          {/* Transfer */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-xl backdrop-blur">
            <h2 className="mb-4 text-xl font-semibold text-blue-400">
              Transfer Token
            </h2>
            <TransferForm />
          </div>
        </div>

        {/* Logo Loop */}
        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-xl backdrop-blur">
          <h2 className="mb-6 text-center text-xl font-semibold text-zinc-200">
            Supported Ecosystem
          </h2>

          <div className="relative w-full overflow-hidden h-28">
            <LogoLoop
              logos={cryptoLogos}
              speed={60}
              direction="left"
              logoHeight={22}
              gap={50}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#09090b"
              sepa
              ariaLabel="Crypto Partners"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;