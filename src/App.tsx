import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HotelDetail from './pages/HotelDetail';
import Landing from './pages/Landing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './components/ScrollToTop';
import './i18n';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Redirect root to Spanish */}
          <Route path="/" element={<Navigate to="/es" replace />} />
          
          {/* Spanish routes */}
          <Route path="/es" element={<Landing />} />
          <Route path="/es/hoteles/:slug" element={<HotelDetail />} />
          <Route path="/es/blog" element={<Blog />} />
          <Route path="/es/blog/:slug" element={<BlogPost />} />
          
          {/* English routes */}
          <Route path="/en" element={<Landing />} />
          <Route path="/en/hoteles/:slug" element={<HotelDetail />} />
          <Route path="/en/blog" element={<Blog />} />
          <Route path="/en/blog/:slug" element={<BlogPost />} />
          
          {/* Catch all - redirect to Spanish */}
          <Route path="*" element={<Navigate to="/es" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
