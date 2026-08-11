"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function Carrito() {
  const { count } = useCart(); // Assuming you'll expand this later with actual items

  return (
    <main className="min-h-screen bg-ink pt-28 px-6 pb-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="font-serif text-3xl md:text-4xl text-cream mb-2 uppercase">
          Tu Carrito
        </h1>
      </div>

      <div className="max-w-4xl mx-auto bg-cream p-6 md:p-12 text-ink">
        {/* Item List Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 border-b border-ink/10 pb-4 mb-6 text-[10px] tracking-[0.15em] uppercase text-ink/50">
          <div className="col-span-6">Producto</div>
          <div className="col-span-2 text-center">Precio</div>
          <div className="col-span-2 text-center">Cantidad</div>
          <div className="col-span-2 text-right">Total</div>
        </div>

        {/* Dummy Items (Based on Mockup) */}
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-4 border-b border-ink/5">
            <div className="col-span-1 md:col-span-6 flex gap-4 items-center">
              <div className="relative w-16 h-20 bg-white">
                <Image src="/doypack.png" alt="Café" fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Café de Altura 250g</h3>
                <p className="text-ink/60 text-xs">Tostión Media</p>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 text-left md:text-center text-sm font-serif">
              $22.900 COP
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
              <div className="flex border border-ink/20">
                <button className="px-3 py-1 hover:bg-ink/5">-</button>
                <span className="px-3 py-1 text-sm border-x border-ink/20">1</span>
                <button className="px-3 py-1 hover:bg-ink/5">+</button>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-between md:justify-end items-center gap-4 font-serif text-sm">
              <span className="md:hidden">Total:</span>
              <span>$22.900 COP</span>
              <button className="text-ink/40 hover:text-ink text-xs">✕</button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-4 border-b border-ink/5">
            <div className="col-span-1 md:col-span-6 flex gap-4 items-center">
              <div className="relative w-16 h-20 bg-white">
                <Image src="/doypack.png" alt="Café" fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Café de Altura 500g</h3>
                <p className="text-ink/60 text-xs">Tostión Media</p>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 text-left md:text-center text-sm font-serif">
              $38.900 COP
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
              <div className="flex border border-ink/20">
                <button className="px-3 py-1 hover:bg-ink/5">-</button>
                <span className="px-3 py-1 text-sm border-x border-ink/20">1</span>
                <button className="px-3 py-1 hover:bg-ink/5">+</button>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-between md:justify-end items-center gap-4 font-serif text-sm">
              <span className="md:hidden">Total:</span>
              <span>$38.900 COP</span>
              <button className="text-ink/40 hover:text-ink text-xs">✕</button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-4 border-b border-ink/10">
            <div className="col-span-1 md:col-span-6 flex gap-4 items-center">
              <div className="relative w-16 h-20 bg-white">
                <Image src="/kit.png" alt="Kit" fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Kit Altura 1800</h3>
                <p className="text-ink/60 text-xs">Café 250g + Mug</p>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 text-left md:text-center text-sm font-serif">
              $34.900 COP
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
              <div className="flex border border-ink/20">
                <button className="px-3 py-1 hover:bg-ink/5">-</button>
                <span className="px-3 py-1 text-sm border-x border-ink/20">1</span>
                <button className="px-3 py-1 hover:bg-ink/5">+</button>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-between md:justify-end items-center gap-4 font-serif text-sm">
              <span className="md:hidden">Total:</span>
              <span>$34.900 COP</span>
              <button className="text-ink/40 hover:text-ink text-xs">✕</button>
            </div>
          </div>
        </div>

        {/* Totals Section */}
        <div className="mt-8 flex flex-col items-end">
          <div className="w-full md:w-1/2 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-ink/70">Subtotal</span>
              <span className="font-serif">$96.700 COP</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink/70">Envío</span>
              <span className="text-ink/50 italic">Calculado en el pago</span>
            </div>
            <div className="flex justify-between text-lg border-t border-ink/10 pt-4 mt-2">
              <span className="font-bold">Total</span>
              <span className="font-serif font-bold">$96.700 COP</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/tienda"
              className="flex-1 text-center py-4 border border-ink text-ink text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-ink hover:text-cream transition-colors"
            >
              SEGUIR COMPRANDO
            </Link>
            <Link
              href="/checkout"
              className="flex-1 py-4 bg-gold text-ink text-[10px] tracking-[0.2em] font-bold uppercase hover:opacity-80 transition-opacity text-center flex items-center justify-center"
            >
              FINALIZAR COMPRA
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
