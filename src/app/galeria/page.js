"use client";
import { useState } from "react";
import Image from "next/image";
import Gallery from "../data/Gallery";

export default function GalleryComponent() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Función para manejar la selección de categoría
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Obtener las categorías únicas (movido antes del filtrado para mejor rendimiento)
  const categories = [
    "all",
    ...new Set(Gallery.flatMap((image) => 
      Array.isArray(image.category) ? image.category : [image.category]
    ))
  ];

  // Filtrar las imágenes según la categoría seleccionada
  const filteredGallery = selectedCategory === "all" 
    ? Gallery
    : Gallery.filter((image) => {
        const imageCategories = Array.isArray(image.category) 
          ? image.category 
          : [image.category];
        return imageCategories.includes(selectedCategory);
      });

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Filtro de categorías */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category === "all" ? "Todas" : category}
          </button>
        ))}
      </div>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGallery.map((image, index) => (
          <div 
            key={`${image.src}-${index}`} 
            className="relative aspect-video overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt || "Gallery image"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority={index < 6}
            />
          </div>
        ))}
      </div>
    </section>
  );
}