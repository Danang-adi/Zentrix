import LogoLoop from '../../compoonents/LogoLoop';
import dispersion from "/assets/dispersion.png";
import faction from "/assets/faction.png";
import hashglobal from "/assets/hashglobal.png";

function App() {
    const cryptoLogos = [
    { src: dispersion, alt: "Dispersion", href: "#" },
    { src: faction, alt: "Faction", href: "#" },
    { src: hashglobal, alt: "HashGlobal", href: "#" },
  ];
  return (

    <div className="relative min-h-screenoverflow-hidden bg-zinc-100">
      <div className="absolute inset-0 flex justify-center items-start">
        <div className="grid-bg"></div>
      </div>
      <LogoLoop />
    </div>
  );
}

export default App;