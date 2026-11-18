import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, ArrowRight, Clock, CheckCircle2, HeartHandshake, Smartphone, ChevronRight, Baby, Stethoscope, Syringe } from "lucide-react";
import pediatrie from "@/assets/pediatrie.jpg";
import doctor from "@/assets/doctor.jpg";
import gyneco from "@/assets/gyneco.jpg";
import generale from "@/assets/generale.jpg";
import { Navbar } from "@/components/navbar";


export const Route = createFileRoute("/specialites/pediatrie")({
  head: () => ({
    meta: [
      { title: "Pédiatrie — Polyclinique Solumed" },
      { name: "description", content: "Des soins adaptés aux enfants, de la naissance à l'adolescence : consultations, vaccinations et suivi de croissance." },
      { property: "og:title", content: "Pédiatrie — Polyclinique Solumed" },
      { property: "og:description", content: "Des soins adaptés aux enfants, de la naissance à l'adolescence. -20% sur toutes les consultations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pediatrie,
});

function Check({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
      <CheckCircle2 className="h-3.5 w-3.5 text-brand-green" /> {children}
    </span>
  );
}

const soins = [
  { title: "Consultation pédiatrique", text: "Un examen complet de votre enfant pour suivre sa santé et répondre à toutes vos questions. Nos pédiatres prennent le temps d'écouter et de rassurer les parents.", time: "30 minutes", price: "À partir de 10 000 FCFA", checks: ["Approche douce", "Conseils aux parents"] },
  { title: "Vaccination", text: "Tous les vaccins du calendrier vaccinal, administrés dans des conditions optimales de sécurité. Un carnet de vaccination à jour pour protéger votre enfant.", time: "15 à 20 minutes", price: "À partir de 5 000 FCFA", checks: ["Calendrier vaccinal complet", "Carnet de suivi"] },
  { title: "Suivi de croissance", text: "Pesée, mensurations et courbes de croissance : nous suivons le développement de votre enfant de la naissance à l'adolescence pour dépister toute anomalie au plus tôt.", time: "20 à 30 minutes", price: "À partir de 8 000 FCFA", checks: ["Courbes de croissance", "Dépistage précoce"] },
  { title: "Urgences pédiatriques", text: "Fièvre, douleurs, blessures : une prise en charge rapide et rassurante pour les petits comme pour les grands, avec une équipe disponible et à l'écoute.", time: "Prise en charge immédiate", price: "À partir de 15 000 FCFA", checks: ["Sans rendez-vous", "Équipe disponible"] },
];

function Pediatrie() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative z-10 px-6 py-10 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
            <p className="text-xs text-muted-foreground">Accueil <span className="mx-2">›</span> Services <span className="mx-2">›</span> <span className="font-semibold text-navy">Pédiatrie</span></p>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-navy md:text-6xl">Pédiatrie</h1>
            <div className="mt-5 h-1 w-12 rounded bg-brand-green" />
            <p className="mt-6 text-lg text-muted-foreground">Des soins adaptés aux enfants, de la naissance à l'adolescence.</p>
            <div className="mt-8 flex items-center gap-4">
              <Link to="/" hash="rdv" className="inline-flex items-center gap-3 rounded-md bg-navy px-7 py-4 text-sm font-semibold text-primary-foreground">
                <CalendarDays className="h-4 w-4" /> Prendre RDV <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="rounded-md bg-mint px-4 py-1.5 text-center">
                <div className="text-2xl font-extrabold leading-none text-brand-green">-20%</div>
                <div className="text-[10px] text-brand-green">en ce moment</div>
              </div>
            </div>
            <div className="mt-14 flex flex-wrap gap-10 text-xs text-muted-foreground">
              <span className="flex items-center gap-3"><Baby className="h-6 w-6 text-navy" />Des pédiatres<br />expérimentés</span>
              <span className="flex items-center gap-3"><Stethoscope className="h-6 w-6 text-navy" />Un suivi de la<br />naissance à l'adolescence</span>
              <span className="flex items-center gap-3"><Syringe className="h-6 w-6 text-navy" />Vaccinations<br />à jour</span>
            </div>
          </div>
          <div className="relative min-h-[420px]">
            <img src={pediatrie} alt="Enfant en consultation pédiatrique" width={816} height={816} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
            <p className="absolute bottom-8 right-8 -rotate-12 font-hand text-2xl leading-tight text-navy">Grandir en<br />bonne santé,<br />c'est notre mission !</p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-soft py-10">
        <div className="mx-auto flex max-w-5xl items-start gap-8 px-6">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-navy text-primary-foreground"><Baby className="h-8 w-8" /></div>
          <div>
            <p className="text-xl font-bold text-navy md:text-2xl">“ La pédiatrie accompagne la santé de l'enfant à chaque étape de sa croissance, de la naissance à l'adolescence. ”</p>
            <p className="mt-3 text-sm text-muted-foreground">Un suivi régulier permet de prévenir les maladies, de surveiller la croissance et de rassurer les parents. Nos équipes mettent tout en œuvre pour que chaque visite se déroule dans la confiance et la douceur.</p>
          </div>
        </div>
      </section>

      {/* Soins */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-navy">Nos soins pédiatriques</h2>
            <div className="mt-3 h-1 w-12 rounded bg-brand-green" />
          </div>
          <p className="max-w-md text-right text-sm text-muted-foreground">Une prise en charge complète et bienveillante, pensée pour les enfants et rassurante pour les parents.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {soins.map((s) => (
            <article key={s.title} className="flex gap-5 rounded-xl border bg-card p-4 shadow-sm">
              <div className="relative w-2/5 shrink-0 overflow-hidden rounded-lg">
                <img src={pediatrie} alt={s.title} loading="lazy" width={816} height={816} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-navy"><Clock className="h-4 w-4" />{s.time}</span>
                  <span className="rounded-full bg-navy px-3 py-1 text-[11px] font-semibold text-primary-foreground">{s.price}</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-1.5">{s.checks.map((c) => <Check key={c}>{c}</Check>)}</div>
                <div className="mt-4">
                  <Link to="/" hash="rdv" className="inline-flex items-center gap-2 rounded-md bg-brand-green px-5 py-2 text-xs font-semibold text-secondary-foreground hover:opacity-90">
                    Prendre RDV <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Promo */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-xl bg-navy px-10 py-8 text-primary-foreground">
          <Baby className="absolute -right-4 -top-6 h-48 w-48 opacity-10" />
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-5xl font-extrabold text-mint">-20%</span>
            <div>
              <p className="text-xl font-bold">sur toutes les consultations pédiatriques</p>
              <p className="text-sm opacity-80">Offre limitée — Profitez-en maintenant</p>
            </div>
          </div>
          <Link to="/" hash="rdv" className="mt-5 inline-flex items-center gap-3 rounded-md bg-background px-6 py-3 text-sm font-semibold text-navy">
            <CalendarDays className="h-4 w-4" /> Prendre RDV maintenant <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="absolute bottom-8 right-24 hidden -rotate-12 font-hand text-2xl leading-tight md:block">Des enfants<br />en bonne santé,<br />des parents sereins !</p>
        </div>
      </section>

      {/* RDV */}
      <section className="mt-14 bg-brand-green py-14 text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Offrez à votre enfant<br />le meilleur départ</h2>
            <div className="mt-4 h-1 w-12 rounded bg-background" />
            <p className="mt-6 max-w-md opacity-90">Notre équipe pédiatrique est à votre écoute pour accompagner la santé de vos enfants au quotidien.</p>
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
          <div className="relative">
            <img src={doctor} alt="Médecin pédiatre" loading="lazy" width={768} height={896} className="ml-auto h-[420px] w-auto rounded-xl object-cover" />
            <div className="absolute bottom-6 left-0 rounded-md bg-background/90 px-4 py-2">
              <p className="text-sm font-bold text-navy">Dr. Awa Koné</p>
              <p className="text-xs text-muted-foreground">Pédiatre</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discover */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><h2 className="text-2xl font-extrabold text-navy">Découvrez aussi</h2><div className="mt-3 h-1 w-12 rounded bg-brand-green" /></div>
          <p className="text-sm text-muted-foreground">D'autres services pour prendre soin de votre santé.</p>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <Link to="/specialites/gynecologie" className="flex gap-4 rounded-xl border bg-card p-2 shadow-sm transition hover:shadow-md">
            <img src={gyneco} alt="Gynécologie" loading="lazy" width={816} height={816} className="h-24 w-28 rounded-lg object-cover" />
            <div className="flex flex-col py-2">
              <p className="font-bold text-navy">Gynécologie</p>
              <p className="mt-1 text-xs text-muted-foreground">Un suivi complet pour la santé de la femme à chaque étape de la vie.</p>
              <span className="mt-auto flex items-center gap-1 text-xs font-semibold text-navy">En savoir plus <ChevronRight className="h-3.5 w-3.5" /></span>
            </div>
          </Link>
          <Link to="/" className="flex gap-4 rounded-xl border bg-card p-2 shadow-sm transition hover:shadow-md">
            <img src={generale} alt="Dentisterie" loading="lazy" width={816} height={816} className="h-24 w-28 rounded-lg object-cover" />
            <div className="flex flex-col py-2">
              <p className="font-bold text-navy">Dentisterie</p>
              <p className="mt-1 text-xs text-muted-foreground">Des soins dentaires de qualité pour toute la famille.</p>
              <span className="mt-auto flex items-center gap-1 text-xs font-semibold text-navy">En savoir plus <ChevronRight className="h-3.5 w-3.5" /></span>
            </div>
          </Link>
          <a href="#" className="flex gap-4 rounded-xl border bg-card p-2 shadow-sm transition hover:shadow-md">
            <img src={generale} alt="Médecine générale" loading="lazy" width={816} height={816} className="h-24 w-28 rounded-lg object-cover" />
            <div className="flex flex-col py-2">
              <p className="font-bold text-navy">Médecine générale</p>
              <p className="mt-1 text-xs text-muted-foreground">Des consultations pour toute la famille.</p>
              <span className="mt-auto flex items-center gap-1 text-xs font-semibold text-navy">En savoir plus <ChevronRight className="h-3.5 w-3.5" /></span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
