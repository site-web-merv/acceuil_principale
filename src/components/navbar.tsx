import { Link } from "@tanstack/react-router";
import { Phone, CalendarDays, PlusCircle } from "lucide-react";

const Logo = ({ light }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2">
    <div className={`grid h-10 w-10 place-items-center rounded-full border-2 ${light ? "border-navy-foreground" : "border-brand-green"}`}>
      <PlusCircle className={`h-6 w-6 ${light ? "text-navy-foreground" : "text-brand-green"}`} />
    </div>
    <div className="leading-tight">
      <div className={`text-lg font-extrabold ${light ? "text-navy-foreground" : "text-navy"}`}>SOLUMED</div>
      <div className={`text-xs ${light ? "text-navy-foreground/80" : "text-navy"}`}>Polyclinique Solumed</div>
      <div className={`text-[9px] ${light ? "text-navy-foreground/60" : "text-muted-foreground"}`}>Soins pour une vie meilleure</div>
    </div>
  </Link>
);

const links = [
  { label: "Accueil", to: "/" },
  { label: "Nos spécialités", to: "/specialites" },
  { label: "Nos services", to: "/services" },
  { label: "À propos", to: "/a-propos" },
  { label: "Actualités", to: "/actualites" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Logo />

        <nav className="hidden items-center gap-7 text-sm font-medium text-navy lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="pb-1 hover:text-brand-green"
              activeProps={{ className: "border-b-2 border-brand-green text-brand-green" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-2 md:flex">
            <Phone className="h-4 w-4 text-navy" />
            <div className="leading-tight">
              <div className="text-sm font-bold text-navy">+237 652 467 154</div>
              <div className="text-[10px] text-muted-foreground">Lun - Dim 24h/24</div>
            </div>
          </div>
          <a href="/#rdv" className="flex items-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground">
            <CalendarDays className="h-4 w-4" />
            Prendre RDV
          </a>
        </div>
      </div>
    </header>
  );
}