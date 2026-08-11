import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Experiencia",
};

export default function Experiencia() {
  return (
    <main className="min-h-screen bg-ink pt-28 px-6 pb-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="font-serif text-3xl md:text-4xl text-cream mb-4 uppercase">
          Experiencia Altura 1800
        </h1>
        <p className="text-gold font-serif italic text-lg md:text-xl">
          Más que café, un estilo de vida
        </p>
      </div>

      {/* 4 Icons */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-cream/10 pb-16 text-center">
        {[
          { icon: "🫖", text: "PREPARA\ncon intención" },
          { icon: "😌", text: "DISFRUTA\ncada momento" },
          { icon: "🫂", text: "COMPARTE\nlo que te inspira" },
          { icon: "✨", text: "VIVE\nla experiencia" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <div className="text-gold text-3xl opacity-80 border border-gold rounded-full w-16 h-16 flex items-center justify-center">
              {item.icon}
            </div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-cream/70 whitespace-pre-line">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Content Blocks */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-y-16 gap-x-12 mb-24">
        {/* Block 1 */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <p className="text-[10px] tracking-[0.2em] text-gold uppercase mb-2">Preparación</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6 leading-tight">
            EL ARTE DE<br />UNA BUENA TAZA
          </h2>
          <p className="text-cream/70 font-light mb-8 max-w-md">
            Descubre las mejores formas de preparar tu café y resaltar todo su potencial.
          </p>
          <div>
            <Link
              href="/blog"
              className="px-6 py-3 border border-gold text-gold text-[10px] tracking-[0.2em] uppercase hover:bg-gold hover:text-ink transition-colors inline-block"
            >
              Ver Más
            </Link>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] order-1 md:order-2">
          <Image src="/pour-over.jpg" alt="V60 Pour over" fill className="object-cover" />
          <div className="absolute inset-0 bg-ink/20 mix-blend-multiply" />
        </div>

        {/* Block 2 */}
        <div className="relative h-[300px] md:h-[400px] order-3">
          <Image src="/farmer.jpg" alt="Caficultor" fill className="object-cover" />
          <div className="absolute inset-0 bg-ink/20 mix-blend-multiply" />
        </div>
        <div className="flex flex-col justify-center order-4 pl-0 md:pl-12">
          <p className="text-[10px] tracking-[0.2em] text-gold uppercase mb-2">Historias que inspiran</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6 leading-tight">
            CONOCE A<br />NUESTROS PRODUCTORES
          </h2>
          <p className="text-cream/70 font-light mb-8 max-w-md">
            Conoce a las familias detrás de cada grano y su pasión por la tierra.
          </p>
          <div>
            <Link
              href="/sobre-nosotros"
              className="px-6 py-3 border border-gold text-gold text-[10px] tracking-[0.2em] uppercase hover:bg-gold hover:text-ink transition-colors inline-block"
            >
              Conocer Más
            </Link>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col justify-center order-6 md:order-5">
          <p className="text-[10px] tracking-[0.2em] text-gold uppercase mb-2">Notas de Cata</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6 leading-tight">
            UN VIAJE DE<br />SABORES
          </h2>
          <p className="text-cream/70 font-light mb-8 max-w-md">
            Explora los aromas y sabores que hacen único a nuestro café de altura.
          </p>
          <div>
            <Link
              href="/nuestro-cafe"
              className="px-6 py-3 border border-gold text-gold text-[10px] tracking-[0.2em] uppercase hover:bg-gold hover:text-ink transition-colors inline-block"
            >
              Explorar
            </Link>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] order-5 md:order-6">
          <Image src="/cup.jpg" alt="Taza de café" fill className="object-cover" />
          <div className="absolute inset-0 bg-ink/20 mix-blend-multiply" />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto border-t border-cream/10 pt-16 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4 uppercase">
          Momentos Altura 1800
        </h2>
        <p className="text-cream/70 font-light mb-8">
          Comparte tu momento con Altura 1800<br />
          <span className="text-gold italic">#MomentoAltura1800</span>
        </p>
        <Link
          href="#"
          className="px-6 py-3 border border-cream/30 text-cream text-[10px] tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors inline-block"
        >
          Ver Galería
        </Link>
      </div>
    </main>
  );
}
