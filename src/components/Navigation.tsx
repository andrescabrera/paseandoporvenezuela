import { MapPin, Instagram, Menu, X, Hotel, BookOpen, Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname.startsWith(`/${lang}${path}`);
  };

  const navLinks = [
    { to: `/${lang}`, label: t('nav.home'), icon: Home },
    { to: `/${lang}/blog`, label: t('nav.blog'), icon: BookOpen },
    { to: `/${lang}#hotels`, label: t('nav.hotels'), icon: Hotel },
  ];

  const isHeroPage = location.pathname === `/${lang}` || location.pathname === `/${lang}/`;
  const hasScrolled = isHeroPage && isScrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      hasScrolled || !isHeroPage ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/20 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to={`/${lang}`} 
            className="flex items-center space-x-2 group"
          >
            <MapPin className={`w-8 h-8 transition-colors ${
              !hasScrolled && isHeroPage ? 'text-white' : 'text-blue-600'
            }`} />
            <span className={`text-xl md:text-2xl font-bold transition-colors ${
              !hasScrolled && isHeroPage ? 'text-white' : 'text-gray-900'
            }`}>
              Paseando por Venezuela
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 font-medium transition-colors hover:text-blue-500 ${
                  isActive(link.to.replace(`/${lang}`, '')) || (link.to.includes('#hotels') && location.hash === '#hotels')
                    ? !hasScrolled && isHeroPage ? 'text-orange-400' : 'text-blue-600'
                    : !hasScrolled && isHeroPage ? 'text-white/90' : 'text-gray-600'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className={`${!hasScrolled && isHeroPage ? 'text-white' : 'text-gray-900'}`}>
              <LanguageSwitcher variant="inline" />
            </div>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/paseandoporvenezuela"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                !hasScrolled && isHeroPage
                  ? 'bg-white/10 hover:bg-white/20 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <Instagram className="w-5 h-5" />
              <span className="hidden lg:inline text-sm">@paseandoporvenezuela</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              !hasScrolled && isHeroPage ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 py-2 font-medium transition-colors ${
                    isActive(link.to.replace(`/${lang}`, ''))
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-3">{lang === 'es' ? 'Idioma' : 'Language'}</p>
                <LanguageSwitcher variant="inline" />
              </div>

              <a
                href="https://www.instagram.com/paseandoporvenezuela"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @paseandoporvenezuela
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}