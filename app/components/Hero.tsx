"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function useCounter(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const steps = 60;
    const increment = target / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setValue(step >= steps ? target : increment * step);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  return value;
}

const heroVideos = [
  "/13437562_3840_2160_25fps.mp4",
  "/8731244-hd_1920_1080_25fps.mp4",
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [counting, setCounting] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const rating = useCounter(4.9, 1600, counting);
  const reviews = useCounter(19, 1800, counting);

  useEffect(() => {
    const timer = setTimeout(() => setCounting(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center" style={{ background: "var(--cream)" }}>

      {/* Linea verticale decorativa sinistra */}
      <div className="absolute left-16 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, var(--gold) 20%, var(--gold) 80%, transparent)" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pt-32 pb-16 grid lg:grid-cols-2 gap-16 items-center">

        {/* COLONNA SINISTRA — Testo */}
        <div>
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase mb-8 px-4 py-2 rounded-full"
            style={{ background: "rgba(184,149,90,0.1)", color: "var(--gold-dark)", border: "1px solid var(--border)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
            Avvocato · Bologna
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-garamond font-normal leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.8rem,5.5vw,5rem)", color: "var(--dark)" }}
          >
            Avv. Giacomo<br />
            <em className="italic" style={{ color: "var(--gold)" }}>Di Candia</em>
          </motion.h1>

          {/* Specializzazioni */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-garamond italic mb-5 text-[1.15rem]"
            style={{ color: "var(--stone)" }}
          >
            Diritto Civile · Diritto del Lavoro · Diritto Penale
          </motion.p>

          {/* Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-16 h-px mb-6 origin-left"
            style={{ background: "var(--gold)" }}
          />

          {/* Descrizione */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-[0.95rem] leading-[1.8] mb-8 max-w-md"
            style={{ color: "var(--stone-light)" }}
          >
            Ogni caso riceve attenzione personale e competenza diretta — dalla prima consulenza fino alla risoluzione definitiva. Operativo su Bologna, Milano, Lecce e Roma.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-3 flex-wrap mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(184,149,90,0.35)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.1em] uppercase px-7 py-3.5 cursor-pointer"
              style={{ background: "var(--dark)", color: "var(--cream)" }}
            >
              Prima Consulenza Gratuita
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </motion.a>
            <motion.a
              href="https://wa.me/39"
              target="_blank"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 text-[0.78rem] font-medium tracking-[0.1em] uppercase px-7 py-3.5 cursor-pointer border"
              style={{ borderColor: "var(--border)", color: "var(--dark)" }}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.003 0C5.374 0 .003 5.374.003 12.004c0 2.116.554 4.1 1.523 5.822L0 24l6.336-1.5A11.948 11.948 0 0012.003 24C18.63 24 24 18.627 24 12.004 24 5.374 18.63 0 12.003 0zm0 21.818a9.815 9.815 0 01-5.007-1.37l-.36-.214-3.757.888.914-3.658-.235-.376A9.82 9.82 0 012.185 12c0-5.418 4.4-9.818 9.818-9.818 5.421 0 9.82 4.4 9.82 9.82 0 5.418-4.4 9.816-9.82 9.816z"/></svg>
              WhatsApp
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex gap-8 pt-8 flex-wrap"
            style={{ borderTop: "1px solid var(--cream-3)" }}
          >
            {[
              { value: rating.toFixed(1), label: "Valutazione Google", icon: "★" },
              { value: Math.floor(reviews), label: "Recensioni Verificate", icon: "" },
              { value: "6", label: "Aree di Pratica", icon: "" },
              { value: "4", label: "Città Operative", icon: "" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-garamond text-[2rem] font-medium leading-none" style={{ color: s.label === "Valutazione Google" ? "#F59E0B" : "var(--gold)" }}>
                  {s.icon}{s.value}
                </div>
                <div className="text-[0.68rem] tracking-[0.12em] uppercase mt-1" style={{ color: "var(--stone)" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* COLONNA DESTRA — Video card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          {/* Card principale video */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
            <video
              ref={videoRef}
              key={videoIndex}
              autoPlay
              muted
              playsInline
              loop
              onEnded={() => setVideoIndex((i) => (i + 1) % heroVideos.length)}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={heroVideos[videoIndex]} type="video/mp4" />
            </video>
            {/* Overlay leggero */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,46,0.5) 0%, transparent 60%)" }} />

            {/* Badge in basso */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-md" style={{ background: "rgba(248,246,242,0.92)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: "var(--cream-3)" }}>⚖️</div>
                <div>
                  <div className="text-[0.75rem] font-semibold" style={{ color: "var(--dark)" }}>Avvocato</div>
                  <div className="text-[0.65rem]" style={{ color: "var(--stone)" }}>Bologna</div>
                </div>
              </div>
              <div className="flex items-center gap-1 px-3 py-2 rounded-xl backdrop-blur-md" style={{ background: "rgba(248,246,242,0.92)" }}>
                <span style={{ color: "#F59E0B" }}>★★★★★</span>
                <span className="text-[0.75rem] font-semibold ml-1" style={{ color: "var(--dark)" }}>4.9</span>
              </div>
            </div>
          </div>

          {/* Card flottante indirizzo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-8 top-1/3 px-4 py-3 rounded-xl shadow-xl backdrop-blur-sm"
            style={{ background: "rgba(248,246,242,0.95)", border: "1px solid var(--cream-3)" }}
          >
            <div className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--stone)" }}>Sede</div>
            <div className="text-[0.8rem] font-medium" style={{ color: "var(--dark)" }}>Via G. Marconi 41</div>
            <div className="text-[0.75rem]" style={{ color: "var(--stone)" }}>40122 Bologna</div>
          </motion.div>

          {/* Decorazione angolo */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10" style={{ background: "var(--cream-3)" }} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: "var(--stone)" }}>Scorri</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--stone)" }}>
            <path d="M4 6l4 4 4-4" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
