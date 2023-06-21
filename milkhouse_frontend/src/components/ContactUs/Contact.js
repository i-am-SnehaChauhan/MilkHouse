import React from 'react';
import './Contact.css';

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
                  <img src="/images/location.png" alt="Location" />
                </span>
                <span>
                  184 Ippokratous Street
                  <br />
                  Athens, Gr
                  <br />
                  11472
                </span>
              </li>
              <li>
                <span>
                  <img src="/images/mail.png" alt="Email" />
                </span>
                <span>
                  <a href="mailto:nassosanagn@gmail.com">nassosanagn@gmail.com</a>
                </span>
              </li>
              <li>
                <span>
                  <img src="/images/call.png" alt="Phone" />
                </span>
                <span>702-279-3488</span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li>
              <a href="https://www.facebook.com/nassosanagn/">
                <img src="/images/1.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nassosanagn_/?hl=el">
                <img src="/images/3.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/nassosanagn">
                <img src="/images/2.png" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nassos-anagnostopoulos-2b9631196/">
                <img src="/images/5.png" alt="LinkedIn" />
              </a>
            </li>
          </ul>
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
