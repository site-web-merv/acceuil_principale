import { Phone, MessageCircle, CalendarDays, Send, MapPin, Clock, Siren, Plus, CheckCircle2 } from "lucide-react";
import { SiteLayout, Breadcrumb } from "./Layout";
import { MapitalBadge } from "./Mapital";
import hero from "@/assets/clinique-hero.jpg";
import nurse from "@/assets/infirmiere.png";

const input = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring";
const label = "mb-1 block text-xs font-semibold text-navy";

const faqs = [
  "Comment prendre un rendez-vous ?",
  "Acceptez-vous les assurances ?",
  "Quels sont vos horaires ?",
  "Les vaccinations sont-elles vraiment gratuites ?",
  "Comment s'y rendre depuis le centre-ville ?",
];

export function ContactPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <img src={hero} alt="Polyclinique La Solumed, Yaoundé" width={1600} height={900}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-28 text-background">
          <Breadcrumb current="Contact" />
          <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">Contactez-nous</h1>
          <p className="mt-3 text-lg font-medium">Notre équipe vous répond rapidement.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[[Phone, "Appeler"], [MessageCircle, "WhatsApp"], [CalendarDays, "RDV"]].map(([I, t]: any) => (
              <a key={t} href="#" className="flex min-w-32 items-center justify-center gap-2 rounded-md border border-background/80 px-5 py-2.5 text-sm font-semibold hover:bg-background/10">
                <I className="h-4 w-4" />{t}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_380px]">
        <div>
          <h2 className="text-xl font-bold text-navy">Envoyez-nous un message</h2>
          <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div><label className={label}>Nom complet *</label><input className={input} placeholder="Votre nom complet" /></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label className={label}>Téléphone *</label><input className={input} placeholder="+237 6XX XXX XXX" /></div>
              <div><label className={label}>Email (optionnel)</label><input className={input} placeholder="votre@email.com" /></div>
            </div>
            <div><label className={label}>Service concerné *</label>
              <select className={input}><option>Sélectionnez un service</option><option>Médecine générale</option><option>Pédiatrie</option><option>Gynécologie</option><option>Dentisterie</option></select></div>
            <div><label className={label}>Objet du message *</label><input className={input} placeholder="Ex : Demande de rendez-vous" /></div>
            <div><label className={label}>Message *</label><textarea rows={5} className={input} placeholder="Votre message ici..." /></div>
            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-brand py-3 text-sm font-semibold text-brand-foreground hover:opacity-90"><Send className="h-4 w-4" />Envoyer le message</button>
          </form>
          <div className="mt-6 rounded-lg bg-accent/50 p-6 text-center">
            <p className="text-sm font-semibold text-accent-foreground">Ou contactez-nous directement sur WhatsApp</p>
            <a href="#" className="mx-auto mt-3 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground"><MessageCircle className="h-4 w-4" />Discuter sur WhatsApp</a>
            <p className="mt-2 text-xs text-muted-foreground">Réponse rapide pendant nos horaires d'ouverture</p>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-lg bg-surface p-6">
            <h3 className="text-lg font-bold text-navy">Nos coordonnées</h3>
            <ul className="mt-5 space-y-5 text-sm">
              <Info icon={MapPin} title="Adresse">Carrefour TKC, Entrée Prodige, 100m du pouvoir, Biyem-Assi, Yaoundé</Info>
              <Info icon={Phone} title="Téléphone">+237 652 487 154<br />+237 686 204 678</Info>
              <Info icon={MessageCircle} title="WhatsApp">+237 686 204 678</Info>
              <Info icon={Clock} title="Horaires">Urgences 24h/24<br />Consultations 7h–20h</Info>
              <Info icon={Siren} title="Services urgents (24h/24)">
                <ul className="mt-1 space-y-1">
                  {["Urgences médicales", "Urgences chirurgicales", "Maternité / Accouchement", "Pédiatrie d'urgence", "Traumatologie", "Réanimation"].map((s) => (
                    <li key={s} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-navy" />{s}</li>
                  ))}
                </ul>
              </Info>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-surface p-6 pr-36">
            <h3 className="font-bold text-navy">Une question ?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Notre équipe est là pour vous aider.</p>
            <div className="mt-6"><MapitalBadge /></div>
            <img src={nurse} alt="Infirmière Solumed" loading="lazy" width={768} height={1024} className="absolute bottom-0 right-2 h-40 w-auto" />
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10">
        <h2 className="text-xl font-bold text-navy">Comment nous trouver ?</h2>
        <MapIllustration />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14">
        <h2 className="text-xl font-bold text-navy">Questions fréquentes</h2>
        <div className="mt-4 divide-y divide-border border-y border-border">
          {faqs.map((q, i) => (
            <details key={q} className="group py-3.5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-navy">
                <span><span className="mr-3 font-bold">{i + 1}</span>{q}</span><Plus className="h-4 w-4 transition group-open:rotate-45" />
              </summary>
              <p className="mt-2 pl-6 text-sm text-muted-foreground">Contactez notre accueil au +237 652 487 154 ou par WhatsApp pour plus d'informations.</p>
            </details>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function Info({ icon: I, title, children }: any) {
  return (
    <li className="flex gap-3">
      <I className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
      <div><div className="font-bold text-navy">{title}</div><div className="text-muted-foreground">{children}</div></div>
    </li>
  );
}

function MapIllustration() {
  return (
    <div className="relative mt-4 h-72 overflow-hidden rounded-lg bg-surface">
      <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path d="M0 220 Q250 180 500 200 T1000 150" className="stroke-background" strokeWidth="18" fill="none" />
        <path d="M150 0 L220 300 M600 0 L560 300 M850 0 L800 300" className="stroke-background" strokeWidth="12" fill="none" />
        <path d="M0 80 Q400 120 1000 60" className="stroke-background" strokeWidth="10" fill="none" />
        <path d="M110 205 C 300 120, 550 260, 830 110" className="stroke-navy" strokeWidth="4" strokeDasharray="8 8" fill="none" />
      </svg>
      <Pin x="11%" y="62%" title="Carrefour TKC" sub="Point de départ" />
      <Label x="34%" y="34%">Complexe Ceemos</Label>
      <Label x="53%" y="33%">Me'a Pa Plantain</Label>
      <Label x="44%" y="62%">Pascalia Hôtel</Label>
      <Pin x="83%" y="30%" title="Polyclinique Solumed" sub="Votre destination" />
    </div>
  );
}
function Pin({ x, y, title, sub }: any) {
  return (
    <div className="absolute -translate-x-1/2 text-center" style={{ left: x, top: y }}>
      <MapPin className="mx-auto h-8 w-8 fill-navy text-background" />
      <div className="rounded bg-background px-2 py-1 text-xs font-bold text-navy shadow-card">{title}<div className="font-medium text-brand">{sub}</div></div>
    </div>
  );
}
function Label({ x, y, children }: any) {
  return <div className="absolute text-xs font-semibold text-navy" style={{ left: x, top: y }}>{children}</div>;
}
