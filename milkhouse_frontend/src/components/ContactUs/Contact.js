import React, { useState } from 'react';
import './Contact.css';
import phone from '../../image/call.png';
import mail from '../../image/mail.png';
import location from '../../image/location.png';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../utils/axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formdata", formData);
    try {
      await axios.post('/send-email', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Error sending message. Please try again later.');
    }
  };

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
                  Kashmere Gate, New Delhi,
                  <br />
                  110006
                </span>
              </li>
              <li>
                <span>
                  <img src={mail} alt="Email" />
                </span>
                <span>
                  <a href="mailto:agrotechiam354@gmail.com">milkdelights080@gmail.com</a>
                </span>
              </li>
              <li>
                <span>
                  <img src={phone} alt="Phone" />
                </span>
                <span>9958614380</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit} className="formBox">
            <div className="inputBox w50">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
              <span>Last Name</span>
            </div>
            <div className="inputBox w50">
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              <span>Email Address</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w100">
              <textarea name="message" value={formData.message} onChange={handleChange} required />
              <span>Write your message here...</span>
            </div>
            <div className="inputBox w100">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
