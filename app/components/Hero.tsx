"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useCounter(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const steps = 60;
    const increment = target / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const current = increment * step;
      setValue(step >= steps ? target : current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  return value;
}

const videos = [
  "/13437562_3840_2160_25fps.mp4",
  "/11467386-uhd_4096_2160_25fps.mp4",
  "/8731244-hd_1920_1080_25fps.mp4",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [counting, setCounting] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const rating = useCounter(4.9, 1600, counting);
  const reviews = useCounter(19, 1800, counting);

  useEffect(() => {
    const timer = setTimeout(() => setCounting(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setVideoIndex((i) => (i + 1) % videos.length);
  };

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32 pb-16">

      {/* VIDEO BACKGROUND */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <video
          ref={videoRef}
          key={videoIndex}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videos[videoIndex]} type="video/mp4" />
        </video>
        {/* Overlay gradiente scuro */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(5,10,24,0.75) 0%, rgba(5,10,24,0.6) 50%, rgba(5,10,24,0.9) 100%)"
        }} />
        {/* Overlay blu */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.15) 0%, transparent 70%)"
        }} />
      </motion.div>

      {/* Linea verticale centrale */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 pointer-events-none" style={{
        background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.2) 30%, rgba(59,130,246,0.2) 70%, transparent)"
      }} />

      <motion.div style={{ opacity }} className="relative z-10 max-w-4xl text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="inline-flex items-center gap-3 text-[0.72rem] tracking-[0.25em] uppercase mb-8"
          style={{ color: "var(--gold)" }}
        >
          <span className="w-10 h-px opacity-50" style={{ background: "var(--gold)" }} />
          Studio Legale
          <span className="w-10 h-px opacity-50" style={{ background: "var(--gold)" }} />
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-garamond font-normal leading-[1.08] mb-3"
          style={{ fontSize: "clamp(2.8rem,7vw,6rem)", color: "var(--cream)" }}
        >
          Avv. Giacomo<br />
          <em className="italic" style={{ color: "var(--gold)" }}>Di Candia</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="font-garamond italic mb-6"
          style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: "var(--stone-light)" }}
        >
          Diritto Civile · Diritto del Lavoro · Diritto Penale
        </motion.p>

        {/* Desc */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-[560px] mx-auto leading-[1.75] mb-10"
          style={{ color: "var(--stone-light)" }}
        >
          Ogni caso riceve attenzione personale e competenza diretta, dalla prima consulenza fino alla risoluzione definitiva. Operativo su Bologna, Milano, Lecce e Roma.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -3, boxShadow: "0 12px 36px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.12em] uppercase px-8 py-4 cursor-pointer"
            style={{ background: "var(--gold)", color: "white" }}
          >
            Prima Consulenza Gratuita
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 border text-[0.8rem] tracking-[0.12em] uppercase px-8 py-4 cursor-pointer transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--cream)" }}
          >
            Scopri lo Studio
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex gap-10 sm:gap-16 justify-center mt-16 pt-10 flex-wrap"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {[
            { value: rating.toFixed(1), label: "Valutazione Google" },
            { value: Math.floor(reviews), label: "Recensioni Verificate" },
            { value: "6", label: "Aree di Pratica" },
            { value: "4", label: "Città Operative" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <span className="font-garamond text-[2.5rem] font-medium leading-none block" style={{ color: "var(--gold)" }}>{s.value}</span>
              <span className="text-[0.72rem] tracking-[0.15em] uppercase mt-1 block" style={{ color: "var(--stone)" }}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] tracking-[0.2em] uppercase" style={{ color: "var(--stone)" }}>Scorri</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--stone)" }}>
            <path d="M4 6l4 4 4-4" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
