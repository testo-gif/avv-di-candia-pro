"use client";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const services = [
  {
    title: "Consulenza Legale",
    desc: "Analisi approfondita della situazione giuridica, orientamento strategico e valutazione dei rischi processuali.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-11 h-11 text-[var(--gold)]">
        <rect x="8" y="6" width="28" height="32" rx="1" />
        <line x1="14" y1="15" x2="30" y2="15" />
        <line x1="14" y1="22" x2="30" y2="22" />
        <line x1="14" y1="29" x2="22" y2="29" />
      </svg>
    ),
  },
  {
    title: "Diritto Civile",
    desc: "Tutela dei diritti in controversie tra privati: responsabilità civile, risarcimenti, famiglia e successioni.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-11 h-11 text-[var(--gold)]">
        <path d="M22 8l-12 8v4h24v-4z" />
        <rect x="12" y="20" width="4" height="12" />
        <rect x="20" y="20" width="4" height="12" />
        <rect x="28" y="20" width="4" height="12" />
        <line x1="8" y1="32" x2="36" y2="32" />
      </svg>
    ),
  },
  {
    title: "Diritto del Lavoro",
    desc: "Assistenza a lavoratori e imprenditori: licenziamenti, contratti, controversie sindacali e mobbing.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-11 h-11 text-[var(--gold)]">
        <rect x="10" y="18" width="24" height="18" rx="1" />
        <path d="M16 18v-4a6 6 0 0 1 12 0v4" />
        <circle cx="22" cy="27" r="2" />
        <line x1="22" y1="29" x2="22" y2="31" />
      </svg>
    ),
  },
  {
    title: "Diritto Penale",
    desc: "Difesa penale in ogni fase: indagini preliminari, udienza, dibattimento e impugnazioni.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-11 h-11 text-[var(--gold)]">
        <path d="M22 6L10 12v8c0 8 5.4 15.5 12 18 6.6-2.5 12-10 12-18v-8z" />
        <path d="M16 22l4 4 8-8" />
      </svg>
    ),
  },
  {
    title: "Recupero Crediti",
    desc: "Procedure giudiziali e stragiudiziali per crediti insoluti: decreti ingiuntivi, pignoramenti, accordi transattivi.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-11 h-11 text-[var(--gold)]">
        <circle cx="22" cy="22" r="14" />
        <path d="M22 14v2m0 12v2M18 20a4 4 0 0 1 8 0c0 2.2-2 3-4 4s-4 1.8-4 4a4 4 0 0 0 8 0" />
      </svg>
    ),
  },
  {
    title: "Contrattualistica",
    desc: "Redazione, revisione e negoziazione di contratti commerciali, accordi societari, NDA e clausole di salvaguardia.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-11 h-11 text-[var(--gold)]">
        <path d="M12 10h20v6H12zM12 22h12M12 29h8" />
        <circle cx="32" cy="32" r="8" />
        <path d="M29 32l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[var(--dark)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <AnimateIn>
            <div className="flex items-center justify-center gap-3 text-[0.72rem] tracking-[0.25em] uppercase text-[var(--gold)] mb-5">
              Aree di Pratica
              <span className="w-14 h-px bg-[var(--gold)] opacity-40" />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-garamond text-[clamp(2rem,4vw,3.2rem)] font-normal text-[var(--cream)] leading-[1.15]">
              Competenza specializzata<br />
              <em className="italic text-[var(--gold)]">in sei settori chiave</em>
            </h2>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {services.map((s, i) => (
            <AnimateIn key={s.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ backgroundColor: "var(--dark-2)", borderColor: "rgba(202,138,4,0.3)" }}
                className="relative p-10 bg-[var(--dark)] border border-transparent overflow-hidden group cursor-pointer h-full"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(202,138,4,0.06), transparent)" }}
                />
                <div className="mb-6">{s.icon}</div>
                <h3 className="font-garamond text-[1.4rem] font-medium text-[var(--cream)] mb-3">{s.title}</h3>
                <p className="text-[0.9rem] text-[var(--stone)] leading-[1.7]">{s.desc}</p>
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-6 right-6 text-[var(--gold)]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10h12M12 6l4 4-4 4" /></svg>
                </motion.div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
