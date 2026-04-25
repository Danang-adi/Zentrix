import BalanceCard from "./components/BalanceCard";
import TransferForm from "./components/TransferForm";
import LogoLoop from "./components/LogoLoop";

function App() {
  const cryptoLogos = [
    {
      src: "assets/dispersion.png",
      alt: "Ethereum",
      href: "https://ethereum.org",
    },
    {
      src: "/frontend-react/src/assets/dispersion.pngassets/faction.png",
      alt: "Bitcoin",
      href: "https://bitcoin.org",
    },
    {
      src: "assets/hashglobal.png",
      alt: "Solana",
      href: "https://solana.com",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">
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

          <div className="relative h-28 overflow-hidden">
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
              ariaLabel="Crypto Partners"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;