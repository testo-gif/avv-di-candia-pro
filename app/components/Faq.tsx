"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const faqs = [
  { q: "La prima consulenza è davvero gratuita?", a: "Sì, la prima consulenza è completamente gratuita e senza alcun impegno. È un'opportunità per conoscere lo studio, esporre il proprio caso e ricevere un orientamento iniziale sulla strada da percorrere." },
  { q: "È possibile consultarsi da remoto?", a: "Assolutamente sì. Lo studio offre consultazioni via videocall per i clienti che non possono essere presenti fisicamente. La qualità del servizio e la riservatezza sono garantite esattamente come in presenza." },
  { q: "In quali città opera lo studio?", a: "Lo studio opera principalmente a Bologna (sede principale in Via G. Marconi 41), con presenza attiva a Milano, Lecce e Roma per seguire al meglio i clienti su tutto il territorio nazionale." },
  { q: "Come vengono calcolati gli onorari?", a: "Gli onorari vengono concordati in modo trasparente prima dell'incarico, sulla base della complessità del caso, dei tempi stimati e del valore della controversia. Massima chiarezza sui costi preventivi." },
  { q: "Quanto tempo richiede una causa civile?", a: "I tempi variano in base alla sede giudiziaria e alla complessità del caso. Lo studio valuta sempre la possibilità di risoluzioni stragiudiziali più rapide prima di procedere in giudizio." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 px-6 bg-[var(--dark)]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-start">

        <div className="lg:sticky lg:top-32">
          <AnimateIn>
            <div className="flex items-center gap-3 text-[0.72rem] tracking-[0.25em] uppercase text-[var(--gold)] mb-5">
              FAQ
              <span className="w-14 h-px bg-[var(--gold)] opacity-40" />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-garamond text-[clamp(2rem,4vw,3.2rem)] font-normal text-[var(--cream)] leading-[1.15] mb-4">
              Domande<br /><em className="italic text-[var(--gold)]">frequenti</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-[0.93rem] text-[var(--stone)] leading-[1.8] mb-8">Hai altri dubbi? La prima consulenza è gratuita e senza impegno.</p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <motion.a
              href="#contact"
              whileHover={{ y: -2, boxShadow: "0 8px 28px rgba(202,138,4,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--dark)] text-[0.8rem] font-bold tracking-[0.12em] uppercase px-7 py-4 cursor-pointer"
            >
              Contattaci
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </motion.a>
          </AnimateIn>
        </div>

        <div className="lg:col-span-2">
          {faqs.map((f, i) => (
            <AnimateIn key={f.q} delay={i * 0.07}>
              <div className="border-t border-white/[0.06] last:border-b last:border-white/[0.06]">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left font-garamond text-[1.15rem] text-[var(--cream)] hover:text-[var(--gold)] transition-colors duration-200 gap-4 cursor-pointer bg-transparent border-none"
                >
                  {f.q}
                  <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <svg className="w-[18px] h-[18px] text-[var(--gold)] flex-shrink-0" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6l5 5 5-5" /></svg>
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[0.93rem] text-[var(--stone-light)] leading-[1.8]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
