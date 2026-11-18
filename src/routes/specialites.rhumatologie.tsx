import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/SpecialtyPage";
import { specialties } from "@/lib/specialties";

const s = specialties.find((x) => x.slug === "rhumatologie")!;

export const Route = createFileRoute("/specialites/rhumatologie")({
  head: () => ({
    meta: [
      { title: "Rhumatologie — Polyclinique Solumed" },
      { name: "description", content: "Rhumatologie à Yaoundé : douleurs articulaires, arthrose, polyarthrite, bilan articulaire." },
      { property: "og:title", content: "Rhumatologie — Polyclinique Solumed" },
      { property: "og:description", content: "Articulations, os et muscles : consultez un spécialiste en rhumatologie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SpecialtyPage s={s} />,
});
