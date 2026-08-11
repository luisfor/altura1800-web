"use client";

import { useState } from "react";
import { products, formatCOP, Product } from "@/lib/products";
import { useCart } from "@/components/CartContext";

const categories: { key: Product["category"] | "todos"; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "cafe", label: "Café" },
  { key: "ediciones", label: "Ediciones especiales" },
  { key: "kits", label: "Kits y regalos" },
];

export default function ProductGrid() {
  const [active, setActive] = useState<Product["category"] | "todos">("todos");
  const { addItem } = useCart();

  const visible =
    active === "todos" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`px-5 py-2 text-xs tracking-[0.15em] uppercase border transition-colors ${
              active === c.key
                ? "bg-ink text-cream border-ink"
                : "border-ink/20 text-ink/60 hover:border-gold hover:text-gold"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((product) => (
          <div key={product.slug} className="border border-ink/10 flex flex-col">
            <div className="aspect-square bg-cream flex items-center justify-center border-b border-ink/10">
              <span className="font-serif text-xs tracking-[0.2em] uppercase text-ink/30">
                Foto próximamente
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="font-serif text-lg mb-1">{product.name}</p>
              <p className="text-xs text-ink/50 font-light mb-4">
                {product.format}
              </p>
              <p className="text-gold font-serif text-lg mb-6">
                {formatCOP(product.price)}
              </p>
              <button
                onClick={() => addItem(product)}
                className="mt-auto px-6 py-3 bg-ink text-cream text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-ink transition-colors"
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
