import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Navbar, desktopLinks } from "../navbar";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
        <path d="M14 2h12v12h12v12H26v12H14V26H2V14h12z" className={light ? "fill-background" : "fill-navy"} />
        <path d="M14 14h12v12H14z" className="fill-brand" />
        <path d="M17 20h2l1.5-3 2 6 1.5-3h2" fill="none" strokeWidth="1.6" className="stroke-background" />
      </svg>
      <div className="leading-none">
        <div className={`text-[10px] font-semibold ${light ? "text-background/80" : "text-navy/80"}`}>Polyclinique</div>
        <div className={`text-lg font-extrabold tracking-tight ${light ? "text-background" : "text-navy"}`}>Solumed</div>
      </div>
    </Link>
  );
}

export function Header() {
  return (
    <Navbar/>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-3 text-sm text-background/70">Your health, our priority</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold">Liens rapides</h4>
          <ul className="space-y-1.5 text-sm text-background/75">
            {desktopLinks.filter(({ to }) => to !== "/specialites").map(({ label, to }) => <li key={to}><Link to={to}>{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold">Nos coordonnées</h4>
          <ul className="space-y-2 text-sm text-background/75">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" />Carrefour TKC, Biyem-Assi, Yaoundé</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0" />+237 652 487 154</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0" />+237 686 204 678</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0" />contact@solumed.cm</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold">Suivez-nous</h4>
          <div className="flex gap-2">
            {[Facebook, Twitter, Instagram, Youtube].map((I, i) => (
              <span key={i} className="grid h-8 w-8 place-items-center rounded-full bg-background/10"><I className="h-4 w-4" /></span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 py-4 text-center text-xs text-background/60">
        © 2024 Polyclinique Solumed. Tous droits réservés. | Propulsé par <span className="font-bold text-background">NERVDEV</span>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="text-xs text-background/80">
      <Link to="/" className="hover:underline">Accueil</Link> <span className="mx-1">›</span> {current}
    </div>
  );
}
