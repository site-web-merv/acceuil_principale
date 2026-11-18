import { Link } from "@tanstack/react-router";
import { Phone, CalendarDays, PlusCircle, Home, Stethoscope, HeartPulse, Info, Mail } from "lucide-react";

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

const mobileLinks = [
  { label: "Accueil", to: "/", icon: Home },
  { label: "Spécialités", to: "/specialites", icon: Stethoscope },
  { label: "Services", to: "/services", icon: HeartPulse },
  { label: "À propos", to: "/a-propos", icon: Info },
  { label: "Contact", to: "/contact", icon: Mail },
] as const;

function MobileTabBar() {
  return (
    <nav aria-label="Menu principal" className="fixed inset-x-3 bottom-3 z-40 lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="flex items-center gap-1 rounded-full bg-navy p-1.5 shadow-2xl">
        {mobileLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            aria-label={l.label}
            activeOptions={{ exact: l.to === "/" }}
            className="group flex h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-full text-navy-foreground transition-all duration-300 data-[status=active]:flex-[2.2] data-[status=active]:bg-background data-[status=active]:text-navy"
          >
            <l.icon className="h-5 w-5 shrink-0" />
            <span className="hidden truncate text-sm font-semibold group-data-[status=active]:inline">{l.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function Navbar() {
  return (
    <>
    <MobileTabBar />
    <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
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
          <a href="/#rdv" className="flex items-center gap-2 rounded-lg bg-navy px-3 py-2.5 sm:px-5 sm:py-3 text-sm font-semibold text-navy-foreground">
            <CalendarDays className="h-4 w-4" />
            Prendre RDV
          </a>
        </div>
      </div>
    </header>
    </>
  );
}