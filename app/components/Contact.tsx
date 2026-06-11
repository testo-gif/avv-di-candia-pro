"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* CTA Banner — sfondo scuro per contrasto */}
      <section className="py-20 px-6" style={{ background: "var(--dark)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-garamond text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] mb-4" style={{ color: "var(--cream)" }}>
              Prima consulenza gratuita,<br /><em className="italic" style={{ color: "var(--gold)" }}>senza impegno</em>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mb-10 text-[0.95rem]" style={{ color: "rgba(248,246,242,0.6)" }}>Descrivi il tuo caso e ricevi una valutazione professionale entro 24 ore. In presenza o online.</p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <motion.a
              href="#contact"
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(184,149,90,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 text-[0.8rem] font-bold tracking-[0.12em] uppercase px-8 py-4 cursor-pointer"
              style={{ background: "var(--gold)", color: "var(--dark)" }}
            >
              Prenota Ora
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </motion.a>
          </AnimateIn>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-28 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Info */}
          <div>
            <AnimateIn>
              <div className="flex items-center gap-3 text-[0.72rem] tracking-[0.25em] uppercase mb-5" style={{ color: "var(--gold-dark)" }}>
                Contatti
                <span className="w-14 h-px" style={{ background: "var(--gold)", opacity: 0.5 }} />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="font-garamond text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.15] mb-4" style={{ color: "var(--dark)" }}>
                Parliamo del<br /><em className="italic" style={{ color: "var(--gold)" }}>tuo caso</em>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-[0.93rem] leading-[1.8] mb-10" style={{ color: "var(--stone)" }}>Prima consulenza gratuita, risposta entro 24 ore. Disponibile in presenza e online.</p>
            </AnimateIn>

            {[
              {
                label: "Sede",
                value: "Via G. Marconi 41, 40122 Bologna",
                icon: <svg className="w-5 h-5" style={{ color: "var(--gold)" }} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 2C6.69 2 4 4.69 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.31-2.69-6-6-6z" /><circle cx="10" cy="8" r="2" /></svg>,
              },
              {
                label: "WhatsApp",
                value: "+39 389 512 4085",
                icon: <svg className="w-5 h-5" style={{ color: "var(--gold)" }} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5h14v10H3z" /><path d="M3 5l7 7 7-7" /></svg>,
              },
              {
                label: "Modalità",
                value: "In presenza · Videocall",
                icon: <svg className="w-5 h-5" style={{ color: "var(--gold)" }} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="10" cy="10" r="8" /><path d="M10 6v4l3 3" /></svg>,
              },
            ].map((item, i) => (
              <AnimateIn key={item.label} delay={0.3 + i * 0.1}>
                <div className="flex gap-4 items-start mb-6">
                  <div className="w-11 h-11 flex items-center justify-center flex-shrink-0" style={{ border: "1px solid var(--border)", background: "var(--cream-2)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[0.72rem] tracking-[0.15em] uppercase mb-1" style={{ color: "var(--stone)" }}>{item.label}</div>
                    <div className="font-garamond text-[1.1rem]" style={{ color: "var(--dark)" }}>{item.value}</div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Form */}
          <AnimateIn delay={0.2} direction="right">
            <div className="flex flex-col gap-5 p-8" style={{ background: "var(--cream-2)", border: "1px solid var(--border)" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.72rem] tracking-[0.1em] uppercase" style={{ color: "var(--stone)" }} htmlFor="name">Nome e Cognome</label>
                  <input id="name" type="text" placeholder="Mario Rossi"
                    className="px-4 py-3.5 text-[0.9rem] outline-none transition-all duration-200 font-sans"
                    style={{ background: "var(--cream)", border: "1px solid var(--cream-3)", color: "var(--dark)" }}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "var(--cream-3)"; }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.72rem] tracking-[0.1em] uppercase" style={{ color: "var(--stone)" }} htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="mario@email.com"
                    className="px-4 py-3.5 text-[0.9rem] outline-none transition-all duration-200 font-sans"
                    style={{ background: "var(--cream)", border: "1px solid var(--cream-3)", color: "var(--dark)" }}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "var(--cream-3)"; }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] tracking-[0.1em] uppercase" style={{ color: "var(--stone)" }} htmlFor="area">Area Legale</label>
                <select id="area"
                  className="px-4 py-3.5 text-[0.9rem] outline-none transition-all duration-200 font-sans appearance-none cursor-pointer"
                  style={{ background: "var(--cream)", border: "1px solid var(--cream-3)", color: "var(--dark)" }}>
                  <option value="">Seleziona un'area</option>
                  {["Consulenza Legale","Diritto Civile","Diritto del Lavoro","Diritto Penale","Recupero Crediti","Contrattualistica","Altro"].map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] tracking-[0.1em] uppercase" style={{ color: "var(--stone)" }} htmlFor="message">Descrivi brevemente il tuo caso</label>
                <textarea id="message" rows={4} placeholder="Esponi la situazione in modo sintetico..."
                  className="px-4 py-3.5 text-[0.9rem] outline-none transition-all duration-200 resize-y font-sans"
                  style={{ background: "var(--cream)", border: "1px solid var(--cream-3)", color: "var(--dark)" }}
                  onFocus={e => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "var(--cream-3)"; }}
                />
              </div>
              <p className="text-[0.78rem]" style={{ color: "var(--stone)" }}>I dati forniti sono trattati nel rispetto del GDPR e utilizzati esclusivamente per rispondere alla richiesta.</p>
              <motion.button
                onClick={() => setSent(true)}
                whileHover={!sent ? { y: -2, boxShadow: "0 10px 32px rgba(184,149,90,0.3)" } : {}}
                whileTap={!sent ? { scale: 0.97 } : {}}
                className="flex items-center justify-center gap-2 text-[0.8rem] font-bold tracking-[0.12em] uppercase px-8 py-4 cursor-pointer border-none w-full transition-colors duration-300"
                style={{ background: sent ? "#16a34a" : "var(--dark)", color: "var(--cream)" }}
              >
                {sent ? "Richiesta Inviata ✓" : (
                  <>
                    Invia Richiesta di Consulenza
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </>
                )}
              </motion.button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
