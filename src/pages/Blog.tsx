
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { blogPosts, BlogCategory } from '../data/blog';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import Navigation from '../components/Navigation';

const categoryColors: Record<BlogCategory, string> = {
  beaches: 'bg-blue-100 text-blue-800',
  activities: 'bg-green-100 text-green-800',
  gastronomy: 'bg-orange-100 text-orange-800',
  culture: 'bg-purple-100 text-purple-800',
  tips: 'bg-gray-100 text-gray-800',
};

const categoryLabelsEs: Record<BlogCategory, string> = {
  beaches: 'Playas',
  activities: 'Actividades',
  gastronomy: 'Gastronomía',
  culture: 'Cultura',
  tips: 'Consejos',
};

const categoryLabelsEn: Record<BlogCategory, string> = {
  beaches: 'Beaches',
  activities: 'Activities',
  gastronomy: 'Gastronomy',
  culture: 'Culture',
  tips: 'Tips',
};

export default function Blog() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const locale = lang === 'es' ? es : enUS;

  const categoryLabels = lang === 'es' ? categoryLabelsEs : categoryLabelsEn;

  const getPostContent = (post: typeof blogPosts[0]) => {
    return post.translations[lang];
  };

  const generateJsonLd = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: t('blog.title'),
      description: t('blog.metaDescription'),
      url: `https://paseandoporvenezuela.com/${lang}/blog`,
      blogPost: blogPosts.map(post => ({
        '@type': 'BlogPosting',
        headline: post.translations[lang].title,
        description: post.translations[lang].excerpt,
        author: {
          '@type': 'Person',
          name: post.translations[lang].author,
        },
        datePublished: post.publishedAt,
        image: post.image,
        url: `https://paseandoporvenezuela.com/${lang}/blog/${post.slug}`,
      })),
    };
  };

  return (
    <>
      <Helmet>
        <title>{t('blog.title')} | Paseando por Venezuela</title>
        <meta name="description" content={t('blog.metaDescription')} />
        <meta name="keywords" content={t('blog.metaKeywords')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('blog.title')} />
        <meta property="og:description" content={t('blog.metaDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://paseandoporvenezuela.com/${lang}/blog`} />
        <meta property="og:image" content="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('blog.title')} />
        <meta name="twitter:description" content={t('blog.metaDescription')} />
        <meta name="twitter:image" content="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        
        {/* Alternate languages */}
        <link rel="alternate" hrefLang="es" href="https://paseandoporvenezuela.com/es/blog" />
        <link rel="alternate" hrefLang="en" href="https://paseandoporvenezuela.com/en/blog" />
        <link rel="alternate" hrefLang="x-default" href="https://paseandoporvenezuela.com/es/blog" />
        
        <script type="application/ld+json">
          {JSON.stringify(generateJsonLd())}
        </script>
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-24 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Blog Hero"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-transparent" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t('blog.title')}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                {t('blog.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const content = getPostContent(post);
              return (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <Link to={`/${lang}/blog/${post.slug}`} className="block">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={content.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[post.category]}`}>
                        {categoryLabels[post.category]}
                      </span>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(post.publishedAt), 'dd MMM yyyy', { locale })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readingTime} {t('common.minutesRead')}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {content.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {content.excerpt}
                      </p>
                      
                      <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                        {t('common.readMore')}
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}