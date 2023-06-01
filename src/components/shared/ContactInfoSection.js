import React from 'react';

const ContactInfoSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Contact Us</h2>
            <p>Email: clerks@4-5.co.uk</p>
            <p>
              Telephone: London: +44 (0)20 7404 5252<br />
              Birmingham: +44 (0)121 231 7430
            </p>
            <p>
              Office hours: Monday to Thursday 8.30am to 6.30pm, Friday 8.30am to 6.00pm.
            </p>
            <p>
              Out of Hours:<br />
              Emily Martin<br />
              (Senior Clerk)<br />
              07834319747
            </p>
            <p>
              Address:<br />
              London<br />
              4-5 Gray’s Inn Square<br />
              London WC1R 5AH<br />
              DX No 1029 LDE
            </p>
            <p>
              Birmingham<br />
              2nd Floor<br />
              Two Snow Hill<br />
              Birmingham B4 6GA
            </p>
            <p>
              Press<br />
              For press enquiries, please contact Emily Martin on +44 (0)20 7404 5252.
            </p>
            <p>
              Recruitment<br />
              Please see our recruitment page.
            </p>
            <p>
              Instruct Us<br />
              To register an interest in sending instructions to Chambers please Click Here
              or call +44(0) 20 7404 5252.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Location</h2>
            <p>
              <strong>By Tube</strong><br />
              Chancery Lane Station (Central line)
            </p>
            <p>
              <strong>By Bus</strong><br />
              High Holborn: 8, 25, 242, 521<br />
              Gray's Inn Rd: 17, 45, 46, 341
            </p>
            <p>
              <strong>By Car</strong><br />
              Enter via the archway in between the Cittie of Yorke (public house) and Tesco,
              High Holborn (parking is available in Gray's Inn Square)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
