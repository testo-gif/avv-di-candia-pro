export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-6">
        <div className="font-garamond text-[1.1rem] text-[var(--cream)]">
          Avv. <span className="text-[var(--gold)]">Di Candia</span> — Studio Legale
        </div>
        <ul className="flex gap-8 list-none flex-wrap">
          {["#about:Studio","#services:Servizi","#testimonials:Recensioni","#contact:Contatti"].map(item => {
            const [href, label] = item.split(":");
            return (
              <li key={href}>
                <a href={href} className="text-[0.8rem] text-[var(--stone)] hover:text-[var(--gold)] transition-colors duration-200">
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="text-[0.78rem] text-[var(--stone)]">© 2025 Avv. Giacomo Di Candia. Tutti i diritti riservati.</div>
      </div>
    </footer>
  );
}
