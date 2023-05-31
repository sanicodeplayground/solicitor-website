import React from 'react';
import aboutImage from '../../images/image.webp';

const AboutSection = () => {
  return (
    <section className="about-section section-padding section-bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img 
            src={aboutImage}
            alt="About" />
          </div>
          <div className="col-md-6">
            <div className="about-text">
              <h2>We are here to fight against any violence with experience</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable and going through the cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections.
              </p>
              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
