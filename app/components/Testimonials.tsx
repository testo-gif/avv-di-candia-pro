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
    <section id="testimonials" className="py-28 px-6" style={{ background: "var(--cream-2)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 mb-12">
          <AnimateIn>
            <div>
              <div className="flex items-center gap-3 text-[0.72rem] tracking-[0.25em] uppercase mb-5" style={{ color: "var(--gold-dark)" }}>
                Recensioni
                <span className="w-14 h-px" style={{ background: "var(--gold)", opacity: 0.5 }} />
              </div>
              <h2 className="font-garamond text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15]" style={{ color: "var(--dark)" }}>
                Cosa dicono<br /><em className="italic" style={{ color: "var(--gold)" }}>i clienti</em>
              </h2>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1} direction="right">
            <div className="text-right">
              <div className="flex gap-1 justify-end mb-2">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="w-4 h-4" style={{ color: "#F59E0B" }} viewBox="0 0 16 16"><path d="M8 1l1.85 3.75 4.15.6-3 2.92.7 4.1L8 10.25l-3.7 1.95.7-4.1-3-2.92 4.15-.6z" fill="currentColor" /></svg>
                ))}
              </div>
              <div className="font-garamond text-[2rem]" style={{ color: "var(--dark)" }}>4.9 <span className="text-[1rem]" style={{ color: "var(--stone)" }}>/ 5</span></div>
              <div className="text-[0.78rem]" style={{ color: "var(--stone)" }}>19 recensioni Google verificate</div>
            </div>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <AnimateIn key={r.author} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(184,149,90,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-8 h-full"
                style={{ background: "var(--cream)", border: "1px solid var(--border)" }}
              >
                <div className="font-garamond text-[3rem] leading-none opacity-30 mb-4" style={{ color: "var(--gold)" }}>"</div>
                <p className="text-[0.93rem] leading-[1.75] italic mb-6" style={{ color: "var(--stone-light)" }}>{r.text}</p>
                <div className="text-[0.82rem] font-semibold" style={{ color: "var(--dark)" }}>{r.author}</div>
                <div className="text-[0.75rem] mt-1" style={{ color: "var(--stone)" }}>{r.role}</div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
