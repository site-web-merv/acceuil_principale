import { createFileRoute } from "@tanstack/react-router";
import { NewsPage } from "@/components/site/NewsPage";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités & Conseils Santé – Polyclinique Solumed" },
      { name: "description", content: "Actualités, promotions et conseils santé de la Polyclinique Solumed." },
      { property: "og:title", content: "Actualités & Conseils Santé – Solumed" },
      { property: "og:description", content: "Restez informé pour mieux prendre soin de vous." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsPage,
});
