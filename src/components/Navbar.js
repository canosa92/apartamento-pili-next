"use client";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Galería", href: "/galeria" },
    { name: "Información", href: "/informacion" },
    { name: "Ubicacion", href: "/ubicacion" },
    { name: "Contacto", href: "/contacto" }
  ];

  return (
    <nav className="bg-[#c49a6c] text-white p-4 relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Apartamento de Pili</h1>
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <ul className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:underline transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú móvil */}
        <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className="pt-4 pb-2">
            {navLinks.map((link) => (
              <li key={link.name} className="mb-2">
                <a
                  href={link.href}
                  className="block hover:bg-[#b38a5c] py-2 px-4 rounded transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;