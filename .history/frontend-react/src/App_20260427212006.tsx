import Navbar from './components/Navbar';
import TrustedBrands from './pages/TrustedBrands';
import Home from './pages/Home'; 
import Feature from './pages/Feature';

function App() {
  
  return (
    <div className="bg-zinc-100">
      <section className="relative overflow-hidden">}
        <div className="absolute inset-0 flex justify-center items-start">
          <div className="grid-bg"></div>
        </div>
        <div className="relative z-10">
          <Navbar />
          <Home />
          <TrustedBrands />
        </div>

      </section>
      
      <section className="bg-white relative z-20">
        <Feature />
      </section>

    </div>
  );
}

export default App;