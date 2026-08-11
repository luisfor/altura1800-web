import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen animate-fade-in-up">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen pt-28 flex flex-col justify-between overflow-hidden bg-ink">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/mountains-hero.jpg"
            alt="Montañas Colombianas"
            fill
            className="object-cover opacity-40 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10 xl:px-12 w-full flex-1 flex flex-col justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] mb-6 uppercase">
                CAFÉ DE ALTURA,<br />
                <span className="text-gold">EXPERIENCIA QUE<br />SE SIENTE.</span>
              </h1>
              <p className="text-cream/80 text-sm md:text-base font-light mb-10 max-w-sm leading-relaxed">
                Café 100% Arábica cultivado a 1800 metros sobre el nivel del mar en las mejores tierras de Colombia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-0">
                <Link
                  href="/tienda"
                  className="px-8 py-3 bg-gold text-ink text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-cream transition-colors text-center rounded-full"
                >
                  Comprar Ahora
                </Link>
                <Link
                  href="/nuestro-cafe"
                  className="px-8 py-3 border border-cream/30 text-cream text-[11px] tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors text-center rounded-full"
                >
                  Conocer Más
                </Link>
              </div>
            </div>

            {/* Right Content - Product Images */}
            <div className="relative h-[500px] md:h-[700px] w-full flex items-center justify-center -mr-12">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-full">
                <Image
                  src="/hero-bag.png"
                  alt="Bolsa de Café Altura 1800"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
                  priority
                />
              </div>
              <div className="absolute top-2/3 left-3/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 z-30">
                <Image
                  src="/cup.jpg"
                  alt="Taza de Café"
                  fill
                  className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] mix-blend-screen"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full border-t border-cream/10 bg-ink/50 backdrop-blur-md">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10 xl:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          {[
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>, label: "CULTIVADO\nA 1800 MSNM" },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 22l8-8"/></svg>, label: "GRANOS\nSELECCIONADOS" },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2"/><path d="M10 2v2"/><path d="M14 2v2"/></svg>, label: "TOSTIÓN\nARTESANAL" },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M10 2c-3.1 0-7 2.2-7 6.3 0 4.3 4.3 7 8 13.7 3.7-6.7 8-9.4 8-13.7C19 4.2 15.1 2 12 2"/><path d="M10 22c-2.3-3.9-3-6.5-3-9.5 0-3.3 2-6.5 5-8.5"/></svg>, label: "SABOR QUE\nTE IMPACTA" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="text-gold">{item.icon}</div>
              <p className="text-[10px] tracking-[0.2em] text-cream uppercase whitespace-pre-line leading-relaxed font-bold">
                {item.label}
              </p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* 2. UN CAFÉ QUE NACE EN LAS ALTURAS */}
      <section className="bg-[#1A1F16] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10 xl:px-12 flex flex-col md:flex-row gap-12 lg:gap-16 items-center min-h-[500px]">
          {/* Left Image */}
          <div className="w-full md:w-1/2 lg:w-5/12 relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="/coffee-cherries.jpg"
              alt="Cerezas de café"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right Content */}
          <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col justify-center py-8">
            <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl text-gold mb-6 uppercase">
              UN CAFÉ QUE NACE<br />EN LAS ALTURAS
            </h2>
            <p className="text-cream/80 font-light leading-relaxed mb-10 text-sm md:text-base">
              Cada grano cuenta una historia de esfuerzo, tradición y amor por la tierra. Descubre el sabor auténtico de Colombia en cada taza.
            </p>
            <Link
              href="/sobre-nosotros"
              className="inline-block px-8 py-3 border border-gold text-gold text-[11px] tracking-[0.2em] uppercase hover:bg-gold hover:text-ink transition-colors mb-16 rounded-full"
            >
              Conoce Nuestra Historia
            </Link>

            {/* Grid 4 Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>, title: "ORIGEN\nÚNICO", desc: "Regiones montañosas de Colombia." },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 22l8-8"/></svg>, title: "100%\nARÁBICA PREMIUM", desc: "Calidad excepcional en cada grano." },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2"/><path d="M10 2v2"/><path d="M14 2v2"/></svg>, title: "TOSTIÓN\nMEDIA", desc: "Balance perfecto entre aroma y sabor." },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>, title: "SABOR QUE\nTE IMPACTA", desc: "Notas de chocolate, frutos rojos y caramelo." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 border-l border-cream/10 pl-4">
                  <div className="text-gold">{item.icon}</div>
                  <h3 className="text-[10px] tracking-[0.15em] text-cream uppercase font-bold whitespace-pre-line">{item.title}</h3>
                  <p className="text-[11px] text-cream/60 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 3. NOTAS DE CATA */}
      <section className="bg-[#121110] py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10 xl:px-12 flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3">
            <h2 className="font-serif text-3xl text-gold mb-2 uppercase">NOTAS DE CATA</h2>
            <h3 className="font-serif text-2xl text-cream mb-6 uppercase">UN VIAJE DE SABORES</h3>
            <p className="text-cream/60 font-light text-sm mb-10 max-w-xs leading-relaxed">
              Explora los aromas y sabores que hacen único a nuestro café de altura.
            </p>
            <Link
              href="/experiencia"
              className="inline-block px-8 py-3 border border-gold text-gold text-[10px] tracking-[0.2em] uppercase hover:bg-gold hover:text-ink transition-colors"
            >
              Descubrir Más
            </Link>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chocolate */}
            <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="relative w-full h-48 mb-8">
                <Image src="/chocolate.jpg" alt="Chocolate" fill className="object-cover mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-gold text-[11px] tracking-[0.2em] font-bold uppercase mb-3">Chocolate</h4>
              <p className="text-cream/60 text-xs font-light">Notas dulces y envolventes.</p>
            </div>
            {/* Frutos Rojos */}
            <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="relative w-full h-48 mb-8">
                <Image src="/frutos-rojos.jpg" alt="Frutos Rojos" fill className="object-cover mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-gold text-[11px] tracking-[0.2em] font-bold uppercase mb-3">Frutos Rojos</h4>
              <p className="text-cream/60 text-xs font-light">Toque afrutado y vibrante.</p>
            </div>
            {/* Caramelo */}
            <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="relative w-full h-48 mb-8">
                <Image src="/caramelo.jpg" alt="Caramelo" fill className="object-cover mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-gold text-[11px] tracking-[0.2em] font-bold uppercase mb-3">Caramelo</h4>
              <p className="text-cream/60 text-xs font-light">Final suave y persistente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCTOS FAVORITOS */}
      <section className="bg-[#F4F1EB] py-24 text-ink relative">
        {/* Decorative Top Ornament */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 text-ink/20">
          <svg width="40" height="15" viewBox="0 0 40 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path d="M20 0L25 5H40V7H27L20 14L13 7H0V5H15L20 0Z" />
          </svg>
        </div>

        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10 xl:px-12 text-center mt-8">
          <h2 className="font-serif text-3xl mb-16 uppercase text-[#3A352D]">ELIGE TU PRESENTACIÓN FAVORITA</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {[
              { title: "Café de Altura 250g", price: "$22.900 COP", img: "/doypack.png" },
              { title: "Café de Altura 500g", price: "$38.900 COP", img: "/doypack.png" },
              { title: "Café de Altura 1Kg", price: "$69.900 COP", img: "/doypack.png" },
              { title: "Kit Altura 1800", price: "$34.900 COP", img: "/kit.png", desc: "Café 250g + Mug" },
              { title: "Suscripción Mensual", price: "Desde $64.900 COP/mes", img: "/doypack.png" },
            ].map((product, i) => (
              <div key={i} className="bg-transparent p-6 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="relative w-32 h-48 mb-6 group-hover:scale-105 transition-transform">
                  <Image src={product.img} alt={product.title} fill className="object-contain drop-shadow-xl" />
                </div>
                <h3 className="font-bold text-sm mb-1 text-[#2A2621]">{product.title}</h3>
                <p className="text-xs text-[#5A554A] mb-3">{product.desc || "Tostión Media"}</p>
                <p className="font-serif text-[#2A2621] font-bold mb-6">{product.price}</p>
                <Link
                  href="/carrito"
                  className="w-full py-3 bg-[#1A1917] text-cream text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#3A352D] transition-colors rounded-full"
                >
                  {product.title.includes("Suscripción") ? "SUSCRIBIRME" : "COMPRAR"}
                </Link>
              </div>
            ))}
          </div>

          <Link
            href="/tienda"
            className="inline-block px-10 py-4 border border-[#1A1917] text-[#1A1917] text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-[#1A1917] hover:text-cream transition-colors rounded-full"
          >
            VER TODOS LOS PRODUCTOS
          </Link>
        </div>
      </section>

      {/* 5. INSTAGRAM */}
      <section className="bg-[#121110] py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10 xl:px-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-[#0F0E0D] rounded-xl border border-cream/5">
            <h2 className="font-serif text-2xl text-gold uppercase mb-4">SÍGUENOS EN INSTAGRAM</h2>
            <p className="text-cream/60 text-sm font-light mb-8">Inspírate con nuestra comunidad cafetera.</p>
            <Link
              href="#"
              className="inline-block w-fit px-8 py-3 border border-cream/30 text-cream text-[9px] tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
            >
              VER MÁS EN INSTAGRAM
            </Link>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden"><Image src="/latte-art.jpg" alt="Insta 1" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 duration-500" /></div>
            <div className="relative aspect-square rounded-lg overflow-hidden"><Image src="/farmer.jpg" alt="Insta 2" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 duration-500" /></div>
            <div className="relative aspect-square rounded-lg overflow-hidden"><Image src="/mountains-hero.jpg" alt="Insta 3" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 duration-500" /></div>
            <div className="relative aspect-square rounded-lg overflow-hidden"><Image src="/coffee-cherries.jpg" alt="Insta 4" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 duration-500" /></div>
          </div>
        </div>
      </section>

      {/* 6. PRE-FOOTER BENEFITS */}
      <section className="bg-ink border-b border-cream/5 py-12">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10 xl:px-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gold mx-auto mb-4"><rect x="2" y="3" width="15" height="13" rx="1"/><path d="M17 8h4l1 3v5h-5"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>, label: "ENVÍOS A\nTODO COLOMBIA" },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gold mx-auto mb-4"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, label: "PAGOS 100%\nSEGUROS" },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gold mx-auto mb-4"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>, label: "PRODUCTOS\nDE CALIDAD" },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gold mx-auto mb-4"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, label: "ATENCIÓN\nPERSONALIZADA" },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gold mx-auto mb-4"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>, label: "EMPAQUES\nSOSTENIBLES" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              {item.icon}
              <p className="text-[10px] tracking-[0.1em] text-cream uppercase whitespace-pre-line leading-relaxed font-bold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
