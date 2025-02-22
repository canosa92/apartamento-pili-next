import React from 'react';
import lugares from "@/app/data/lugares";

const Lugares = () => {
  return (
    <div className="mt-16">
      <h3 className="font-playfair-display text-4xl text-[#C49A6C] text-center mb-12">
        Tesoros de la Costa
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.keys(lugares).map((categoria, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#C49A6C]/40 transition-all duration-300"
          >
            <h4 className="font-playfair-display text-2xl text-[#C49A6C] mb-4">
              {categoria.replace(/([A-Z])/g, ' $1').toUpperCase()}
            </h4>
            <ul className="font-roboto space-y-4">
              {lugares[categoria].map((lugar, idx) => (
                <li 
                  key={idx}
                  className="text-white/80 hover:text-[#C49A6C] transition-colors duration-200"
                >
                  <span className="font-semibold">{lugar.title}:</span>{' '}
                  <span className="text-white/70">{lugar.description}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lugares;