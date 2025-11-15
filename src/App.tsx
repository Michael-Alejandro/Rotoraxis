import Hero from './components/Hero';
import TaxResidency from './components/TaxResidency';
import AviationTalent from './components/AviationTalent';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TaxResidency />
      <AviationTalent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
