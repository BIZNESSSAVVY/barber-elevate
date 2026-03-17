import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import BookingSection from "@/components/BookingSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <BookingSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
