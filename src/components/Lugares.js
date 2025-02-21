import React from 'react';
import lugares from '../app/data/lugares';

const Lugares = () => {
  return (
    <div className="mt-10">
      <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">Qué ver en la Costa da Morte</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mapeo de las categorías y lugares */}
        {Object.keys(lugares).map((categoria, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-xl font-semibold text-gray-800">{categoria.replace(/([A-Z])/g, ' $1').toUpperCase()}</h4>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              {lugares[categoria].map((lugar, idx) => (
                <li key={idx}>
                  <strong>{lugar.title}:</strong> {lugar.description}
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
