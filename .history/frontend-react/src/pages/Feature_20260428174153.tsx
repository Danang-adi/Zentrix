import FeatureCard from "../components/FeatureCard";

const features = [
  {
    number: "1",
    title: "MODULAR. PARALLEL.",
    desc: "Built for scalable next-gen finance with ultra-fast execution.",
    icon: "✦",
  },
  {
    number: "2",
    title: "COMPLIANT BY DESIGN.",
    desc: "Secure infrastructure ready for institutions and builders.",
    icon: "⬢",
  },
  {
    number: "1",
    title: "MODULAR. PARALLEL.",
    desc: "Built for scalable next-gen finance with ultra-fast execution.",
    icon: "✦",
  },
  {
    number: "2",
    title: "COMPLIANT BY DESIGN.",
    desc: "Secure infrastructure ready for institutions and builders.",
    icon: "⬢",
  },
];

export default function Feature() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {features.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}