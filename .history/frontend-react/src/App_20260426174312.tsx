import LogoLoop from "./components/LogoLoop";

import dispersion from "./assets/dispersion.png";
import faction from "./assets/faction.png";
import hashglobal from "./assets/hashglobal.png";

function App() {
  const cryptoLogos = [
    { src: dispersion, alt: "Dispersion", href: "#" },
    { src: faction, alt: "Faction", href: "#" },
    { src: hashglobal, alt: "HashGlobal", href: "#" },
  ];

  return (

    <div className="relative min-h-screenoverflow-hidden bg-zinc-100">
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