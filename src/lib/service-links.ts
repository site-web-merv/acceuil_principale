export const servicePaths = {
  Radiologie: "/specialites/radiologie",
  "Laboratoire Moderne": "/specialites/laboratoire",
  Laboratoire: "/specialites/laboratoire",
  Pharmacie: "/specialites/pharmacie",
  Chirurgie: "/specialites/chirurgie",
  Urologie: "/specialites/urologie",
  "Chirurgie Orthopédique": "/specialites/chirurgie-orthopedique",
  Orthopédie: "/specialites/chirurgie-orthopedique",
  Rhumatologie: "/specialites/rhumatologie",
} as const;

export function getServicePath(name: string) {
  return servicePaths[name as keyof typeof servicePaths];
}
