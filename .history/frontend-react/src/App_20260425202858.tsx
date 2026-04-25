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
              separator={false}
              ariaLabel="Crypto Partners"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;