import { Waves, Sun, Palmtree } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('home.aboutTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.aboutSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <Waves className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('home.aboutBeaches')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('home.aboutBeachesText')}
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <Sun className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('home.aboutClimate')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('home.aboutClimateText')}
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <Palmtree className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('home.aboutExperiences')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('home.aboutExperiencesText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
