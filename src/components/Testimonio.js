import React from "react";
import testimonios from "@/app/data/testimonio";

const Testimonios = () => {
  return (
    <div className="mt-12 px-4">
      <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">Lo que dicen nuestros huéspedes</h3>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonios.map((testimonio, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 w-full sm:w-72 lg:w-80 xl:w-96 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={testimonio.foto}
                alt={`${testimonio.nombre}'s foto`}
                className="w-16 h-16 rounded-full object-cover border-4 border-indigo-500"
              />
              <div>
                <p className="font-semibold text-xl text-gray-800">{testimonio.nombre}</p>
                <p className="text-sm text-gray-500">{testimonio.fecha}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4 italic">{`"${testimonio.comentario}"`}</p>
            <div className="flex items-center mb-2">
              {[...Array(testimonio.calificacion)].map((_, idx) => (
                <svg key={idx} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 15.27l4.15 2.18-1.12-4.77L18 7.24l-4.87-.42L10 2 7.87 6.82 3 7.24l3.97 5.43-1.12 4.77L10 15.27z" />
                </svg>
              ))}
              {[...Array(5 - testimonio.calificacion)].map((_, idx) => (
                <svg key={idx} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 15.27l4.15 2.18-1.12-4.77L18 7.24l-4.87-.42L10 2 7.87 6.82 3 7.24l3.97 5.43-1.12 4.77L10 15.27z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Fuente:{" "}
              {testimonio.fuente === "Airbnb" ? (
                <a href="https://www.airbnb.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">
                  Airbnb
                </a>
              ) : (
                <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline">
                  Booking
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonios;
