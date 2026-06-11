export default function Footer() {
  return (
    <footer className="py-10 px-6" style={{ background: "var(--dark)", borderTop: "1px solid rgba(184,149,90,0.1)" }}>
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-6">
        <div className="font-garamond text-[1.1rem]" style={{ color: "var(--cream)" }}>
          Avv. <span style={{ color: "var(--gold)" }}>Di Candia</span> — Studio Legale
        </div>
        <ul className="flex gap-8 list-none flex-wrap">
          {["#about:Studio","#services:Servizi","#testimonials:Recensioni","#contact:Contatti"].map(item => {
            const [href, label] = item.split(":");
            return (
              <li key={href}>
                <a
                  href={href}
                  className="text-[0.78rem] transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--stone)" }}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="text-[0.75rem]" style={{ color: "var(--stone)" }}>© 2025 Avv. Giacomo Di Candia. Tutti i diritti riservati.</div>
      </div>
    </footer>
  );
}
