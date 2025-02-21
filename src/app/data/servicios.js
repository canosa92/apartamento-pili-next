import { 
    ShowerHead,
    Shirt, 
    Tv, 
    Baby, 
    Shield, 
    Wifi, 
    Utensils, 
    ParkingSquare, 
    Dog,  
    Home, 
    Sun, 
    Eye
  } from "lucide-react";

const servicios = [
  {
    category: "Baño",
    icon: ShowerHead,
    items: [
      "Secadora de pelo",
      "Productos de limpieza",
      "Shampoo",
      "Agua caliente",
      "Papel higiénico",
      "Bañera o ducha",
      "Baño privado",
      "WC",
      "Ducha"
    ]
  },
  {
    category: "Habitación y lavandería",
    icon: Shirt,
    items: [
      "Lavadora",
      "Secadora",
      "Ganchos",
      "Ropa de cama",
      "Plancha",
      "Tendedero para ropa",
      "Armario"
    ]
  },
  {
    category: "Cocina y comedor",
    icon: Utensils,
    items: [
      "Cocina",
      "Refrigerador y Congelador",
      "Microondas",
      "Artículos básicos de cocina",
      "Ollas, sartenes, Platos y cubiertos",
      "Lavavajillas",
      "Fogones",
      "Horno de acero inoxidable",
      "Jarra eléctrica para el agua caliente",
      "Mesa de comedor",
    ]
  },
  {
    category: "Entretenimiento",
    icon: Tv,
    items: ["TV de pantalla plana", "TV"]
  },
  {
    category: "Para familias",
    icon: Baby,
    items: ["Periquera","Trona"]
  },
  {
    category: "Seguridad en el hogar",
    icon: Shield,
    items: ["Extintor de incendios"]
  },
  {
    category: "Internet y oficina",
    icon: Wifi,
    items: ["Wifi gratuito"]
  },
  
 
  {
    category: "Vistas y exteriores",
    icon: Eye,
    items: ["Vistas a la montaña", "Vistas al jardín"]
  },
  {
    category: "Instalaciones y aparcamiento",
    icon: ParkingSquare,
    items: ["Estacionamiento gratuito en las instalaciones", "Aparcamiento privado"]
  },
   {
    category: "Exterior",
    icon: Sun,
    items: ["Terraza", "Balcón", "Asador"]
  },
  {
    category: "Comodidades en la habitación",
    icon: Home,
    items: [
      "Enchufe cerca de la cama",
      "Tendedero",
      "Perchero",
      "Suelo de baldosa / mármol",
      "Utensilios de planchado"
    ]
  },
  {
    category: "Servicios",
    icon: Dog,
    items: [
      "Se admiten mascotas",
      "Los animales de asistencia siempre están permitidos",
      "Disponible para estancias largas",
      "Permite estancias de 28 días o más"
    ]
  }
];
 
export default servicios;