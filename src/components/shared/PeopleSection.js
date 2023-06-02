import React from 'react';
import profileImage1 from '../../images/profile-1.jpg';
import profileImage2 from '../../images/profile-2.jpg';
import profileImage3 from '../../images/profile-3.jpg';
import profileImage4 from '../../images/profile-4.jpg';
import profileImage5 from '../../images/profile-5.jpg';
import profileImage6 from '../../images/profile-6.jpg';
import profileImage7 from '../../images/profile-7.jpg';
import profileImage8 from '../../images/profile-8.jpg';
import profileImage9 from '../../images/profile-9.jpg';

const PeopleSection = () => {
  return (
    <section className="cards-section section-padding">
      <div className="container cards">
        <div className="row"><h3>Our people</h3></div>
        <div className="row"> 
            <div className="col">
                <div className="card">
                <img src={profileImage1} alt="Feature 1" />
                <div className="card-body">
                    <h5 className="card-title text-center">Tasha Johnson</h5>  
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={profileImage2} alt="Feature 2" />
                <div className="card-body">
                    <h5 className="card-title text-center">Latoya Williams</h5>
                    
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={profileImage3} alt="Feature 3" />
                <div className="card-body">
                    <h5 className="card-title text-center">Keisha Brown</h5>
                </div>
                </div>
            </div>
        </div>
        <div className="row"> 
            <div className="col">
                <div className="card">
                <img src={profileImage4} alt="Feature 1" />
                <div className="card-body">
                    <h5 className="card-title text-center">Yvonne Davis</h5>  
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={profileImage5} alt="Feature 2" />
                <div className="card-body">
                    <h5 className="card-title text-center">Marcus Taylor</h5>
                    
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={profileImage6} alt="Feature 3" />
                <div className="card-body">
                    <h5 className="card-title text-center">Derrick Robinson </h5>
                </div>
                </div>
            </div>
        </div>
        <div className="row"> 
            <div className="col">
                <div className="card">
                <img src={profileImage7} alt="Feature 1" />
                <div className="card-body">
                    <h5 className="card-title text-center">David Wilson</h5>  
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={profileImage8} alt="Feature 2" />
                <div className="card-body">
                    <h5 className="card-title text-center">Lamar Jenkins</h5>
                    
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={profileImage9} alt="Feature 3" />
                <div className="card-body">
                    <h5 className="card-title text-center">Simone Thompson </h5>
                </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
