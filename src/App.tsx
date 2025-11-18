import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Hotels from './components/Hotels';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import HotelDetail from './pages/HotelDetail';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/hoteles/:slug" element={<HotelDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
