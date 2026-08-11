import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Suscripción Premium",
};

export default function Suscripcion() {
  return (
    <main className="min-h-screen bg-ink pt-28 px-6 pb-20 animate-fade-in-up">
      {/* Hero */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="font-serif text-3xl md:text-5xl text-cream mb-6 uppercase leading-tight">
          NUNCA TE QUEDES SIN<br />CAFÉ DE ALTURA
        </h1>
        <p className="text-gold font-serif italic text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Recibe el mejor café de Colombia directamente en tu puerta, recién tostado, cada mes.
        </p>
      </div>

      {/* Plans */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-24">
        {/* Plan 1 */}
        <div className="border border-cream/20 bg-ink p-10 flex flex-col items-center text-center hover:border-gold transition-colors animate-fade-in-up stagger-1">
          <p className="text-[10px] tracking-[0.2em] uppercase text-cream/60 mb-2">Plan</p>
          <h2 className="font-serif text-2xl text-cream mb-4 uppercase">Descubrimiento</h2>
          <div className="relative w-32 h-40 mb-6">
            <Image src="/doypack.png" alt="1 Bolsa" fill className="object-contain" />
          </div>
          <p className="text-cream/80 font-light mb-6">1 Bolsa de 250g al mes.</p>
          <p className="font-serif text-3xl text-gold mb-8">$22.900 <span className="text-sm text-cream/50">COP/mes</span></p>
          <button className="w-full py-4 border border-gold text-gold text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-gold hover:text-ink transition-colors">
            SUSCRIBIRME
          </button>
        </div>

        {/* Plan 2 */}
        <div className="border border-gold bg-ink p-10 flex flex-col items-center text-center shadow-[0_0_30px_rgba(166,135,58,0.1)] relative overflow-hidden animate-fade-in-up stagger-2">
          <div className="absolute top-4 right-4 bg-gold text-ink text-[9px] tracking-widest px-3 py-1 uppercase font-bold">Más Popular</div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2">Plan</p>
          <h2 className="font-serif text-2xl text-cream mb-4 uppercase">Amante del Café</h2>
          <div className="relative w-48 h-40 mb-6 flex justify-center">
            <Image src="/doypack.png" alt="2 Bolsas" fill className="object-contain" />
          </div>
          <p className="text-cream/80 font-light mb-6">2 Bolsas de 250g al mes. (Ahorras 10%)</p>
          <p className="font-serif text-3xl text-gold mb-8">$41.220 <span className="text-sm text-cream/50">COP/mes</span></p>
          <button className="w-full py-4 bg-gold text-ink text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-cream transition-colors">
            SUSCRIBIRME
          </button>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-4xl mx-auto border-t border-cream/10 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in-up stagger-3">
        <div className="flex flex-col items-center gap-4">
          <div className="text-gold text-3xl">🌱</div>
          <h3 className="text-[11px] tracking-[0.15em] uppercase text-cream">Recién Tostado</h3>
          <p className="text-cream/50 font-light text-sm">Tostamos justo antes de enviar para garantizar la máxima frescura.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="text-gold text-3xl">🚚</div>
          <h3 className="text-[11px] tracking-[0.15em] uppercase text-cream">Envío Gratis</h3>
          <p className="text-cream/50 font-light text-sm">Todas las suscripciones incluyen envío gratuito a todo Colombia.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="text-gold text-3xl">⏸️</div>
          <h3 className="text-[11px] tracking-[0.15em] uppercase text-cream">Flexibilidad Total</h3>
          <p className="text-cream/50 font-light text-sm">Pausa, modifica o cancela tu suscripción en cualquier momento sin costo.</p>
        </div>
      </div>
    </main>
  );
}
