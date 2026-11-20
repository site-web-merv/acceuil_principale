import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Phone, CalendarDays, PlusCircle, Home, Stethoscope, Newspaper, Info, Mail, Monitor, ChevronDown } from "lucide-react";
import { equipmentCategories } from "@/lib/equipments";
import { Button } from "@/components/ui/button";

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

export const desktopLinks = [
  { label: "Accueil", to: "/" },
  { label: "Nos spécialités", to: "/specialites" },
  { label: "Nos services", to: "/services" },
  { label: "Nos équipements", to: "/nos-equipements" },
  { label: "À propos", to: "/a-propos" },
  { label: "Actualités", to: "/actualites" },
  { label: "Contact", to: "/contact" },
] as const;

const mobileLinks = [
  { label: "Accueil", to: "/", icon: Home },
  { label: "Spécialités", to: "/specialites", icon: Stethoscope },
  { label: "Équipements", to: "/nos-equipements", icon: Monitor },
  { label: "Actualités", to: "/actualites", icon: Newspaper },
  { label: "À propos", to: "/a-propos", icon: Info },
  { label: "Contact", to: "/contact", icon: Mail },
] as const;

function MobileTabBar() {
  return (
    <nav aria-label="Menu principal" className="mobile-menu fixed inset-x-3 bottom-3 z-40 lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="flex items-center gap-1 rounded-full bg-navy p-1.5 shadow-2xl">
        {mobileLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            aria-label={l.label}
            activeOptions={{ exact: l.to === "/" }}
            className="group flex h-12 min-w-0 flex-1 items-center justify-center gap-1 rounded-full text-navy-foreground data-[status=active]:flex-[3.2] data-[status=active]:bg-background data-[status=active]:text-navy"
          >
            <l.icon className="h-5 w-5 shrink-0" />
            <span className="hidden truncate text-xs font-semibold group-data-[status=active]:inline sm:text-sm">{l.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <>
    <MobileTabBar />
    <header className="site-header sticky top-0 z-30">
      <div className="site-header-row mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Logo />

        <nav aria-label="Menu principal" className="hidden items-center gap-4 text-sm font-medium text-navy lg:flex xl:gap-5">
          {desktopLinks.map((l) => l.to === "/nos-equipements" ? (
            <div key={l.to} className="relative flex items-center" onMouseEnter={() => setOpen(true)} onMouseLeave={() => { if (!document.activeElement?.closest("[data-equipment-submenu]")) setOpen(false); }}
              onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
              onKeyDown={(event) => { if (event.key === "Escape" && open) { event.stopPropagation(); toggle.current?.focus(); setOpen(false); } }}>
              <Link to={l.to} search={{}} activeOptions={{ includeSearch: false }} className="nav-underline whitespace-nowrap py-2">{l.label}</Link>
              <Button ref={toggle} type="button" variant="ghost" size="icon" className="size-7" aria-label="Catégories d’équipements" aria-expanded={open} aria-controls="equipment-submenu" onClick={() => setOpen((value) => !value)}><ChevronDown /></Button>
              {open && <div id="equipment-submenu" data-equipment-submenu className="nav-flyout absolute left-0 top-full min-w-48 pt-2">
                <ul className="rounded-lg border bg-popover p-1 text-popover-foreground shadow-lg">
                  {equipmentCategories.map(({ id, label, icon: Icon }) => <li key={id}><Link to="/nos-equipements" search={{ categorie: id }} onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-md px-3 py-2.5 hover:bg-blue-soft focus-visible:bg-blue-soft"><Icon className="size-4 text-brand-green" />{label}</Link></li>)}
                </ul>
              </div>}
            </div>
          ) : (
            <Link
              key={l.label}
              to={l.to}
              className="nav-underline whitespace-nowrap py-2 hover:text-brand-green"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-2 md:flex lg:hidden xl:flex">
            <Phone className="h-4 w-4 text-navy" />
            <div className="leading-tight">
              <div className="text-sm font-bold text-navy">+237 652 467 154</div>
              <div className="text-[10px] text-muted-foreground">Lun - Dim 24h/24</div>
            </div>
          </div>
          <Link to="/" hash="rdv" className="site-action flex items-center gap-2 whitespace-nowrap rounded-lg bg-navy px-3 py-2.5 sm:px-5 text-sm font-semibold text-navy-foreground">
            <CalendarDays className="h-4 w-4" />
            Prendre RDV
          </Link>
        </div>
      </div>
    </header>
    </>
  );
}