import { Home } from "lucide-react";
import Servicios from "./components/Servicios";
import Testimonios from "./components/Testimonios";

export const metadata = {
  title: "Apartamento de Pili | Alojamiento en la Costa da Morte",
  description:
    "Descubre El Refugio Costero, un apartamento vacacional en Vimianzo, Costa da Morte. Un espacio renovado, ideal para grupos de hasta 6 personas, con todas las comodidades modernas y la esencia rústica gallega.",
  keywords:
    "Apartamento de Pili, alojamiento Costa da Morte, hotel Costa da Morte, apartamentos en Vimianzo, turismo Galicia, vacaciones Costa da Morte, alojamiento turístico Costa da Morte, refugio costero",
  openGraph: {
    title: "Apartamento de Pili | Alojamiento en la Costa da Morte",
    description:
      "Vive una experiencia única en El Refugio Costero, un apartamento renovado en Vimianzo, Costa da Morte, ideal para tus vacaciones en Galicia.",
    url: "https://apartamentodepili.com/info",
    images: [
      {
        url: "https://live.staticflickr.com/65535/54344469040_4930793900_w.jpg",
        width: 1200,
        height: 630,
        alt: "Apartamento de Pili en Costa da Morte",
      },
    ],
  },
};

const Info = () => {
  return (
    <div className="bg-primary border-t border-gray-700">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex flex-col items-center mb-16">
          <Home className="w-12 h-12 text-accent mb-4" />
          <h2 className="font-serif text-4xl text-center text-white/90 mb-6">
            El Refugio Costero - Apartamento de Pili
          </h2>
          <p className="font-sans text-xl text-center text-white/80 leading-relaxed">
            Un espacio recién renovado que combina el encanto rústico gallego con comodidades modernas. Diseñado para grupos de hasta 6 personas, nuestro apartamento es tu base perfecta para explorar la mágica Costa da Morte, un destino único en Galicia.
          </p>
        </div>

        <Servicios />
        <Testimonios />
      </div>
    </div>
  );
};

export default Info;
