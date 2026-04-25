
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
          <div className="relative w-full overflow-hidden h-28">
            <LogoLoop
              logos={cryptoLogos}
              speed={60}
              direction="left"
              logoHeight={40}
              gap={50}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#09090b"
              ariaLabel="Crypto Partners"
            />
          </div>
    </div>
  );
}

export default App;