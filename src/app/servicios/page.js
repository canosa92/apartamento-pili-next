import React from 'react';

const title = "Ideal para tu estancia";

const servicios = [
  { icon: "🚿", name: "Baño privado" },
  { icon: "🚗", name: "Parking gratuito" },
  { icon: "🐶", name: "Admite mascotas" },
  { icon: "🏖️", name: "Cerca de la playa" },
  { icon: "📡", name: "WiFi gratis" },
  { icon: "📺", name: "TV de pantalla plana" },
  { icon: "🏠", name: "Balcón y terraza" },
  { icon: "🔥", name: "Barbacoa" },
  { icon: "👶", name: "Trona para bebés" },
  { icon: "🍽️", name: "Cocina equipada" },
  { icon: "🛏️", name: "Ropa de cama incluida" },
  { icon: "🛁", name: "Bañera o ducha" },
  { icon: "🛋️", name: "Zona de estar con sofá" },
  { icon: "🌄", name: "Vistas a la montaña" },
  { icon: "🌿", name: "Vistas al jardín" },
  { icon: "🏡", name: "Edificio independiente" },
  { icon: "🏠", name: "Habitaciones familiares" },
  { icon: "🌎", name: "Idiomas: Inglés y Español" },
];

const Servicios = () => {
  return (
    <section id="servicios" className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => (
            <div key={index} className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <span className="text-2xl">{servicio.icon}</span>
              <span className="text-lg font-medium">{servicio.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
