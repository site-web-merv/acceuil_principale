import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/AboutPage";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos – Polyclinique Solumed" },
      { name: "description", content: "Mission, vision, valeurs et spécialistes de la Polyclinique Solumed à Yaoundé." },
      { property: "og:title", content: "À propos – Polyclinique Solumed" },
      { property: "og:description", content: "Des spécialistes expérimentés, une clinique 100% digitalisée." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
