import { ArrowUpRight, MessageCircle } from "lucide-react";
import HomeGif from "../assets/Home.gif";

export default function Home() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 min-h-screen">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm mb-8">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            RealFi, Accessible to All.
          </div>
          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-light leading-tight tracking-tight text-zinc-900 max-w-3xl">
            Inclusive Financial Layer 2 for Real Value and Institutional-Grade Assets
          </h1>
          {/* Button */}
          <div className="mt-10">
            <button className="flex items-center gap-3 bg-white shadow-md hover:shadow-lg px-5 py-3 rounded-xl transition">
              <MessageCircle size={18} />
              <span className="font-medium">
                Join Community
              </span>
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <ArrowUpRight size={16} />
              </div>
            </button>
          </div>
          {/* Description */}
          <div className="mt-20 max-w-xl border-l-2 border-zinc-700 pl-6 text-zinc-700 leading-relaxed">
            Powered by modular architecture, deep-parallel execution, and built-in compliance, enabling real-time open finance onchain.
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="hidden lg:flex justify-center items-center ">
          <img
          src={HomeGif}
          alt="Hero Animation"
          className="w-[550px] rounded-2xl shadow-2xl ml-30"
          />
        </div>

      </div>

    </section>
  );
}