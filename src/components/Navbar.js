"use client";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Galería", href: "/galeria" },
    { name: "Información", href: "/informacion" },
    { name: "Ubicación", href: "/ubicacion" },
    { name: "Reserva", href: "/reservas" }
  ];

  return (
    <nav className="bg-[#0F0F0F] border-b border-[#2A2A2A] relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Título más destacado */}
          <h1 className="text-3xl xl:text-3xl font-playfair-display font-semibold text-[#e0d5c0] tracking-wide">
            Apartamento de Pili
          </h1>
          
          {/* Botón del menú móvil más grande */}
          <button
            className="md:hidden text-3xl text-[#C49A6C] focus:outline-none hover:text-[#E6D6C4] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Enlaces de escritorio - Versión potenciada */}
          <ul className="hidden md:flex gap-10 items-center h-full">
            {navLinks.map((link) => (
              <li key={link.name} className="h-full flex items-center">
                <a
                  href={link.href}
                  className="font-roboto font-medium text-xl text-[#FFFFFF] hover:text-[#C49A6C] transition-all duration-300 relative group h-full flex items-center tracking-wide"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#C49A6C] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú móvil - Versión mejorada */}
        <div className={`${menuOpen ? 'fixed' : 'hidden'} inset-0 z-50 bg-black/70 md:hidden`}>
          <div className="bg-[#1A1A1A] border-t border-[#2A2A2A]">
            <ul className="py-6"> {/* Aumentado el padding */}
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block  acking-wide font-roboto font-semibold text-lg text-[#FFFFFF] hover:bg-[#2A2A2A] py-4 px-8 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;