import { useRef } from "react";
import { useScroll } from "framer-motion";
import FeatureCard from "../components/FeatureCard";

const features = [
  {
    number: "1",
    title: "MODULAR. PARALLEL. REAL-TIME.",
    desc: "Sub-second finality, deep-parallel execution, and scalable infrastructure for next generation finance.",
    icon: "✦",
  },
  {
    number: "2",
    title: "COMPLIANT BY DESIGN.",
    desc: "Built-in compliance rails for institutions, enterprises, and global builders.",
    icon: "⬢",
  },
  {
    number: "3",
    title: "INCLUSIVE BY DESIGN.",
    desc: "Access real-world opportunities for everyone through open programmable finance.",
    icon: "◎",
  },
  {
    number: "4",
    title: "BORDERLESS DIGITAL CITY.",
    desc: "A unified digital economy where assets, payments, and builders coexist.",
    icon: "▦",
  },
];

export default function Feature() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className="relative min-h-[420vh] bg-white"
    >
      <div className="sticky top-20 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-[650px]">

          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              total={features.length}
              scrollYProgress={scrollYProgress}
              {...feature}
            />
          ))}

        </div>
      </div>
    </section>
  );
}