import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: true
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
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (validateForm()) {
      // Store user data in localStorage for demo
      localStorage.setItem('popx_user', JSON.stringify({
        ...formData,
        isLoggedIn: true
      }));
      navigate('/profile');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1 className="signup-title">Create your<br />PopX account</h1>
        
        <div className="form-container">
          <div className="input-group">
            <label className="input-label">Full Name*</label>
            <input
              type="text"
              className={`form-input ${errors.fullName ? 'error' : ''}`}
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
            />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
          </div>

          <div className="input-group">
            <label className="input-label">Phone number*</label>
            <input
              type="tel"
              className={`form-input ${errors.phoneNumber ? 'error' : ''}`}
              placeholder="Marry Doe"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            />
            {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
          </div>

          <div className="input-group">
            <label className="input-label">Email address*</label>
            <input
              type="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Marry Doe"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label className="input-label">Password*</label>
            <input
              type="password"
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Marry Doe"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <div className="input-group">
            <label className="input-label">Company name</label>
            <input
              type="text"
              className={`form-input ${errors.companyName ? 'error' : ''}`}
              placeholder="Marry Doe"
              value={formData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
            />
            {errors.companyName && <span className="error-text">{errors.companyName}</span>}
          </div>

          <div className="radio-group">
            <label className="radio-label">Are you an Agency?*</label>
            <div className="radio-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === true}
                  onChange={() => handleInputChange('isAgency', true)}
                />
                <span className="radio-custom"></span>
                Yes
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === false}
                  onChange={() => handleInputChange('isAgency', false)}
                />
                <span className="radio-custom"></span>
                No
              </label>
            </div>
          </div>

          <button 
            className="signup-submit-btn"
            onClick={handleSignup}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
