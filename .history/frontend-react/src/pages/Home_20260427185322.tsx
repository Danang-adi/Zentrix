import { ArrowUpRight, MessageCircle } from "lucide-react";

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
                <h1 className="text-4xl md:text-7xl font-light leading-tight tracking-tight text-zinc-800 max-w-3xl">
                    Inclusive Financial Layer 2 for Real Value and Institutional-Grade Assets
                </h1>
                <div className=""></div>
            </div>
        </div>
    </section>
  );
}