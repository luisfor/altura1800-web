import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tienda",
};

const products = [
  { id: 1, name: "Café de Altura 250g", roast: "Tostión Media", price: "$22.900 COP", image: "/doypack.png" },
  { id: 2, name: "Café de Altura 500g", roast: "Tostión Media", price: "$38.900 COP", image: "/doypack.png" },
  { id: 3, name: "Café de Altura 1kg", roast: "Tostión Media", price: "$68.900 COP", image: "/doypack.png" },
  { id: 4, name: "Edición Limitada 250g", roast: "Tostión Media", price: "$29.900 COP", image: "/doypack.png" },
  { id: 5, name: "Kit Altura 1800", roast: "Café 250g + Mug", price: "$56.900 COP", image: "/kit.png" }, // requires image
  { id: 6, name: "Suscripción Mensual", roast: "Desde $64.900 COP/mes", price: "VER PLANES", image: "/doypack.png", isButton: true },
];

export default function Tienda() {
  return (
    <main className="min-h-screen bg-ink pt-28 px-6 pb-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-cream mb-2 uppercase">
          Tienda
        </h1>
        <p className="text-cream/70 font-light text-sm">
          Elige tu presentación favorita
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 mb-12">
        {["TODOS", "CAFÉ", "EDICIONES ESPECIALES", "ACCESORIOS", "KITS Y REGALOS"].map((tab, i) => (
          <button
            key={tab}
            className={`px-6 py-2 text-[10px] tracking-[0.15em] uppercase border ${
              i === 0
                ? "border-gold bg-gold text-ink"
                : "border-cream/30 text-cream/70 hover:border-gold hover:text-gold"
            } transition-colors`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {products.map((p) => (
          <div key={p.id} className="bg-cream p-8 flex flex-col items-center text-center">
            <div className="relative w-full aspect-square mb-6">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-ink font-bold text-sm mb-1">{p.name}</h3>
            <p className="text-ink/60 text-xs mb-3">{p.roast}</p>
            {!p.isButton ? (
              <p className="text-ink font-serif text-lg mb-6">{p.price}</p>
            ) : (
              <p className="text-ink/80 text-sm italic mb-6">{p.price}</p>
            )}
            
            <button className="w-full px-6 py-3 bg-ink text-cream text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-gold hover:text-ink transition-colors">
              COMPRAR
            </button>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="max-w-5xl mx-auto border-t border-cream/10 pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { icon: "🚚", text: "ENVÍOS A\nTODO COLOMBIA" },
          { icon: "🔒", text: "PAGOS 100%\nSEGUROS" },
          { icon: "⭐", text: "PRODUCTOS\nDE CALIDAD" },
          { icon: "🎧", text: "ATENCIÓN\nPERSONALIZADA" },
        ].map((badge, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="text-gold text-2xl opacity-80">{badge.icon}</div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-cream/70 whitespace-pre-line">
              {badge.text}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
