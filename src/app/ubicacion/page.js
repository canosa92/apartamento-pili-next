import React from "react";
import Lugares from "@/components/Lugares";
import { MapPin, Camera, Star, Waves } from "lucide-react";

const Ubicacion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6">
            Escápate a la Costa da Morte
          </h1>
          <p className="text-lg sm:text-xl text-blue-700 max-w-2xl mx-auto">
            Vive unas vacaciones inolvidables en nuestro apartamento familiar 🏡🌊
          </p>
        </div>

        {/* Ubicación Perfecta Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 mb-12">
          <div className="flex items-center mb-4">
            <MapPin className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">Ubicación Perfecta</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Situado en Vimianzo, estarás rodeado de naturaleza, historia y la tranquilidad característica de la Costa da Morte.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <Waves className="w-5 h-5 text-blue-500 mr-2" />
              <span>Playas espectaculares a minutos</span>
            </li>
            <li className="flex items-center text-gray-700">
              <Camera className="w-5 h-5 text-blue-500 mr-2" />
              <span>Paisajes de ensueño y acantilados</span>
            </li>
            <li className="flex items-center text-gray-700">
              <Star className="w-5 h-5 text-blue-500 mr-2" />
              <span>Cerca de puntos emblemáticos</span>
            </li>
          </ul>
        </div>

        {/* Costa da Morte Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">La Costa da Morte</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            La Costa da Morte, situada en el noroeste de Galicia, es una región mística y espectacular que combina paisajes naturales imponentes, una rica historia marítima y tradiciones culturales únicas. Su nombre, que significa "Costa de la Muerte," proviene de su reputación histórica por naufragios debido a sus aguas embravecidas y su costa rocosa.
          </p>
          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-blue-800 italic">
              "Un lugar donde la naturaleza muestra su cara más salvaje y hermosa, donde cada atardecer es un espectáculo único."
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ven a vivir la auténtica esencia gallega
          </h2>
          <p className="text-xl mb-8">
            Somos una familia que comparte su hogar para que puedas descubrir la magia de la Costa da Morte
          </p>
          <button className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
            Reserva ahora
          </button>
        </div>

        <Lugares />

        {/* Mapa de Ubicación */}
        <div className="my-6">
          <h2 className="text-2xl font-semibold mb-3">📍 Mapa de Ubicación</h2>
          <iframe
            className="w-full h-80"
            src="https://www.google.com/maps/embed?pb=..."
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
