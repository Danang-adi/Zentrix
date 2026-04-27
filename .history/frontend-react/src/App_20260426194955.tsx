import LoopLogo from "./components/LoopLogo";

function App() {
  return (

    <div className="relative min-h-screenoverflow-hidden bg-zinc-100">
      <div className="absolute inset-0 flex justify-center items-start">
        <div className="grid-bg"></div>
      </div>
      
      <LoopLogo />
    </div>
  );
}

export default App;