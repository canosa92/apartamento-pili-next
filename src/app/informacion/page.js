import React from "react";
import Testimonios from "@/components/Testimonio";
import Servicios from "@/components/Servicios";
import { Home } from "lucide-react";

const Info = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6 space-x-4">
        <Home className="w-8 h-8 text-indigo-600" />
        <h2 className="text-3xl font-semibold text-gray-800">El Apartamento</h2>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        Recién reformado y diseñado para alojar cómodamente hasta 6 personas, nuestro apartamento es el refugio perfecto para tus vacaciones.
      </p>

      <Servicios />
      <Testimonios />
    </div>
  );
};

export default Info;
