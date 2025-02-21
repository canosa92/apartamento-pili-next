import { MapPin, Home, Users, Coffee, Car } from 'lucide-react';

const EscapateCostaDaMorte = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Características principales */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4">
            <Home className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">El Apartamento</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Recién reformado y diseñado para alojar cómodamente hasta 6 personas, nuestro apartamento es el refugio perfecto para tus vacaciones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EscapateCostaDaMorte;
