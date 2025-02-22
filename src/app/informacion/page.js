import { Home } from "lucide-react";
import Servicios from "./components/Servicios";
import Testimonios from "./components/Testimonios";

const Info = () => {
  return (
    <div className="bg-[#0F0F0F] border-t border-[#2A2A2A]">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex flex-col items-center mb-16">
          <Home className="w-12 h-12 text-[#C49A6C] mb-4" />
          <h2 className="font-playfair-display text-4xl text-center text-white/90 mb-6">
            El Refugio Costero
          </h2>
          <p className="font-roboto text-xl text-center text-white/80 leading-relaxed">
            Un espacio recién renovado que combina el encanto rústico gallego con comodidades modernas. 
            Diseñado para grupos de hasta 6 personas, nuestro apartamento es tu base perfecta para 
            explorar la mágica Costa da Morte.
          </p>
        </div>

        <Servicios />
        <Testimonios />
      </div>
    </div>
  );
};

export default Info;