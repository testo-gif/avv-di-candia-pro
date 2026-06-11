"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "Lo Studio" },
    { href: "#services", label: "Servizi" },
    { href: "#testimonials", label: "Recensioni" },
    { href: "#faq", label: "FAQ" },
    { href: "#team", label: "Team" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-7 py-4 border border-[rgba(202,138,4,0.2)]"
        style={{
          width: "calc(100% - 3rem)",
          maxWidth: 1200,
          background: scrolled ? "rgba(248,246,242,0.98)" : "rgba(248,246,242,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          transition: "background 0.3s, box-shadow 0.3s",
          boxShadow: scrolled ? "0 4px 30px rgba(26,26,46,0.08)" : "none",
          border: "1px solid rgba(184,149,90,0.15)",
        }}
      >
        <a href="#" className="font-garamond text-[1.1rem] tracking-wide" style={{ color: "var(--dark)" }}>
          Avv. <span style={{ color: "var(--gold)" }}>Di Candia</span>
        </a>

        <ul className="hidden md:flex gap-10 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.75rem] tracking-[0.12em] uppercase transition-colors duration-200 hover:opacity-100"
                style={{ color: "var(--stone-light)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--stone-light)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block text-[0.75rem] font-semibold tracking-[0.1em] uppercase px-5 py-2.5 cursor-pointer transition-all duration-200 hover:-translate-y-px"
          style={{ background: "var(--dark)", color: "var(--cream)" }}
        >
          Consulenza Gratuita
        </a>

        <button
          className="md:hidden text-[var(--cream)] cursor-pointer bg-transparent border-none"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="6" x2="19" y2="6" />
            <line x1="3" y1="11" x2="19" y2="11" />
            <line x1="3" y1="16" x2="19" y2="16" />
          </svg>
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 left-6 right-6 z-40 p-6 flex flex-col gap-4 shadow-xl"
          style={{ background: "var(--cream)", border: "1px solid var(--border)" }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[0.9rem] tracking-[0.1em] uppercase text-[var(--stone-light)] hover:text-[var(--gold)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center text-[0.82rem] font-bold tracking-[0.1em] uppercase bg-[var(--gold)] text-[var(--dark)] px-5 py-3 cursor-pointer"
            >
              Consulenza Gratuita
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
