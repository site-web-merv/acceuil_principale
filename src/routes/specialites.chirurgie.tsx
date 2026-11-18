import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/SpecialtyPage";
import { specialties } from "@/lib/specialties";

const s = specialties.find((x) => x.slug === "chirurgie")!;

export const Route = createFileRoute("/specialites/chirurgie")({
  head: () => ({
    meta: [
      { title: "Chirurgie & Pathologie Chirurgicale — Polyclinique Solumed" },
      { name: "description", content: "Chirurgie à Yaoundé : bloc opératoire aux normes internationales, consultations pré et post-opératoires." },
      { property: "og:title", content: "Chirurgie & Pathologie Chirurgicale — Polyclinique Solumed" },
      { property: "og:description", content: "Interventions sûres, petite chirurgie ambulatoire, suivi post-opératoire." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SpecialtyPage s={s} />,
});
