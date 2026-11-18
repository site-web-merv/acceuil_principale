import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CalendarDays, ArrowRight, Search, Users, Microscope, HeartHandshake, Clock,
  CheckCircle2, Plus, Minus, Smartphone, ChevronRight,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import doctor from "@/assets/doctor.jpg";
import scaling from "@/assets/scaling.jpg";
import implant from "@/assets/implant.jpg";
import smile from "@/assets/smile.jpg";
import pediatrie from "@/assets/pediatrie.jpg";
import gyneco from "@/assets/gyneco.jpg";
import generale from "@/assets/generale.jpg";
import { Navbar } from "@/components/navbar";


export const Route = createFileRoute("/specialites/dentisterie")({
  head: () => ({
    meta: [
      { title: "Dentisterie — Polyclinique Solumed" },
      { name: "description", content: "Des soins dentaires de qualité pour toute la famille : détartrage, blanchiment, extraction, prothèses et implants." },
      { property: "og:title", content: "Dentisterie — Polyclinique Solumed" },
      { property: "og:description", content: "Des soins dentaires de qualité pour toute la famille. -20% sur toutes les consultations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Tooth({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M7 3c-2.5 0-4 2-4 4.5 0 2 1 3.5 1.5 5.5.6 2.5.8 8 2.8 8 1.8 0 1.7-5 4.7-5s2.9 5 4.7 5c2 0 2.2-5.5 2.8-8 .5-2 1.5-3.5 1.5-5.5C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3Z" />
    </svg>
  );
}

const nav = ["Accueil", "À propos", "Services", "Nos médecins", "Actualités", "Contact"];

function GreenBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-md bg-brand-green px-5 py-2 text-xs font-semibold text-secondary-foreground hover:opacity-90">
      {children} <ArrowRight className="h-3.5 w-3.5" />
    </button>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
      <CheckCircle2 className="h-3.5 w-3.5 text-brand-green" /> {children}
    </span>
  );
}

type Service = { title: string; text: string; time: string; price: string; checks: string[]; img: string; imgLeft: boolean; beforeAfter?: boolean };
const services: Service[] = [
  { title: "Détartrage & Nettoyage Dentaire", text: "Élimine la plaque dentaire et le tartre pour des dents plus saines et un sourire éclatant. Prévient les caries, les maladies des gencives et la mauvaise haleine. Recommandé tous les 6 mois.", time: "30 à 45 minutes", price: "À partir de 15 000 FCFA", checks: ["Sans douleur", "Résultats immédiats", "Recommandé 2x/an"], img: scaling, imgLeft: true },
  { title: "Blanchiment Dentaire", text: "Éclaircit la teinte de vos dents grâce à des produits professionnels sûrs et efficaces. Une procédure simple et confortable pour un sourire plus blanc. Les résultats peuvent durer plusieurs mois avec un bon entretien.", time: "60 à 90 minutes", price: "À partir de 35 000 FCFA", checks: ["Résultats visibles dès la 1ère séance", "Sans abîmer l'émail"], img: smile, imgLeft: false, beforeAfter: true },
  { title: "Extraction Dentaire", text: "Nécessaire en cas de dent fortement cariée, fracturée ou pour des raisons orthodontiques. L'intervention est réalisée sous anesthésie locale et se déroule rapidement. Un suivi est assuré pour une bonne cicatrisation.", time: "20 à 40 minutes", price: "À partir de 20 000 FCFA", checks: ["Anesthésie locale", "Procédure rapide", "Suivi post-opératoire"], img: scaling, imgLeft: true },
  { title: "Prothèses & Implants Dentaires", text: "Des solutions durables pour remplacer une ou plusieurs dents manquantes : couronnes, bridges, prothèses amovibles ou implants. Des matériaux de haute qualité pour un résultat naturel et confortable.", time: "Plusieurs séances", price: "Sur devis — À partir de 150 000 FCFA", checks: ["Matériaux premium", "Résultats naturels"], img: implant, imgLeft: false },
];

const faqs = [
  { q: "La pose d'implant est-elle douloureuse ?", a: "Non, l'intervention se fait sous anesthésie locale. Une légère gêne peut apparaître quelques jours après." },
  { q: "À quelle fréquence consulter un dentiste ?", a: "Nous recommandons une visite de contrôle tous les 6 mois." },
  { q: "Le blanchiment abîme-t-il les dents ?", a: "Réalisé par un professionnel, le blanchiment est sûr et n'abîme pas l'émail." },
  { q: "Mon enfant peut-il consulter ?", a: "Oui, nous accueillons les enfants dès l'apparition des premières dents." },
  { q: "Acceptez-vous les mutuelles ?", a: "Oui, nous travaillons avec la plupart des mutuelles et assurances. Contactez-nous pour vérifier la vôtre." },
];

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative z-10 px-6 py-10 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
            <p className="text-xs text-muted-foreground">Accueil <span className="mx-2">›</span> Services <span className="mx-2">›</span> <span className="font-semibold text-navy">Dentisterie</span></p>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-navy md:text-6xl">Dentisterie</h1>
            <div className="mt-5 h-1 w-12 rounded bg-brand-green" />
            <p className="mt-6 text-lg text-muted-foreground">Des soins dentaires de qualité pour toute la famille.</p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#rdv" className="inline-flex items-center gap-3 rounded-md bg-navy px-7 py-4 text-sm font-semibold text-primary-foreground">
                <CalendarDays className="h-4 w-4" /> Prendre RDV <ArrowRight className="h-4 w-4" />
              </a>
              <div className="rounded-md bg-mint px-4 py-1.5 text-center">
                <div className="text-2xl font-extrabold leading-none text-brand-green">-20%</div>
                <div className="text-[10px] text-brand-green">en ce moment</div>
              </div>
            </div>
            <div className="mt-14 flex flex-wrap gap-10 text-xs text-muted-foreground">
              <span className="flex items-center gap-3"><Tooth className="h-6 w-6 text-navy" />Une équipe<br />de dentistes qualifiés</span>
              <span className="flex items-center gap-3"><Microscope className="h-6 w-6 text-navy" />Des équipements<br />modernes</span>
              <span className="flex items-center gap-3"><Users className="h-6 w-6 text-navy" />Des soins pour<br />toute la famille</span>
            </div>
          </div>
          <div className="relative min-h-[420px]">
            <img src={hero} alt="Patiente souriante chez le dentiste" width={1280} height={832} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
            <img src={smile} alt="Sourire éclatant" width={816} height={816} loading="lazy" className="absolute right-6 top-6 h-56 w-56 rounded-full border-4 border-background object-cover shadow-xl" />
            <p className="absolute bottom-8 right-8 -rotate-12 font-hand text-2xl leading-tight text-navy">Un sourire en<br />bonne santé,<br />une vie plus belle !</p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-soft py-10">
        <div className="mx-auto flex max-w-5xl items-start gap-8 px-6">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-navy text-primary-foreground"><Tooth className="h-8 w-8" /></div>
          <div>
            <p className="text-xl font-bold text-navy md:text-2xl">“ La dentisterie est la branche de la médecine qui s'occupe de la santé bucco-dentaire — dents, gencives et mâchoire. ”</p>
            <p className="mt-3 text-sm text-muted-foreground">Une bonne santé bucco-dentaire est essentielle pour bien manger, bien parler et avoir confiance en soi. Elle contribue aussi à la santé générale et à la prévention de nombreuses maladies.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-navy">Nos soins dentaires</h2>
            <div className="mt-3 h-1 w-12 rounded bg-brand-green" />
          </div>
          <p className="max-w-md text-right text-sm text-muted-foreground">Des solutions adaptées à tous vos besoins, avec des technologies modernes et une approche douce et personnalisée.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className={`flex gap-5 rounded-xl border bg-card p-4 shadow-sm ${s.imgLeft ? "" : "flex-row-reverse"}`}>
              <div className="relative w-2/5 shrink-0 overflow-hidden rounded-lg">
                <img src={s.img} alt={s.title} loading="lazy" width={816} height={816} className="h-full w-full object-cover" />
                {s.beforeAfter && (
                  <>
                    <div className="absolute inset-y-0 left-1/2 w-0.5 bg-background" />
                    <span className="absolute bottom-2 left-2 rounded bg-background/80 px-2 py-0.5 text-[10px]">Avant</span>
                    <span className="absolute bottom-2 right-2 rounded bg-background/80 px-2 py-0.5 text-[10px]">Après</span>
                  </>
                )}
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-navy"><Clock className="h-4 w-4" />{s.time}</span>
                  <span className="rounded-full bg-navy px-3 py-1 text-[11px] font-semibold text-primary-foreground">{s.price}</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-1.5">{s.checks.map((c) => <Check key={c}>{c}</Check>)}</div>
                <div className="mt-4"><GreenBtn>Prendre RDV</GreenBtn></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Promo */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-xl bg-navy px-10 py-8 text-primary-foreground">
          <Tooth className="absolute -right-4 -top-6 h-48 w-48 opacity-10" />
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-5xl font-extrabold text-mint">-20%</span>
            <div>
              <p className="text-xl font-bold">sur toutes les consultations dentaires</p>
              <p className="text-sm opacity-80">Offre limitée — Profitez-en maintenant</p>
            </div>
          </div>
          <a href="#rdv" className="mt-5 inline-flex items-center gap-3 rounded-md bg-background px-6 py-3 text-sm font-semibold text-navy">
            <CalendarDays className="h-4 w-4" /> Prendre RDV maintenant <ArrowRight className="h-4 w-4" />
          </a>
          <p className="absolute bottom-8 right-24 hidden -rotate-12 font-hand text-2xl leading-tight md:block">Un sourire<br />plus accessible<br />pour tous !</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-2xl font-extrabold text-navy">Questions fréquentes</h2>
          <div className="mt-3 h-1 w-12 rounded bg-brand-green" />
          <div className="mt-6 space-y-2">
            {faqs.map((f, i) => (
              <div key={f.q} className="rounded-md bg-soft">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center gap-5 px-5 py-3.5 text-left text-sm font-medium text-navy">
                  {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}{f.q}
                </button>
                {open === i && <p className="px-14 pb-4 text-sm text-muted-foreground">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={doctor} alt="Dr. Awa Koné" loading="lazy" width={768} height={896} className="ml-auto h-[420px] w-auto rounded-xl object-cover" />
          <p className="absolute left-0 top-6 -rotate-6 font-hand text-2xl leading-tight text-navy">“ Des réponses claires<br />pour un sourire<br />serein ! ”</p>
          <div className="absolute bottom-6 left-0 rounded-md bg-background/90 px-4 py-2">
            <p className="text-sm font-bold text-navy">Dr. Awa Koné</p>
            <p className="text-xs text-muted-foreground">Chirurgien-dentiste</p>
          </div>
        </div>
      </section>

      {/* RDV */}
      <section id="rdv" className="bg-brand-green py-14 text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Prenez soin de votre sourire<br />dès aujourd'hui</h2>
            <div className="mt-4 h-1 w-12 rounded bg-background" />
            <p className="mt-6 max-w-md opacity-90">Notre équipe est à votre écoute pour vous accueillir et vous proposer les meilleurs soins dentaires.</p>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center text-xs">
              {[[Smartphone, "Rendez-vous rapide", "en ligne ou par téléphone"], [Clock, "Horaires flexibles", "du lundi au samedi"], [HeartHandshake, "Une équipe", "bienveillante"]].map(([Icon, t, s]) => {
                const I = Icon as typeof Clock;
                return (
                  <div key={t as string}>
                    <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border-2 border-background/70"><I className="h-5 w-5" /></div>
                    <p className="font-semibold">{t as string}</p><p className="opacity-80">{s as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-xl bg-card p-6 text-card-foreground shadow-xl">
            <h3 className="text-lg font-bold text-navy">Prendre un rendez-vous</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Nom complet" required><input required placeholder="Votre nom" className="inp" /></Field>
              <Field label="Téléphone" required><input required type="tel" placeholder="Votre téléphone" className="inp" /></Field>
              <Field label="Service concerné" required>
                <select className="inp"><option>Dentisterie</option><option>Pédiatrie</option><option>Gynécologie</option><option>Médecine générale</option></select>
              </Field>
              <Field label="Date souhaitée" required><input required type="date" className="inp" /></Field>
              <div className="sm:col-span-2"><Field label="Message (optionnel)"><textarea rows={3} placeholder="Votre message..." className="inp" /></Field></div>
            </div>
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-brand-green py-3 text-sm font-semibold text-secondary-foreground">
              {sent ? "Demande envoyée ✓" : <>Confirmer ma demande <ArrowRight className="h-4 w-4" /></>}
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">Nous vous recontacterons rapidement pour confirmer votre rendez-vous.</p>
          </form>
        </div>
      </section>

      {/* Discover */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><h2 className="text-2xl font-extrabold text-navy">Découvrez aussi</h2><div className="mt-3 h-1 w-12 rounded bg-brand-green" /></div>
          <p className="text-sm text-muted-foreground">D'autres services pour prendre soin de votre santé.</p>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[[pediatrie, "Pédiatrie", "Des soins adaptés aux enfants, de la naissance à l'adolescence.", "/pediatrie"], [gyneco, "Gynécologie", "Un suivi complet pour la santé de la femme à chaque étape de la vie.", "/gynecologie"], [generale, "Médecine générale", "Des consultations pour toute la famille.", ""]].map(([img, t, d, to]) => (
            to ? (
              <Link key={t as string} to={to as string} className="flex gap-4 rounded-xl border bg-card p-2 shadow-sm transition hover:shadow-md">
                <img src={img as string} alt={t as string} loading="lazy" width={816} height={816} className="h-24 w-28 rounded-lg object-cover" />
                <div className="flex flex-col py-2">
                  <p className="font-bold text-navy">{t as string}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{d as string}</p>
                  <span className="mt-auto flex items-center gap-1 text-xs font-semibold text-navy">En savoir plus <ChevronRight className="h-3.5 w-3.5" /></span>
                </div>
              </Link>
            ) : (
              <a key={t as string} href="#" className="flex gap-4 rounded-xl border bg-card p-2 shadow-sm transition hover:shadow-md">
                <img src={img as string} alt={t as string} loading="lazy" width={816} height={816} className="h-24 w-28 rounded-lg object-cover" />
                <div className="flex flex-col py-2">
                  <p className="font-bold text-navy">{t as string}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{d as string}</p>
                  <span className="mt-auto flex items-center gap-1 text-xs font-semibold text-navy">En savoir plus <ChevronRight className="h-3.5 w-3.5" /></span>
                </div>
              </a>
            )
          ))}
        </div>
      </section>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block text-xs text-navy">
      {label} {required && <span className="text-destructive">*</span>}
      <div className="mt-1">{children}</div>
    </label>
  );
}

