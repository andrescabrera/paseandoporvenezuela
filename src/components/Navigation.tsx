import { MapPin, Instagram, Menu, X, Hotel, BookOpen, Home, UtensilsCrossed, Compass, FerrisWheel, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExperiencesOpen, setIsExperiencesOpen] = useState(false);
  const experiencesRef = useRef<HTMLDivElement>(null);
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

  // Cierra el menú móvil y el dropdown al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
    setIsExperiencesOpen(false);
  }, [location.pathname, location.hash]);

  // Cierra el dropdown al hacer click fuera o presionar Escape
  useEffect(() => {
    if (!isExperiencesOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (experiencesRef.current && !experiencesRef.current.contains(event.target as Node)) {
        setIsExperiencesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsExperiencesOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExperiencesOpen]);

  const isActive = (path: string) => {
    return location.pathname.startsWith(`/${lang}${path}`);
  };

  const experiencesActive =
    location.pathname.startsWith(`/${lang}/tours`) ||
    location.pathname.startsWith(`/${lang}/atracciones`) ||
    location.pathname.startsWith(`/${lang}/attractions`);

  const primaryLinks = [
    { to: `/${lang}`, label: t('nav.home'), icon: Home },
    { to: `/${lang}#hotels`, label: t('nav.hotels'), icon: Hotel },
  ];

  const secondaryLinks = [
    { to: `/${lang}/restaurantes`, label: t('nav.restaurants'), icon: UtensilsCrossed },
    { to: `/${lang}/blog`, label: t('nav.blog'), icon: BookOpen },
  ];

  const experienceLinks = [
    { to: `/${lang}/tours`, label: t('nav.tours'), icon: Compass },
    { to: `/${lang}/${lang === 'en' ? 'attractions' : 'atracciones'}`, label: t('nav.attractions'), icon: FerrisWheel },
  ];

  const isHeroPage = location.pathname === `/${lang}` || location.pathname === `/${lang}/`;
  const hasScrolled = isHeroPage && isScrolled;

  const linkClass = (active: boolean) =>
    `flex items-center gap-2 font-medium transition-colors hover:text-blue-500 ${
      active
        ? !hasScrolled && isHeroPage
          ? 'text-orange-400'
          : 'text-blue-600'
        : !hasScrolled && isHeroPage
          ? 'text-white/90'
          : 'text-gray-600'
    }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      hasScrolled || !isHeroPage ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/20 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to={`/${lang}`} 
            className="flex items-center space-x-2 group shrink-0"
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
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {primaryLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={linkClass(isActive(link.to.replace(`/${lang}`, '')) || (link.to.includes('#hotels') && location.hash === '#hotels'))}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}

            {/* Dropdown Experiencias */}
            <div ref={experiencesRef} className="relative">
              <button
                type="button"
                onClick={() => setIsExperiencesOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={isExperiencesOpen}
                className={`${linkClass(experiencesActive)} cursor-pointer`}
              >
                <Compass className="w-4 h-4" />
                {t('nav.experiences')}
                <ChevronDown className={`w-4 h-4 transition-transform ${isExperiencesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isExperiencesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
                  {experienceLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsExperiencesOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-blue-50 ${
                        isActive(link.to.replace(`/${lang}`, '')) ? 'text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {secondaryLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={linkClass(isActive(link.to.replace(`/${lang}`, '')))}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className={`${!hasScrolled && isHeroPage ? 'text-white' : 'text-gray-900'}`}>
              <LanguageSwitcher variant="inline" />
            </div>

            {/* Instagram Link (solo icono) */}
            <a
              href="https://www.instagram.com/andres.margarita.travel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @andres.margarita.travel"
              title="@andres.margarita.travel"
              className={`flex items-center justify-center p-2.5 rounded-full transition-all ${
                !hasScrolled && isHeroPage
                  ? 'bg-white/10 hover:bg-white/20 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <Instagram className="w-5 h-5" />
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
            <div className="px-6 py-4 space-y-2">
              {[...primaryLinks, ...experienceLinks, ...secondaryLinks].map((link) => (
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
                href="https://www.instagram.com/andres.margarita.travel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @andres.margarita.travel
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
