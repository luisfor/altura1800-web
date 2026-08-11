export type Product = {
  slug: string;
  name: string;
  category: "cafe" | "ediciones" | "accesorios" | "kits";
  format: string;
  price: number;
  description: string;
  notes: string;
};

export const products: Product[] = [
  {
    slug: "altura-250",
    name: "Café de Altura 250g",
    category: "cafe",
    format: "Tueste medio · Grano entero",
    price: 22900,
    description: "Nuestra presentación de entrada. Ideal para conocer el perfil de taza de ALTURA1800.",
    notes: "Panela, cítricos, cacao",
  },
  {
    slug: "altura-500",
    name: "Café de Altura 500g",
    category: "cafe",
    format: "Tueste medio · Grano entero",
    price: 38900,
    description: "La presentación para el consumo semanal en casa u oficina.",
    notes: "Panela, cítricos, cacao",
  },
  {
    slug: "altura-1kg",
    name: "Café de Altura 1kg",
    category: "cafe",
    format: "Tueste medio · Grano entero",
    price: 68900,
    description: "Nuestro formato más rendidor, para quienes ya conocen y confían en ALTURA1800.",
    notes: "Panela, cítricos, cacao",
  },
  {
    slug: "edicion-limitada-250",
    name: "Edición Limitada 250g",
    category: "ediciones",
    format: "Proceso honey · Lote pequeño",
    price: 29900,
    description: "Un lote pequeño de finca única, disponible mientras dure la cosecha.",
    notes: "Frutos rojos, panela, vainilla",
  },
  {
    slug: "kit-altura-1800",
    name: "Kit Altura 1800",
    category: "kits",
    format: "Café 250g + mug de cerámica",
    price: 34900,
    description: "El café y el mug ALTURA1800 en un solo set, listo para regalar.",
    notes: "Panela, cítricos, cacao",
  },
  {
    slug: "suscripcion-mensual",
    name: "Suscripción Mensual",
    category: "kits",
    format: "250g cada mes · Cancela cuando quieras",
    price: 24900,
    description: "Recibe café recién tostado cada mes, sin pensarlo dos veces.",
    notes: "Rotación de lotes de temporada",
  },
];

export function formatCOP(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}
