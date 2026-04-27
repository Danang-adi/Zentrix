import { ChevronDown, Disc, X, lin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="pt-5 px-6 relative z-50">
      <nav className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md border border-white/60 shadow-md rounded-2xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-blue-600 rotate-45 rounded-sm"></div>
          <span className="font-bold text-lg tracking-wide">
            PHAROS
          </span>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-700">
          <button className="flex items-center gap-1 hover:text-black transition">
            Explore <ChevronDown size={16} />
          </button>

          <button className="flex items-center gap-1 hover:text-black transition">
            Learn <ChevronDown size={16} />
          </button>

          <button className="flex items-center gap-1 hover:text-black transition">
            Build <ChevronDown size={16} />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Social */}
          <div className="hidden md:flex items-center gap-3 text-zinc-700">
            <X size={18} className="hover:text-black cursor-pointer" />
            <Disc size={18} className="hover:text-black cursor-pointer" />
            <Linkedin size={18} className="hover:text-black cursor-pointer" />
          </div>

          {/* CTA */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-medium transition">
            Join Testnet
          </button>

        </div>

      </nav>
    </header>
  );
}