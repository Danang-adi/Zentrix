import Navbar from './components/Navbar';
import TrustedBrands from './pages/TrustedBrands';
import Home from './pages/Home'; 

function App() {
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-100">
      <div className="absolute inset-0 flex justify-center items-start">
        <div className="grid-bg"></div>
      </div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 pt-24 min-h-screen">
          <Navbar />
          <Home />
          <TrustedBrands />
        </div>
      </div>
    </div>
  );
}

export default App;