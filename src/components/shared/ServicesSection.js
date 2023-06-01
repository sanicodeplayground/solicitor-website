import React from 'react';

const ServicesSection = () => {
  return (
    <section className="features-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="feature-item">
            <i className="bi bi-file-earmark-text"></i>
              <h3>Legal Consultation</h3>
              <p>Get expert legal consultation from our experienced solicitors. We provide guidance and advice on a wide range of legal matters.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-item">
              <i class="bi bi-clipboard-data"></i>
              <h3>Document Preparation</h3>
              <p>We assist in preparing legal documents, ensuring accuracy and adherence to legal requirements. Trust us with your document preparation needs.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-item">
              <i class="bi bi-person-vcard"></i>  
              <h3>Legal Representation</h3>
              <p>Our skilled solicitors provide strong legal representation, advocating for your rights and interests in legal proceedings. Count on us for effective representation.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-item">
              <i class="bi bi-collection"></i>
              <h3>Dispute Resolution</h3>
              <p>We specialize in resolving legal disputes through negotiation, mediation, or litigation. Let us help you find a favorable resolution to your legal conflicts.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-item">
              <i class="bi bi-building"></i>
              <h3>Property Law</h3>
              <p>Our solicitors have extensive experience in property law, including conveyancing, leases, and property disputes. Trust us for all your property-related legal needs.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-item">
              <i className="bi bi-person-check"></i>
              <h3>Immigration Law</h3>
              <p>We offer comprehensive immigration law services, including visa applications, appeals, and advice on immigration matters. Our solicitors are here to assist you throughout the process.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
