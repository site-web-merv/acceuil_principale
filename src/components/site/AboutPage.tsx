import { Link } from "@tanstack/react-router";
import { UserRound, Eye, Heart, CheckCircle2, CalendarCheck, FileText, FlaskConical, Bell, Stethoscope } from "lucide-react";
import { SiteLayout } from "./Layout";
import { MapitalBadge } from "./Mapital";
import team from "@/assets/equipe.jpg";
import d1 from "@/assets/doc1.jpg"; import d2 from "@/assets/doc2.jpg"; import d3 from "@/assets/doc3.jpg"; import d4 from "@/assets/doc4.jpg";
import d5 from "@/assets/doc6.jpg"; import d6 from "@/assets/doc5.jpg"; import d7 from "@/assets/doc8.jpg"; import d8 from "@/assets/doc7.jpg";

const docs = [
  [d1, "Dr. Jean Mbarga", "Médecine générale", "Plus de 10 ans d'expérience"],
  [d2, "Dr. Amina Nguimatsia", "Pédiatrie", "Spécialiste en santé infantile"],
  [d3, "Dr. Paul Ekomo", "Gynécologie", "Expert en santé de la femme"],
  [d4, "Dr. Claire Ndom", "Cardiologie", "Prise en charge des maladies cardio-vasculaires"],
  [d5, "Dr. Michel Tchinda", "Dermatologie", "Spécialiste des affections cutanées"],
  [d6, "Dr. Synthia Bilou", "Ophtalmologie", "Soins de santé visuelle"],
  [d7, "Dr. Louis Mvondo", "Orthopédie", "Spécialiste des pathologies ostéo-articulaires"],
  [d8, "Dr. Grace Etoune", "Dentisterie", "Soins dentaires complets pour tous"],
];

export function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <img src={team} alt="Équipe médicale Solumed" width={1600} height={704} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/45" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center text-background md:py-32">
          <h1 className="text-4xl font-extrabold md:text-5xl">À propos de Polyclinique Solumed</h1>
          <p className="mt-3 text-lg">Your health, our priority — depuis notre fondation</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <h2 className="text-xl font-bold text-navy">Notre mission, notre vision, nos valeurs</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {[[UserRound, "Notre Mission", "Offrir des soins de qualité accessibles à tous les camerounais"],
            [Eye, "Notre Vision", "Devenir la polyclinique de référence à Yaoundé et au Cameroun"],
            [Heart, "Nos Valeurs", "Excellence, Humanité, Innovation, Accessibilité"]].map(([I, t, d]: any) => (
            <div key={t} className="rounded-lg bg-surface p-7 text-center">
              <I className={`mx-auto h-8 w-8 text-brand ${t === "Notre Vision" ? "" : "fill-brand"}`} />
              <h3 className="mt-3 font-bold text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12">
        <h2 className="text-xl font-bold text-navy">Nos chiffres clés</h2>
        <div className="mt-6 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[["14+", "Spécialités"], ["24h/24", "Disponible"], ["100%", "Vaccins gratuits"], ["2", "Adresses", "(Expansion à venir)"]].map(([n, l, s]) => (
            <div key={l}><div className="text-5xl font-extrabold text-navy">{n}</div><div className="mt-1 text-sm font-semibold text-brand">{l}</div>{s && <div className="text-xs text-muted-foreground">{s}</div>}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14">
        <h2 className="text-xl font-bold text-navy">Des spécialistes expérimentés</h2>
        <p className="text-sm text-muted-foreground">Une équipe engagée pour votre santé</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {docs.map(([img, n, s, d]) => (
            <div key={n} className="rounded-lg border border-border bg-card p-5 text-center shadow-card">
              <img src={img} alt={n} loading="lazy" width={400} height={400} className="mx-auto h-24 w-24 rounded-full object-cover" />
              <h3 className="mt-3 font-bold text-navy">{n}</h3>
              <div className="text-sm font-semibold text-brand">{s}</div>
              <p className="mt-1 min-h-10 text-xs text-muted-foreground">{d}</p>
              <Link to="/contact" className="mt-2 inline-block text-sm font-semibold text-brand">Prendre RDV →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-gradient text-background">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Une clinique 100% digitalisée</h2>
            <p className="mt-2 text-background/80">Avec MAPITAL, votre dossier médical vous suit partout.</p>
            <ul className="mt-5 space-y-2.5">
              {["Prise de rendez-vous en ligne", "Dossier médical sécurisé", "Résultats d'examens en ligne", "Notifications et rappels", "Une meilleure expérience patient"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-5 w-5 fill-brand text-navy" />{t}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href="#" className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground">Découvrir Mapital</a>
              <span className="rounded-md border border-background/30 px-3 py-2"><MapitalBadge light /></span>
            </div>
          </div>
          <div className="rounded-xl bg-background p-4 text-foreground shadow-card">
            <div className="grid grid-cols-[140px_1fr] gap-4">
              <div className="space-y-2 border-r border-border pr-3 text-xs">
                <div className="mb-3 font-extrabold text-navy">Mapital</div>
                {[[CalendarCheck, "Mes rendez-vous"], [FileText, "Dossier médical"], [FlaskConical, "Mes résultats"], [Stethoscope, "Mes ordonnances"], [Bell, "Notifications"]].map(([I, t]: any, i) => (
                  <div key={t} className={`flex items-center gap-2 rounded px-2 py-1.5 ${i === 0 ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}><I className="h-3.5 w-3.5" />{t}</div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-navy">Prochain rendez-vous</div>
                <div className="mt-3 flex items-center gap-3 rounded-lg border border-border p-3">
                  <img src={d2} alt="" className="h-10 w-10 rounded-full object-cover" />
                  <div className="text-xs"><div className="font-bold text-navy">Dr. Amina Nguimatsia</div><div className="text-muted-foreground">Pédiatre</div><div className="mt-1 text-navy">24 Oct 2024 · 10h00</div></div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2 text-center text-[10px] text-muted-foreground">
                  {["Analyses", "Radiologie", "Ordonnances", "Paiement"].map((t) => <div key={t} className="rounded bg-surface py-3">{t}</div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
