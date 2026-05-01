import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.png";
import img4 from "../assets/blog4.png";

const blogs = [
  {
    title: "Instant Payments",
    desc: "Cross-border settlements confirmed in under one second.",
    image: img1,
  },
  {
    title: "Compliant Finance",
    desc: "Digital ID, zk-KYC, and programmable AML.",
    image: img2,
  },
  {
    title: "Infrastructure Assets",
    desc: "Real-world assets accessible at internet scale.",
    image: img3,
  },
  {
    title: "Stablecoins",
    desc: "Stable assets backed by verified reserves.",
    image: img4,
  },
    {
    title: "Instant Payments",
    desc: "Cross-border settlements confirmed in under one second. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur.",
    image: img1,
  },
  {
    title: "Compliant Finance",
    desc: "Digital ID, zk-KYC, and programmable AML.",
    image: img2,
  },
  {
    title: "Infrastructure Assets",
    desc: "Real-world assets accessible at internet scale.",
    image: img3,
  },
  {
    title: "Stablecoins",
    desc: "Stable assets backed by verified reserves.",
    image: img4,
  },
];

export default function Blog() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="shadow-lg hover:shadow-blue-500/30 transition bg-blue-700 py-20 px-6 text-white relative overflow-hidden ">
      
      {/* Title + Button */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">
          Real Finance. Real Participation
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="bg-white text-black p-3 rounded-lg"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="bg-white text-black p-3 rounded-lg"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Slider */}
<motion.div
  ref={scrollRef}
  className="flex gap-6 cursor-grab active:cursor-grabbing"
  drag="x"
  dragConstraints={{ left: -1000, right: 0 }}
>
  {blogs.map((item, index) => (
    <div
      key={index}
      onClick={() => navigate(`/blog/${item.id}`)}
      className="min-w-[320px] bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition cursor-pointer"
    >
      {/* Image */}
      <div className="h-40 bg-black">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-zinc-600">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</motion.div>

    </section>
  );
}