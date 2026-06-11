"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateIn from "./AnimateIn";

const bannerVideos = [
  "/8731245-hd_1920_1080_25fps.mp4",
  "/8731557-hd_1080_1920_25fps.mp4",
];

export default function VideoBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height: "60vh", minHeight: 400 }}>
      {/* Video parallax */}
      <motion.video
        style={{ y }}
        autoPlay muted playsInline loop
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src={bannerVideos[0]} type="video/mp4" />
      </motion.video>

      {/* Overlay scuro per leggibilità */}
      <div className="absolute inset-0" style={{ background: "rgba(26,26,46,0.72)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26,26,46,0.5), transparent)" }} />

      {/* Contenuto */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          <AnimateIn>
            <div
              className="text-[0.68rem] tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--gold-light)" }}
            >
              Il nostro impegno
            </div>
            <h2
              className="font-garamond font-normal leading-[1.1] mb-6 max-w-2xl"
              style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "var(--cream)" }}
            >
              Ogni caso merita <em className="italic" style={{ color: "var(--gold-light)" }}>la massima dedizione</em>
            </h2>
            <p className="text-[0.95rem] leading-[1.75] max-w-lg mb-8" style={{ color: "rgba(248,246,242,0.7)" }}>
              Un approccio rigoroso, una comunicazione trasparente e una strategia costruita intorno alle esigenze specifiche del cliente.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(184,149,90,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.1em] uppercase px-7 py-3.5 cursor-pointer"
              style={{ background: "var(--gold)", color: "var(--dark)" }}
            >
              Richiedi una consulenza
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </motion.a>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
