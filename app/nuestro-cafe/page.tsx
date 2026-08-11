import Image from "next/image";

export const metadata = {
  title: "Nuestro Café",
};

export default function NuestroCafe() {
  return (
    <main className="min-h-screen bg-ink">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mountains-hero.jpg" // User needs to provide this image
            alt="Montañas cafetaleras"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-ink/40 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4 uppercase tracking-[0.1em]">
            Nuestro Café
          </h1>
          <p className="text-gold text-lg md:text-xl font-serif italic">
            Excelencia en cada grano
          </p>
        </div>
      </section>

      {/* INTRO SECTION - CREAM BACKGROUND */}
      <section className="bg-cream text-ink py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl mb-6">
            CAFÉ DE ESPECIALIDAD 100% ARÁBICA
          </h2>
          <p className="text-ink/70 font-light leading-relaxed">
            Cultivado a 1800 metros sobre el nivel del mar, nuestro café nace en
            las montañas de Colombia, donde el clima, el suelo y la dedicación
            de nuestras familias cafeteras crean un grano excepcional.
          </p>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="py-24 px-6 bg-ink">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "ORIGEN ÚNICO",
              desc: "Regiones montañosas de Colombia.",
              icon: "📍",
            },
            {
              title: "ALTITUD IDEAL",
              desc: "Cultivado a 1800 metros MSNM.",
              icon: "⛰️",
            },
            {
              title: "PROCESO ARTESANAL",
              desc: "Cuidado en cada etapa del grano.",
              icon: "🤲",
            },
            {
              title: "SELECCIÓN",
              desc: "Granos seleccionados uno a uno.",
              icon: "✨",
            },
            {
              title: "TOSTIÓN MEDIA",
              desc: "Resalta el balance perfecto entre aroma y sabor.",
              icon: "🔥",
            },
            {
              title: "NOTAS DE CATA",
              desc: "Chocolate, frutos rojos y caramelo.",
              icon: "☕",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-cream/10 p-10 flex flex-col items-start gap-4 hover:border-gold/50 transition-colors"
            >
              <div className="text-gold text-2xl opacity-80">{item.icon}</div>
              <h3 className="text-cream text-sm tracking-[0.15em] uppercase mt-2">
                {item.title}
              </h3>
              <div className="w-8 h-px bg-gold/50" />
              <p className="text-cream/60 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <Image
            src="/coffee-macro.jpg" // User needs to provide this image
            alt="Granos de café"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink opacity-80" />
        </div>
        
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-gold mb-4 uppercase">
            SABOR QUE TE IMPACTA.
          </h2>
          <p className="text-cream/80 font-light text-lg">
            Calidad que se siente,<br />pasión que se comparte.
          </p>
        </div>
      </section>
    </main>
  );
}
