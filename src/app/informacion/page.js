import Head from "next/head";

export default function Info() {
  return (
    <>
      {/* SEO */}
      <Head>
        <title>Información - Apartamento apartamento de Pili</title>
        <meta
          name="description"
          content="Descubre todos los detalles sobre el Apartamento apartamento de Pili. Un alojamiento acogedor en Costa da Morte con todas las comodidades para tu estancia perfecta."
        />
        <meta
          name="keywords"
          content="Apartamento apartamento de Pili, información alojamiento, turismo rural Galicia, alojamiento Costa da Morte, características apartamento"
        />
      </Head>

      {/* Contenedor principal */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-[#333]">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#c49a6c]">
          Información sobre aprtamento de Pili
        </h1>

        {/* Descripción */}
        <p className="mt-6 text-lg text-center sm:text-xl leading-relaxed">
          El <strong>Apartamento apartamento de Pili</strong> es un alojamiento ideal para disfrutar de la tranquilidad y belleza de la <strong>Costa da Morte</strong>. Situado en un entorno natural único, es perfecto para quienes buscan descanso, naturaleza y la auténtica gastronomía gallega.
        </p>

        {/* Acerca del espacio */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-[#c49a6c]">Acerca del espacio</h2>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed">
            La Costa da Morte, situada en el noroeste de Galicia, España, es una región mística y espectacular que combina paisajes naturales imponentes, una rica historia marítima y tradiciones culturales únicas. Su nombre, que significa "Costa de la Muerte," proviene de su reputación histórica por naufragios debido a sus aguas embravecidas y su costa rocosa.
          </p>
        </div>

        {/* El alojamiento */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-[#c49a6c]">El alojamiento</h2>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed">
            Descubre nuestro apartamento recién reformado en Vimianzo, el corazón de la maravillosa Costa da Morte, ideal para alojar cómodamente hasta 6 personas.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-[#c49a6c]">✨ Características principales:</h3>
          <ul className="mt-4 space-y-3 text-lg sm:text-xl">
            <li>🏡 <strong>3 amplios dormitorios</strong>, perfectos para familias o grupos.</li>
            <li>🍽️ <strong>Cocina totalmente equipada</strong>: como en apartamento de, pero mejor.</li>
            <li>🛋️ <strong>Todas las comodidades</strong> que necesitas para relajarte.</li>
            <li>🚗 <strong>Parking privado</strong>, para que te olvides del coche mientras disfrutas.</li>
          </ul>
        </div>

        {/* Ubicación */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-[#c49a6c]">🌴 Ubicación perfecta:</h2>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed">
            Situado en Vimianzo, estarás rodeado de naturaleza, historia y la tranquilidad característica de la Costa da Morte.
          </p>
          <ul className="mt-4 space-y-3 text-lg sm:text-xl">
            <li>🌊 Playas espectaculares a pocos minutos, perfectas para nadar, tomar el sol o pasear.</li>
            <li>🏞️ Un entorno único con paisajes de ensueño, acantilados, senderos y pequeños pueblos marineros llenos de encanto.</li>
            <li>📍 Muy cerca de algunos de los puntos más emblemáticos como Cabo Vilán, las playas de Laxe y Camariñas, y mucho más.</li>
          </ul>
        </div>

        {/* Botón de Reservas */}
        <div className="mt-12 text-center">
          <a
            href="/reservas"
            className="bg-[#c49a6c] hover:bg-[#a57e54] text-white px-8 py-4 text-lg font-semibold rounded shadow-lg transition inline-block"
          >
            Reserva Ahora
          </a>
        </div>
      </div>
    </>
  );
}
