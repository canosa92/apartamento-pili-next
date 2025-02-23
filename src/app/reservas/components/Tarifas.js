"use client";

const TarifaInfo = () => {
  return (
    <div className="bg-gray-800 max-w-2xl mx-auto p-8 border border-gray-700 rounded-2xl shadow-xl hover:border-accent/40 transition-all duration-300 text-white text-center">
      <h2 className="font-serif text-3xl text-accent mb-6">
        Información de Tarifas
      </h2>

      <p className="font-sans text-lg text-white/90">
        <strong className="text-[#C49A6C] text-xl">100€</strong> por noche
      </p>
      <p className="font-sans text-white/80 mt-2">
        Estancia mínima de <strong>2 noches</strong>.
      </p>
      <p className="font-sans text-white/80 mt-2">
        <strong>Desayuno incluido</strong> en todas las reservas.
      </p>

      <div className="h-px bg-[#C49A6C]/50 w-3/4 mx-auto my-6"></div>

      <p className="font-sans text-lg text-white/90">
        <strong className="text-[#C49A6C]">¡Reserva online y obtén un 10% de descuento!</strong>
      </p>

      <p className="font-sans text-white/80 mt-4">
        Pregunta por disponibilidad mediante el{" "}
        <a href="#formulario" className="text-accent hover:underline">
          formulario
        </a>{" "}
        o contáctanos:
      </p>

      <div className="mt-4">
        <p className="font-sans text-white/80">
          ✉️{" "}
          <a href="mailto:local35bar@gmail.com" className="text-accent hover:underline">
            local35bar@gmail.com
          </a>
        </p>
        <p className="font-sans text-white/80">📞 Teléfono: [Tu número aquí]</p>
      </div>

      <div className="h-px bg-[#C49A6C]/50 w-3/4 mx-auto my-6"></div>

      <p className="font-sans text-white/80">
        ¿Te apetece un bar con tapas? Visita{" "}
        <a href="https://local35-bar.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          Local35 Bar
        </a>
        .
      </p>
    </div>
  );
};

export default TarifaInfo;
