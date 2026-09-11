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
          <Route path="/es/blog" element={<Blog />} />
          <Route path="/es/blog/:slug" element={<BlogPost />} />
          
          {/* English routes */}
          <Route path="/en" element={<Landing />} />
          <Route path="/en/hoteles/:slug" element={<HotelDetail />} />
          <Route path="/en/restaurants" element={<Restaurants />} />
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
