import { Link } from "@tanstack/react-router";
import { Phone, CalendarDays, Stethoscope, CheckCircle2, ArrowRight, ArrowLeft, MapPin, ShieldCheck, FileText, ChevronDown, MessageCircle } from "lucide-react";
import type { Specialty } from "@/lib/specialties";
import { specialtyDetails } from "@/lib/specialty-details";
import { getServicePath } from "@/lib/service-links";
import { Button } from "@/components/ui/button";
import { Navbar } from "./navbar";

function Header() {
  return <Navbar/>;
}

export function SpecialtyPage({ s }: { s: Specialty }) {
  const detail = specialtyDetails[s.slug];
  if (!detail) return null;
  return <div className="min-h-screen bg-background text-navy">
    <Header />
    <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-4 text-xs text-muted-foreground sm:px-6">
      <Link to="/" className="hover:text-brand-green">Accueil</Link><span>/</span><Link to="/" hash="services" className="hover:text-brand-green">Services</Link><span>/</span><span className="truncate text-navy">{s.name}</span>
    </div>
    <section className="group relative isolate overflow-hidden bg-navy">
      <img src={s.hero} alt={s.name} width={1280} height={768} className="absolute inset-0 h-full w-full object-cover object-top" />
      <div className="specialty-hero-shade absolute inset-0" />
      <div className="specialty-enter relative mx-auto flex min-h-[350px] max-w-6xl flex-col justify-center px-4 py-10 sm:px-6 md:min-h-[380px]">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-primary-foreground"><span className="h-2 w-2 rounded-full bg-brand-green" />POLYCLINIQUE SOLUMED · YAOUNDÉ</div>
        <h1 className={`max-w-2xl font-extrabold leading-tight text-primary-foreground ${s.name.length > 40 ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"}`}>{s.name}</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground md:text-base">{s.subtitle}</p>
        {s.badge && <span className={`mt-4 w-fit rounded-md px-3 py-1.5 text-xs font-bold text-primary-foreground ${s.badgeColor === "green" ? "bg-brand-green" : "bg-destructive"}`}>{s.badge}</span>}
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="h-11 bg-brand-green px-5 text-primary-foreground hover:bg-brand-green/90"><a href="#rendez-vous"><CalendarDays />Prendre rendez-vous</a></Button>
          <Button asChild variant="outline" className="h-11 border-primary-foreground/40 bg-background/10 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground"><a href="#prestations">Nos prestations<ArrowRight /></a></Button>
        </div>
      </div>
    </section>
    <div className="border-b bg-soft-blue">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-4 text-xs font-medium sm:px-6">
        <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-green" />Biyem-Assi, Yaoundé</span>
        <span className="flex items-center gap-2"><Stethoscope className="h-4 w-4 text-brand-green" />Prise en charge spécialisée</span>
        <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-green" />Écoute & confidentialité</span>
      </div>
    </div>
    <main className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-9 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="min-w-0">
        <section className="specialty-enter">
          <p className="text-xs font-bold uppercase text-brand-green">Votre santé, notre priorité</p>
          <h2 className="mt-2 text-2xl font-extrabold leading-snug">{detail.title}</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{detail.intro}</p>
        </section>
        <section id="prestations" className="scroll-mt-24 pt-9">
          <div className="flex items-center justify-between gap-3"><h2 className="text-xl font-extrabold">Nos services</h2><span className="text-xs text-muted-foreground">{s.services.length} prestations</span></div>
          <div className={`mt-5 grid gap-4 sm:grid-cols-2 ${s.services.length === 3 ? "xl:grid-cols-3" : ""}`}>
            {s.services.map((srv, i) => <article key={srv.title} className="group service-link flex flex-col overflow-hidden rounded-lg border bg-card">
              <div className="overflow-hidden"><img src={i % 2 === 0 ? s.hero : detail.image} alt={i % 2 === 0 ? `Illustration du service ${s.name}` : detail.imageAlt} loading="lazy" width={1024} height={768} className="specialty-photo aspect-[16/10] w-full object-cover object-top" /></div>
              <div className="flex flex-1 flex-col p-4"><h3 className="text-sm font-bold leading-5">{srv.title}</h3><p className="mt-2 flex-1 text-xs leading-6 text-muted-foreground">{detail.descriptions[i]}</p><div className="mt-4 border-t pt-3">{srv.note && <p className="mb-1 text-[11px] text-muted-foreground">{srv.note}</p>}{srv.price && <span className="text-base font-extrabold text-brand-green">{srv.price}</span>}</div></div>
            </article>)}
          </div>
        </section>
        <section className="grid gap-6 border-b py-9 md:grid-cols-2">
          <div className="group overflow-hidden rounded-lg"><img src={detail.image} alt={detail.imageAlt} width={1024} height={768} loading="lazy" className="specialty-photo aspect-[4/3] h-full w-full object-cover object-top" /></div>
          <div className="self-center"><p className="text-xs font-bold text-brand-green">À VOTRE ÉCOUTE</p><h2 className="mt-2 text-xl font-extrabold">{s.symptoms.length ? "Quand consulter ?" : "Un accompagnement au quotidien"}</h2><div className="mt-4 space-y-3">{(s.symptoms.length ? s.symptoms : s.checks ?? []).map(item => <div key={item} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /><span>{item}</span></div>)}</div>{s.symptoms.length > 0 && <p className="mt-4 text-xs leading-5 text-muted-foreground">Ces symptômes peuvent avoir différentes causes. Une consultation permet d’orienter le diagnostic.</p>}</div>
        </section>
        <section id="informations" className="scroll-mt-24 border-b py-9">
          <h2 className="text-xl font-extrabold">Votre parcours de soins</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">{detail.steps.map((step, i) => <div key={step}><span className="flex h-9 w-9 items-center justify-center rounded-full bg-soft-blue text-sm font-bold text-brand-green">0{i + 1}</span><h3 className="mt-3 text-sm font-bold">{["Votre accueil", "Votre prise en charge", "Votre suivi"][i]}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">{step}</p></div>)}</div>
          <div className="mt-7 border-l-2 border-brand-green bg-soft-blue px-5 py-5"><h3 className="flex items-center gap-2 text-sm font-bold"><FileText className="h-4 w-4 text-brand-green" />Bien préparer votre visite</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-xs leading-6 text-muted-foreground">{detail.preparation.map(p => <li key={p}>{p}</li>)}</ul></div>
        </section>
        <section className="py-9"><h2 className="text-xl font-extrabold">Questions fréquentes</h2><div className="mt-4 divide-y border-y">{detail.faq.map(f => <details key={f.question} className="group py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">{f.question}<ChevronDown className="h-4 w-4 shrink-0 text-brand-green transition-transform group-open:rotate-180" /></summary><p className="mt-3 pr-6 text-sm leading-7 text-muted-foreground">{f.answer}</p></details>)}</div></section>
        <section><h2 className="text-xl font-extrabold">Services associés</h2><div className="mt-4 grid grid-cols-2 gap-3">{s.related.map(r => { const path = getServicePath(r); const classes = "flex items-center gap-3 rounded-lg border p-4 text-xs font-semibold"; const content = <><Stethoscope className="h-4 w-4 shrink-0 text-brand-green" /><span>{r}</span>{path && <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-brand-green" />}</>; return path ? <Link key={r} to={path} className={`${classes} service-link`}>{content}</Link> : <div key={r} className={classes}>{content}</div>; })}</div></section>
      </div>
      <aside id="rendez-vous" className="scroll-mt-24 lg:sticky lg:top-24">
        <div className="rounded-lg border bg-card p-6 shadow-sm"><div className="flex items-center gap-2 text-xs font-bold text-brand-green"><span className="h-2 w-2 rounded-full bg-brand-green" />PRENEZ RENDEZ-VOUS</div><h2 className="mt-3 text-xl font-extrabold leading-snug">Parlons de votre santé</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{s.cta}</p><div className="my-5 border-y py-4"><p className="text-xs text-muted-foreground">Service souhaité</p><p className="mt-1 text-sm font-bold">{s.name}</p></div><Button asChild className="h-auto w-full whitespace-normal bg-navy py-3 text-primary-foreground"><a href="tel:+237652467154"><Phone />+237 652 467 154</a></Button><p className="mt-3 text-center text-xs leading-5 text-muted-foreground">Contactez l’accueil pour convenir d’une date et confirmer les disponibilités.</p><div className="mt-5 flex items-start gap-2 border-t pt-4 text-xs leading-5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /><span>Carrefour TKC<br />Biyem-Assi, Yaoundé</span></div>{s.whatsapp && <p className="mt-3 flex items-center gap-2 text-xs text-brand-green"><MessageCircle className="h-4 w-4" />Résultats via WhatsApp</p>}</div>
        <Link to="/" hash="services" className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground hover:text-brand-green"><ArrowLeft className="h-4 w-4" />Toutes les spécialités</Link>
      </aside>
    </main>
    <footer className="mt-5 border-t bg-soft-blue"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-xs sm:px-6"><Link to="/" className="font-extrabold">POLYCLINIQUE SOLUMED</Link><span className="text-muted-foreground">Votre santé, notre priorité.</span><a href="tel:+237652467154" className="flex items-center gap-2 font-semibold text-brand-green"><Phone className="h-4 w-4" />+237 652 467 154</a></div></footer>
  </div>;
}
