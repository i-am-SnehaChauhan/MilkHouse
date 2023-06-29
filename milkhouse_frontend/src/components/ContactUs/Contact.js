import React from 'react';
import './Contact.css';
import phone from '../../image/call.png';
import mail from '../../image/mail.png';
import location from '../../image/location.png';

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="contactInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <img src={location} alt="Location" />
                </span>
                <span>
                Indira Gandhi Delhi Technical University,


                  <br />
                  Kashmere Gate,New Delhi,
                  <br />
                  110006
                </span>
              </li>
              <li>
                <span>
                  <img src={mail} alt="Email" />
                </span>
                <span>
                  <a href="mailto:nassosanagn@gmail.com">agrotechiam354@gmail.com</a>
                </span>
              </li>
              <li>
                <span>
                  <img src={phone} alt="Phone" />
                </span>
                <span>**********</span>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <input type="text" name="" required />
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Last Name</span>
            </div>
            <div className="inputBox w50">
              <input type="email" required />
              <span>Email Address</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w100">
              <textarea required />
              <span>Write your message here...</span>
            </div>
            <div className="inputBox w100">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
