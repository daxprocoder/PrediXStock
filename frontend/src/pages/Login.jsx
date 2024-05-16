import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import predixstock from '../assets/images/predixstock.png';
import '../assets/styles/login.css';

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    username: '', // Add username field
    password: ''
  });

  const [loginStatus, setLoginStatus] = useState({ success: null, message: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Login successful, navigate to some page
        setLoginStatus({ success: true, message: 'Login successful!' });
        // Redirect to some page after successful login
        navigate('/stocks');
      } else {
        throw new Error(result.error || 'Something went wrong');
      }
    } catch (error) {
      setLoginStatus({ success: false, message: error.message });
    }
  };

  return (
    <main className='loginmain'>
      <div className='loginleftimg'>
        <img src={predixstock} alt="login" />
      </div>
      <div className='loginright'>
        <h1>Nice to see you again</h1>
        {/* login and signup */}
        <form className="form" onSubmit={handleLogin}>
          {/* Either use email or username */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Email Or Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="lbtn">Sign In</button>
          {/* or */}
          <div className="or">
            <hr />
            <span>Or</span>
            <hr />
          </div>
          {/* <button type="submit" className="lbtn">Sign In</button> */}
          {/* login as google btn */}
          <div id="google-login-button" style={{ marginTop: "40px" }}></div>

          <p style={{display:"flex",justifyContent:"center",gap:"10px", marginTop: "16px"}}>Don't have an account? <u onClick={() => {
            navigate('/signup');
          }} style={{ color: "#007AFF",textDecoration:"none", cursor: "pointer" }}>Sign Up</u></p>
          {loginStatus.success !== null && (
            <div className={loginStatus.success ? 'success' : 'error'}>
              {loginStatus.message}
            </div>
          )}
        </form>
      </div>
    </main>
  );
};
