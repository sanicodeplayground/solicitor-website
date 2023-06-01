import React from 'react';
import featuresImage1 from '../../images/features-1.jpg';
import featuresImage2 from '../../images/features-2.jpg';
import featuresImage3 from '../../images/features-3.jpg';

const PeopleSection = () => {
  return (
    <section className="cards-section section-padding">
      <div className="container cards">
        <div className="row"><h3>Our people</h3></div>
        <div className="row"> 
            <div className="col">
                <div className="card">
                <img src={featuresImage1} alt="Feature 1" />
                <div className="card-body">
                    <h5 className="card-title text-center">Grant Rander</h5>  
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={featuresImage2} alt="Feature 2" />
                <div className="card-body">
                    <h5 className="card-title text-center">Mike Baker</h5>
                    
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={featuresImage3} alt="Feature 3" />
                <div className="card-body">
                    <h5 className="card-title text-center">Christopher Foster </h5>
                </div>
                </div>
            </div>
        </div>
        <div className="row"> 
            <div className="col">
                <div className="card">
                <img src={featuresImage1} alt="Feature 1" />
                <div className="card-body">
                    <h5 className="card-title text-center">Grant Rander</h5>  
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={featuresImage2} alt="Feature 2" />
                <div className="card-body">
                    <h5 className="card-title text-center">Mike Baker</h5>
                    
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={featuresImage3} alt="Feature 3" />
                <div className="card-body">
                    <h5 className="card-title text-center">Christopher Foster </h5>
                </div>
                </div>
            </div>
        </div>
        <div className="row"> 
            <div className="col">
                <div className="card">
                <img src={featuresImage1} alt="Feature 1" />
                <div className="card-body">
                    <h5 className="card-title text-center">Grant Rander</h5>  
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={featuresImage2} alt="Feature 2" />
                <div className="card-body">
                    <h5 className="card-title text-center">Mike Baker</h5>
                    
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={featuresImage3} alt="Feature 3" />
                <div className="card-body">
                    <h5 className="card-title text-center">Christopher Foster </h5>
                </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
