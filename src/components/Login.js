import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Store user data in localStorage for demo
      localStorage.setItem('popx_user', JSON.stringify({
        email: formData.email,
        isLoggedIn: true
      }));
      navigate('/profile');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Signin to your<br />PopX account</h1>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
        
        <div className="form-container">
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input
              type="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <button 
            className="login-submit-btn"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;