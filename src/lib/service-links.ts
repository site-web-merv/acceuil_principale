export const servicePaths = {
  Radiologie: "/radiologie",
  "Laboratoire Moderne": "/laboratoire",
  Laboratoire: "/laboratoire",
  Pharmacie: "/pharmacie",
  Chirurgie: "/chirurgie",
  Urologie: "/urologie",
  "Chirurgie Orthopédique": "/chirurgie-orthopedique",
  Orthopédie: "/chirurgie-orthopedique",
  Rhumatologie: "/rhumatologie",
} as const;

export function getServicePath(name: string) {
  return servicePaths[name as keyof typeof servicePaths];
}