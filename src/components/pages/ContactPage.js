import React from "react";
import ContactInfoSection from '../shared/ContactInfoSection';
import ContactMapSection from '../shared/ContactMapSection';

function ContactPage() {
  return (
    <div>
      <h2 className="section-title">Contact Us</h2>
      <ContactInfoSection />
      <ContactMapSection />
    </div>

  );
}

export default ContactPage;