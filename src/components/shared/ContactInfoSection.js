import React from 'react';

const ContactInfoSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Info</h3>
            <p>Email: info@hallowaylaw.com</p>
            <p>
              Telephone: Eclipse City: +44 (0)20 3456 7890<br />
              Starlight Town: +44 (0)121 456 7890
            </p>
            <p>
              Office hours: Monday to Thursday 8.00am to 6.00pm, Friday 8.00am to 5.30pm.
            </p>
            <p>
              After Hours:<br />
              Charles Davenport<br />
              (Chief Clerk)<br />
              07654129877
            </p>
            <p>
              Address:<br />
              Eclipse City<br />
              7-8 Aurora Plaza<br />
              Eclipse City EC2Y 9HQ<br />
              DX No 1892 ECE
            </p>
            <p>
              Starlight Town<br />
              3rd Floor<br />
              Three Beacon Hill<br />
              Starlight Town ST3 8JZ
            </p>
            <p>
              Media<br />
              For media enquiries, please contact Charles Davenport on +44 (0)20 3456 7890.
            </p>
            <p>
              Careers<br />
              Please see our careers page.
            </p>
            <p>
              Hire Us<br />
              To express an interest in hiring our legal services please Click Here
              or call +44(0) 20 3456 7890.
            </p>
          </div>
          <div className="col-md-6">
            <h3>How to Get Here</h3>
            <p>
              <strong>By Tube</strong><br />
              Eclipse City Station (Sunset line)
            </p>
            <p>
              <strong>By Bus</strong><br />
              Moonrise Boulevard: 18, 35, 252, 551<br />
              Aurora Avenue: 22, 55, 66, 352
            </p>
            <p>
              <strong>By Car</strong><br />
              Enter via the gateway between The Celestial Steed (pub) and Luna's Market,
              Moonrise Boulevard (parking is available in Aurora Plaza)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
