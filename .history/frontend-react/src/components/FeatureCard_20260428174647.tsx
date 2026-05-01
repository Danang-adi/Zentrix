import { motion } from "framer-motion";

type Props = {
  number: string;
  title: string;
  desc: string;
  icon: string;
};

export default function FeatureCard({
  number,
  title,
  desc,
  icon,
}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      className="rounded-3xl border border-zinc-200 bg-white shadow-xl p-10 grid md:grid-cols-2 gap-10"
    >
      {/* LEFT */}
      <div className="flex flex-col justify-center">
        <div className="w-10 h-10 rounded-md bg-blue-700 text-white flex items-center justify-center font-bold mb-8">
          {number}
        </div>

        <div className="text-7xl text-blue-700">
          {icon}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col justify-center">
        <h2 className="text-5xl font-light mb-6 leading-tight">
          {title}
        </h2>

        <p className="text-zinc-600 text-lg leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}