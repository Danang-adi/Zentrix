import { useRef } from "react";
import { useScroll } from "framer-motion";
import FeatureCard from "../components/FeatureCard";

export default function Feature() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const features = [
    {
      number: "1",
      title: "MODULAR. PARALLEL.",
      desc: "Description...",
      icon: "✦",
    },
    {
      number: "2",
      title: "COMPLIANT BY DESIGN.",
      desc: "Description...",
      icon: "⬢",
    },
  ];

  return (
    <section ref={ref} className="relative min-h-[400vh] bg-white">
      <div className="sticky top-24 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-[650px]">

          {features.map((item, index) => (
            <FeatureCard
              key={index}
              index={index}
              total={features.length}
              scrollYProgress={scrollYProgress}
              number={item.number}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          ))}

        </div>
      </div>
    </section>
  );
}