import Navbar from './components/Navbar';
import TrustedBrands from './pages/TrustedBrands';

function App() {
  
  return (
<<<<<<< Updated upstream
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10 overflow-x-hidden">
          <div className="relative w-full overflow-hidden h-28">
            <LogoLoop
              logos={cryptoLogos}
              speed={100}
              direction="left"
              logoHeight={40}
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#09090b"
              ariaLabel="Crypto Partners"
            />
          </div>
=======

    <div className="relative min-h-screenoverflow-hidden bg-zinc-100">
      <div className="absolute inset-0 flex justify-center items-start">
        <div className="grid-bg"></div>
      </div>
      <Navbar />
      <TrustedBrands />
      
      
>>>>>>> Stashed changes
    </div>
  );
}

export default App;