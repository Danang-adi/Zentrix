import React from 'react'
import LogoLoop from "../compoonents/LogoLoop";

import dispersion from "./assets/dispersion.png";
import faction from "./assets/faction.png";
import hashglobal from "./assets/hashglobal.png";

function LogoLoop() {
  const cryptoLogos = [
    { src: dispersion, alt: "Dispersion", href: "#" },
    { src: faction, alt: "Faction", href: "#" },
    { src: hashglobal, alt: "HashGlobal", href: "#" },
  ];

  return (
    <div className="relative w-full overflow-hidden h-28">
        <LogoLoop
            logos={cryptoLogos}
            speed={60}
            direction="left"
            logoHeight={35}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#09090b"
            ariaLabel="Crypto Partners"
        />
    </div>
  )
}

export default LogoLoop