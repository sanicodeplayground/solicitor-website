import React from "react";
import AboutSection from '../shared/AboutSection';
import PeopleSection from '../shared/PeopleSection';

function AboutPage() {
  return (
    <div>
      <h2 className="section-title">About Us</h2>
      <AboutSection />
      <PeopleSection />
    </div>

  );
}

export default AboutPage;