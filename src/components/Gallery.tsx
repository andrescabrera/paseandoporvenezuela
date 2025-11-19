import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

export default function Gallery() {
  const allImages: GalleryImage[] = [
    {
      url: '/images/gallery/juan-griego.webp',
      title: 'Juan Griego',
      description: 'Bahía pintoresca famosa por sus atardeceres'
    },
    {
      url: '/images/gallery/playa-pampatar.webp',
      title: 'Playa Pampatar',
      description: 'Aguas cristalinas y ambiente tranquilo'
    },
    {
      url: '/images/gallery/playa-la-caracola.webp',
      title: 'Playa La Caracola',
      description: 'Arena blanca y mar turquesa'
    },
    {
      url: '/images/gallery/playa-concorde-paisajes.webp',
      title: 'Playa Concorde',
      description: 'Paisajes espectaculares del caribe'
    },
    {
      url: '/images/gallery/libre-de-stress.webp',
      title: 'Zona Libre de Estrés',
      description: 'El lugar perfecto para desconectar'
    },
    {
      url: '/images/gallery/playa-parguito.webp',
      title: 'Playa Parguito',
      description: 'Paraíso para surfistas y amantes del mar'
    },
    {
      url: '/images/gallery/bahia-del-morro.jpeg',
      title: 'Bahía del Morro',
      description: 'Vistas panorámicas de la costa norte'
    },
    {
      url: '/images/gallery/museo-de-los-pueblos.jpeg',
      title: 'Museo de Los Pueblos',
      description: 'Arquitectura tradicional junto al mar'
    },
    {
      url: '/images/gallery/playa-punta-arenas.webp',
      title: 'Playa Punta Arenas',
      description: 'Atardecer mágico en el caribe venezolano'
    }
  ];

  const [displayedImages, setDisplayedImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    setDisplayedImages(shuffled.slice(0, 6));
  }, []);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Galería de Margarita
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Déjate inspirar por la belleza natural de nuestras playas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedImages.map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(image)}
                className="relative h-80 overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-1">{image.title}</h3>
                    <p className="text-white/90 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200 z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div
            className="relative max-w-7xl max-h-[90vh] mx-4 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-white/90 text-base">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
