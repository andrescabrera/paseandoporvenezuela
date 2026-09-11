import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import HotelDetail from './pages/HotelDetail';
import Landing from './pages/Landing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './components/ScrollToTop';
import './i18n';

const Restaurants = lazy(() => import('./pages/Restaurants'));
const OffersList = lazy(() => import('./pages/OffersList'));
const OfferDetail = lazy(() => import('./pages/OfferDetail'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
          {/* Redirect root to Spanish */}
          <Route path="/" element={<Navigate to="/es" replace />} />
          
          {/* Spanish routes */}
          <Route path="/es" element={<Landing />} />
          <Route path="/es/hoteles/:slug" element={<HotelDetail />} />
          <Route path="/es/restaurantes" element={<Restaurants />} />
          <Route path="/es/tours" element={<OffersList kind="tour" />} />
          <Route path="/es/tours/:slug" element={<OfferDetail kind="tour" />} />
          <Route path="/es/atracciones" element={<OffersList kind="attraction" />} />
          <Route path="/es/atracciones/:slug" element={<OfferDetail kind="attraction" />} />
          <Route path="/es/blog" element={<Blog />} />
          <Route path="/es/blog/:slug" element={<BlogPost />} />
          
          {/* English routes */}
          <Route path="/en" element={<Landing />} />
          <Route path="/en/hoteles/:slug" element={<HotelDetail />} />
          <Route path="/en/restaurants" element={<Restaurants />} />
          <Route path="/en/tours" element={<OffersList kind="tour" />} />
          <Route path="/en/tours/:slug" element={<OfferDetail kind="tour" />} />
          <Route path="/en/attractions" element={<OffersList kind="attraction" />} />
          <Route path="/en/attractions/:slug" element={<OfferDetail kind="attraction" />} />
          <Route path="/en/blog" element={<Blog />} />
          <Route path="/en/blog/:slug" element={<BlogPost />} />
          
          {/* Catch all - redirect to Spanish */}
          <Route path="*" element={<Navigate to="/es" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
