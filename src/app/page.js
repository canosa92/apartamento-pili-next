import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <Head>
        <title>Apartamento de Pili - Alquiler vacacional en Costa da Morte</title>
        <meta
          name="description"
          content="Apartamento de Pili, un acogedor alojamiento turístico en la Costa da Morte. Perfecto para escapadas en Galicia, cerca del mar y la naturaleza. Reserva ahora."
        />
        <meta
          name="keywords"
          content="apartamento en Costa da Morte, alquiler vacacional Galicia, turismo rural Galicia, escapadas en Galicia, dónde dormir en Costa da Morte"
        />
        <meta name="author" content="Apartamento de Pili" />
        <meta property="og:title" content="Apartamento de Pili - Alquiler en Costa da Morte" />
        <meta
          property="og:description"
          content="Descubre Apartamento de Pili, un alojamiento perfecto para descansar en la Costa da Morte. Disfruta de naturaleza, mar y tranquilidad."
        />
        <meta property="og:image" content="/gallery/cocina-comedor-salon.jpeg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="relative w-full min-h-screen flex items-center justify-center text-center text-[#e0d5c0] px-4 sm:px-6">
        
        {/* Imagen de fondo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/gallery/cocina-comedor-salon.jpeg"
            alt="Apartamento de Pili en Costa da Morte"
            fill={true}
            className="object-cover w-full h-full"
            priority
          />
        </div>

          {/* Capa de oscurecimiento */}
          <div className="absolute inset-0 bg-black/50"></div>
     

        {/* Contenido sobre la imagen */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-[#e0d5c0] px-4 sm:px-6">
            <h1 className="text-4xl sm:text-6xl lg:text-10xl font-serif font-bold max-w-xl sm:max-w-3xl lg:max-w-4xl leading-tight drop-shadow-md">
              Apartamento de Pili: Tu refugio en la Costa da Morte
            </h1>
            <p className="mt-4 text-lg sm:text-2xl font-sans max-w-md sm:max-w-2xl lg:max-w-3xl leading-relaxed drop-shadow-sm">
              Vive una experiencia inolvidable en un entorno natural único. Nuestro apartamento es perfecto para desconectar y disfrutar del turismo rural con todas las comodidades.
            </p>
            <p className="mt-2 text-base sm:text-xl font-sans max-w-sm sm:max-w-xl lg:max-w-2xl leading-relaxed drop-shadow-sm">
              Descubre playas vírgenes, senderos mágicos y la auténtica gastronomía gallega. Todo, desde la comodidad del Apartamento de Pili.
            </p>
          {/* Botones */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="/reservas"
              className="w-full sm:w-auto bg-[#c49a6c] hover:bg-[#a57e54] text-white px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold rounded shadow-lg transition text-center"
            >
              Reserva Ahora
            </a>
            <a
              href="/informacion"
              className="w-full sm:w-auto border-2 border-[#c49a6c] text-[#c49a6c] hover:bg-[#c49a6c] hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold rounded shadow-lg transition text-center"
            >
              Más Información
            </a>
          </div>
        </div>
        </div>      
    </>
  );
}
