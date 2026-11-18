import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/SpecialtyPage";
import { specialties } from "@/lib/specialties";

const s = specialties.find((x) => x.slug === "laboratoire")!;

export const Route = createFileRoute("/specialites/laboratoire")({
  head: () => ({
    meta: [
      { title: "Laboratoire d'Analyses Médicales — Polyclinique Solumed" },
      { name: "description", content: "Analyses médicales fiables et rapides à Yaoundé. Résultats en ligne via WhatsApp." },
      { property: "og:title", content: "Laboratoire d'Analyses Médicales — Polyclinique Solumed" },
      { property: "og:description", content: "Bilans sanguins, analyses urinaires, tests rapides. Résultats en ligne." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SpecialtyPage s={s} />,
});
