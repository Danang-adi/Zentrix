import React from 'react'
import LogoLoop from './LogoLoop';
import dispersion from "../assets/dispersion.png";
import faction from "../assets/faction.png";
import hashglobal from "../assets/hashglobal.png";
import valorant from "../assets/valorant.png";

function LoopLogo() {
  const cryptoLogos = [
    { src: dispersion, alt: "Dispersion", href: "https://playvalorant.com/" },
    { src: faction, alt: "Faction", href: "https://playvalorant.com/" },
    { src: hashglobal, alt: "HashGlobal", href: "https://playvalorant.com/" },
    { src: valorant, alt: "Valorant", href: "https://playvalorant.com/"},
  ];

  return (
    <div className="relative w-full overflow-hidden h-20 opacity-80">
        <LogoLoop
            logos={cryptoLogos}
            speed={60}
            direction="left"
            logoHeight={90}
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

export default LoopLogo;