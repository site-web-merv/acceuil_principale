import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyPage } from "@/components/SpecialtyPage";
import { specialties } from "@/lib/specialties";

const s = specialties.find((x) => x.slug === "urologie")!;

export const Route = createFileRoute("/specialites/urologie")({
  head: () => ({
    meta: [
      { title: "Urologie — Polyclinique Solumed" },
      { name: "description", content: "Urologie à Yaoundé : santé urinaire et reproductive masculine, échographie prostatique, bilan urologique." },
      { property: "og:title", content: "Urologie — Polyclinique Solumed" },
      { property: "og:description", content: "Consultations urologiques, calculs rénaux, problèmes de prostate." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SpecialtyPage s={s} />,
});
