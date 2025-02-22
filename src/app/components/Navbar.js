"use client";

import { useState } from "react";
import navLinks from "../data/navlink"

const Navbar = () => { 
  
  
const [menuOpen, setMenuOpen] = useState(false);

return ( 
  <nav className="bg-primary border-b border-secondary relative">
   <div className="container mx-auto px-6"> 
    <div className="flex justify-between items-center h-20"> {/* Título */}
       <h1 className="text-3xl font-serif font-semibold text-accent tracking-wide"> Apartamento Casa Pili 
       </h1>
          {/* Botón del menú móvil */}
      <button
        className="md:hidden text-3xl text-accent focus:outline-none hover:text-textMuted transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Enlaces de escritorio */}
      <ul className="hidden md:flex gap-10 items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="font-sans font-medium text-lg text-textLight hover:text-accent transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Menú móvil */}
  <div className={`${menuOpen ? 'fixed' : 'hidden'} inset-0 z-50 bg-black/70 md:hidden transition-opacity`}>  
    <div className={`bg-primary border-t border-secondary shadow-lg transform transition-transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <ul className="py-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="block font-sans font-semibold text-lg text-textLight hover:bg-secondary py-4 px-8 transition-colors"
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

); };

export default Navbar;
