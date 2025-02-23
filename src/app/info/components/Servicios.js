import servicios from "@/app/data/servicios";

export default function Servicios() {
  return (
    <div className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-accent text-center mb-12">
          Servicios y Comodidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map(({ icon: Icon, category, items }, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-accent/40 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4 space-x-4">
                <Icon className="w-8 h-8 text-accent group-hover:text-textMuted transition-colors" />
                <h3 className="font-serif text-2xl text-white/90 font-medium">
                  {category}
                </h3>
              </div>
              <ul className="space-y-3 pl-2">
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center font-sans text-white/80 text-lg hover:text-accent transition-colors"
                  >
                    <span className="mr-2">✦</span>
                    {item}
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
