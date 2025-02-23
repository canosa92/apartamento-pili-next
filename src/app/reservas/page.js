import Reservas from "./components/Reservas";
import Tarifa from "./components/Tarifas";

export const metadata = {
  title: "Reserva tu Estancia | Apartamento de Pili - Costa da Morte",
  description: "Reserva tu estancia en el Apartamento de Pili, un refugio acogedor en la Costa da Morte. Disfruta de la comodidad con desayuno incluido y un 10% de descuento por reservas online.",
  keywords: "reserva apartamento, alojamiento Costa da Morte, vacaciones Galicia, turismo Galicia, Apartamento de Pili",
  authors: [{ name: "Apartamento de Pili" }],
  openGraph: {
    title: "Reserva tu Estancia | Apartamento de Pili - Costa da Morte",
    description: "Reserva en el Apartamento de Pili y disfruta de un alojamiento con encanto en la Costa da Morte con desayuno incluido.",
    url: "https://apartamentodepili.com/reservas",
    images: [
      {
        url: "https://apartamentodepili.com/images/apartamento.jpg",
        width: 1200,
        height: 630,
        alt: "Apartamento de Pili en Costa da Morte",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserva tu Estancia | Apartamento de Pili - Costa da Morte",
    description: "Reserva en el Apartamento de Pili y disfruta de un alojamiento con encanto en la Costa da Morte con desayuno incluido.",
    images: ["https://apartamentodepili.com/images/apartamento.jpg"],
  },
};

export default function ReservasPage() {
  return (
    <div className="min-h-screen py-16 space-y-16">
      <header className="text-center">
        <h1 className="font-serif text-4xl sm:text-5xl text-accent">
          Reserva tu Estancia en el <span className="text-[#C49A6C]">Apartamento de Pili</span>
        </h1>
        <p className="font-sans text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mt-4">
          Disfruta de la Costa da Morte con todas las comodidades. Estancia mínima de 2 noches con desayuno incluido.
        </p>
      </header>

      <Tarifa />
      <Reservas />
    </div>
  );
}
