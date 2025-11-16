import { MapPin, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/50 to-orange-600/40"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <nav className="flex items-center justify-between px-6 md:px-12 py-6">
          <div className="flex items-center space-x-2">
            <MapPin className="w-8 h-8 text-white" />
            <span className="text-white text-xl md:text-2xl font-bold">Paseando por Venezuela</span>
          </div>
          <a
            href="https://www.instagram.com/paseandoporvenezuela"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all"
          >
            <Instagram className="w-5 h-5 text-white" />
            <span className="text-white hidden md:inline">@paseandoporvenezuela</span>
          </a>
        </nav>

        <div className="flex-1 flex items-center justify-center px-6">
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
