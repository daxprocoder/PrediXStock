import React, { useState } from 'react';
import '../assets/styles/contact.css';
import contactemail from '../assets/images/logo.png';
import contactphone from '../assets/images/logo.png';
import contactfacebook from '../assets/images/logo.png';
import contactinstagram from '../assets/images/logo.png';
import contacttwitter from '../assets/images/logo.png';
import contactrobo from '../assets/images/logo.png';
import contactlinkedin from '../assets/images/logo.png';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit form. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };

  return (
    <main className='contactmain'>
      {/* <div> */}

      <div className="contact-container">
        <div className='contact-container1'>
          <div className='contactusbold'>
            <h2>Contact Us</h2>
            <p>
              Please fill out the form below if you have any question for us.we typically try to reach within 48 hours of the query
            </p>
          </div>
          <div className='information'>
            <h3>Information</h3>
            <div>
              <div>
                <img src={contactemail} alt="contactemail" />
                <p>predixstock@gmail.com</p>
              </div>
              <div>
                <img src={contactphone} alt="contactphoneno" />
                <span>

                <p>+91-9983892425</p>
                </span>
              </div>
              {/* <div>
                <img src={contacttime} alt="contacttime" />
                <p>Available</p>
              </div> */}
            </div>
          </div>
          <div className='follow'>
            <h3>follow</h3>
            <div>
              <a href="" target="_blank" rel="noreferrer">
              <img src={contactfacebook} alt="contactfacebook" />
              </a>
              
              <a href="" target="_blank" rel="noreferrer"
              style={{
                borderRadius: "50%",
                backgroundColor: "#d8d8d8",
                padding: "10px",
                height: "40px",
              }}
              >
              <img src={contacttwitter} alt="contacttwitter" width="20" />
              </a>

              <a href="" target="_blank" rel="noreferrer">
              <img src={contactinstagram} alt="contactinstagram" />
              </a>

              <a href="" target="_blank" rel="noreferrer"
              style={{
                borderRadius: "50%",
                backgroundColor: "#d8d8d8",
                padding: "10px",
                height: "40px",
              }}
              >
              <img src={contactlinkedin} alt="contactlinkedin" width="20" />
              </a>
            </div>
          </div>
        </div>
        <div className='contact-container2'>
          <img src={contactrobo} alt="contactrobo" />
        </div>
      </div>
      <div className='get_in_touch'>
        <form onSubmit={handleSubmit}>
          <p>Get in touch with us</p>
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />

          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          {/* <label htmlFor="phone">Phone:</label> */}
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="phone"
            required
          />

          {/* <label htmlFor="message">Message:</label> */}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            maxLength={1000}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className='get_in_touch_back'></div>
      {/* </div> */}
      <div className='contact_line_circle'>
        <div className='contact_line'></div>
        <div className='contact_circle'></div>
      </div>
    </main>
  );
};

