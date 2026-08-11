import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Mi Cuenta",
};

export default function MiCuenta() {
  return (
    <main className="min-h-screen bg-ink pt-28 px-6 pb-20 animate-fade-in-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-1/4">
          <div className="bg-ink border border-cream/10 p-8 sticky top-28">
            <h2 className="font-serif text-2xl text-cream mb-2 uppercase">Mi Cuenta</h2>
            <p className="text-cream/50 text-xs mb-8">¡Hola, Luis!</p>
            
            <nav className="flex flex-col gap-4 text-xs tracking-[0.15em] uppercase">
              <Link href="#" className="text-gold font-bold transition-colors">
                Panel General
              </Link>
              <Link href="#" className="text-cream/60 hover:text-cream transition-colors">
                Historial de Pedidos
              </Link>
              <Link href="#" className="text-cream/60 hover:text-cream transition-colors">
                Mi Suscripción
              </Link>
              <Link href="#" className="text-cream/60 hover:text-cream transition-colors">
                Direcciones
              </Link>
              <div className="w-full h-px bg-cream/10 my-4" />
              <Link href="#" className="text-cream/40 hover:text-cream transition-colors">
                Cerrar Sesión
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="w-full md:w-3/4 space-y-12">
          {/* Subscription Status Card */}
          <section className="bg-gold p-8 md:p-10 text-ink shadow-[0_0_40px_rgba(166,135,58,0.15)] relative overflow-hidden animate-fade-in-up stagger-1">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2">Suscripción Activa</p>
                <h3 className="font-serif text-3xl mb-2">Amante del Café</h3>
                <p className="text-ink/80 text-sm">Próximo envío: 15 de Septiembre</p>
              </div>
              <button className="px-6 py-3 border border-ink text-ink text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-ink hover:text-gold transition-colors">
                GESTIONAR
              </button>
            </div>
          </section>

          {/* Recent Orders */}
          <section className="animate-fade-in-up stagger-2">
            <div className="flex justify-between items-end mb-6 border-b border-cream/10 pb-4">
              <h3 className="font-serif text-2xl text-cream uppercase">Pedidos Recientes</h3>
              <Link href="#" className="text-gold text-[10px] tracking-[0.2em] uppercase hover:text-cream transition-colors">Ver todos</Link>
            </div>
            
            <div className="space-y-4">
              {/* Order Item */}
              <div className="border border-cream/10 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-ink hover:bg-cream/5 transition-colors">
                <div>
                  <p className="text-gold text-xs mb-1">Pedido #4892</p>
                  <p className="text-cream/60 text-sm font-light">12 Agosto, 2024</p>
                </div>
                <div className="text-left sm:text-center">
                  <p className="text-cream text-sm">Completado</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-serif text-cream text-lg">$96.700 COP</p>
                </div>
                <div>
                  <button className="px-6 py-2 border border-cream/30 text-cream text-[10px] tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors">
                    VER DETALLE
                  </button>
                </div>
              </div>

              {/* Order Item */}
              <div className="border border-cream/10 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-ink hover:bg-cream/5 transition-colors">
                <div>
                  <p className="text-gold text-xs mb-1">Pedido #4711</p>
                  <p className="text-cream/60 text-sm font-light">12 Julio, 2024</p>
                </div>
                <div className="text-left sm:text-center">
                  <p className="text-cream text-sm">Completado</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-serif text-cream text-lg">$56.900 COP</p>
                </div>
                <div>
                  <button className="px-6 py-2 border border-cream/30 text-cream text-[10px] tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors">
                    VER DETALLE
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Account Details Quick View */}
          <section className="grid md:grid-cols-2 gap-8 animate-fade-in-up stagger-3">
            <div className="border border-cream/10 p-8">
              <h3 className="font-serif text-xl text-cream uppercase mb-6 border-b border-cream/10 pb-4">Información Personal</h3>
              <p className="text-cream font-light mb-1">Luis</p>
              <p className="text-cream/60 font-light text-sm mb-6">luis@ejemplo.com</p>
              <Link href="#" className="text-gold text-[10px] tracking-[0.2em] uppercase hover:text-cream transition-colors">Editar Perfil</Link>
            </div>
            <div className="border border-cream/10 p-8">
              <h3 className="font-serif text-xl text-cream uppercase mb-6 border-b border-cream/10 pb-4">Dirección Principal</h3>
              <p className="text-cream font-light mb-1">Luis</p>
              <p className="text-cream/60 font-light text-sm mb-1">Manizales, Caldas, Colombia</p>
              <p className="text-cream/60 font-light text-sm mb-6">+57 300 123 4567</p>
              <Link href="#" className="text-gold text-[10px] tracking-[0.2em] uppercase hover:text-cream transition-colors">Editar Dirección</Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
