import { Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-6 h-6 text-orange-500" />
              <span className="text-xl font-bold">Paseando por Venezuela</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Descubre los mejores destinos de Venezuela. Tu aventura comienza aquí.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Destinos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Isla de Margarita</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Los Roques</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Canaima</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mérida</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contáctanos</h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/paseandoporvenezuela"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@paseandoporvenezuela</span>
              </a>
              <a
                href="mailto:info@paseandoporvenezuela.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@paseandoporvenezuela.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Paseando por Venezuela. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
