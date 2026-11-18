import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/SpecialtyPage";
import { specialties } from "@/lib/specialties";

const s = specialties.find((x) => x.slug === "radiologie")!;

export const Route = createFileRoute("/specialites/radiologie")({
  head: () => ({
    meta: [
      { title: "Radiologie — Polyclinique Solumed" },
      { name: "description", content: "Radiologie conventionnelle et digitale à Yaoundé : radiographies, échographies. -10% en ce moment." },
      { property: "og:title", content: "Radiologie — Polyclinique Solumed" },
      { property: "og:description", content: "Imagerie médicale de pointe à Biyem-Assi, Yaoundé." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SpecialtyPage s={s} />,
});
