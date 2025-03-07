import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import ProductSection from "../components/ProductSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CompanySection from "../components/CompanySection";


export default function Home() {
  return (
    <main>
      <Navbar />
     
      <HeroSection />
      <ServicesSection />
      <ProductSection />
      <TeamSection />
      <TestimonialsSection />
      <CompanySection />
      <Footer />
    </main>
    
  );
}
