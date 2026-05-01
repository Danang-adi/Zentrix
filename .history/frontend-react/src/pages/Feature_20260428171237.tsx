import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    number: "1",
    title: "MODULAR. PARALLEL. REAL-TIME.",
    desc: "Pharos combines modular architecture, deep-parallel execution, and dual VM (EVM + WASM) to deliver sub-second finality, 30,000 TPS, and real-time programmable finance built for the world’s open financial layer.",
    icon: "✦",
  },
  {
    number: "2",
    title: "COMPLIANT BY DESIGN, GLOBAL BY NATURE",
    desc: "Built-in compliance rails empower institutions and builders to launch secure and globally accessible products.",
    icon: "⬢",
  },
  {
    number: "3",
    title: "INCLUSIVE BY DESIGN",
    desc: "Pharos lowers entry barriers for both institutions and users, bringing real-world value and institutional-grade opportunities to everyone.",
    icon: "◎",
  },
  {
    number: "4",
    title: "BORDERLESS DIGITAL FINANCIAL CITY",
    desc: "A unified onchain economy where tokenized assets flow like commerce, stablecoins settle like currency, and builders coexist in one programmable network.",
    icon: "▦",
  },
];

export default function Feature() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#ececec] py-20 min-h-[400vh]"
    >
      <div className="sticky top-24 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-[650px]">

          {features.map((item, index) => {
            const start = index * 0.22;
            const end = start + 0.22;

            const y = useTransform(
              scrollYProgress,
              [start, end],
              [120, 0]
            );

            const scale = useTransform(
              scrollYProgress,
              [start, end],
              [0.92, 1]
            );

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.4, 1]
            );

            return (
              <motion.div
                key={index}
                style={{
                  y,
                  scale,
                  opacity,
                  zIndex: index + 1,
                }}
                className="absolute inset-0 rounded-3xl border border-zinc-300 bg-white shadow-xl p-10 grid md:grid-cols-2 gap-10"
              >
                {/* LEFT */}
                <div className="flex flex-col justify-center">
                  <div className="w-10 h-10 rounded-md bg-blue-700 text-white flex items-center justify-center font-bold mb-8">
                    {item.number}
                  </div>

                  <div className="text-8xl text-blue-700 opacity-90">
                    {item.icon}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-6">
                    {item.title}
                  </h2>

                  <p className="text-zinc-600 leading-relaxed text-lg max-w-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}