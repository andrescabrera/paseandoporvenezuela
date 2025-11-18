import Hero from '../components/Hero';
import Hotels from '../components/Hotels';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Hotels />
      <Gallery />
      <Footer />
    </div>
  );
}
