import LogoLoop from '../../compoonents/LogoLoop';
import dispersion from "/assets/dispersion.png";
import faction from "../assets/faction.png";
import hashglobal from "../assets/hashglobal.png";

function App() {
  
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