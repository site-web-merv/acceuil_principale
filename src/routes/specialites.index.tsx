import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";

import { Baby, Activity, Brain, Stethoscope, ScanLine, FlaskConical, Pill, Scissors, Droplets, Bone,HeartPulse, Users, Hand, Smile, ArrowRight, Phone, CalendarDays,} from "lucide-react";
import maternite from "@/assets/sp-maternite.jpg";
import gyneco from "@/assets/sp-gynecologie.jpg";
import generale from "@/assets/sp-medecine-generale.jpg";
import radiology from "@/assets/radiology.jpg";
import labo from "@/assets/sp-laboratoire.jpg";
import pharma from "@/assets/sp-pharmacie.jpg";
import chir from "@/assets/sp-chirurgie.jpg";
import uro from "@/assets/sp-urologie.jpg";
import ortho from "@/assets/sp-orthopedie.jpg";
import interne from "@/assets/sp-medecine-interne.jpg";
import cardio from "@/assets/sp-cardiologie.jpg";
import neuro from "@/assets/sp-neurologie.jpg";
import rhumato from "@/assets/sp-rhumatologie.jpg";
import pedia from "@/assets/sp-pediatrie.jpg";

type Item = { name: string; desc: string; img: string; icon: typeof Brain; slug?: string };

const items: Item[] = [
  { name: "Santé maternelle & infantile", desc: "Suivi de la mère et de l'enfant, de la grossesse aux premières années.", img: maternite, icon: Smile },
  { name: "Gynécologie", desc: "Santé de la femme, suivi de grossesse et échographies.", img: gyneco, icon: Users, slug: "gynecologie" },
  { name: "Médecine générale", desc: "Votre premier recours pour toute la famille.", img: generale, icon: Stethoscope, slug: "medecine-generale" },
  { name: "Radiologie conventionnelle", desc: "Imagerie médicale précise pour un diagnostic fiable.", img: radiology, icon: ScanLine, slug:"radiologie" },
  { name: "Dentisterie", desc: "Analyses biologiques rapides et résultats fiables.", img: labo, icon: FlaskConical, slug: "dentisterie" },
  { name: "Pharmacie", desc: "Médicaments disponibles sur place, conseils personnalisés.", img: pharma, icon: Pill, slug:"pharmacie" },
  { name: "Consultation de pathologie chirurgicale", desc: "Avis et prise en charge chirurgicale par nos spécialistes.", img: chir, icon: Scissors },
  { name: "Urologie", desc: "Reins, voies urinaires et santé masculine.", img: uro, icon: Droplets, slug: "urologie" },
  { name: "Chirurgie orthopédique", desc: "Os, articulations, fractures et traumatismes.", img: ortho, icon: Bone ,slug: "chirurgie-orthopedique" },
  { name: "Médecine interne", desc: "Une approche globale des maladies de l'adulte.", img: interne, icon: Stethoscope, slug: "medecine-interne" },
  { name: "Cardiologie", desc: "Prévention et traitement des maladies du cœur.", img: cardio, icon: HeartPulse, slug: "cardiologie" },
  { name: "Neurologie", desc: "Cerveau, moelle épinière et système nerveux.", img: neuro, icon: Brain, slug: "neurologie" },
  { name: "Rhumatologie", desc: "Douleurs articulaires, arthrose et maladies inflammatoires.", img: rhumato, icon: Hand, slug: "rhumatologie" },
  { name: "Pédiatrie & néonatologie", desc: "Des soins attentifs pour nouveau-nés et enfants.", img: pedia, icon: Baby, slug: "pediatrie" },
];

export const Route = createFileRoute("/specialites/")({
  head: () => ({
    meta: [
      { title: "Nos 14 spécialités — Polyclinique Solumed Yaoundé" },
      { name: "description", content: "Découvrez les 14 spécialités médicales de la Polyclinique Solumed à Yaoundé : cardiologie, pédiatrie, gynécologie, laboratoire, radiologie et plus." },
      { property: "og:title", content: "Nos 14 spécialités — Polyclinique Solumed" },
      { property: "og:description", content: "Toutes les spécialités médicales de la Polyclinique Solumed à Yaoundé." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative h-9 w-9 rounded-full bg-primary">
        <div className="absolute inset-y-2 left-[15px] w-1.5 rounded bg-primary-foreground" />
        <div className="absolute inset-x-2 top-[15px] h-1.5 rounded bg-brand-green" />
      </div>
      <div className="leading-none"><div className="text-[10px] font-semibold text-brand-green">Polyclinique</div><div className="text-lg font-extrabold text-navy">Solumed</div></div>
    </Link>
  );
}

function Card({ it, i }: { it: Item; i: number }) {
  const I = it.icon;
  const body = (
    <>
      <div className="relative h-52">
        <div className="absolute inset-0 overflow-hidden">
        <img src={it.img} alt={it.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
        </div>
        <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-navy">{String(i + 1).padStart(2, "0")}</span>
        <span className="absolute -bottom-6 right-5 h-14 w-14 rounded-full bg-brand-green text-primary-foreground flex items-center justify-center shadow-lg ring-4 ring-card"><I className="h-6 w-6" /></span>
      </div>
      <div className="p-5 pt-7 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-navy">{it.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground flex-1">{it.desc}</p>
        <span className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${it.slug ? "text-brand-green" : "text-primary"}`}>
          {it.slug ? "Découvrir la spécialité" : "Prendre rendez-vous"} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </>
  );
  const cls = "group flex flex-col rounded-2xl border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all";
  return it.slug
    ? <Link to="/specialites/$slug" params={{ slug: it.slug }} className={cls}>{body}</Link>
    : <a href="/#rdv" className={cls}>{body}</a>;
}

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-green/30 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-primary/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-brand-green/20 border border-brand-green/40 px-4 py-1 text-xs font-semibold tracking-wider uppercase">Nos services</span>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight">14 spécialités médicales,<br /><span className="text-mint">un seul lieu de confiance.</span></h1>
            <p className="mt-5 max-w-xl text-navy-foreground/80">De la naissance à l'âge adulte, nos équipes vous accompagnent avec des soins de qualité, un laboratoire moderne et une pharmacie sur place.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[["14", "Spécialités"], ["24h/24", "Urgences"], ["1", "Laboratoire moderne"], ["1", "Pharmacie sur place"]].map(([n, l]) => (
              <div key={l} className="rounded-xl bg-navy-foreground/10 border border-navy-foreground/15 p-5">
                <div className="text-3xl font-extrabold text-mint">{n}</div>
                <div className="text-sm text-navy-foreground/80">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-navy">Toutes nos spécialités</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-brand-green" />
          <p className="mt-4 text-muted-foreground">Choisissez une spécialité pour en savoir plus ou prendre rendez-vous.</p>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((it, i) => <Card key={it.name} it={it} i={i} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-navy to-brand-green text-navy-foreground p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <span className="h-16 w-16 rounded-full bg-navy-foreground/15 flex items-center justify-center"><CalendarDays className="h-8 w-8" /></span>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Vous ne savez pas quel spécialiste consulter ?</h2>
            <p className="mt-1 text-navy-foreground/80">Appelez-nous, nous vous orientons vers le bon médecin.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+237652467154" className="inline-flex items-center gap-2 rounded-md bg-navy-foreground/15 px-5 py-3 text-sm font-semibold"><Phone className="h-4 w-4" /> +237 652 467 154</a>
            <a href="/#rdv" className="inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold">Prendre rendez-vous <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap gap-4 items-center justify-between text-sm text-navy">
          <Logo />
          <p className="text-xs text-muted-foreground">Carrefour TKC, Entrée Prodige, Biyem-Assi, Yaoundé</p>
        </div>
      </footer>
    </div>
  );
}
