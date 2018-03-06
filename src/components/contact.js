import React from 'react';
import Iframe from 'react-iframe';

// Images
import images from './images';

const contact = images.contact;

const Contact = () => {
  return (
    <div className="contact"
      style={{ backgroundImage: "url(" + contact + ")",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover"
      }}
      >
      <div className="overlay">
        <div className="container">
          <h1>Contact</h1>
          <div className="contact-container">
            <div className="contact-info">
              <h5 className="contact-header">Location: </h5>
              <p>752 Independence Blvd, Virginia Beach, VA 23455</p>
              <br />
              <h5 className="contact-header">Open Hours:</h5>
              <p>Mon - Thurs: 11:00 AM - 10:30 PM</p>
              <p>Fri - Sat: 11:00 AM - 11:00 PM</p>
              <p>Sun: 12:00 PM - 10:30 PM</p>
              <br />
              <h5>Tel: 518-8026</h5>
              <br />
              <h5>Tel: 518-0612</h5>
            </div>
            <div className="contact-location">
              <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12768.413426257122!2d-76.1309391!3d36.8639448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeca17ed0b4fe63fb!2sKing+Hua!5e0!3m2!1sen!2sus!4v1520353556945"
                      width="100%"
                      height="400px"
                      display="initial"
                      position="relative"
                      allowFullScreen/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
