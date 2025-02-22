"use client";
import Image from "next/image";

const ImageModal = ({ image, onClose, onPrev, onNext }) => {
  // Prevenir que los clicks en la imagen se propaguen al fondo
  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl w-full max-h-[90vh] bg-gray-800 rounded-xl border border-gray-700 shadow-2xl"
        onClick={handleImageClick}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-accent hover:text-textMuted transition-colors p-2"
          aria-label="Cerrar modal"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative h-[75vh] p-8 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 text-white/80 hover:text-accent transition-all z-10"
            aria-label="Ver imagen anterior"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <Image
            src={image.src}
            alt={image.alt || "Selected image"}
            fill
            className="object-contain"
            priority
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 text-white/80 hover:text-accent transition-all z-10"
            aria-label="Ver siguiente imagen"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {image.description && (
          <div className="p-6 border-t border-gray-700 bg-primary/50">
            <p className="font-serif text-center text-accent italic text-lg">{image.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
