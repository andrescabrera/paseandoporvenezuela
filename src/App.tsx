import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
