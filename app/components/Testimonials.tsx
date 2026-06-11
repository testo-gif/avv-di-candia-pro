"use client";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const reviews = [
  { text: "Professionalità impeccabile e disponibilità costante. L'Avv. Di Candia ha seguito il mio caso di licenziamento con precisione chirurgica, ottenendo un risultato che non speravo.", author: "Marco T.", role: "Diritto del Lavoro" },
  { text: "Finalmente un avvocato che spiega le cose in modo chiaro. Mi sono sentita sempre supportata. Risultato eccellente nel recupero crediti.", author: "Laura B.", role: "Recupero Crediti" },
  { text: "Ho affidato allo studio la revisione dei contratti della mia società. Lavoro meticoloso, tempi rispettati, clausole di tutela che non avevo mai considerato.", author: "Roberto C.", role: "Contrattualistica" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 bg-[var(--dark-2)] border-t border-b border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 mb-12">
          <AnimateIn>
            <div>
              <div className="flex items-center gap-3 text-[0.72rem] tracking-[0.25em] uppercase text-[var(--gold)] mb-5">
                Recensioni
                <span className="w-14 h-px bg-[var(--gold)] opacity-40" />
              </div>
              <h2 className="font-garamond text-[clamp(2rem,4vw,3.2rem)] font-normal text-[var(--cream)] leading-[1.15]">
                Cosa dicono<br /><em className="italic text-[var(--gold)]">i clienti</em>
              </h2>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1} direction="right">
            <div className="text-right">
              <div className="flex gap-1 justify-end mb-2">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[var(--gold)]" viewBox="0 0 16 16"><path d="M8 1l1.85 3.75 4.15.6-3 2.92.7 4.1L8 10.25l-3.7 1.95.7-4.1-3-2.92 4.15-.6z" fill="currentColor" /></svg>
                ))}
              </div>
              <div className="font-garamond text-[2rem] text-[var(--cream)]">4.9 <span className="text-[1rem] text-[var(--stone)]">/ 5</span></div>
              <div className="text-[0.78rem] text-[var(--stone)]">19 recensioni Google verificate</div>
            </div>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <AnimateIn key={r.author} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(202,138,4,0.45)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/[0.03] border border-[rgba(202,138,4,0.2)] p-8 h-full"
              >
                <div className="font-garamond text-[3rem] text-[var(--gold)] leading-none opacity-40 mb-4">"</div>
                <p className="text-[0.93rem] text-[var(--stone-light)] leading-[1.75] italic mb-6">{r.text}</p>
                <div className="text-[0.82rem] font-bold text-[var(--cream)]">{r.author}</div>
                <div className="text-[0.75rem] text-[var(--stone)] mt-1">{r.role}</div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
