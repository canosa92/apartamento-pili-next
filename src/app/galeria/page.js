export const metadata = {
  title: "Galería | Apartamento de Pili - Costa da Morte",
  description:
    "Explora nuestra galería de imágenes del Apartamento de Pili en Costa da Morte. Descubre el interior, exterior y alrededores de este alojamiento turístico en Vimianzo.",
  keywords:
    "galería apartamento de Pili, fotos alojamiento Costa da Morte, imágenes hotel Vimianzo, turismo Galicia, Airbnb Costa da Morte",
  openGraph: {
    title: "Galería | Apartamento de Pili - Costa da Morte",
    description:
      "Descubre las imágenes del Apartamento de Pili, un alojamiento único en Vimianzo, Costa da Morte.",
    url: "https://apartamentodepili.com/galeria",
    images: [
      {
        url: "https://live.staticflickr.com/65535/54344469040_4930793900_w.jpg",
        width: 1200,
        height: 630,
        alt: "Galería de imágenes del Apartamento de Pili",
      },
    ],
  },
};

import GalleryGrid from "./components/GalleryGrid";

export default function GaleriaPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <GalleryGrid />
    </section>
  );
}
