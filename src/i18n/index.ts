import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      common: {
        readMore: 'Leer más',
        backToBlog: 'Volver al blog',
        share: 'Compartir',
        publishedOn: 'Publicado el',
        by: 'por',
        minutesRead: 'min de lectura',
      },
      nav: {
        home: 'Inicio',
        hotels: 'Hoteles',
        blog: 'Blog',
        about: 'Nosotros',
      },
      blog: {
        title: 'Blog de Isla Margarita',
        subtitle: 'Descubre los mejores consejos, guías y secretos de la Perla del Caribe',
        metaDescription: 'Blog oficial de Isla Margarita: guías de viaje, playas paradisíacas, gastronomía local, actividades y consejos para tu próxima aventura en Venezuela.',
        metaKeywords: 'Isla Margarita, blog viajes, playas Venezuela, turismo Margarita, guía Margarita, vacaciones Venezuela',
        categories: {
          beaches: 'Playas',
          activities: 'Actividades',
          gastronomy: 'Gastronomía',
          culture: 'Cultura',
          tips: 'Consejos',
        },
      },
      footer: {
        description: 'Tu guía oficial para descubrir los mejores hoteles y experiencias en Isla Margarita, Venezuela.',
        quickLinks: 'Enlaces Rápidos',
        contact: 'Contacto',
        rights: 'Todos los derechos reservados.',
      },
    },
  },
  en: {
    translation: {
      common: {
        readMore: 'Read more',
        backToBlog: 'Back to blog',
        share: 'Share',
        publishedOn: 'Published on',
        by: 'by',
        minutesRead: 'min read',
      },
      nav: {
        home: 'Home',
        hotels: 'Hotels',
        blog: 'Blog',
        about: 'About',
      },
      blog: {
        title: 'Margarita Island Blog',
        subtitle: 'Discover the best tips, guides and secrets of the Caribbean Pearl',
        metaDescription: 'Official Margarita Island blog: travel guides, paradise beaches, local gastronomy, activities and tips for your next adventure in Venezuela.',
        metaKeywords: 'Margarita Island, travel blog, Venezuela beaches, Margarita tourism, Margarita guide, Venezuela vacation',
        categories: {
          beaches: 'Beaches',
          activities: 'Activities',
          gastronomy: 'Gastronomy',
          culture: 'Culture',
          tips: 'Tips',
        },
      },
      footer: {
        description: 'Your official guide to discovering the best hotels and experiences on Margarita Island, Venezuela.',
        quickLinks: 'Quick Links',
        contact: 'Contact',
        rights: 'All rights reserved.',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    detection: {
      order: ['path', 'navigator', 'localStorage', 'htmlTag'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;