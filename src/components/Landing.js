import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
        
        <div className="button-container">
          <button 
            className="create-account-btn"
            onClick={() => navigate('/signup')}
          >
            Create Account
          </button>
          
          <button 
            className="login-btn"
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;