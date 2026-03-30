import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Structure } from './components/sections/Structure';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat';
import { siteTitle } from './data/businessData';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = siteTitle;
  }, []);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white">
      <Header />
      <Hero />
      <Services />
      <Structure />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;