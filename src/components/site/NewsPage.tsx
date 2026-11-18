import { useState } from "react";
import { Search, CalendarDays, Mail } from "lucide-react";
import { SiteLayout, Breadcrumb } from "./Layout";
import rose from "@/assets/octobre-rose.jpg";
import a1 from "@/assets/art1.jpg"; import a2 from "@/assets/art2.jpg"; import a3 from "@/assets/art3.jpg";
import a4 from "@/assets/art4.jpg"; import a5 from "@/assets/art5.jpg"; import a6 from "@/assets/art6.jpg";

const cats = ["Tous", "Conseils santé", "Promotions", "Nouveautés", "Événements"];
const articles = [
  [a1, "Promotions", "Promotion dentisterie -20% : Profitez-en maintenant", "10 Octobre 2024"],
  [a2, "Nouveautés", "Nouveau service : La Radiologie Digitale est arrivée chez Solumed", "5 Octobre 2024"],
  [a3, "Conseils santé", "Vaccinations gratuites : Le programme complet pour vos enfants", "28 Septembre 2024"],
  [a4, "Conseils santé", "Arthrose : Quand consulter un rhumatologue ?", "20 Septembre 2024"],
  [a5, "Conseils santé", "Hypertension : Les signes à ne pas ignorer", "15 Septembre 2024"],
  [a6, "Événements", "Journée de santé communautaire à Biyem-Assi", "8 Septembre 2024"],
];

export function NewsPage() {
  const [cat, setCat] = useState("Tous");
  const list = articles.filter((a) => cat === "Tous" || a[1] === cat);
  return (
    <SiteLayout>
      <section className="bg-navy-gradient text-background">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-5">
          <Breadcrumb current="Actualités" />
          <div className="mt-8 text-center">
            <h1 className="text-4xl font-extrabold">Actualités & Conseils Santé</h1>
            <p className="mt-2 text-background/80">Restez informé pour mieux prendre soin de vous.</p>
            <div className="mx-auto mt-6 flex max-w-md items-center rounded-full bg-background p-1 pl-5">
              <input placeholder="Rechercher un article..." className="flex-1 bg-transparent text-sm text-foreground outline-none" />
              <button className="grid h-9 w-9 place-items-center rounded-full bg-navy" aria-label="Rechercher"><Search className="h-4 w-4" /></button>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {cats.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-1.5 text-xs font-semibold ${cat === c ? "border-brand bg-brand" : "border-background/50 hover:bg-background/10"}`}>{c}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <h2 className="text-xl font-bold text-navy">Article à la une</h2>
        <article className="mt-4 grid overflow-hidden rounded-lg border border-border shadow-card md:grid-cols-2">
          <img src={rose} alt="Octobre Rose" width={1200} height={800} className="h-full min-h-64 w-full object-cover object-left" />
          <div className="p-7">
            <span className="rounded-full bg-rose/15 px-3 py-1 text-xs font-semibold text-rose">Conseils santé</span>
            <h3 className="mt-4 text-2xl font-bold text-navy">Octobre Rose : Tout savoir sur le dépistage du cancer du sein</h3>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><CalendarDays className="h-3.5 w-3.5" />15 Octobre 2024</div>
            <p className="mt-4 text-sm text-muted-foreground">Le dépistage précoce du cancer du sein sauve des vies. Découvrez quand et comment vous faire dépister, les signes à surveiller et nos conseils de prévention.</p>
            <a href="#" className="mt-5 inline-block text-sm font-semibold text-brand">Lire l'article →</a>
          </div>
        </article>

        <h2 className="mt-12 text-xl font-bold text-navy">Nos derniers articles</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(([img, c, t, d]) => (
            <article key={t} className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <div className="relative">
                <img src={img} alt={t} loading="lazy" width={500} height={400} className="h-48 w-full object-cover" />
                <span className="absolute bottom-2 left-2 rounded bg-brand px-2 py-0.5 text-[11px] font-semibold text-brand-foreground">{c}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-navy">{t}</h3>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground"><CalendarDays className="h-3.5 w-3.5" />{d}</div>
                <p className="mt-2 text-xs text-muted-foreground">Découvrez tous les détails et nos conseils de spécialistes pour prendre soin de votre santé.</p>
                <a href="#" className="mt-3 inline-block text-xs font-semibold text-brand">Lire l'article →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 md:flex-row">
          <div className="flex items-center gap-4">
            <Mail className="h-10 w-10" />
            <div><h3 className="text-lg font-bold">Recevez nos actualités et conseils santé</h3><p className="text-sm opacity-85">Inscrivez-vous à notre newsletter pour ne rien manquer.</p></div>
          </div>
          <form className="flex w-full max-w-md overflow-hidden rounded-md bg-background p-1" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Votre adresse email" className="flex-1 bg-transparent px-3 text-sm text-foreground outline-none" />
            <button className="rounded bg-navy px-5 py-2 text-sm font-semibold text-primary-foreground">S'abonner</button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
