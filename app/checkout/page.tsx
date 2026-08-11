import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Checkout Seguro",
};

export default function Checkout() {
  return (
    <main className="min-h-screen bg-ink flex flex-col md:flex-row pt-20 animate-fade-in-up">
      {/* Left Column: Form */}
      <div className="w-full md:w-3/5 p-8 md:p-16 lg:p-24 overflow-y-auto max-h-screen custom-scrollbar">
        <Link href="/carrito" className="text-gold text-xs tracking-widest uppercase mb-12 inline-block hover:text-cream transition-colors">
          ← Volver al carrito
        </Link>
        
        <h1 className="font-serif text-3xl text-cream mb-10 uppercase">Finalizar Compra</h1>

        <form className="space-y-12">
          {/* Contacto */}
          <section>
            <h2 className="text-[11px] tracking-[0.2em] uppercase text-cream/70 mb-4">Información de Contacto</h2>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </section>

          {/* Envío */}
          <section>
            <h2 className="text-[11px] tracking-[0.2em] uppercase text-cream/70 mb-4">Dirección de Envío</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="text"
                placeholder="Apellidos"
                className="w-full px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="text"
                placeholder="Dirección completa"
                className="col-span-2 w-full px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="text"
                placeholder="Ciudad"
                className="w-full px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="text"
                placeholder="Departamento / Estado"
                className="w-full px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="tel"
                placeholder="Teléfono móvil"
                className="col-span-2 w-full px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </section>

          {/* Pago */}
          <section>
            <h2 className="text-[11px] tracking-[0.2em] uppercase text-cream/70 mb-4">Información de Pago</h2>
            <div className="border border-cream/20 p-4 bg-ink/50 space-y-4">
              <input
                type="text"
                placeholder="Número de tarjeta"
                className="w-full px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="w-full px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full px-4 py-3 bg-transparent border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>
          </section>

          <button
            type="button"
            className="w-full py-4 bg-gold text-ink text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-cream transition-colors"
          >
            PAGAR $96.700 COP
          </button>
        </form>
      </div>

      {/* Right Column: Order Summary (Sticky) */}
      <div className="w-full md:w-2/5 bg-cream text-ink p-8 md:p-16 border-l border-ink/10 relative">
        <div className="sticky top-28">
          <h2 className="font-serif text-2xl mb-8 uppercase">Resumen de tu Orden</h2>
          
          <div className="space-y-6 mb-8 border-b border-ink/10 pb-8">
            {/* Item 1 */}
            <div className="flex gap-4 items-center">
              <div className="relative w-16 h-16 bg-white border border-ink/10 flex items-center justify-center">
                <span className="absolute -top-2 -right-2 bg-ink text-cream text-[10px] w-5 h-5 rounded-full flex items-center justify-center z-10">1</span>
                <Image src="/doypack.png" alt="Café" fill className="object-contain p-2" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Café de Altura 250g</p>
                <p className="text-ink/60 text-xs">Tostión Media</p>
              </div>
              <p className="font-serif text-sm">$22.900</p>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4 items-center">
              <div className="relative w-16 h-16 bg-white border border-ink/10 flex items-center justify-center">
                <span className="absolute -top-2 -right-2 bg-ink text-cream text-[10px] w-5 h-5 rounded-full flex items-center justify-center z-10">1</span>
                <Image src="/doypack.png" alt="Café" fill className="object-contain p-2" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Café de Altura 500g</p>
                <p className="text-ink/60 text-xs">Tostión Media</p>
              </div>
              <p className="font-serif text-sm">$38.900</p>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4 items-center">
              <div className="relative w-16 h-16 bg-white border border-ink/10 flex items-center justify-center">
                <span className="absolute -top-2 -right-2 bg-ink text-cream text-[10px] w-5 h-5 rounded-full flex items-center justify-center z-10">1</span>
                <Image src="/kit.png" alt="Kit" fill className="object-contain p-2" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Kit Altura 1800</p>
                <p className="text-ink/60 text-xs">Mug + 250g</p>
              </div>
              <p className="font-serif text-sm">$34.900</p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-ink/70">
              <span>Subtotal</span>
              <span>$96.700 COP</span>
            </div>
            <div className="flex justify-between text-ink/70">
              <span>Envío Nacional</span>
              <span>Gratis</span>
            </div>
            <div className="flex justify-between text-xl font-serif pt-4 border-t border-ink/10 mt-4">
              <span>Total</span>
              <span>$96.700 COP</span>
            </div>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-2 text-ink/40 text-xs">
            <span>🔒</span>
            <span>Pago encriptado y 100% seguro.</span>
          </div>
        </div>
      </div>
    </main>
  );
}
