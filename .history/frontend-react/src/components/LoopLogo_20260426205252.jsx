import React from 'react'
import LogoLoop from './LogoLoop';
import dispersion from "../assets/dispersion.png";
import faction from "../assets/faction.png";
import hashglobal from "../assets/hashglobal.png";
import valorant from "../assets/valorant.png";

function LoopLogo() {
  const cryptoLogos = [
    { src: dispersion, alt: "Dispersion", href: "#" },
    { src: faction, alt: "Faction", href: "#", height: 42 },
    { src: hashglobal, alt: "HashGlobal", href: "#", height: 42 },
    { src: valorant, alt: "Valorant", href: "#", height: 100},
  ];

  return (
    <div className="relative w-full overflow-hidden h-20 opacity-80">
        <LogoLoop
            logos={cryptoLogos}
            speed={60}
            direction="left"
            logoHeight={40}
            gap={80}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#09090b"
            ariaLabel="Crypto Partners"
        />
    </div>
  )
}

export default LoopLogo;