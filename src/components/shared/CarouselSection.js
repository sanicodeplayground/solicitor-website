import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../images/slide-1.jpg';
import slide2 from '../../images/slide-2.jpg';
import slide3 from '../../images/slide-3.jpg';

const CarouselSection = () => {
  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Quality Legal Services for Your Needs</h3>
            <p>Our experienced team of solicitors is dedicated to providing top-notch legal services tailored to your specific needs. Whether you're dealing with a personal injury case, need assistance with family law matters, or require expert advice on business contracts, we are here to fight for your rights.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Trusted and Reliable Legal Representation</h3>
            <p>With years of experience and a proven track record of success, our solicitors have built a reputation for providing trusted and reliable legal representation. We understand the complexities of the legal system and will guide you through every step of your case to ensure the best possible outcome.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Slide 3"
          />
          <Carousel.Caption>
            <h3>Personalized Approach to Your Legal Matters</h3>
            <p>At our solicitor firm, we believe in a personalized approach to handling your legal matters. We take the time to understand your unique circumstances and develop a tailored strategy to achieve your goals. With us, you can expect compassionate support, clear communication, and effective legal solutions.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default CarouselSection;
