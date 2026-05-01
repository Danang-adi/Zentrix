import { useRef, useState, MouseEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { animate } from "framer-motion";

import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.png";
import img4 from "../assets/blog4.png";

const initialBlogs = [
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
  }
];

export default function Blog() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [displayBlogs, setDisplayBlogs] = useState(initialBlogs);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mencegah konflik drag jika animasi tombol panah sedang berjalan
  const isAnimatingRef = useRef(false);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // --- LOGIKA UTAMA: FREE SCROLL & DETEKSI TENGAH ---
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    // Infinite Scroll (Gandakan array saat mendekati ujung)
    if (scrollLeft + clientWidth >= scrollWidth - 800) {
      setDisplayBlogs((prev) => [...prev, ...initialBlogs]);
    }

    // Deteksi Kartu Mana yang Ada di Tengah secara Real-time
    const containerCenter = scrollLeft + clientWidth / 2;
    const cards = scrollRef.current.querySelectorAll('.blog-card');
    
    let closestIndex = activeIndex;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      // Ambil titik tengah dari masing-masing card
      const cardCenter = cardElement.offsetLeft + cardElement.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    // Update kartu yang aktif (menyala) tanpa memaksa scroll
    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  // --- LOGIKA ANIMASI SNAP KHUSUS TOMBOL PANAH ---
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('.blog-card');
    if (!cards[index]) return;

    const container = scrollRef.current;
    const card = cards[index] as HTMLElement;

    // Kalkulasi jarak agar card ini berada persis di tengah
    const targetScroll = card.offsetLeft - (container.clientWidth / 2) + (card.offsetWidth / 2);

    isAnimatingRef.current = true; 

    animate(container.scrollLeft, targetScroll, {
      type: "spring",
      stiffness: 70, 
      damping: 20,
      mass: 1,
      onUpdate: (latest) => {
        if (scrollRef.current) scrollRef.current.scrollLeft = latest;
      },
      onComplete: () => {
        isAnimatingRef.current = false; 
      }
    });
  };

  const scroll = (direction: "left" | "right") => {
    const newIndex = direction === "left" ? Math.max(0, activeIndex - 1) : activeIndex + 1;
    scrollToIndex(newIndex);
  };

  // --- LOGIKA MOUSE DRAG NATIVE (FREE DRAG) ---
  const handleMouseDown = (e: MouseEvent) => {
    if (isAnimatingRef.current) return; 
    setIsDragging(true);
    if (!scrollRef.current) return;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    // Auto-snap dihapus dari sini
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Auto-snap dihapus dari sini
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <section className="shadow-lg hover:shadow-blue-500/30 transition bg-blue-700 py-20 px-6 text-white relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Real Finance. Real Participation</h2>
        <div className="flex gap-3">
          <button 
            onClick={() => scroll("left")} 
            className="bg-white text-black p-3 rounded-lg hover:bg-gray-200 transition"
          >
            <ArrowLeft size={18} />
          </button>
          <button 
            onClick={() => scroll("right")} 
            className="bg-white text-black p-3 rounded-lg hover:bg-gray-200 transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef} 
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`overflow-x-auto overflow-y-hidden no-scrollbar ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 w-max items-stretch pb-10 pt-4 px-[calc(50vw-200px)] md:px-[calc(50vw-250px)]">
          
          {displayBlogs.map((item, index) => (
            <div
              key={`blog-${index}`}
              className={`blog-card w-[400px] md:w-[500px] shrink-0 flex flex-col bg-white text-black rounded-2xl overflow-hidden transition-all duration-500 select-none
                ${activeIndex === index ? "opacity-100 shadow-2xl" : "opacity-40 shadow-md"}
              `}
            >
              <div className="h-64 bg-black shrink-0 pointer-events-none">
                <img
                  src={item.image}
                  alt={item.title}
                  draggable="false" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-base text-zinc-600 leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}