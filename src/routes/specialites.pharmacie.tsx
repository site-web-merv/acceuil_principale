import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/SpecialtyPage";
import { specialties } from "@/lib/specialties";

const s = specialties.find((x) => x.slug === "pharmacie")!;

export const Route = createFileRoute("/specialites/pharmacie")({
  head: () => ({
    meta: [
      { title: "Pharmacie Interne — Polyclinique Solumed" },
      { name: "description", content: "Pharmacie interne à Yaoundé : médicaments de qualité, prix compétitifs, conseil pharmaceutique gratuit." },
      { property: "og:title", content: "Pharmacie Interne — Polyclinique Solumed" },
      { property: "og:description", content: "Médicaments sur et sans ordonnance, pharmacien disponible en permanence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SpecialtyPage s={s} />,
});
