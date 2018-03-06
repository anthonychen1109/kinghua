import React from 'react';

// Images
import images from './images';

const about = images.about;

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>About Us</h1>
        <div className="about-container">
          <div className="about-text">
            <p>King Hua Restaurant welcomes you to a pleasant and memorable dining
              experience. 
              We feature authentic Chinese &amp; Thai &amp; Japanese cuisine. We take pride in
              serving you the finest Oriental cuisine in the area. Our menu is a suggestion
              for your selection. 
              The sauce is the magic ingredient, which blends the meat, poultry, seafood,
              or chicken with fresh vegetables to create unique dishes. Each dish is
              prepared to order. 
              The spicy dishes are prepared to the degree of your taste. Please notice the
              dishes offered for the diet conscious - low in sodium and mildly seasoned. All
              dishes are cooked with vegetable oil. 
              Thank you for dining at King Hua Restaurant. We welcome any suggestions
              you may offer in order that we may better serve you.
            </p>
          </div>
          <div className="about-img"
            style={{backgroundImage: "url(" + about + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}
            >
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
