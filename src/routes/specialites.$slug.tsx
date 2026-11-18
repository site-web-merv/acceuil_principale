import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Activity, Brain, Stethoscope, Users, ArrowRight, HeartPulse, CheckCircle2, AlertCircle,
  CalendarDays, Facebook, Linkedin, Instagram, Youtube, Baby, Bone, Heart,
} from "lucide-react";
import cardio from "@/assets/sp-cardiologie.jpg";
import neuro from "@/assets/sp-neurologie.jpg";
import interne from "@/assets/sp-medecine-interne.jpg";
import generale from "@/assets/sp-medecine-generale.jpg";
import heroDoctor from "@/assets/hero-doctor.jpg";
import nurse from "@/assets/nurse.jpg";
import radiology from "@/assets/radiology.jpg";
import vaccine from "@/assets/vaccine.jpg";
import hospital from "@/assets/hospital.jpg";
import { Navbar } from "@/components/navbar";


type Svc = { t: string; p: string; img: string; items: string[] };
type Sp = {
  name: string; icon: typeof Brain; img: string; tagline: string; intro: string; whatTitle: string; what: string;
  services: Svc[]; who: string; signs: string[]; ctaSub: string; related: { t: string; d: string; icon: typeof Brain; slug?: string }[];
};

const data: Record<string, Sp> = {
  cardiologie: {
    name: "Cardiologie", icon: Activity, img: cardio, tagline: "Prenez soin de votre cœur",
    intro: "Une prise en charge experte pour un cœur en bonne santé.",
    whatTitle: "Qu'est-ce que la cardiologie ?",
    what: "La cardiologie est la spécialité médicale qui s'occupe du cœur et des vaisseaux sanguins. Elle permet de prévenir, diagnostiquer et traiter les maladies cardiovasculaires pour une meilleure qualité de vie.",
    services: [
      { t: "Consultation Cardiologique", p: "À partir de 15 000 FCFA", img: heroDoctor, items: ["ECG inclus", "Bilan cardiovasculaire complet"] },
      { t: "Électrocardiogramme (ECG)", p: "À partir de 10 000 FCFA", img: nurse, items: ["15 minutes", "Résultats immédiats", "Lecture par cardiologue"] },
      { t: "Échocardiographie", p: "À partir de 25 000 FCFA", img: radiology, items: ["Imagerie temps réel", "Sans radiation"] },
    ],
    who: "un cardiologue", signs: ["Douleur thoracique", "Essoufflement anormal", "Palpitations", "Vertiges", "Hypertension"],
    ctaSub: "Un cœur en bonne santé pour un meilleur demain.",
    related: [
      { t: "Médecine interne", d: "Gestion des maladies complexes", icon: Stethoscope, slug: "medecine-interne" },
      { t: "Néphrologie", d: "Santé rénale et hypertension", icon: Bone },
      { t: "Endocrinologie", d: "Diabète et métabolisme", icon: Activity },
    ],
  },
  neurologie: {
    name: "Neurologie", icon: Brain, img: neuro, tagline: "Santé du cerveau et du système nerveux",
    intro: "Une expertise pour comprendre, soigner et vous accompagner.",
    whatTitle: "Qu'est-ce que la neurologie ?",
    what: "La neurologie est la spécialité médicale qui s'occupe du cerveau, de la moelle épinière et du système nerveux. Elle permet de diagnostiquer et traiter les troubles neurologiques pour préserver vos capacités et améliorer votre qualité de vie.",
    services: [
      { t: "Consultation Neurologique", p: "À partir de 15 000 FCFA", img: heroDoctor, items: ["Examen neurologique complet", "Plan de prise en charge personnalisé"] },
      { t: "Électroencéphalogramme (EEG)", p: "À partir de 25 000 FCFA", img: nurse, items: ["Enregistrement de l'activité cérébrale", "Lecture par neurologue"] },
      { t: "Suivi Maladies Neurologiques", p: "Prix sur devis", img: radiology, items: ["Épilepsie", "Parkinson", "Migraines chroniques", "Autres troubles neurologiques"] },
    ],
    who: "un neurologue", signs: ["Maux de tête intenses", "Pertes de mémoire", "Convulsions", "Engourdissements", "Troubles de la vision"],
    ctaSub: "Votre santé neurologique, notre priorité.",
    related: [
      { t: "Neurochirurgie", d: "Chirurgie du système nerveux", icon: Brain },
      { t: "Psychiatrie", d: "Santé mentale", icon: Users },
      { t: "Médecine interne", d: "Bilan global et suivi", icon: Stethoscope, slug: "medecine-interne" },
    ],
  },
  "medecine-interne": {
    name: "Médecine Interne", icon: Stethoscope, img: interne, tagline: "Une approche globale de votre santé",
    intro: "Prévenir, diagnostiquer et traiter les maladies de l'adulte dans leur globalité.",
    whatTitle: "Qu'est-ce que la médecine interne ?",
    what: "La médecine interne est une spécialité qui prend en charge l'adulte dans sa globalité. Elle s'intéresse à l'ensemble des organes et systèmes pour diagnostiquer et traiter les maladies parfois complexes, en assurant un suivi coordonné et personnalisé.",
    services: [
      { t: "Bilan de Santé Complet", p: "À partir de 40 000 FCFA", img: vaccine, items: ["Bilan sanguin complet", "Examen clinique", "Compte-rendu détaillé"] },
      { t: "Diabète & Maladies Chroniques", p: "12 000 FCFA / consultation", img: nurse, items: ["Suivi personnalisé", "Équilibre du traitement", "Conseils hygiéno-diététiques"] },
      { t: "Maladies Infectieuses", p: "À partir de 10 000 FCFA", img: heroDoctor, items: ["Diagnostic précis", "Traitement adapté", "Suivi médical"] },
    ],
    who: "un interniste", signs: ["Fièvre persistante", "Fatigue inexpliquée", "Perte de poids", "Troubles digestifs", "Maladies chroniques non équilibrées"],
    ctaSub: "Une prise en charge complète, au service de votre santé.",
    related: [
      { t: "Endocrinologie", d: "Diabète et hormones", icon: Activity },
      { t: "Néphrologie", d: "Santé rénale", icon: Bone },
      { t: "Cardiologie", d: "Santé cardiovasculaire", icon: Heart, slug: "cardiologie" },
    ],
  },
  "medecine-generale": {
    name: "Médecine Générale", icon: Users, img: generale, tagline: "Votre premier recours médical",
    intro: "Une écoute attentive, des soins de qualité pour toute la famille.",
    whatTitle: "Qu'est-ce que la médecine générale ?",
    what: "La médecine générale est votre premier point de contact dans le parcours de soins. Elle assure la prévention, le diagnostic et le traitement des maladies courantes, et vous accompagne, vous et votre famille, à toutes les étapes de votre vie.",
    services: [
      { t: "Consultation Générale", p: "À partir de 7 000 FCFA", img: heroDoctor, items: ["Sans rendez-vous", "Résultats rapides", "Ordonnance incluse"] },
      { t: "Certificat Médical", p: "5 000 FCFA", img: hospital, items: ["Certificat pour école, travail, sport…", "Délivrance rapide"] },
      { t: "Bilan Pré-emploi", p: "20 000 FCFA", img: nurse, items: ["Examen clinique", "Analyses selon poste", "Rapport médical"] },
      { t: "Suivi Maladies Courantes", p: "7 000 FCFA", img: vaccine, items: ["Infections, grippe, paludisme…", "Suivi et conseils"] },
    ],
    who: "un médecin généraliste", signs: ["Fièvre", "Douleurs (ventre, tête, dos…)", "Infections courantes", "Tout problème de santé"],
    ctaSub: "Des soins de proximité pour toute la famille.",
    related: [
      { t: "Pédiatrie", d: "Soins pour enfants", icon: Baby },
      { t: "Médecine interne", d: "Bilan approfondi", icon: Stethoscope, slug: "medecine-interne" },
      { t: "Gynécologie", d: "Santé de la femme", icon: Users },
    ],
  },
};

export const Route = createFileRoute("/specialites/$slug")({
  loader: ({ params }) => {
    const sp = data[params.slug];
    if (!sp) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const sp = loaderData ? data[loaderData.slug] : undefined;
    const title = sp ? `${sp.name} — Polyclinique Solumed Yaoundé` : "Spécialité — Polyclinique Solumed";
    const desc = sp ? `${sp.tagline}. ${sp.intro}` : "Spécialité médicale à la Polyclinique Solumed.";
    return { meta: [
      { title }, { name: "description", content: desc },
      { property: "og:title", content: title }, { property: "og:description", content: desc },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  notFoundComponent: () => <div className="p-20 text-center text-navy">Spécialité introuvable. <Link to="/" className="text-primary underline">Accueil</Link></div>,
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

function Page() {
  const { slug } = Route.useLoaderData();
  const sp = data[slug]!;
  const I = sp.icon;
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative h-[460px] overflow-hidden">
        <img src={sp.img} alt={sp.name} width={1536} height={768} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 h-full flex flex-col justify-center text-navy-foreground max-w-xl md:ml-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <span className="h-16 w-16 rounded-full bg-brand-green flex items-center justify-center"><I className="h-8 w-8" /></span>
          <h1 className="mt-5 text-5xl font-extrabold">{sp.name}</h1>
          <p className="mt-3 text-2xl font-semibold">{sp.tagline}</p>
          <p className="mt-4 text-navy-foreground/80">{sp.intro}</p>
          <a href="/#rdv" className="mt-8 self-start inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold">Prendre rendez-vous <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 flex gap-8 items-start justify-between">
        <div className="max-w-3xl"><h2 className="text-2xl font-bold text-navy">{sp.whatTitle}</h2><p className="mt-3 text-muted-foreground">{sp.what}</p></div>
        <span className="hidden md:flex h-20 w-20 shrink-0 rounded-xl bg-secondary items-center justify-center"><HeartPulse className="h-10 w-10 text-primary" strokeWidth={1.5} /></span>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-navy">Nos services</h2>
        <div className={`mt-6 grid gap-5 sm:grid-cols-2 ${sp.services.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {sp.services.map((s) => (
            <div key={s.t} className="rounded-xl border bg-card overflow-hidden shadow-sm">
              <img src={s.img} alt={s.t} loading="lazy" className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-bold text-navy">{s.t}</h3>
                <span className="mt-3 inline-block rounded-md bg-navy text-navy-foreground px-3 py-1.5 text-xs font-semibold">{s.p}</span>
                <ul className="mt-4 space-y-2 text-sm text-navy">
                  {s.items.map((x) => <li key={x} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />{x}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex gap-4 items-start">
          <AlertCircle className="h-10 w-10 fill-destructive text-primary-foreground shrink-0" />
          <div><h2 className="text-2xl font-bold text-navy">Quand consulter ?</h2><p className="text-sm text-muted-foreground">Consultez {sp.who} en cas de :</p></div>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sp.signs.map((x) => <div key={x} className="flex items-center gap-3 text-sm text-navy"><AlertCircle className="h-5 w-5 fill-destructive text-primary-foreground" />{x}</div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-gradient-to-r from-navy to-brand-green text-navy-foreground p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <span className="h-16 w-16 rounded-full bg-navy-foreground/15 flex items-center justify-center"><CalendarDays className="h-8 w-8" /></span>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Prenez rendez-vous dès aujourd'hui</h2>
            <p className="mt-1 text-navy-foreground/80">{sp.ctaSub}</p>
            <a href="/#rdv" className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold">Prendre rendez-vous <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl font-bold text-navy">Spécialités liées</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {sp.related.map((r) => {
            const R = r.icon;
            const inner = <><span className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center"><R className="h-6 w-6 text-primary" /></span><div><b className="text-sm text-navy">{r.t}</b><p className="text-xs text-muted-foreground">{r.d}</p></div></>;
            return r.slug
              ? <Link key={r.t} to="/specialites/$slug" params={{ slug: r.slug }} className="rounded-xl border bg-card p-4 flex items-center gap-4 hover:shadow-md">{inner}</Link>
              : <div key={r.t} className="rounded-xl border bg-card p-4 flex items-center gap-4">{inner}</div>;
          })}
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap gap-4 items-center justify-between text-sm text-navy">
          <div><Logo /><p className="text-xs text-muted-foreground mt-1">Votre santé, notre engagement</p></div>
          <nav className="flex gap-6"><Link to="/">Accueil</Link><Link to="/specialites">Nos spécialités</Link><a href="/#">À propos</a><a href="/#rdv">Contact</a></nav>
          <div className="flex gap-3">{[Facebook, Linkedin, Instagram, Youtube].map((S, i) => <S key={i} className="h-5 w-5" />)}</div>
        </div>
      </footer>
    </div>
  );
}
