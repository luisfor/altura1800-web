import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cream text-ink">
      <p className="tracking-[0.3em] text-xs text-gold uppercase mb-6">
        Error 404
      </p>
      <h1 className="font-serif text-3xl md:text-4xl mb-6">
        Esta página está a más altura de la que alcanzamos.
      </h1>
      <p className="max-w-md text-base text-ink/70 font-light mb-10">
        El contenido que buscas no existe o fue movido.
      </p>
      <Link
        href="/"
        className="text-xs tracking-[0.2em] uppercase border-b border-ink/40 pb-1 hover:border-gold hover:text-gold transition-colors"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
