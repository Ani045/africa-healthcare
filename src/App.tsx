import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import TechnologySection from './components/TechnologySection';
import WhyChooseIndia from './components/WhyChooseIndia';
import ServicesGrid from './components/ServicesGrid';
import CTABanner from './components/CTABanner';
import InternationalPatientServices from './components/InternationalPatientServices';
import TripPlanningTimeline from './components/TripPlanningTimeline';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <StatsSection />
      <AboutSection />
      <TechnologySection />
      <CTABanner />
      <WhyChooseIndia />
      <ServicesGrid />
      <InternationalPatientServices />
      <CTABanner />
      <TripPlanningTimeline />
      <Testimonials />
      <FAQSection />
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default App;