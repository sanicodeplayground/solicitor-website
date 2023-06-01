import React from "react";
import AboutSection from '../shared/AboutSection';
import CarouselSection from "../shared/CarouselSection";
import ContactInfoSection from "../shared/ContactInfoSection";
import FeaturesSection from '../shared/FeaturesSection';
import ServicesSection from '../shared/ServicesSection';

function Home() {
  return (
    <div>
    
      
      <CarouselSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <ContactInfoSection />
  
</div>

  );
}

export default Home;