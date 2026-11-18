import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/SpecialtyPage";
import { specialties } from "@/lib/specialties";

const s = specialties.find((x) => x.slug === "chirurgie-orthopedique")!;

export const Route = createFileRoute("/specialites/chirurgie-orthopedique")({
  head: () => ({
    meta: [
      { title: "Chirurgie Orthopédique — Polyclinique Solumed" },
      { name: "description", content: "Chirurgie orthopédique à Yaoundé : fractures, entorses, immobilisation, infiltrations articulaires." },
      { property: "og:title", content: "Chirurgie Orthopédique — Polyclinique Solumed" },
      { property: "og:description", content: "Os, articulations et muscles : consultation et soins orthopédiques." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SpecialtyPage s={s} />,
});
