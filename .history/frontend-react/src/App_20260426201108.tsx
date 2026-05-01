import LogoLoop from '../../compoonents/LogoLoop';
import TrustedBrands from './pages/TrustedBrands';

function App() {
  
  return (

    <div className="relative min-h-screenoverflow-hidden bg-zinc-100">
      <div className="absolute inset-0 flex justify-center items-start">
        <div className="grid-bg"></div>
      </div>
      <TrustedBrands />
    </div>
  );
}

export default App;