"use client";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const credentials = [
  "Iscritto all'Ordine degli Avvocati di Bologna",
  "Prima consulenza gratuita e senza impegno",
  "Consultazioni in presenza e online via videocall",
  "Rating 4.9/5 su 19 recensioni Google verificate",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[var(--dark-2)] border-t border-b border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Image */}
        <AnimateIn direction="left">
          <div className="relative">
            <div
              className="w-full border border-[rgba(202,138,4,0.2)] flex items-center justify-center overflow-hidden relative"
              style={{ aspectRatio: "3/4", background: "var(--dark-3)" }}
            >
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(202,138,4,0.1), transparent 70%)" }} />
              <svg className="w-20 h-20 opacity-[0.12] text-[var(--stone-light)]" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="40" cy="28" r="16" />
                <path d="M10 68c0-16.57 13.43-30 30-30s30 13.43 30 30" />
              </svg>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-0 lg:-right-6 bg-[var(--gold)] text-[var(--dark)] p-5 text-center"
            >
              <span className="font-garamond text-xl font-semibold block leading-none">Iscritto</span>
              <span className="text-[0.6rem] tracking-[0.08em] uppercase font-bold mt-1 block">Ordine Avvocati<br />Bologna</span>
            </motion.div>
          </div>
        </AnimateIn>

        {/* Text */}
        <div>
          <AnimateIn>
            <div className="flex items-center gap-3 text-[0.72rem] tracking-[0.25em] uppercase text-[var(--gold)] mb-5">
              Lo Studio
              <span className="w-14 h-px bg-[var(--gold)] opacity-40" />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-garamond text-[clamp(2rem,4vw,3.2rem)] font-normal text-[var(--cream)] leading-[1.15] mb-6">
              Competenza diretta,<br />
              <em className="italic text-[var(--gold)]">ogni caso personale</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-[var(--stone-light)] leading-[1.8] mb-5">
              Lo studio legale di Giacomo Di Candia si distingue per un approccio radicalmente personalizzato: ogni cliente riceve attenzione diretta dell'avvocato titolare, senza deleghe a collaboratori per le fasi strategiche del caso.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="text-[var(--stone-light)] leading-[1.8] mb-8">
              Operativo su Bologna, Milano, Lecce e Roma, lo studio affianca professionisti, aziende e privati nelle sfide legali più complesse, con una track record di risultati documentati.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="flex flex-col gap-3">
              {credentials.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-[0.88rem] text-[var(--stone-light)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] flex-shrink-0" />
                  {c}
                </motion.div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
