import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <main className="min-h-screen bg-ink pt-28 px-6 pb-20">
      {/* Featured Post */}
      <section className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="relative aspect-square md:aspect-[4/3] w-full">
          <Image
            src="/latte-art.jpg" // User needs to provide this image
            alt="Arte Latte"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4 leading-tight uppercase">
            ¿CÓMO PREPARAR<br />EL MEJOR CAFÉ<br />EN CASA?
          </h2>
          <p className="text-cream/70 font-light mb-8 max-w-md">
            Consejos y técnicas para que disfrutes de una taza perfecta todos los días.
          </p>
          <div>
            <Link
              href="#"
              className="px-8 py-3 bg-gold text-ink text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-cream transition-colors inline-block"
            >
              LEER MÁS
            </Link>
          </div>
          <p className="text-cream/40 text-xs italic mt-6">15 Mayo, 2024</p>
        </div>
      </section>

      {/* Other Posts Grid */}
      <section className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Post 1 */}
          <div className="flex flex-col">
            <div className="relative aspect-video w-full mb-6">
              <Image src="/coffee-beans.jpg" alt="Granos" fill className="object-cover" />
            </div>
            <h3 className="font-serif text-xl text-cream mb-3 uppercase">
              DIFERENCIAS ENTRE ARÁBICA Y ROBUSTA
            </h3>
            <p className="text-cream/70 font-light text-sm mb-6 flex-1">
              Conoce las características de cada variedad de café.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <p className="text-cream/40 text-xs italic">8 Mayo, 2024</p>
              <Link
                href="#"
                className="px-4 py-2 border border-cream/30 text-cream text-[9px] tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
              >
                LEER MÁS
              </Link>
            </div>
          </div>

          {/* Post 2 */}
          <div className="flex flex-col">
            <div className="relative aspect-video w-full mb-6">
              <Image src="/coffee-process.jpg" alt="Proceso" fill className="object-cover" />
            </div>
            <h3 className="font-serif text-xl text-cream mb-3 uppercase">
              EL PROCESO DEL CAFÉ: DEL GRANO A TU TAZA
            </h3>
            <p className="text-cream/70 font-light text-sm mb-6 flex-1">
              Descubre las etapas que hacen posible una taza excepcional.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <p className="text-cream/40 text-xs italic">2 Mayo, 2024</p>
              <Link
                href="#"
                className="px-4 py-2 border border-cream/30 text-cream text-[9px] tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
              >
                LEER MÁS
              </Link>
            </div>
          </div>

          {/* Post 3 */}
          <div className="flex flex-col">
            <div className="relative aspect-video w-full mb-6">
              <Image src="/tasting.jpg" alt="Cata" fill className="object-cover" />
            </div>
            <h3 className="font-serif text-xl text-cream mb-3 uppercase">
              NOTAS DE CATA: ¿QUÉ SIGNIFICA?
            </h3>
            <p className="text-cream/70 font-light text-sm mb-6 flex-1">
              Aprende a identificar los aromas y sabores de tu café.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <p className="text-cream/40 text-xs italic">25 Abr, 2024</p>
              <Link
                href="#"
                className="px-4 py-2 border border-cream/30 text-cream text-[9px] tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
              >
                LEER MÁS
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="#"
            className="px-8 py-3 border border-cream/30 text-cream text-[10px] tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors inline-block"
          >
            VER TODOS LOS ARTÍCULOS
          </Link>
        </div>
      </section>
    </main>
  );
}
