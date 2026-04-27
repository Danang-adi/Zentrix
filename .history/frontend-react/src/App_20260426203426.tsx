import Navbar from './components/Navbar';
import TrustedBrands from './pages/TrustedBrands';

function App() {
  
  return (

    <div className="relative min-h-screenoverflow-hidden bg-zinc-100">
      <div className="absolute inset-0 flex justify-center items-start">
        <div className="grid-bg"></div>
      </div>
      <Navbar />
      <TrustedBrands />
          <div className="bg-red-500 text-white text-5xl p-10">
      TEST TAILWIND
    </div>
      
    </div>
  );
}

export default App;