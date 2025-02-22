import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Apartamento de Pili | Alojamiento en Costa da Morte y Vimianzo",
  description:
    "Descubre Apartamento de Pili, tu alojamiento en Costa da Morte. Ideal para estancias en Vimianzo, cerca de playas y naturaleza. Reserva tu estancia en este acogedor apartamento turístico.",
  keywords:
    "alojamiento Costa da Morte, hotel Costa da Morte, Airbnb Costa da Morte, hotel Vimianzo, alojamiento Vimianzo, Apartamento de Pili, turismo Galicia",
  openGraph: {
    title: "Apartamento de Pili | Alojamiento en Costa da Morte y Vimianzo",
    description:
      "Disfruta de una estancia única en la Costa da Morte. Apartamento de Pili, tu mejor opción en Vimianzo.",
    type: "website",
    url: "https://apartamentodepili.com",
    images: [
      {
        url: "https://live.staticflickr.com/65535/54344469040_4930793900_w.jpg",
        width: 1200,
        height: 630,
        alt: "Apartamento de Pili en Costa da Morte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamento de Pili | Alojamiento en Costa da Morte y Vimianzo",
    description:
      "Disfruta de una estancia inolvidable en Apartamento de Pili, tu alojamiento en Vimianzo, en plena Costa da Morte.",
    images: ["https://live.staticflickr.com/65535/54344469040_4930793900_w.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} bg-primary text-textLight font-sans antialiased`}
      >
        <Navbar />
        <main className="text-textMuted">{children}</main>
      </body>
    </html>
  );
}
