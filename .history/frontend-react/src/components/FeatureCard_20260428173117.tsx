import import { motion, useTransform, MotionValue } from "framer-motion";

type Props = {
  index: number;
  number: string;
  title: string;
  desc: string;
  icon: string;
  scrollYProgress: MotionValue<number>;
};

export default function FeatureCard({
  index,
  number,
  title,
  desc,
  icon,
  scrollYProgress,
}: Props) {
  const start = index === 0 ? 0 : 0.5;
  const mid   = index === 0 ? 0.25 : 0.75;
  const end   = index === 0 ? 0.5 : 1;

  const opacity = useTransform(
    scrollYProgress,
    [start, mid, end],
    [0, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, mid],
    [80, 0]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 rounded-3xl bg-white shadow-xl border border-zinc-200 p-10 grid md:grid-cols-2 gap-10"
    >
      <div className="flex flex-col justify-center">
        <div className="w-10 h-10 bg-blue-700 text-white rounded-md flex items-center justify-center font-bold mb-8">
          {number}
        </div>

        <div className="text-7xl text-blue-700">
          {icon}
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="text-5xl font-light mb-6">
          {title}
        </h2>

        <p className="text-zinc-500">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}{ motion, useTransform, MotionValue } from "framer-motion";

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
  const step = 1 / total;

  const start = index * step;
  const mid = start + step * 0.5;
  const end = start + step;

  const opacity = useTransform(
    scrollYProgress,
    [start, mid, end],
    [0, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, mid],
    [80, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, mid],
    [0.95, 1]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
        zIndex: total - index,
      }}
      className="absolute inset-0 rounded-3xl border border-zinc-200 bg-white shadow-xl p-10 grid md:grid-cols-2 gap-10"
    >
      {/* LEFT */}
      <div className="flex flex-col justify-center">
        <div className="w-10 h-10 bg-blue-700 text-white rounded-md flex items-center justify-center font-bold mb-8">
          {number}
        </div>

        <div className="text-7xl text-blue-700">
          {icon}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-light leading-tight mb-6">
          {title}
        </h2>

        <p className="text-zinc-600 leading-relaxed max-w-lg">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}