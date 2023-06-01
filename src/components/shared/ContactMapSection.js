import React from 'react';

const ContactMapSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Contact Us</h2>
            <p>Visit our office in London:</p>
            <div className="map-container">
              {/* Replace the iframe URL with your desired map URL */}
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.607737090099!2d-0.1241657!3d51.5081129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b51cda34821%3A0x5316db5e51e86220!2sLondon%20Eye!5e0!3m2!1sen!2sus!4v1624747829079!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                style={{ width: '100%', height: '500px', border: '0' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
