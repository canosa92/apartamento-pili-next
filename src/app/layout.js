import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

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
  title: "Apartamento Casa Pili",
  description: "Alojamiento vacacional en la Costa da Morte, Galicia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} bg-primary text-textLight font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen text-textMuted">{children}</main>
      </body>
    </html>
  );
}
