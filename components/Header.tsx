"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nuestro-cafe", label: "Nuestro Café" },
  { href: "/tienda", label: "Tienda" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when path changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Bar */}
      <div className="w-full bg-[#000000] py-2 hidden md:block">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 xl:px-12 grid grid-cols-3 items-center">
          <div className="col-span-1"></div>
          <div className="col-span-1 text-center flex justify-center">
            <p className="text-[7px] lg:text-[9px] tracking-[0.1em] lg:tracking-[0.2em] text-[#9B793B] uppercase font-light whitespace-nowrap">
              ENVÍOS A TODO COLOMBIA <span className="mx-1 lg:mx-2 text-cream/20">|</span> PAGOS 100% SEGUROS
            </p>
          </div>
          <div className="col-span-1 hidden min-[1200px]:flex justify-end items-center gap-[18px]">
            <button className="text-[#E8E4DC] hover:text-[#C6A15B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>

            {/* Account Icon */}
            <Link href="/mi-cuenta" className="flex items-center gap-2 text-[#E8E4DC] hover:text-[#C6A15B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <span className="text-[10px] font-sans font-medium tracking-[0.04em]">Mi cuenta</span>
            </Link>

            {/* Cart Icon */}
            <Link href="/carrito" className="relative text-[#E8E4DC] hover:text-[#C6A15B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#C6A15B] text-ink text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-[#000000]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 xl:px-12 py-2 md:py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '12px', width: 'fit-content', flexShrink: 0, marginTop: '-12px' }}>
            <img src="/logo_cropped.png" alt="Altura 1800" style={{ width: '60px', height: '72px', objectFit: 'contain', flexShrink: 0 }} />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 'max-content', lineHeight: 1 }}>
              <div style={{ fontFamily: 'serif', fontSize: '22px', fontWeight: 500, letterSpacing: '0.08em', color: '#F1E8D8', whiteSpace: 'nowrap' }}>ALTURA</div>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '7px', marginTop: '4px', color: '#C6A15B', fontSize: '16px', letterSpacing: '0.15em' }}>
                <span style={{ display: 'block', width: '12px', height: '1px', background: '#C6A15B' }}></span>
                <span>1800</span>
                <span style={{ display: 'block', width: '12px', height: '1px', background: '#C6A15B' }}></span>
              </div>
              <div style={{ marginTop: '5px', fontSize: '9px', fontWeight: 500, letterSpacing: '0.20em', color: '#9B793B', whiteSpace: 'nowrap' }}>CAFÉ DE ALTURA</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden min-[1200px]:flex flex-1 justify-start items-center gap-[27px] font-sans text-[10px] font-medium tracking-[0.03em] uppercase leading-none ml-[50px] xl:ml-[70px]">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition-colors duration-200 ease-in-out whitespace-nowrap ${isActive ? 'text-[#C6A15B]' : 'text-[#E8E4DC] hover:text-[#C6A15B]'}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-[16px] h-[1px] bg-[#C6A15B]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right (Button Only) */}
          <div className="hidden min-[1200px]:flex items-center justify-end w-fit shrink-0">
            {/* Buy Button */}
            <Link
              href="/tienda"
              className="px-[20px] h-[36px] flex items-center justify-center bg-[#C6A15B] text-[#FFFDF7] text-[10px] font-semibold tracking-[0.06em] uppercase rounded-[18px] hover:bg-opacity-90 transition-all whitespace-nowrap"
            >
              COMPRAR AHORA
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex min-[1200px]:hidden items-center gap-4">
            <Link href="/carrito" className="relative text-[#E8E4DC] hover:text-[#C6A15B] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C6A15B] text-[#FFFDF7] text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </Link>
            <button
              className="text-[#E8E4DC] hover:text-[#C6A15B] transition-colors text-[11px] tracking-[0.15em] uppercase px-3 py-1 rounded"
              onClick={() => setOpen(!open)}
            >
              Menú
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <nav className="min-[1200px]:hidden px-6 py-4 flex flex-col gap-6 text-[11px] tracking-[0.15em] uppercase text-[#E8E4DC]/70 bg-[#000000]">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${isActive ? 'text-[#C6A15B] font-bold' : 'hover:text-[#E8E4DC]'} transition-colors`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 flex flex-col gap-4">
            <Link href="/mi-cuenta" className="hover:text-[#E8E4DC] transition-colors">Mi Cuenta</Link>
            <Link
              href="/tienda"
              className="text-center py-3 bg-[#C6A15B] text-[#FFFDF7] font-bold rounded-full uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all"
            >
              COMPRAR AHORA
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
