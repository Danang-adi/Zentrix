import React from 'react'
import LogoLoop from './LogoLoop';
import Valve from "../assets/valve.png";
import GitHub from "../assets/github.png";
import valorant from "../assets/valorant.png";
import Steam from "../assets/steam.png";

function LoopLogo() {
  const cryptoLogos = [
    { src: Valve, alt: "Valve", href: "valvesoftware.com" },
    { src: Steam, alt: "Steam", href: "https://store.steampowered.com/" },
    { src: GitHub, alt: "GitHub", href: "https://github.com/" },
    { src: Riot, alt: "Valorant", href: "https://playvalorant.com/"},
  ];

  return (
    <div className="relative w-full overflow-hidden h-20 opacity-80">
        <LogoLoop
            logos={cryptoLogos}
            speed={60}
            direction="left"
            logoHeight={50}
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