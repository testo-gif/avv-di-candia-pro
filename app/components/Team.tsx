"use client";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const team = [
  { name: "Avv. Giacomo Di Candia", title: "Titolare", desc: "Avvocato iscritto all'Ordine di Bologna. Segue personalmente ogni cliente dalla prima consulenza fino alla risoluzione definitiva del caso." },
  { name: "Dott.ssa Giulia Marchetti", title: "Collaboratore", desc: "Specializzata in contrattualistica commerciale e recupero crediti. Supporta i clienti aziendali nella gestione dei rapporti contrattuali." },
  { name: "Dott. Andrea Russo", title: "Praticante", desc: "Praticante avvocato con focus su diritto civile. Supporta lo studio nella ricerca giurisprudenziale e nella gestione documentale." },
];

const PersonIcon = () => (
  <svg className="w-12 h-12" style={{ opacity: 0.15, color: "var(--stone)" }} viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="25" cy="18" r="10" />
    <path d="M6 44c0-10.5 8.5-19 19-19s19 8.5 19 19" />
  </svg>
);

export default function Team() {
  return (
    <section id="team" className="py-28 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-lg mx-auto mb-16">
          <AnimateIn>
            <div className="flex items-center justify-center gap-3 text-[0.72rem] tracking-[0.25em] uppercase mb-5" style={{ color: "var(--gold-dark)" }}>
              Il Team
              <span className="w-14 h-px" style={{ background: "var(--gold)", opacity: 0.5 }} />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-garamond text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15]" style={{ color: "var(--dark)" }}>
              Professionisti al<br /><em className="italic" style={{ color: "var(--gold)" }}>tuo fianco</em>
            </h2>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <AnimateIn key={m.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(184,149,90,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="overflow-hidden h-full"
                style={{ background: "var(--cream-2)", border: "1px solid var(--border)" }}
              >
                <div className="w-full flex items-center justify-center" style={{ aspectRatio: "4/3", background: "var(--cream-3)" }}>
                  <PersonIcon />
                </div>
                <div className="p-6">
                  <div className="text-[0.72rem] tracking-[0.1em] uppercase mb-2" style={{ color: "var(--gold-dark)" }}>{m.title}</div>
                  <div className="font-garamond text-[1.3rem] font-medium mb-3" style={{ color: "var(--dark)" }}>{m.name}</div>
                  <p className="text-[0.85rem] leading-[1.6]" style={{ color: "var(--stone)" }}>{m.desc}</p>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
