import Image from "next/image";

export const metadata = {
  title: "Sobre Nosotros",
};

export default function SobreNosotros() {
  return (
    <main className="min-h-screen bg-ink">
      {/* Top Header Section */}
      <div className="pt-28 pb-12 text-center px-6">
        <h1 className="font-serif text-3xl md:text-4xl text-cream mb-2 uppercase">
          Sobre Nosotros
        </h1>
        <p className="text-cream/70 font-light text-sm">
          Nuestra historia, nuestra pasión
        </p>
      </div>

      {/* Split Section */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pb-20">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl md:text-4xl text-gold mb-6 uppercase leading-tight">
            Nacimos en las alturas<br />para llegar al mundo
          </h2>
          <div className="space-y-6 text-cream/80 font-light leading-relaxed mb-10">
            <p>
              Altura 1800 nace del sueño de crear un café excepcional que represente
              lo mejor de Colombia.
            </p>
            <p>
              Trabajamos de la mano con familias cafeteras que cultivan con amor y
              respeto por la tierra, cuidando cada detalle para llevar a tu taza un
              café de altura, de origen y de calidad superior.
            </p>
            <p>
              Creemos en un café sostenible, en el comercio justo y en el impacto
              positivo en nuestras comunidades.
            </p>
          </div>
          <button className="px-8 py-3 bg-gold text-ink text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-cream transition-colors">
            NUESTRA HISTORIA
          </button>
        </div>

        <div className="relative h-[400px] md:h-[600px] w-full">
          <Image
            src="/farmers-group.jpg" // User needs to provide this image
            alt="Nuestros caficultores"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/20 mix-blend-multiply" />
        </div>
      </section>

      {/* Stats Section - Cream Background */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-ink">
          <div>
            <p className="font-serif text-4xl mb-2">1800</p>
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-ink/70">
              Metros de altitud
            </p>
          </div>
          <div>
            <p className="font-serif text-4xl mb-2">100%</p>
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-ink/70">
              Arábica Premium
            </p>
          </div>
          <div>
            <p className="font-serif text-4xl mb-2">+50</p>
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-ink/70">
              Familias Cafeteras
            </p>
          </div>
          <div>
            <p className="font-serif text-4xl mb-2">1</p>
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-ink/70">
              Misión: Calidad
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
