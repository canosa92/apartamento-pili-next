import Image from "next/image"; import Head from "next/head";

export default function Home() { return ( <> <Head> {/* Metadatos permanecen igual */} </Head>

<div className="relative w-full min-h-screen flex items-center justify-center text-center px-4 sm:px-6 text-white pt-20">
    
    {/* Imagen de fondo */}
    <div className="absolute inset-0 -z-10">
      <Image
        src="/gallery/cocina-comedor-salon.jpeg"
        alt="Apartamento de Pili en Costa da Morte"
        fill={true}
        className="object-cover w-full h-full"
        priority
        quality={90}
      />
    </div>

    {/* Capa de oscurecimiento con efecto vidrio esmerilado */}
    <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

    {/* Contenido principal */}
    <div className="relative max-w-6xl px-4 sm:px-6 flex flex-col justify-center items-center space-y-8">
      <h1 className="font-playfair-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-wide">
        <span className="text-[#C49A6C]">Apartamento de Pili</span><br />
        <span className="text-white/95 font-medium text-3xl sm:text-4xl lg:text-5xl">
          Refugio en la Costa da Morte
        </span>
      </h1>

      <div className="space-y-6 max-w-3xl">
        <p className="font-roboto text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90">
          Vive una experiencia única entre naturaleza virgen y tradición gallega.<br /> 
          Tu alojamiento perfecto para desconectar con todas las comodidades.
        </p>

        <div className="h-px bg-[#C49A6C]/50 w-3/4 mx-auto my-6"></div>

        <p className="font-roboto text-base sm:text-lg lg:text-xl leading-relaxed text-white/85 italic">
          "Donde el mar se funde con la tierra en un paisaje de leyenda"
        </p>
      </div>

      {/* Botones mejorados */}
      <div className="mt-8 flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
        <a
          href="/reservas"
          className="group relative inline-flex items-center justify-center w-full sm:w-64 px-8 py-4 overflow-hidden font-roboto font-semibold text-lg text-white transition-all duration-300 bg-[#C49A6C] hover:bg-[#B08A5C] rounded-lg hover:shadow-xl hover:shadow-[#C49A6C]/20"
        >
          Reservar Ahora
          <span className="absolute right-4 transform transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
        
        <a
          href="/informacion"
          className="group relative inline-flex items-center justify-center w-full sm:w-64 px-8 py-4 overflow-hidden font-roboto font-semibold text-lg border-2 border-[#C49A6C] text-[#C49A6C] hover:text-white rounded-lg transition-all duration-300 hover:bg-[#C49A6C]/90 hover:shadow-[#C49A6C]/20"
        >
          Descubrir Más
          <span className="absolute right-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            ✦
          </span>
        </a>
      </div>
    </div>
  </div>  
</>

); }

