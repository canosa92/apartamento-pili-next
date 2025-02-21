import servicios from "@/app/data/servicios";

export default function Servicios() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8 justify-start">
          {servicios.map((servicio, index) => (
            <div key={index} className="w-full sm:w-72 md:w-80 lg:w-1/4 mb-8">
              <div className="flex items-center mb-4 space-x-4">
                <servicio.icon className="w-8 h-8 text-indigo-600" />
                <h2 className="text-2xl  font-semibold text-gray-800">{servicio.category}</h2>
              </div>
              <ul className="space-y-3 pl-8">
                {servicio.items.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700 text-lg">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
