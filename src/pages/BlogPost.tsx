import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { getBlogPostBySlug, blogPosts, BlogCategory } from '../data/blog';
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

function BlogContent({ content }: { content: string }) {
  // Simple markdown-like parser for headers and lists
  const parseContent = (text: string) => {
    if (text.startsWith('## ')) {
      return <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">{text.replace('## ', '')}</h2>;
    }
    if (text.startsWith('• ')) {
      return (
        <li className="ml-6 mb-2 text-gray-700 leading-relaxed flex items-start gap-2">
          <span className="text-blue-500 mt-1.5">•</span>
          <span>{text.replace('• ', '')}</span>
        </li>
      );
    }
    return <p className="text-gray-700 leading-relaxed mb-6 text-lg">{text}</p>;
  };

  return <>{content.split('\n').map((line, index) => <div key={index}>{parseContent(line)}</div>)}</>;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const locale = lang === 'es' ? es : enUS;

  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) {
      navigate(`/${lang}/blog`);
    }
  }, [post, navigate, lang]);

  if (!post) return null;

  const content = post.translations[lang];
  const categoryLabels = lang === 'es' ? categoryLabelsEs : categoryLabelsEn;

  // Get related posts
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const generateJsonLd = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: content.title,
      description: content.excerpt,
      author: {
        '@type': 'Person',
        name: content.author,
      },
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      image: post.image,
      url: `https://paseandoporvenezuela.com/${lang}/blog/${post.slug}`,
      publisher: {
        '@type': 'Organization',
        name: 'Paseando por Venezuela',
        logo: {
          '@type': 'ImageObject',
          url: 'https://paseandoporvenezuela.com/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://paseandoporvenezuela.com/${lang}/blog/${post.slug}`,
      },
    };
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: content.title,
          text: content.excerpt,
          url: window.location.href,
        });
      } catch {
        // User cancelled share
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.href);
      alert(lang === 'es' ? '¡Enlace copiado!' : 'Link copied!');
    }
  };

  return (
    <>
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta name="keywords" content={content.metaKeywords} />
        <meta name="author" content={content.author} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://paseandoporvenezuela.com/${lang}/blog/${post.slug}`} />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:modified_time" content={post.updatedAt || post.publishedAt} />
        <meta property="article:author" content={content.author} />
        <meta property="article:section" content={categoryLabels[post.category]} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.metaTitle} />
        <meta name="twitter:description" content={content.metaDescription} />
        <meta name="twitter:image" content={post.image} />
        
        {/* Alternate languages */}
        <link rel="alternate" hrefLang="es" href={`https://paseandoporvenezuela.com/es/blog/${post.slug}`} />
        <link rel="alternate" hrefLang="en" href={`https://paseandoporvenezuela.com/en/blog/${post.slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://paseandoporvenezuela.com/es/blog/${post.slug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify(generateJsonLd())}
        </script>
      </Helmet>

      <Navigation />

      <article className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <img
            src={post.image}
            alt={content.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
              <Link
                to={`/${lang}/blog`}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t('common.backToBlog')}
              </Link>
              
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${categoryColors[post.category]}`}>
                {categoryLabels[post.category]}
              </span>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {content.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(post.publishedAt), 'dd MMMM yyyy', { locale })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} {t('common.minutesRead')}
                </span>
                <span>
                  {t('common.by')} {content.author}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
          {/* Share Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              {t('common.share')}
            </button>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
              {content.excerpt}
            </p>
            
            <div className="space-y-2">
              {content.content.map((paragraph, index) => (
                <BlogContent key={index} content={paragraph} />
              ))}
            </div>
          </div>

          {/* Images Gallery */}
          {post.images && post.images.length > 1 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {lang === 'es' ? 'Galería' : 'Gallery'}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {post.images.slice(1).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${content.title} - ${index + 2}`}
                    className="rounded-xl shadow-md hover:shadow-xl transition-shadow"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {lang === 'es' ? 'Artículos relacionados' : 'Related Articles'}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => {
                  const relatedContent = relatedPost.translations[lang];
                  return (
                    <Link
                      key={relatedPost.id}
                      to={`/${lang}/blog/${relatedPost.slug}`}
                      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedContent.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${categoryColors[relatedPost.category]}`}>
                          {categoryLabels[relatedPost.category]}
                        </span>
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {relatedContent.title}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </article>
    </>
  );
}