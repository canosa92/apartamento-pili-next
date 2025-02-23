import Image from "next/image";
import testimonios from "@/app/data/testimonio";

const Testimonios = () => {
  return (
    <div className="bg-primary py-16 px-4">
      <div className="container mx-auto">
        <h3 className="font-serif text-4xl text-accent text-center mb-12">
          Experiencias de Huéspedes
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map(
            ({ nombre, foto, fecha, comentario, calificacion, fuente }, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full border-2 border-accent p-1">
                    <Image
                      src={foto}
                      alt={`${nombre}'s foto`}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                      unoptimized={true}
                    />
                  </div>
                  <div>
                    <p className="font-serif text-xl text-white/90">{nombre}</p>
                    <p className="font-sans text-sm text-accent/80">{fecha}</p>
                  </div>
                </div>

                <p className="font-sans text-lg text-white/80 mb-4 italic leading-relaxed">
                  "{comentario}"
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className={`w-5 h-5 ${
                        idx < calificacion ? "text-accent" : "text-gray-700"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-sans text-sm text-accent">
                  Fuente:{" "}
                  <a
                    href={fuente === "Airbnb" ? "https://www.airbnb.com" : "https://www.booking.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-textMuted underline transition-colors"
                  >
                    {fuente}
                  </a>
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
