import React from "react";
import Lugares from "./components/Lugares";
import { MapPin } from "lucide-react";

export const metadata = {
  title: "Ubicación | Apartamento de Pili - Costa da Morte",
  description:
    "Descubre la ubicación privilegiada del Apartamento de Pili en Vimianzo, en la Costa da Morte. Un refugio cercano a playas, naturaleza y patrimonio cultural, ideal para explorar Galicia.",
  keywords:
    "ubicación apartamento de Pili, Costa da Morte, alojamiento en Vimianzo, turismo Galicia, vacaciones en Costa da Morte, playas Galicia, Reserva de la Biosfera, explorar Galicia",
  openGraph: {
    title: "Ubicación | Apartamento de Pili - Costa da Morte",
    description:
      "Ubicado en el corazón de la Costa da Morte, el Apartamento de Pili es tu base perfecta para explorar la naturaleza, la playa y la rica herencia cultural de Galicia.",
    url: "https://apartamentodepili.com/ubicacion",
    images: [
      {
        url: "https://apartamentodepili.com/images/ubicacion.jpg", // Asegúrate de que esta imagen exista
        width: 1200,
        height: 630,
        alt: "Ubicación del Apartamento de Pili en Costa da Morte",
      },
    ],
  },
};

const Ubicacion = () => {
  return (
    <div className="min-h-screen bg-primary border-t border-gray-700">
      <div className="container mx-auto px-2 py-20 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl text-accent mb-6">
            Descubre la Costa da Morte
          </h1>
          <p className="font-sans text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Un refugio donde el mar y la tradición se encuentran 🏡🌊
          </p>
        </div>

        {/* Sección Ubicación */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 mb-12 hover:border-accent/40 transition-all duration-300">
          <div className="flex items-center mb-6 space-x-4">
            <MapPin className="w-8 h-8 text-accent" />
            <h2 className="font-serif text-3xl text-white/90">
              Ubicación Privilegiada
            </h2>
          </div>
          <p className="font-sans text-lg text-white/80 leading-relaxed mb-6">
            En el corazón de Galicia, la Costa da Morte combina naturaleza virgen
            con una rica herencia cultural. Nuestro apartamento es tu base ideal
            para explorar este entorno único declarado Reserva de la Biosfera.
          </p>

          {/* Mapa */}
          <div className="my-8">
            <iframe
              className="w-full h-96 rounded-xl border border-gray-700"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11610.951007089945!2d-8.999999999999995!3d43.099999999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e4e8b9b9b9b9b%3A0xb9b9b9b9b9b9b9b9!2sVimianzo%2C%20A%20Coru%C3%B1a%2C%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1690838400000!5m2!1ses!2ses"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <Lugares />

        {/* CTA */}
        <div className="text-center bg-gray-800 border border-accent rounded-2xl p-12 text-white mt-16 hover:border-textMuted transition-all duration-300">
          <h2 className="font-serif text-3xl mb-4">
            Vive la auténtica esencia gallega
          </h2>
          <p className="font-sans text-xl text-white/80 mb-8">
            Un espacio creado con amor para que disfrutes de la magia costera
          </p>
          <a
            href="/reservas"
            className="inline-block font-sans font-semibold bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Reserva tu estancia
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
