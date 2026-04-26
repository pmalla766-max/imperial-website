import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    badge: "SEBON Registered · Stock Broker No. 45",
    badgeColor: "bg-[#4ADE80]/15 border-[#4ADE80]/30 text-[#4ADE80]",
    title: <>Nepal's Most <span className="text-[#4ADE80]">Trusted</span><br />Stock Broker</>,
    desc: "Trade smarter with real-time data, zero paperwork account opening, and expert portfolio guidance. Your financial growth starts here.",
    gradient: "from-[#03091A] via-[#0A1F4E] to-[#003A2E]",
  },
  {
    badge: "OPEN IN MINUTES",
    badgeColor: "bg-[#60A5FA]/15 border-[#60A5FA]/30 text-[#60A5FA]",
    title: <>Open Your <span className="text-[#93C5FD]">DEMAT</span><br />Account Today</>,
    desc: "Complete digital KYC, link your bank account, and start trading — all from your phone in under 10 minutes.",
    gradient: "from-[#0A0F1E] via-[#1A1040] to-[#0A2F1E]",
  },
  {
    badge: "IPO Season 2026 · Apply Online · Auto Allotment",
    badgeColor: "bg-[#FCD34D]/15 border-[#FCD34D]/30 text-[#FCD34D]",
    title: <>Never Miss<br /><span className="text-[#FCD34D]">Another</span> IPO</>,
    desc: "Apply directly from our platform with automatic DEMAT allotment and real-time status tracking.",
    gradient: "from-[#03091A] via-[#1E0A3A] to-[#0A1F2E]",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={`relative flex min-h-[420px] items-center bg-gradient-to-br ${slide.gradient} sm:min-h-[480px] md:min-h-[520px]`}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,.07) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute right-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-brand-blue/20 blur-[80px]" />

          <div className="relative z-[4] mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 py-14 text-center sm:px-6 sm:py-16 md:py-20">
            <span className={`mb-5 inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-1.5 text-[10.5px] font-bold tracking-wide backdrop-blur-sm sm:px-4 sm:text-[11.5px] ${slide.badgeColor}`}>
              <span className="h-[7px] w-[7px] shrink-0 animate-[blink_1.4s_infinite] rounded-full bg-current" />
              <span className="truncate">{slide.badge}</span>
            </span>
            <h1 className="mb-5 font-heading text-[clamp(28px,5.2vw,66px)] font-extrabold italic leading-[1.08] tracking-[-1px] text-white sm:tracking-[-1.5px]">
              {slide.title}
            </h1>
            <p className="mb-7 max-w-[560px] text-[14px] leading-[1.7] text-white/65 sm:text-base sm:leading-[1.78]">
              {slide.desc}
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
              <button className="inline-flex items-center justify-center gap-2 rounded-[11px] bg-gradient-to-br from-brand-green-dk to-[#22c55e] px-6 py-3 text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(34,197,94,.35)] transition-all hover:-translate-y-0.5 hover:brightness-110 sm:px-8 sm:py-3.5 sm:text-[15px]">
                ✦ Open Free Account
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-[11px] border-[1.5px] border-white/[.22] bg-white/[.09] px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-white/[.18] sm:px-7 sm:py-3.5 sm:text-[15px]">
                ▶ How It Works
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div
            key={`progress-${current}`}
            className="absolute bottom-0 left-0 z-[12] h-[3px] rounded-r bg-gradient-to-r from-[#4ADE80] to-[#60A5FA] animate-[progress-bar_5s_linear_infinite]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-[30px] bg-white" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Arrows — hidden on mobile */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-white/20 bg-white/10 text-2xl text-white backdrop-blur-sm transition-all hover:scale-[1.06] hover:bg-white/[.24] sm:flex sm:left-5 sm:h-[46px] sm:w-[46px]"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-white/20 bg-white/10 text-2xl text-white backdrop-blur-sm transition-all hover:scale-[1.06] hover:bg-white/[.24] sm:flex sm:right-5 sm:h-[46px] sm:w-[46px]"
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}
