import { Baby, ScanLine, FlaskConical, Smile } from "lucide-react";

export const equipmentCategories = [
  { id: "neonatologie", label: "Néonatologie", icon: Baby },
  { id: "imagerie", label: "Imagerie", icon: ScanLine },
  { id: "laboratoire", label: "Laboratoire", icon: FlaskConical },
  { id: "dentisterie", label: "Dentisterie", icon: Smile },
] as const;

export type EquipmentCategory = (typeof equipmentCategories)[number]["id"];
export type EquipmentFilter = "tous" | EquipmentCategory;
type Photo = { src: string; alt: string };
type Equipment = {
  id: string;
  name: string;
  category: EquipmentCategory;
  description: string;
  details: string;
  benefits: [string, string, string];
  service: "/specialites/pediatrie" | "/specialites/radiologie" | "/specialites/laboratoire" | "/specialites/dentisterie";
  photos: Photo[];
};

export const equipments: Equipment[] = [
  // À CONFIRMER avec la clinique — TODO : ajouter les vraies photos.
  { id: "incubateurs", name: "Incubateurs néonatals", category: "neonatologie", service: "/specialites/pediatrie", photos: [],
    description: "Un environnement adapté à la surveillance et aux soins des prématurés et des nouveau-nés à terme.",
    details: "L’incubateur aide l’équipe à maintenir une température stable et à observer le nouveau-né pendant sa prise en charge. Son utilisation dépend des besoins de chaque enfant.",
    benefits: ["Température adaptée", "Surveillance rapprochée", "Soins adaptés au nouveau-né"] },
  // À CONFIRMER avec la clinique — désignation exacte à vérifier. TODO : ajouter les vraies photos.
  { id: "poste-neonatal", name: "Poste de soins néonatals avec lumière bleue", category: "neonatologie", service: "/specialites/pediatrie", photos: [],
    description: "Un poste dédié à la prise en charge des nouveau-nés. La désignation exacte de l’équipement reste à confirmer.",
    details: "Le poste permet à l’équipe de garder le bébé à portée de vue pendant les soins. L’équipe soignante précise l’indication et les modalités d’utilisation de la lumière bleue selon l’équipement disponible.",
    benefits: ["Observation facilitée", "Accès direct pour les soignants", "Prise en charge adaptée"] },
  // À CONFIRMER avec la clinique — TODO : ajouter les vraies photos.
  { id: "radiologie", name: "Radiologie numérique", category: "imagerie", service: "/specialites/radiologie", photos: [],
    description: "Des images haute résolution pour aider l’équipe médicale à poser un diagnostic précis.",
    details: "La radiologie numérique produit des clichés que l’équipe peut consulter à l’écran. Le médecin choisit l’examen adapté et interprète les images avec les autres éléments du dossier.",
    benefits: ["Imagerie haute résolution", "Appui au diagnostic", "Résultats rapides"] },
  // À CONFIRMER avec la clinique — appareils à préciser. TODO : ajouter les vraies photos.
  { id: "laboratoire", name: "Laboratoire moderne", category: "laboratoire", service: "/specialites/laboratoire", photos: [],
    description: "Des analyses fiables et rapides pour éclairer le diagnostic et le suivi des soins.",
    details: "Le laboratoire analyse les prélèvements demandés par le médecin. Les conditions de préparation et les délais varient selon le type d’analyse.",
    benefits: ["Analyses fiables", "Résultats rapides", "Aide au suivi médical"] },
  // À CONFIRMER avec la clinique — TODO : ajouter les vraies photos.
  { id: "salle-dentaire", name: "Salle de dentisterie", category: "dentisterie", service: "/specialites/dentisterie", photos: [],
    description: "Un fauteuil et du matériel adaptés aux consultations et aux soins dentaires.",
    details: "Le dentiste évalue les besoins lors de la consultation et discute des options : détartrage, extraction, prothèses ou implants, selon l’indication.",
    benefits: ["Confort lors des soins", "Examen dentaire facilité", "Matériel adapté à différents soins"] },
];

export function parseEquipmentFilter(value: unknown): EquipmentFilter {
  return equipmentCategories.find(({ id }) => id === value)?.id ?? "tous";
}

export function filterEquipments(filter: EquipmentFilter) {
  return filter === "tous" ? equipments : equipments.filter(({ category }) => category === filter);
}