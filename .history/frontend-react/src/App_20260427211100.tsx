import Navbar from './components/Navbar';
import TrustedBrands from './pages/TrustedBrands';
import Home from './pages/Home'; 
import Feature from './pages/Feature';

function App() {
  
  return (
    <div className="bg-zinc-100">
      <Navbar />
      <Home />
      <TrustedBrands />
      <Feature />
    </div>
  );
}

export default App;