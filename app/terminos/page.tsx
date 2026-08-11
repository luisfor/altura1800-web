export const metadata = {
  title: "Términos y condiciones",
};

export default function Terminos() {
  return (
    <main className="min-h-screen bg-cream text-ink px-6 pt-32 pb-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl mb-8">
          Términos y condiciones
        </h1>
        <div className="space-y-6 text-ink/70 font-light leading-relaxed">
          <p>
            Al usar este sitio web aceptas los siguientes términos generales.
          </p>
          <p>
            <strong className="text-ink">Uso del sitio.</strong> El contenido
            de este sitio es propiedad de ALTURA1800 y se ofrece con fines
            informativos y de marketing sobre nuestros productos.
          </p>
          <p>
            <strong className="text-ink">Disponibilidad del producto.</strong>{" "}
            La información de productos, precios y disponibilidad puede
            cambiar sin previo aviso mientras finalizamos nuestro lanzamiento
            comercial.
          </p>
          <p>
            <strong className="text-ink">Contacto.</strong> Para cualquier
            pregunta sobre estos términos, escríbenos a{" "}
            <a href="mailto:hola@altura1800.com" className="underline hover:text-gold">
              hola@altura1800.com
            </a>
            .
          </p>
          <p className="text-sm text-ink/40">
            Última actualización: agosto de 2026. Este documento es una base
            general; te recomendamos revisarlo con un asesor legal antes de
            operar comercialmente.
          </p>
        </div>
      </div>
    </main>
  );
}
