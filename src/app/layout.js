import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Apartamento de Pili",
  description: "Alojamiento vacacional en la Costa da Morte, Galicia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${roboto.variable} ${playfairDisplay.variable} antialiased text-white/90`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Contenido principal */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer (opcional, puedes añadirlo después) */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}