import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone, CalendarDays, ArrowRight, PlusCircle, Stethoscope, Baby, Syringe,
  Clock, MapPin, MessageCircle, ChevronLeft, ChevronRight, Users, Monitor, HeartHandshake,
  Heart, Star, Mail, Maximize2, User, Lock, ShieldCheck,Facebook, Instagram, Linkedin, Youtube,
  UserCheck, Ear, Zap, Home, BarChart3, Smile, Bone, FlaskConical, CheckCircle2,
} from "lucide-react";
import clinic from "@/assets/clinic.jpg";
import doctor from "@/assets/doctor.jpg";
import dentist from "@/assets/dentist.jpg";
import radiology from "@/assets/radiology.jpg";
import vaccine from "@/assets/vaccine.jpg";
import nurse from "@/assets/nurse.jpg";
import { Navbar } from "@/components/navbar";
import directionMap from "@/assets/solumed-direction-map.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Polyclinique Solumed — Yaoundé | Votre santé, notre priorité" },
      { name: "description", content: "Polyclinique Solumed à Yaoundé : 14 spécialités, urgences 24h/24 et 7j/7, prise de rendez-vous en ligne." },
      { property: "og:title", content: "Polyclinique Solumed — Yaoundé" },
      { property: "og:description", content: "Des soins de qualité, une équipe engagée à vos côtés, chaque jour." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Eyebrow = ({ children, light }: { children: React.ReactNode; light?: boolean }) => (
  <p className={`text-[11px] font-semibold tracking-[0.2em] uppercase ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>{children}</p>
);



const Logo = ({ light }: { light?: boolean }) => (
  <div className="flex items-center gap-2">
    <div className={`grid h-10 w-10 place-items-center rounded-full border-2 ${light ? "border-navy-foreground" : "border-brand-green"}`}>
      <PlusCircle className={`h-6 w-6 ${light ? "text-navy-foreground" : "text-brand-green"}`} />
    </div>
    <div className="leading-tight">
      <div className={`text-lg font-extrabold ${light ? "text-navy-foreground" : "text-navy"}`}>SOLUMED</div>
      <div className={`text-xs ${light ? "text-navy-foreground/80" : "text-navy"}`}>Polyclinique Solumed</div>
      <div className={`text-[9px] ${light ? "text-navy-foreground/60" : "text-muted-foreground"}`}>Soins pour une vie meilleure</div>
    </div>
  </div>
);
const specialties = [
  { icon: Stethoscope, t: "Médecine générale", d: "Suivi médical pour tous les âges.", slug: "medecine-generale" },
  { icon: Heart, t: "Cardiologie", d: "Un cœur en bonne santé, une vie meilleure.", slug: "cardiologie" },
  { icon: Users, t: "Gynécologie - Obstétrique", d: "Accompagner chaque étape de la vie." , slug: "gynecologie"},
  { icon: Baby, t: "Pédiatrie", d: "Des soins tout en douceur." , slug: "pediatrie"},
  { icon: Bone, t: "Orthopédie", d: "Retrouver votre mobilité." ,slug: "chirurgie-orthopedique"},
  { icon: FlaskConical, t: "Analyses médicales", d: "Des résultats fiables, rapidement." },
];


const reviews = [
  { name: "Marie N.", text: "« Une équipe exceptionnelle et à l'écoute. J'ai été très bien prise en charge pendant ma grossesse. Merci Solumed ! »" },
  { name: "Jean P.", text: "« Des soins de qualité et un personnel très professionnel. Je recommande vivement cette polyclinique. »" },
  { name: "Aïssatou M.", text: "« Accueil chaleureux, délais courts et médecins compétents. Ma famille et moi sommes fidèles ! »" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      {/* HERO */}
      <section className="relative overflow-hidden bg-blue-soft">
        {/* Plus de max-w ici : la grille prend toute la largeur de l'écran */}
        <div className="grid lg:grid-cols-2 lg:items-center">
          {/* Colonne gauche : on recrée l'alignement de max-w-7xl avec du padding */}
          <div className="relative z-10 px-6 py-14 lg:py-20 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-10">
            <p className="text-xs font-bold tracking-wider text-brand-green">POLYCLINIQUE SOLUMED — YAOUNDÉ</p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] text-navy md:text-6xl">Votre santé,<br />notre <span className="text-brand-green">priorité.</span></h1>
            <p className="mt-5 max-w-md text-lg text-navy">Des soins de qualité, une équipe engagée à vos côtés, chaque jour.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#rdv" className="flex items-center gap-3 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground"><CalendarDays className="h-4 w-4" />Prendre un rendez-vous<ArrowRight className="h-4 w-4" /></a>
              <a className="flex items-center gap-3 rounded-lg border-2 border-navy/30 bg-background px-6 py-3.5 text-sm font-semibold text-navy"><PlusCircle className="h-4 w-4" />Découvrir nos services</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[{ i: Users, t: "Équipe experte et bienveillante" }, { i: Monitor, t: "Matériel moderne et performant" }, { i: HeartHandshake, t: "Une prise en charge humaine et personnalisée" }].map(({ i: I, t }) => (
                <div key={t} className="flex items-start gap-3"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-green-soft"><I className="h-5 w-5 text-brand-green" /></div><span className="text-xs text-navy">{t}</span></div>
              ))}
            </div>
          </div>

          {/* Colonne droite : l'image décide de la hauteur, donc elle est affichée en entier */}
          <div className="relative">
            <img
              src={clinic}
              alt="Façade de la Polyclinique La Solumed à Yaoundé"
              className="block h-auto w-full"
            />
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-xl bg-background/90 px-3 py-2 text-xs text-navy shadow"><Heart className="h-4 w-4 text-brand-green" />Des vies en meilleure santé<br />chaque jour</div>
            <div className="absolute left-6 top-1/2 w-56 -translate-y-1/2 space-y-4 rounded-2xl bg-background/90 p-4 shadow-xl backdrop-blur">
              {[{ i: Stethoscope, a: "14", b: "spécialités médicales" }, { i: Clock, a: "Urgences", b: "24h/24 et 7j/7" }, { i: Syringe, a: "Vaccins", b: "gratuits pour les enfants (0 - 5 ans)" }].map(({ i: I, a, b }) => (
                <div key={a} className="flex items-center gap-3"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-green-soft"><I className="h-5 w-5 text-brand-green" /></div><div><div className="font-bold text-navy">{a}</div><div className="text-xs text-muted-foreground">{b}</div></div></div>
              ))}
            </div>
            <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-xl bg-background/90 px-3 py-2 text-xs text-navy shadow"><MapPin className="h-4 w-4 text-brand-green" />Yaoundé, Cameroun</div>
          </div>
        </div>
      </section>

      {/* GREEN BAR */}
      <div className="bg-brand-green text-navy-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 overflow-x-auto px-6 py-4 text-sm font-semibold">
          <ChevronLeft className="h-4 w-4 shrink-0" />
          <span className="flex shrink-0 items-center gap-2"><Clock className="h-4 w-4" />Urgences 24h/24 et 7j/7</span>
          <span className="flex shrink-0 items-center gap-2"><Phone className="h-4 w-4" />+237 652 467 154 / +237 686 204 678</span>
          <span className="flex shrink-0 items-center gap-2"><MapPin className="h-4 w-4" />Carrefour TKC, Entrée Prodige, Biyem-Assi</span>
          <a href="https://wa.me/237686204678" target="_blank" rel="noreferrer" className="flex shrink-0 items-center gap-2"><MessageCircle className="h-4 w-4" />Écrivez-nous sur WhatsApp</a>
          <ChevronRight className="h-4 w-4 shrink-0" />
        </div>
      </div>

      {/* SPECIALTIES */}

            <section id="specialites" className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex items-end justify-between">
          <div><Eyebrow>Des soins pour toute la famille</Eyebrow><h2 className="mt-2 text-3xl font-bold text-navy">Nos Spécialités</h2></div>
          <a href="#" className="hidden md:block text-xs text-primary underline">Des professionnels à votre écoute pour un meilleur demain.</a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialties.map((s) => <SpecialtyCard key={s.t} {...s} />)}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center gap-2 rounded-md border-2 border-primary text-primary px-6 py-3 text-sm font-semibold">Voir toutes les spécialités <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>


      {/* OFFERS */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <h2 className="text-3xl font-extrabold text-navy">Nos offres et services du moment</h2>
        <p className="mt-1 text-sm text-muted-foreground">Des soins accessibles pour tous, parce que votre santé compte.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { i: Smile, t: "Dentisterie", big: "-20%", s: "Sur tous les soins dentaires", tag: "OFFRE SPÉCIALE", img: dentist, bg: "bg-green-soft", tagc: "bg-brand-green" },
            { i: User, t: "Radiologie", big: "-10%", s: "Sur tous les examens d'imagerie", tag: "RÉDUCTION", img: radiology, bg: "bg-blue-soft", tagc: "bg-navy" },
            { i: Syringe, t: "Vaccins enfants", big: "Gratuit", s: "Pour les enfants de 0 à 5 ans", tag: "SANTÉ POUR TOUS", img: vaccine, bg: "bg-green-soft", tagc: "bg-brand-green" },
          ].map((o) => (
            <div key={o.t} className={`relative flex h-48 overflow-hidden rounded-2xl ${o.bg}`}>
              <div className="relative z-10 flex w-3/5 gap-3 p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-background"><o.i className="h-6 w-6 text-brand-green" /></div>
                <div><div className="font-bold text-navy">{o.t}</div><div className={`mt-1 text-4xl font-extrabold ${o.tagc === "bg-navy" ? "text-navy" : "text-brand-green"}`}>{o.big}</div><div className="mt-2 text-xs text-navy">{o.s}</div></div>
              </div>
              <img src={o.img} alt={o.t} loading="lazy" className="absolute right-0 top-0 h-full w-2/5 object-cover" />
              <span className={`absolute right-3 top-3 z-10 rounded-md px-3 py-1 text-[10px] font-bold text-navy-foreground ${o.tagc}`}>{o.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* RDV */}
            <section id="rdv" className="bg-mint/60">
        <div className="mx-auto max-w-7xl px-6 py-14 grid lg:grid-cols-[1fr_1.6fr_0.8fr] gap-8 items-center">
          <div>
            <Eyebrow>Prenez rendez-vous</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold text-navy">Un rendez-vous en quelques clics</h2>
            <p className="mt-3 text-sm text-muted-foreground">Gagnez du temps et réservez votre consultation en ligne.</p>
            <div className="mt-6 flex gap-4">
              <CalendarDays className="h-10 w-10 text-brand-green" strokeWidth={1.5} />
              <ul className="space-y-2 text-sm text-navy">
                {["Rapide et simple", "Confirmation immédiate", "Choix du spécialiste", "Modification possible"].map((x) => (
                  <li key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 fill-brand-green text-primary-foreground" /> {x}</li>
                ))}
              </ul>
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert("Votre demande de rendez-vous a été envoyée !"); }} className="rounded-xl bg-card shadow-lg p-6 grid sm:grid-cols-2 gap-4">
            <Field label="Nom complet"><input required placeholder="Votre nom complet" className="input" /></Field>
            <Field label="Numéro de téléphone"><input required placeholder="+237 6XX XX XX XX" className="input" /></Field>
            <Field label="Spécialité">
              <select required className="input" defaultValue=""><option value="" disabled>Choisissez une spécialité</option>{specialties.map((s) => <option key={s.t}>{s.t}</option>)}</select>
            </Field>
            <Field label="Date souhaitée"><input required type="date" className="input" /></Field>
            <button className="sm:col-span-2 inline-flex justify-center items-center gap-2 rounded-md bg-primary text-primary-foreground py-3 text-sm font-semibold"><CalendarDays className="h-4 w-4" /> Prendre rendez-vous</button>
            <p className="sm:col-span-2 text-center text-xs text-muted-foreground flex items-center justify-center gap-1"><Lock className="h-3 w-3" /> Vos informations sont sécurisées et confidentielles.</p>
          </form>
          <div className="relative hidden lg:block">
            <img src={nurse} alt="Infirmière" loading="lazy" width={768} height={1024} className="h-72 w-full object-cover rounded-xl" />
            <div className="absolute -bottom-4 right-0 rounded-lg bg-card shadow-lg px-3 py-2 text-xs flex items-center gap-2 text-navy"><Heart className="h-4 w-4 text-primary" /><span><b>Votre santé</b><br />entre de bonnes mains</span></div>
          </div>
        </div>
      </section>
      {/* <section id="rdv" className="bg-green-soft">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-3xl font-extrabold text-navy">Prenez rendez-vous en ligne</h2>
          <p className="mt-1 text-sm text-muted-foreground">Un service <b className="text-navy">simple</b>, rapide et sécurisé.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid items-end gap-4 rounded-2xl bg-background p-5 shadow-lg md:grid-cols-5">
            {[{ l: "Nom complet", p: "Votre nom complet", i: User }, { l: "Téléphone", p: "+237 6XX XXX XXX", i: Phone }].map(({ l, p, i: I }) => (
              <label key={l} className="text-xs font-semibold text-navy">{l} <span className="text-destructive">*</span>
                <div className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2.5"><I className="h-4 w-4 text-muted-foreground" /><input placeholder={p} className="w-full bg-transparent text-sm font-normal outline-none" /></div>
              </label>
            ))}
            <label className="text-xs font-semibold text-navy">Service souhaité <span className="text-destructive">*</span>
              <div className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2.5"><Stethoscope className="h-4 w-4 text-muted-foreground" /><select className="w-full bg-transparent text-sm font-normal outline-none"><option>Choisir un service</option>{specialties.map((s) => <option key={s.name}>{s.name}</option>)}</select></div>
            </label>
            <label className="text-xs font-semibold text-navy">Date souhaitée <span className="text-destructive">*</span>
              <div className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2.5"><CalendarDays className="h-4 w-4 text-muted-foreground" /><input type="date" className="w-full bg-transparent text-sm font-normal outline-none" /></div>
            </label>
            <button className="rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground">Prendre rendez-vous</button>
            <p className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground md:col-span-5"><Lock className="h-3 w-3" />Vos informations sont sécurisées et confidentielles.</p>
          </form>
        </div>
      </section> */}

      {/* ABOUT */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Une polyclinique moderne<br />au service de votre santé</h2>
            <p className="mt-4 max-w-lg text-sm text-navy-foreground/80">Polyclinique Solumed allie expertise médicale, technologie de pointe et prise en charge humaine pour vous offrir le meilleur des soins à Yaoundé.</p>
            <div className="mt-6 grid max-w-lg grid-cols-2 gap-4 text-xs">
              {[{ i: Monitor, t: "Plateau technique moderne" }, { i: UserCheck, t: "Suivi personnalisé" }, { i: Users, t: "Équipe médicale qualifiée" }, { i: Ear, t: "Une écoute attentive" }, { i: Zap, t: "Prise en charge rapide" }, { i: Home, t: "Des soins pour toute la famille" }].map(({ i: I, t }) => (
                <div key={t} className="flex items-center gap-3"><div className="grid h-8 w-8 place-items-center rounded-full bg-navy-foreground/10"><I className="h-4 w-4" /></div>{t}</div>
              ))}
            </div>
            <a className="mt-8 inline-flex items-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-semibold text-navy">En savoir plus sur Solumed<ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="relative">
            <img src={doctor} alt="Médecin de la Polyclinique Solumed" loading="lazy" className="ml-auto h-[420px] w-full max-w-md rounded-2xl object-cover" />
            <div className="absolute left-0 top-4 w-40 rounded-xl bg-background p-4 text-navy shadow-xl"><div className="text-[10px] text-muted-foreground">Patients aujourd'hui</div><div className="flex items-end justify-between"><div><div className="text-2xl font-extrabold">124</div><div className="text-[10px] text-brand-green">+12% vs hier</div></div><BarChart3 className="h-7 w-7 text-navy" /></div></div>
            <div className="absolute left-0 top-36 w-40 rounded-xl bg-background p-4 text-navy shadow-xl"><div className="text-[10px] text-muted-foreground">Taux de satisfaction</div><div className="flex items-center justify-between"><div className="text-2xl font-extrabold">98%</div><div className="h-8 w-8 rounded-full border-4 border-brand-green" /></div><span className="mt-1 inline-block rounded bg-green-soft px-2 text-[10px] font-semibold text-brand-green">Excellente</span></div>
            <div className="absolute bottom-6 right-4 rounded-xl bg-background px-5 py-3 text-center text-sm text-navy shadow-xl">« Soigner avec humanité,<br />aujourd'hui et demain. »</div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex items-end justify-between">
          <div><h2 className="text-3xl font-extrabold text-navy">Ils nous font confiance</h2><p className="mt-1 text-sm text-muted-foreground">Des centaines de patients nous font déjà confiance. Voici leurs témoignages.</p></div>
          <a className="hidden items-center gap-2 rounded-lg border border-navy/30 px-4 py-2 text-xs font-semibold text-navy md:flex">Voir tous les avis<ArrowRight className="h-3 w-3" /></a>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-blue-soft font-bold text-navy">{r.name[0]}</div>
                <div><div className="font-bold text-navy">{r.name}</div><div className="text-xs text-muted-foreground">Yaoundé</div><div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-star text-star" />)}</div></div>
              </div>
              <p className="mt-4 text-sm text-navy">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="flex items-end justify-between">
          <div><h2 className="text-3xl font-extrabold text-navy">Nous trouver à Yaoundé</h2><p className="mt-1 text-sm text-muted-foreground">Un accès facile, en plein cœur de la ville.</p></div>
          <a href="https://maps.google.com/?q=Carrefour+TKC+Biyem-Assi+Yaoundé" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-lg border border-navy/30 px-4 py-2 text-xs font-semibold text-navy md:flex">Obtenir l'itinéraire<ArrowRight className="h-3 w-3" /></a>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-[2fr_1fr]">
          <div className="relative overflow-hidden rounded-xl border bg-background">
            <img src={directionMap.url} alt="Plan d'accès à la Polyclinique Solumed depuis le Carrefour TKC, Biyem-Assi" loading="lazy" className="h-auto w-full" />
            <a href="https://maps.app.goo.gl/uvtwHxjVvaJjNvnE6?g_st=aw" target="_blank" rel="noreferrer" aria-label="Ouvrir la Polyclinique La Solumed dans Google Maps" title="Ouvrir dans Google Maps" className="absolute cursor-pointer" style={{ left: "30.9%", top: "77.6%", width: "8.7%", height: "14.1%" }} />
          </div>
          <div className="space-y-3">
            {[{ i: MapPin, t: "Adresse", a: "Carrefour TKC, Entrée Prodige", b: "100m du goudron, Biyem-Assi, Yaoundé" }, { i: Phone, t: "Téléphone", a: "+237 652 467 154 / +237 686 204 678", b: "Urgences 24h/24 — Consultations 7h00 - 20h00" }, { i: MessageCircle, t: "WhatsApp", a: "+237 686 204 678", b: "Réponse rapide garantie" }, { i: Mail, t: "Email", a: "contact@solumed.cm", b: "Nous vous répondons sous 24h" }].map(({ i: I, t, a, b }) => (
              <div key={t} className="flex items-start gap-3 rounded-xl border bg-card p-3"><div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-green"><I className="h-4 w-4 text-navy-foreground" /></div><div className="text-xs"><div className="font-bold text-navy">{t}</div><div className="text-navy">{a}</div><div className="text-muted-foreground">{b}</div></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-xs text-xs text-navy-foreground/70">Une polyclinique moderne, humaine et accessible, au service de votre santé et de celle de votre famille à Yaoundé.</p>
            <div className="mt-4 flex gap-2">{[Facebook, Instagram, Linkedin, Youtube].map((I, k) => <div key={k} className="grid h-7 w-7 place-items-center rounded-full bg-navy-foreground/10"><I className="h-3.5 w-3.5" /></div>)}</div>
          </div>
          {[
            { h: "Liens rapides", l: ["Accueil", "Nos spécialités", "Nos services", "À propos", "Actualités", "Contact"] },
            { h: "Nos services", l: ["Prise de rendez-vous", "Urgences 24h/24", "Hospitalisation", "Imagerie médicale", "Laboratoire", "Pharmacie"] },
            { h: "Informations", l: ["FAQ", "Assurances", "Recrutement", "Mentions légales", "Politique de confidentialité"] },
          ].map((c) => (
            <div key={c.h}><div className="text-sm font-bold">{c.h}</div><ul className="mt-3 space-y-1.5 text-xs text-navy-foreground/70">{c.l.map((x) => <li key={x}>{x}</li>)}</ul></div>
          ))}
        </div>
        <div className="border-t border-navy-foreground/10">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-6 py-4 text-[11px] text-navy-foreground/60">
            <span>© 2026 Polyclinique Solumed. Tous droits réservés.</span>
            <span className="flex items-center gap-1">Conçu avec <Heart className="h-3 w-3 fill-destructive text-destructive" /> pour une meilleure santé au Cameroun. <ShieldCheck className="h-3 w-3" /></span>
          </div>
        </div>
      </footer>
    </div>
  );
}


function SpecialtyCard({ icon: I, t, d, slug }: { icon: typeof Clock; t: string; d: string; slug?: string }) {
  const cls = "flex gap-5 rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow";
  const inner = (
    <>
      <I className="h-10 w-10 text-brand-green shrink-0" strokeWidth={1.5} />
      <div>
        <h3 className="font-bold text-navy">{t}</h3>
        <p className="text-sm text-muted-foreground">{d}</p>
        {slug ? (
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary underline">En savoir plus <ArrowRight className="h-4 w-4" /></span>
        ) : (
          <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary underline">En savoir plus <ArrowRight className="h-4 w-4" /></a>
        )}
      </div>
    </>
  );

  return slug
    ? <Link to="/specialites/$slug" params={{ slug }} aria-label={`Voir la page ${t}`} className={cls}>{inner}</Link>
    : <div className={cls}>{inner}</div>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="text-xs font-semibold text-navy space-y-1 block">{label} <span className="text-destructive">*</span>{children}</label>;
}

function Contact({ icon: I, t, l }: { icon: typeof Clock; t: string; l: string[] }) {
  return (
    <div className="rounded-lg border bg-card p-4 flex gap-3">
      <I className="h-5 w-5 text-primary shrink-0" />
      <div className="text-xs"><b className="text-navy">{t}</b>{l.map((x) => <p key={x} className="text-muted-foreground">{x}</p>)}</div>
    </div>
  );
}

function FootCol({ t, l }: { t: string; l: string[] }) {
  return <div><b>{t}</b><ul className="mt-3 space-y-1.5 text-xs text-navy-foreground/70">{l.map((x) => <li key={x}><a href="#">{x}</a></li>)}</ul></div>;
}