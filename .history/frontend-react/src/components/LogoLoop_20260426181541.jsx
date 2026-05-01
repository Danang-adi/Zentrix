import React from 'react'
import LogoLoop from "../compoonents/LogoLoop";

const LogoLoop = () => {
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