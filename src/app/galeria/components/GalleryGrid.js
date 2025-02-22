"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import FilterSelect from "./FilterSelect";
import ImageModal from "./ImageModal";
import Gallery from "../../data/gallery";

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
