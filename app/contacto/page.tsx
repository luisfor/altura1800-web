import Image from "next/image";

export const metadata = {
  title: "Contacto",
};

export default function Contacto() {
  return (
    <main className="min-h-screen bg-ink pt-28 px-6 pb-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="font-serif text-3xl md:text-4xl text-cream mb-2 uppercase">
          Contacto
        </h1>
        <p className="text-cream/70 font-light text-sm">
          Estamos aquí para ti
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start mb-20">
        {/* Contact Info */}
        <div className="space-y-8 pl-0 md:pl-12">
          <div className="flex gap-6">
            <div className="text-gold text-2xl">✉️</div>
            <div>
              <p className="text-[10px] tracking-[0.2em] text-cream/70 uppercase mb-1">ESCRÍBENOS</p>
              <p className="text-cream font-light">hola@altura1800.cafe</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-gold text-2xl">📱</div>
            <div>
              <p className="text-[10px] tracking-[0.2em] text-cream/70 uppercase mb-1">WHATSAPP</p>
              <p className="text-cream font-light">+57 300 123 4567</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-gold text-2xl">📞</div>
            <div>
              <p className="text-[10px] tracking-[0.2em] text-cream/70 uppercase mb-1">TELÉFONO</p>
              <p className="text-cream font-light">+57 601 123 4567</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-gold text-2xl">📍</div>
            <div>
              <p className="text-[10px] tracking-[0.2em] text-cream/70 uppercase mb-1">DIRECCIÓN</p>
              <p className="text-cream font-light">Manizales, Caldas, Colombia</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-gold text-2xl">🕒</div>
            <div>
              <p className="text-[10px] tracking-[0.2em] text-cream/70 uppercase mb-1">HORARIO DE ATENCIÓN</p>
              <p className="text-cream font-light text-sm">
                Lunes a Viernes: 8:00 am - 6:00 pm<br />
                Sábados: 9:00 am - 1:00 pm
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-cream p-8 md:p-12">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full px-4 py-3 bg-transparent border-b border-ink/20 text-ink placeholder:text-ink/40 text-sm focus:outline-none focus:border-gold"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-3 bg-transparent border-b border-ink/20 text-ink placeholder:text-ink/40 text-sm focus:outline-none focus:border-gold"
            />
            <input
              type="text"
              placeholder="Asunto"
              className="w-full px-4 py-3 bg-transparent border-b border-ink/20 text-ink placeholder:text-ink/40 text-sm focus:outline-none focus:border-gold"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              className="w-full px-4 py-3 bg-transparent border-b border-ink/20 text-ink placeholder:text-ink/40 text-sm focus:outline-none focus:border-gold resize-none"
            />
            <button
              type="submit"
              className="w-full mt-4 py-4 bg-gold text-ink text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-ink hover:text-cream transition-colors"
            >
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="max-w-7xl mx-auto h-[400px] relative border border-cream/10 bg-ink/50 flex items-center justify-center">
        <Image src="/map.jpg" alt="Mapa" fill className="object-cover opacity-50" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="text-gold text-3xl">📍</div>
          <div className="bg-cream px-4 py-2 shadow-lg">
            <p className="text-ink text-xs font-bold text-center">
              Manizales, Caldas<br />Colombia
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
