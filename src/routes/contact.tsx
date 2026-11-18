import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact – Polyclinique Solumed" },
      { name: "description", content: "Contactez la Polyclinique Solumed : téléphone, WhatsApp, formulaire et plan d'accès à Biyem-Assi, Yaoundé." },
      { property: "og:title", content: "Contact – Polyclinique Solumed" },
      { property: "og:description", content: "Notre équipe vous répond rapidement." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});
