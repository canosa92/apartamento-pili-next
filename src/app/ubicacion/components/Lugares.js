import React from "react";
import places from "@/app/data/places";

const Lugares = () => {
  return (
    <div className="mt-16">
      <h3 className="font-serif text-4xl text-accent text-center mb-12">
        Tesoros de la Costa
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.keys(places).map((categoria, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-accent/40 transition-all duration-300"
          >
            <h4 className="font-serif text-2xl text-accent mb-4">
              {categoria.replace(/([A-Z])/g, " $1").toUpperCase()}
            </h4>
            <ul className="font-sans space-y-4">
              {places[categoria].map((lugar, idx) => (
                <li
                  key={idx}
                  className="text-white/80 hover:text-accent transition-colors duration-200"
                >
                  <span className="font-semibold">{lugar.title}:</span>{" "}
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
