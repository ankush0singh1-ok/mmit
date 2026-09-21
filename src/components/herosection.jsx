import React from 'react';
import '../App.css'; 

const HeroSection = () => {
  // 1. Array for the 5 Carousel Images
  const carouselImages = [
    "./images/IMG20260501160921.jpg", // Replace with your 1st image path
    "./images/IMG20260501160816.jpg", // Replace with your 2nd image path
    "./images/IMG20260501160832.jpg", // Replace with your 3rd image path
    "./images/IMG20260501160941.jpg", // Replace with your 4th image path
    "./images/IMG20260501154503.jpg"  // Replace with your 5th image path
  ];

  // 2. Array for the Dignitaries
  const dignitaries = [
    { 
      id: 1,
      name: "Shri Yogi Adityanath", 
      title: "Hon'ble Chief Minister of U.P.", 
      image: "./images/CM-G-rhalnghco08zgltygmidemqgd373jwy676vltuuxy0.png" 
    },
    { 
      id: 2,
      name: "Shri Ashish Patel", 
      title: "Hon'ble Minister for Technical Education, U.P.", 
      image: "./images/ShriAshishPatel-rhalnghco08zgltygmidemqgd373jwy676vltuuxy0.png" 
    },
    { 
      id: 3,
      name: "Dr. M.K. S Sundaram (IAS)", 
      title: "Principal Secretary, Technical Education, U.P.", 
      image: "./images/MKS-Sunda-rm6k7s52tjqjemq7s1eeqfv6jhr1u13vdsq0cv9mjc.png" 
    },
    { 
      id: 4,
      name: "Shri Aziz Ahmad", 
      title: "Director, Directorate of Technical Education, U.P.", 
      image: "./images/Shri-Aziz-Ahm-rm6k84czae79lk8gsook4us69i2tm3gdrh7blgriag.png" 
    },
  ];

  return (
    <section className="hero-section mt-4 mb-5">
      <div className="container-fluid px-4">
        <div className="row g-4">
          
          {/* LEFT COLUMN: Image Slider */}
          <div className="col-12 col-lg-8">
            <div id="heroCarousel" className="carousel slide custom-carousel shadow-sm" data-bs-ride="carousel">
              
              <div className="carousel-inner rounded-3">
                {/* Dynamically mapping through the 5 images */}
                {carouselImages.map((imagePath, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img 
                      src={imagePath} 
                      className="d-block w-100 hero-carousel-img" 
                      alt={`Campus Slide ${index + 1}`} 
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/800x450?text=Slider+Image' }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Slider Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>

            </div>
          </div>

          {/* RIGHT COLUMN: Dignitary Profiles */}
          <div className="col-12 col-lg-4">
            <div className="dignitary-sidebar rounded-3 shadow-sm h-100 d-flex flex-column">
              {dignitaries.map((person) => (
                <div key={person.id} className="dignitary-card d-flex align-items-center">
                  
                  {/* Circular Avatar */}
                  <div className="dignitary-avatar-wrapper flex-shrink-0">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="dignitary-avatar"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/70x70?text=Profile' }} 
                    />
                  </div>
                  
                  {/* Name and Title */}
                  <div className="dignitary-info ms-3">
                    <h5 className="dignitary-name m-0">{person.name}</h5>
                    <p className="dignitary-title m-0 mt-1">{person.title}</p>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;