import radiologie from "@/assets/radiologie.jpg";
import laboratoire from "@/assets/laboratoire.jpg";
import pharmacie from "@/assets/pharmacie.jpg";
import chirurgie from "@/assets/chirurgie.jpg";
import urologie from "@/assets/urologie.jpg";
import orthopedie from "@/assets/orthopedie.jpg";
import rhumatologie from "@/assets/rhumatologie.jpg";

export type SpecialtyService = {
  title: string;
  note?: string;
  price: string;
};

export type Specialty = {
  slug: string;
  name: string;
  subtitle: string;
  badge?: string;
  badgeColor?: "red" | "green";
  whatsapp?: boolean;
  hero: string;
  services: SpecialtyService[];
  symptoms: string[];
  checks?: string[];
  cta: string;
  ctaButton: string;
  related: string[];
};

export const specialties: Specialty[] = [
  {
    slug: "radiologie",
    name: "Radiologie",
    subtitle: "Radiologie conventionnelle & digitale",
    badge: "-10% en ce moment",
    badgeColor: "red",
    hero: radiologie,
    services: [
      { title: "Radiographie standard", note: "À partir de", price: "6 000 FCFA" },
      { title: "Échographie abdominale", note: "À partir de", price: "25 000 FCFA" },
      { title: "Radiographie ostéo-articulaire", note: "À partir de", price: "15 000 FCFA" },
    ],
    symptoms: [
      "Douleurs osseuses et articulaires",
      "Traumatismes et fractures",
      "Suivi médical et diagnostics",
    ],
    cta: "Réservez votre radiographie au meilleur prix",
    ctaButton: "Réserver maintenant",
    related: ["Laboratoire", "Consultation", "Chirurgie", "Pharmacie"],
  },
  {
    slug: "laboratoire",
    name: "Laboratoire d'Analyses Médicales",
    subtitle: "Recevez vos résultats via WhatsApp",
    badge: "Résultats en ligne",
    badgeColor: "green",
    whatsapp: true,
    hero: laboratoire,
    services: [
      { title: "Bilan sanguin complet", note: "À partir de", price: "15 000 FCFA" },
      { title: "Analyses urinaires", note: "À partir de", price: "5 000 FCFA" },
      { title: "Test rapide paludisme", note: "Résultat en 15 minutes", price: "1 500 FCFA" },
      { title: "Bilan hépatique", note: "À partir de", price: "20 000 FCFA" },
    ],
    symptoms: [
      "Fatigue et faiblesse",
      "Fièvre persistante",
      "Douleurs abdominales",
      "Suivi de maladies chroniques",
    ],
    cta: "Réservez votre analyse en ligne ou contactez-nous",
    ctaButton: "Réserver maintenant",
    related: ["Radiologie", "Consultation", "Pharmacie", "Chirurgie"],
  },
  {
    slug: "pharmacie",
    name: "Pharmacie Interne",
    subtitle: "Médicaments de qualité, prix compétitifs",
    hero: pharmacie,
    services: [
      { title: "Médicaments sur ordonnance", note: "Prix selon prescription", price: "" },
      { title: "Médicaments sans ordonnance", note: "Prix selon produit", price: "" },
      { title: "Conseil pharmaceutique", note: "", price: "GRATUIT" },
    ],
    symptoms: [],
    checks: [
      "Pharmacien disponible en permanence",
      "Médicaments disponibles sur place",
      "Prix compétitifs",
    ],
    cta: "Besoin d'un conseil ou d'un médicament ?",
    ctaButton: "Nous contacter",
    related: ["Consultation", "Laboratoire", "Radiologie", "Chirurgie"],
  },
  {
    slug: "chirurgie",
    name: "Chirurgie & Consultation de Pathologie Chirurgicale",
    subtitle: "Bloc opératoire aux normes internationales",
    hero: chirurgie,
    services: [
      { title: "Consultation pré-opératoire", price: "10 000 FCFA" },
      { title: "Petite chirurgie ambulatoire", note: "À partir de", price: "50 000 FCFA" },
      { title: "Consultation post-opératoire", price: "10 000 FCFA" },
    ],
    symptoms: ["Douleurs et masses", "Kystes et lipomes", "Plaies et abcès"],
    cta: "Consultation et interventions chirurgicales",
    ctaButton: "Réserver maintenant",
    related: ["Anesthésie", "Laboratoire", "Radiologie", "Rééducation"],
  },
  {
    slug: "urologie",
    name: "Urologie",
    subtitle: "Santé urinaire et reproductive masculine",
    hero: urologie,
    services: [
      { title: "Consultation pré-opératoire", price: "10 000 FCFA" },
      { title: "Échographie prostatique", price: "25 000 FCFA" },
      { title: "Bilan urologique complet", price: "40 000 FCFA" },
    ],
    symptoms: [
      "Douleurs urinaires",
      "Problèmes de prostate",
      "Calculs rénaux",
      "Infections urinaires récurrentes",
    ],
    cta: "Consultation spécialisée en urologie",
    ctaButton: "Réserver maintenant",
    related: ["Anesthésie", "Radiologie", "Consultation", "Chirurgie"],
  },
  {
    slug: "chirurgie-orthopedique",
    name: "Chirurgie Orthopédique",
    subtitle: "Os, articulations et muscles",
    hero: orthopedie,
    services: [
      { title: "Consultation orthopédique", price: "10 000 FCFA" },
      { title: "Immobilisation plâtre", note: "À partir de", price: "15 000 FCFA" },
      { title: "Infiltration articulaire", price: "30 000 FCFA" },
      { title: "Rééducation post-opératoire", note: "Sur prescription", price: "" },
    ],
    symptoms: ["Fractures", "Entorses", "Douleurs articulaires", "Déformations osseuses"],
    cta: "Consultation et soins orthopédiques",
    ctaButton: "Réserver maintenant",
    related: ["Radiologie", "Rééducation", "Rhumatologie", "Chirurgie"],
  },
  {
    slug: "rhumatologie",
    name: "Rhumatologie",
    subtitle: "Articulations, os et muscles",
    hero: rhumatologie,
    services: [
      { title: "Consultation rhumatologique", price: "10 000 FCFA" },
      { title: "Bilan articulaire", note: "À partir de", price: "30 000 FCFA" },
      { title: "Traitement arthrose / polyarthrite", note: "Sur prescription", price: "" },
    ],
    symptoms: [
      "Douleurs articulaires",
      "Raideurs matinales",
      "Gonflement des articulations",
      "Arthrose",
    ],
    cta: "Consultez un spécialiste en rhumatologie",
    ctaButton: "Réserver maintenant",
    related: ["Radiologie", "Laboratoire", "Rééducation", "Orthopédie"],
  },
];
