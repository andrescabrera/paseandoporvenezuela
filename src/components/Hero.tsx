export default function Hero() {

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-900/70"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Add padding top for fixed navigation */}
        <div className="pt-20 flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Descubre la Isla de Margarita
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Tu paraíso caribeño te espera. Playas cristalinas, cultura vibrante y hoteles exclusivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#hotels"
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transform hover:scale-105 transition-all shadow-lg"
              >
                Ver Hoteles
              </a>
              <a
                href="#about"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all border-2 border-white"
              >
                Conoce Más
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pb-8">
          <a href="#about" className="inline-block animate-bounce">
            <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
