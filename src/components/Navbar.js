"use client"; 

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Galería", href: "/galeria" },
    { name: "Información", href: "/informacion" },
    { name: "Ubicación", href: "/ubicacion" },
    { name: "Servicios", href: "/servicios" },
    { name: "Reservas", href: "/reservas" }
  ];

  return (
    <nav className="bg-[#c49a6c] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Apartamento de Pili</h1>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`md:flex gap-6 ${menuOpen ? "block" : "hidden"} md:block`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
