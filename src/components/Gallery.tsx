export default function Gallery() {
  const images = [
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
    }
  ];

  return (
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
          {images.map((image, index) => (
            <div
              key={index}
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
  );
}
