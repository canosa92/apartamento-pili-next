"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import FilterSelect from "./FilterSelect";
import ImageModal from "./ImageModal";

const Gallery = [
  {
    src: '/gallery/baño-centro.jpeg',
    alt: 'Foto del baño desde el centro en apartamento de Pili',
    category: 'baño'
  },
  {
    src: '/gallery/baño-puerta.jpeg',
    alt: 'Foto del baño de la puerta en apartamento de Pili',
    category: 'baño'
  },
  {
    src: '/gallery/baño-ventana.jpeg',
    alt: 'Foto del baño desde la ventana en apartamento de Pili',
    category: 'baño'
  },
  {
    src: '/gallery/cocina-comedor-salon.jpeg',
    alt: 'Foto de la cocina americana en apartamento de Pili',
    category: ['cocina', 'comedor', 'salon']
  },
  {
    src: '/gallery/cocina-comedor-ventana.jpeg',
    alt: 'Foto de la cocina americana vista desde la ventana en apartamento de Pili',
    category: ['cocina', 'comedor']
  },
  {
    src: '/gallery/comedor-salon.jpeg',
    alt: 'Foto del comedor en apartamento de Pili',
    category: ['comedor', 'salon']
  },
  {
    src: '/gallery/comedor.jpeg',
    alt: 'Foto del comedor en apartamento de Pili',
    category: 'comedor'
  },
  {
    src: '/gallery/habitacion1-vista-puerta.jpeg',
    alt: 'Foto de la habitación doble vista desde la puerta en apartamento de Pili',
    category: 'habitacion 1'
  },
  {
    src: '/gallery/habitacion1-vista-ventana.jpeg',
    alt: 'Foto de la habitación doble vista desde la ventana en apartamento de Pili',
    category: 'habitacion 1'
  },
  {
    src: '/gallery/habitacion2-frente.jpeg',
    alt: 'Foto de la habitación vista desde enfrente en apartamento de Pili',
    category: 'habitacion 2'
  },
  {
    src: '/gallery/habitacion2-ventana.jpeg',
    alt: 'Foto de la habitación vista desde la ventana en apartamento de Pili',
    category: 'habitacion 2'
  },
  {
    src: '/gallery/habitacion2-puerta.jpeg',
    alt: 'Foto de la habitación vista desde la puerta en apartamento de Pili',
    category: 'habitacion 2'
  },
  {
    src: '/gallery/habitacion3-centro.jpeg',
    alt: 'Foto de la habitación vista desde enfrente en apartamento de Pili',
    category: 'habitacion 3'
  },
  {
    src: '/gallery/habitacion3-cerca.jpeg',
    alt: 'Foto de la habitación vista desde la ventana en apartamento de Pili',
    category: 'habitacion 3'
  },
  {
    src: '/gallery/habitacion3-puerta.jpeg', 
    alt: 'Foto de la habitación vista desde la puerta en apartamento de Pili',
    category: 'habitacion 3'
  },
  {
    src: '/gallery/salon.jpeg',
    alt: 'Foto del salón en apartamento de Pili', 
    category: 'salon'
  },
]


const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredGallery, setFilteredGallery] = useState(Gallery);

  useEffect(() => {
    setFilteredGallery(
      selectedCategory === "all"
        ? Gallery
        : Gallery.filter((image) => {
            const imageCategories = Array.isArray(image.category)
              ? image.category
              : [image.category];
            return imageCategories.includes(selectedCategory);
          })
    );
  }, [selectedCategory]);

  const categories = [
    "all",
    ...new Set(Gallery.flatMap((image) =>
      Array.isArray(image.category) ? image.category : [image.category]
    ))
  ];

  const handlePrevImage = () => {
    const currentIndex = filteredGallery.findIndex(img => img.src === selectedImage.src);
    const prevIndex = currentIndex === 0 ? filteredGallery.length - 1 : currentIndex - 1;
    setSelectedImage(filteredGallery[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = filteredGallery.findIndex(img => img.src === selectedImage.src);
    const nextIndex = currentIndex === filteredGallery.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(filteredGallery[nextIndex]);
  };

  return (
    <>
      <FilterSelect categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGallery.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative aspect-video overflow-hidden rounded-xl shadow-xl group cursor-pointer hover:shadow-2xl transition-all duration-300"
            onClick={() => setSelectedImage(image)}
          >
            <Image src={image.src} alt={image.alt || "Gallery image"} fill objectFit="cover" priority={index < 6} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      )}
    </>
  );
};

export default GalleryGrid;
