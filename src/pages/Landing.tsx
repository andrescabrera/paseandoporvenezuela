import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import Hotels from '../components/Hotels';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Landing() {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const url = `https://paseandoporvenezuela.com/${lang}`;
  const title =
    lang === 'es'
      ? 'Isla de Margarita: Hoteles, Tours y Restaurantes | Paseando por Venezuela'
      : 'Margarita Island: Hotels, Tours & Restaurants | Paseando por Venezuela';
  const description =
    lang === 'es'
      ? 'Descubre Isla de Margarita con Paseando por Venezuela: hoteles, tours y excursiones, restaurantes, atracciones y las mejores playas del Caribe. Cotiza en línea.'
      : 'Discover Margarita Island with Paseando por Venezuela: hotels, tours and excursions, restaurants, attractions and the best Caribbean beaches. Get a quote online.';

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <link rel="alternate" hrefLang="es" href="https://paseandoporvenezuela.com/es" />
        <link rel="alternate" hrefLang="en" href="https://paseandoporvenezuela.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://paseandoporvenezuela.com/es" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: title,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: lang === 'es' ? 'Hoteles' : 'Hotels', url: `${url}#hotels` },
              { '@type': 'ListItem', position: 2, name: lang === 'es' ? 'Restaurantes' : 'Restaurants', url: `${url}/${lang === 'es' ? 'restaurantes' : 'restaurants'}` },
              { '@type': 'ListItem', position: 3, name: 'Tours', url: `${url}/tours` },
              { '@type': 'ListItem', position: 4, name: 'Blog', url: `${url}/blog` },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <About />
        <Hotels />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}
