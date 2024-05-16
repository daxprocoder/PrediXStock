import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import predixstock from '../assets/images/predixstock.png';
import '../assets/styles/signup.css';

export const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    avatar: null // Add avatar field to state
  });

  const [signupStatus, setSignupStatus] = useState({ success: null, message: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Function to handle changes in the avatar input
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, avatar: file });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('username', formData.username);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('avatar', formData.avatar); // Append avatar file to FormData

      const response = await fetch('/register', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setSignupStatus({ success: true, message: 'User registered successfully!' });
        navigate('/login');
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setSignupStatus({ success: false, message: error.message });
    }
  };

  return (
    <main className='signupmain'>
      <div className='signupleftimg'>
        <img src={predixstock} alt="login" />
      </div>
      <div className='signupright'>
        <h1>Registration</h1>
        <form className="form" onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name<span>&#42;</span></label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email<span>&#42;</span></label>
            <input
              type="email"
              id="email"
              placeholder="Enter an Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username<span>&#42;</span></label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password<span>&#42;</span></label>
            <input
              type="password"
              id="password"
              placeholder="Enter a Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Input field for avatar */}
          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleAvatarChange}
            />
          </div>
          <button type="submit" className="lbtn">Create an account</button>
          <p style={{ display: "flex", justifyContent: "start", gap: "10px", marginTop: "16px" }}>
            Have an account? <u onClick={() => navigate('/login')} style={{ color: "#007AFF", textDecoration: "none", cursor: "pointer" }}>Login</u>
          </p>
          {signupStatus.success !== null && (
            <div className={signupStatus.success ? 'success' : 'error'}>
              {signupStatus.message}
            </div>
          )}
        </form>
      </div>
    </main>
  );
};
