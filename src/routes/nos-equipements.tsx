import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Baby, CalendarDays, Check, Clock3, Images, MapPin, MessageCircle, ScanLine, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatePresence, LazyMotion, m, useReducedMotion } from "framer-motion";
import { SiteLayout, Breadcrumb } from "@/components/site/Layout";
import { motionEase } from "@/components/site/SiteMotion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { equipmentCategories, filterEquipments, parseEquipmentFilter, type EquipmentFilter } from "@/lib/equipments";
import hero from "@/assets/equipements-hero.webp";

const title = "Nos équipements | Polyclinique Solumed Yaoundé";
const description = "Découvrez les équipements de la Polyclinique Solumed à Yaoundé : néonatologie, imagerie, laboratoire et dentisterie.";
const features = () => import("framer-motion").then((mod) => mod.domMax);
const filters = [{ id: "tous", label: "Tous" }, ...equipmentCategories] as const;

export const Route = createFileRoute("/nos-equipements")({
  validateSearch: (search: Record<string, unknown>): { categorie?: EquipmentFilter } =>
    search["categorie"] === undefined ? {} : { categorie: parseEquipmentFilter(search["categorie"]) },
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: EquipmentPage,
});

type Item = ReturnType<typeof filterEquipments>[number];

function EquipmentVisual({ item }: { item: Item }) {
  const category = equipmentCategories.find(({ id }) => id === item.category);
  const Icon = category?.icon ?? Images;
  const photo = item.photos[0];
  return <div className="media-zoom grid aspect-[16/9] place-items-center overflow-hidden bg-muted text-muted-foreground">
    {photo ? <img src={photo.src} alt={photo.alt} loading="lazy" className="size-full object-cover" /> : <Icon aria-hidden="true" className="size-12" strokeWidth={1.4} />}
  </div>;
}

function BookingLink({ item }: { item: Item }) {
  return <Button asChild className="h-auto min-h-10 whitespace-normal bg-navy text-navy-foreground">
    <Link to={item.service} {...(item.service === "/specialites/pediatrie" ? {} : { hash: item.service === "/specialites/dentisterie" ? "rdv" : "rendez-vous" })}>
      <CalendarDays /> Prendre rendez-vous
    </Link>
  </Button>;
}

function EquipmentCard({ item }: { item: Item }) {
  return <>
    <EquipmentVisual item={item} />
    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <span className="w-fit rounded bg-green-soft px-2.5 py-1 text-xs font-bold text-brand-green">{equipmentCategories.find(({ id }) => id === item.category)?.label}</span>
      <h3 className="mt-3 text-lg font-extrabold text-navy">{item.name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
      <ul className="mb-5 mt-4 flex-1 space-y-2 text-sm text-navy">
        {item.benefits.map((benefit) => <li key={benefit} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-brand-green" />{benefit}</li>)}
      </ul>
      <div className="flex flex-wrap gap-2 border-t pt-4">
        <Dialog>
          <DialogTrigger asChild><Button variant="outline" className="min-h-10" aria-label={`Voir les détails : ${item.name}`}>Détails <ArrowRight className="site-arrow" /></Button></DialogTrigger>
          <DialogContent className="equipment-dialog max-h-[85dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-lg sm:max-w-xl">
            <DialogTitle className="pr-5 text-xl leading-snug text-navy">{item.name}</DialogTitle>
            <DialogDescription>{item.description}</DialogDescription>
            {item.photos.length ? <div className="grid gap-3 sm:grid-cols-2">{item.photos.map((photo) => <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />)}</div> : <EquipmentVisual item={item} />}
            <div><h3 className="font-bold text-navy">À quoi cela sert pour le patient ?</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{item.details}</p></div>
            <DialogClose asChild><BookingLink item={item} /></DialogClose>
          </DialogContent>
        </Dialog>
        <BookingLink item={item} />
      </div>
    </div>
  </>;
}

function EquipmentPage() {
  const { categorie = "tous" } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const reduced = useReducedMotion();
  const visible = filterEquipments(categorie);
  const benefits = [
    { icon: ScanLine, title: "Précision du diagnostic", text: "Des examens qui éclairent les décisions de votre médecin." },
    { icon: Clock3, title: "Rapidité des résultats", text: "Des résultats disponibles plus vite selon l’examen prescrit." },
    { icon: Sparkles, title: "Confort", text: "Du matériel adapté au déroulement de vos soins." },
    { icon: ShieldCheck, title: "Sécurité", text: "Des équipements utilisés selon les besoins de chaque patient." },
  ];
  return <SiteLayout>
    <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
      <img src={hero} alt="Façade de la Polyclinique Solumed à Yaoundé" width={1440} height={821} fetchPriority="high" className="absolute inset-0 size-full object-cover object-center" />
      <div aria-hidden="true" className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Breadcrumb current="Nos équipements" />
        <h1 className="hero-line mt-5 text-4xl font-extrabold md:text-6xl">Nos équipements</h1>
        <p className="hero-line mt-4 max-w-md text-lg font-medium" data-step="1">Des équipements modernes au service de votre santé</p>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <div data-reveal className="max-w-3xl">
        <h2 className="text-2xl font-extrabold text-navy md:text-3xl">La technologie au service des soins</h2>
        <p className="mt-3 leading-7 text-muted-foreground">La Polyclinique Solumed investit dans la technologie médicale pour soutenir le travail de ses équipes. Ces équipements les aident à réaliser des examens et des soins adaptés à chaque patient. Lors de votre consultation, le personnel vous explique quel matériel sera utilisé et pourquoi.</p>
      </div>
      <Tabs value={categorie} onValueChange={(value) => void navigate({ search: value === "tous" ? {} : { categorie: parseEquipmentFilter(value) }, replace: true, resetScroll: false })} className="mt-8">
        <TabsList aria-label="Catégories d’équipements" className="inline-flex h-auto max-w-full flex-wrap justify-start gap-1 bg-muted p-1.5">
          {filters.map(({ id, label }) => <TabsTrigger key={id} value={id} className="min-h-10 data-[state=active]:bg-navy data-[state=active]:text-navy-foreground">{label}</TabsTrigger>)}
        </TabsList>
        <p role="status" className="my-4 text-sm font-medium text-muted-foreground">{visible.length} équipement{visible.length === 1 ? "" : "s"}</p>
        <TabsContent value={categorie} className="mt-0" data-no-reveal>
          <LazyMotion features={features} strict>
            <div className="relative grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence initial={false} mode="popLayout">
                {visible.map((item, index) => <m.article layout={reduced ? false : "position"} key={item.id}
                  initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} {...(reduced ? {} : { exit: { opacity: 0 } })}
                  transition={{ duration: reduced ? 0 : 0.45, ease: motionEase, delay: reduced ? 0 : index * 0.08, layout: { duration: 0.38, ease: motionEase } }}
                  className="equipment-card flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm"><EquipmentCard item={item} /></m.article>)}
              </AnimatePresence>
            </div>
          </LazyMotion>
        </TabsContent>
      </Tabs>
    </section>

    <section className="bg-blue-soft">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:py-16">
        <div className="grid aspect-[16/10] place-items-center rounded-lg border bg-muted text-muted-foreground"><Baby className="size-20" aria-hidden="true" strokeWidth={1.2} /></div>
        <div>
          <h2 className="text-3xl font-extrabold text-navy">Néonatologie</h2>
          <p className="mt-4 max-w-lg leading-7 text-navy">Qu’ils soient prématurés ou nés à terme, certains bébés ont besoin de soins et d’une surveillance rapprochée dès les premières heures. L’équipe adapte la prise en charge à chaque nouveau-né et accompagne les parents pendant son séjour.</p>
          <Button asChild variant="outline" className="mt-5"><Link to="/specialites/pediatrie">Découvrir la pédiatrie <ArrowRight className="site-arrow" /></Link></Button>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <h2 className="text-3xl font-extrabold text-navy">Pourquoi cela compte pour vous</h2>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {benefits.map(({ icon: Icon, title: heading, text }) => <article key={heading} className="rounded-lg border bg-card p-5"><Icon className="size-6 text-brand-green" /><h3 className="mt-3 font-bold text-navy">{heading}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
      </div>
    </section>

    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 py-10 lg:grid-cols-[1fr_auto]">
        <div><h2 className="text-2xl font-extrabold">Prendre rendez-vous</h2><p className="mt-3 flex items-start gap-2 text-sm"><MapPin className="size-4 shrink-0" />Carrefour TKC, Entrée Prodige (100m du goudron), Biyem-Assi, Yaoundé.</p></div>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-background text-navy hover:bg-blue-soft"><Link to="/" hash="rdv"><CalendarDays /> Prendre RDV</Link></Button>
          <Button asChild variant="outline" className="border-navy-foreground/50 bg-transparent text-navy-foreground hover:bg-background hover:text-navy"><a href="https://wa.me/237686204678" target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp : +237 686 204 678</a></Button>
        </div>
      </div>
    </section>
  </SiteLayout>;
}