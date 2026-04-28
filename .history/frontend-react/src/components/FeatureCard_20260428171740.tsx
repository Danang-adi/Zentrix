import { motion, useTransform, MotionValue } from "framer-motion";

type Props = {
  index: number;
  total: number;
  number: string;
  title: string;
  desc: string;
  icon: string;
  scrollYProgress: MotionValue<number>;
};

export default function FeatureCard({
  index,
  total,
  number,
  title,
  desc,
  icon,
  scrollYProgress,
}: Props) {
  const start = index / total;
  const end = (index + 1) / total;

  const y = useTransform(scrollYProgress, [start, end], [120, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0.4, 1]);

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 1,
      }}
      className="absolute inset-0 rounded-3xl border border-zinc-200 bg-white shadow-xl p-10 grid md:grid-cols-2 gap-10"
    >
      {/* LEFT */}
      <div className="flex flex-col justify-center">
        <div className="w-10 h-10 rounded-md bg-blue-700 text-white flex items-center justify-center font-bold mb-8">
          {number}
        </div>

        <div className="text-8xl text-blue-700 opacity-90">
          {icon}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-6">
          {title}
        </h2>

        <p className="text-zinc-600 text-lg leading-relaxed max-w-lg">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}