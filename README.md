# ALTURA 1800 — E-commerce & Landing Page Premium

Este proyecto es la plataforma web oficial de **ALTURA 1800**, una marca de café colombiano de especialidad cultivado a más de 1.800 msnm. El sitio está construido con **Next.js 14 (App Router)** y **Tailwind CSS**, ofreciendo una experiencia premium de e-commerce y landing page.

## 🚀 Tecnologías Principales

- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS
- **Lenguaje:** TypeScript
- **Despliegue:** Optimizado para Cloudflare Pages (vía `@cloudflare/next-on-pages`) o Vercel.

## 🌟 Características

- **Diseño Premium:** Interfaz meticulosamente diseñada para transmitir la exclusividad y alta calidad del café, utilizando una paleta de colores sofisticada (Cream, Ink, Gold, Forest).
- **Header Responsivo & Elegante:** Navegación optimizada con un diseño de doble nivel en escritorio y un menú hamburguesa fluido en dispositivos móviles.
- **Rendimiento Optimo:** Carga ultra rápida gracias a Server Components de Next.js.
- **Tienda Integrada:** Experiencia de compra fluida lista para integrarse con plataformas headless (como Shopify).
- **SEO & Accesibilidad:** Configurado con metadata de Open Graph y estándares de accesibilidad moderna.

## 🛠 Instalación y Uso Local

1. **Clonar el repositorio** (si aún no lo tienes localmente):
   ```bash
   git clone https://github.com/luisfor/altura1800-web.git
   cd altura1800-web
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en vivo.

## 📦 Estructura del Proyecto

- `/app`: Rutas principales de Next.js (App Router), incluyendo `page.tsx` (Landing), `/tienda` y páginas legales.
- `/components`: Componentes reutilizables de UI (Header, Footer, CartProvider, etc.).
- `/public`: Activos estáticos (imágenes, logos, íconos).
- `tailwind.config.ts`: Configuración central de diseño y colores de la marca.

## 🚀 Despliegue (Cloudflare Pages)

El proyecto está listo para desplegarse de manera automática a través de GitHub hacia Cloudflare Pages.

1. Conecta este repositorio en tu Cloudflare Dashboard.
2. Configura el **Framework preset** como `Next.js`.
3. El comando de build es `npx @cloudflare/next-on-pages@1`.
4. El directorio de salida es `.vercel/output/static`.

## 📝 Notas de Desarrollo

- Los íconos y SVG se manejan internamente con clases de Tailwind.
- La tipografía serif y sans-serif están integradas a nivel global.
- Cualquier modificación a los estilos del Header o Footer debe realizarse respetando los breakpoints globales (`min-[1200px]`) para mantener la coherencia del diseño premium en resoluciones específicas.

---
*Desarrollado con pasión para llevar el mejor café de Colombia al mundo.*
