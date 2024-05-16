import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function OTPInput() {
  const [otp, setOTP] = useState(['', '', '', '', '', '']); // Array to store each digit
  const inputRefs = useRef([]);
  const location = useLocation();
  const { gotp } = location.state;  // Array to store each digit
  const navigate = useNavigate();

  // console.log('Got OTP:', gotp);  


  const handleChange = (e, index) => {
    const { value } = e.target;
    const newOTP = [...otp];
    newOTP[index] = value.length > 1 ? value[value.length - 1] : value; // Only store the last digit entered
    setOTP(newOTP);

    // Focus on the next input box if available
    if (value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleConfirmOTP = () => {
    // Concatenate the OTP digits to form the OTP string
    const enteredOTP = otp.join('');
    // console.log('Entered OTP:', enteredOTP);
    // console.log('Got OTP:', gotp);  
    // Send the OTP data to the server
    fetch('http://localhost:3001/otpverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({gotp,enteredOTP}),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success:', data);
        navigate('/login');
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter') {
      // If the "Enter" key is pressed on the last input box, confirm OTP
      if (index === otp.length - 1) {
        handleConfirmOTP();
      }
    }
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          maxLength={1} // Only one digit allowed
          style={{
            width: '40px',
            height: '40px',
            textAlign: 'center',
            marginRight: '5px',
          }} // Square dimensions and center alignment
          ref={(input) => (inputRefs.current[index] = input)}
        />
      ))}
      <button onClick={handleConfirmOTP}>Confirm OTP</button>
    </div>
  );
}

export default OTPInput;
