export const metadata = {
  title: "Política de privacidad",
};

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-cream text-ink px-6 pt-32 pb-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl mb-8">
          Política de privacidad
        </h1>
        <div className="space-y-6 text-ink/70 font-light leading-relaxed">
          <p>
            En ALTURA1800 respetamos tu privacidad. Este documento explica qué
            información recopilamos a través de este sitio web y cómo la
            usamos.
          </p>
          <p>
            <strong className="text-ink">Qué recopilamos.</strong> Cuando
            dejas tu correo electrónico en nuestro formulario de contacto,
            almacenamos únicamente esa dirección de correo con el propósito
            de avisarte sobre el lanzamiento de nuestros productos.
          </p>
          <p>
            <strong className="text-ink">Cómo lo usamos.</strong> No
            compartimos, vendemos ni cedemos tu información a terceros. Solo
            la usamos para comunicarnos contigo sobre ALTURA1800.
          </p>
          <p>
            <strong className="text-ink">Tus derechos.</strong> Puedes
            solicitar en cualquier momento que eliminemos tu información
            escribiendo a{" "}
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
