"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import Gallery from "@/app/data/gallery";

const FilterSelect = ({ categories, selectedCategory, onSelect }) => (
  <Menu as="div" className="relative mb-12 w-full max-w-xs mx-auto">
    <Menu.Button className="w-full flex items-center justify-between px-6 py-4 font-sans font-medium text-white/90 bg-gray-800 rounded-xl border-2 border-gray-700 hover:border-accent/40 transition-all duration-300">
      {selectedCategory === "all" ? "Todas las categorías" : selectedCategory}
      <svg className="w-5 h-5 ml-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </Menu.Button>
    
    <Menu.Items className="absolute mt-2 w-full bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden">
      {categories.map((category) => (
        <Menu.Item key={category}>
          {({ active }) => (
            <button
              onClick={() => onSelect(category)}
              className={`w-full px-6 py-3 text-left font-sans ${
                active || selectedCategory === category 
                  ? "bg-accent/10 text-accent" 
                  : "text-white/80 hover:bg-primary"
              } transition-colors duration-200`}
            >
              {category === "all" ? "Todas las categorías" : category}
            </button>
          )}
        </Menu.Item>
      ))}
    </Menu.Items>
  </Menu>
);

const ImageModal = ({ image, onClose, onPrev, onNext }) => (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4">
    <div className="relative max-w-6xl w-full max-h-[90vh] bg-gray-800 rounded-xl border border-gray-700 shadow-2xl">
      <button
        onClick={onClose}
        className="absolute -top-12 right-0 text-accent hover:text-textMuted transition-colors p-2"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="relative h-[75vh] p-8">
        <Image
          src={image.src}
          alt={image.alt || "Selected image"}
          fill
          objectFit="contain"
          priority
        />
      </div>
      {image.description && (
        <div className="p-6 border-t border-gray-700 bg-primary/50">
          <p className="font-serif text-center text-accent italic text-lg">
            {image.description}
          </p>
        </div>
      )}
    </div>
  </div>
);

export default function GalleryComponent() {
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

  const categories = [
    "all",
    ...new Set(Gallery.flatMap((image) => 
      Array.isArray(image.category) ? image.category : [image.category]
    ))
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <FilterSelect 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelect={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGallery.map((image, index) => (
          <div 
            key={`${image.src}-${index}`} 
            className="relative aspect-video overflow-hidden rounded-xl shadow-xl group cursor-pointer hover:shadow-2xl transition-all duration-300"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt || "Gallery image"}
              fill
              objectFit="cover"
              priority={index < 6}
            />
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
    </section>
  );
}
