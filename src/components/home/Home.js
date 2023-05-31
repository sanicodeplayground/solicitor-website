import React from "react";
import { Carousel } from 'react-bootstrap';
import slide1 from '../../images/slide-1.jpg';
import slide2 from '../../images/slide-2.jpg';
import slide3 from '../../images/slide-3.jpg';
import AboutSection from '../shared/AboutSection';
import FeaturesSection from '../shared/FeaturesSection';
import ServicesSection from '../shared/ServicesSection';

function Home() {
  return (
    <div>
    
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>We Fight For Your Justice As Like A Friendsssss.</h3>
            <p>Law is commonly understood as a system of rules that are created and enforced through social or government.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Slide 2</h3>
            <p>Law is commonly understood as a system of rules that are created and enforced through social or government</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Slide 3"
          />
          <Carousel.Caption>
            <h3>We Fight For Your Justice As Like A Friend.</h3>
            <p>Law is commonly understood as a system of rules that are created and enforced through social or government.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
  
</div>

  );
}

export default Home;
