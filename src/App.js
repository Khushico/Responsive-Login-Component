
import React, { useState } from 'react';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [userData, setUserData] = useState(null);

  // Landing Component
  const Landing = () => (
    <div className="screen-container">
      <div className="landing-content">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
        
        <div className="button-container">
          <button 
            className="create-account-btn"
            onClick={() => setCurrentScreen('signup')}
          >
            Create Account
          </button>
          
          <button 
            className="login-btn"
            onClick={() => setCurrentScreen('login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );

  // Login Component
  const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleInputChange = (field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
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
        setUserData({ email: formData.email, fullName: 'John Doe', isLoggedIn: true });
        setCurrentScreen('profile');
      }
    };

    return (
      <div className="screen-container">
        <div className="form-content">
          <h1 className="form-title">Signin to your<br />PopX account</h1>
          <p className="form-subtitle">
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

            <button className="submit-btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Signup Component
  const Signup = () => {
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
      setFormData(prev => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    };

    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
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
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSignup = () => {
      if (validateForm()) {
        setUserData({ ...formData, isLoggedIn: true });
        setCurrentScreen('profile');
      }
    };

    return (
      <div className="screen-container signup-screen">
        <div className="form-content">
          <h1 className="form-title signup-title">Create your<br />PopX account</h1>
          
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
                placeholder="Enter phone number"
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
                placeholder="Enter email address"
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
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="input-group">
              <label className="input-label">Company name*</label>
              <input
                type="text"
                className={`form-input ${errors.companyName ? 'error' : ''}`}
                placeholder="Enter company name"
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

            <button className="submit-btn signup-btn" onClick={handleSignup}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Profile Component
  const Profile = () => {
    const handleLogout = () => {
      setUserData(null);
      setCurrentScreen('landing');
    };

    if (!userData) {
      return <div className="loading">Loading...</div>;
    }

    return (
      <div className="screen-container">
        <div className="profile-header">
          <h1 className="profile-title">Account Settings</h1>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
        
        <div className="profile-card">
          <div className="profile-image-section">
            <div className="profile-image">
              <img 
                src="https://ui-avatars.com/api/?name=User&background=6C5CE7&color=fff&size=150" 
                alt="" 
              />
            </div>
            <div className="profile-info">
              <h2 className="profile-name">
                {userData.fullName || 'Marry Doe'}
              </h2>
              <p className="profile-email">
                {userData.email || 'Marry@Gmail.Com'}
              </p>
            </div>
          </div>
          
          <div className="profile-description">
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
              Elit, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
              Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>

          {userData.fullName && (
            <div className="profile-details">
              <div className="detail-item">
                <span className="detail-label">Full Name:</span>
                <span className="detail-value">{userData.fullName}</span>
              </div>
              
              {userData.phoneNumber && (
                <div className="detail-item">
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">{userData.phoneNumber}</span>
                </div>
              )}
              
              {userData.companyName && (
                <div className="detail-item">
                  <span className="detail-label">Company:</span>
                  <span className="detail-value">{userData.companyName}</span>
                </div>
              )}
              
              <div className="detail-item">
                <span className="detail-label">Agency:</span>
                <span className="detail-value">
                  {userData.isAgency ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <Login />;
      case 'signup':
        return <Signup />;
      case 'profile':
        return <Profile />;
      default:
        return <Landing />;
    }
  };

  return (
    <div className="app-wrapper">
      <div className="mobile-container">
        {renderScreen()}
      </div>
      
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .app-wrapper {
          width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f5f5f5;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .mobile-container {
          width: 375px;
          height: 812px;
          background: #ffffff;
          border-radius: 25px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          position: relative;
        }

        @media (max-width: 768px) {
          .app-wrapper {
            padding: 0;
            background: #ffffff;
          }
          
          .mobile-container {
            width: 100vw;
            height: 100vh;
            border-radius: 0;
            box-shadow: none;
          }
        }

        .screen-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px 30px;
        }

        .signup-screen {
          justify-content: flex-start;
          padding-top: 60px;
        }

        /* Landing Styles */
        .landing-content {
          text-align: center;
          width: 100%;
          max-width: 300px;
        }

        .welcome-title {
          font-size: 30px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .welcome-subtitle {
          font-size: 16px;
          color: #666666;
          margin-bottom: 60px;
          line-height: 1.4;
        }

        .button-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .create-account-btn {
          background: #6C5CE7;
          color: white;
          border: none;
          padding: 16px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .create-account-btn:hover {
          background: #5B4BD6;
          transform: translateY(-1px);
        }

        .login-btn {
          background: #A29BF7;
          color: white;
          border: none;
          padding: 16px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .login-btn:hover {
          background: purple;
          transform: translateY(-1px);
        }

        /* Form Styles */
        .form-content {
          width: 100%;
          max-width: 300px;
        }

        .form-title {
          font-size: 30px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .signup-title {
          text-align: center;
          margin-bottom: 30px;
        }

        .form-subtitle {
          font-size: 16px;
          color: #666666;
          margin-bottom: 40px;
          line-height: 1.4;
        }

        .form-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-label {
          font-size: 14px;
          color: #6C5CE7;
          font-weight: 500;
        }

        .form-input {
          padding: 12px 16px;
          border: 1px solid #E0E0E0;
          border-radius: 6px;
          font-size: 16px;
          background: #F8F8F8;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #6C5CE7;
          background: #ffffff;
        }

        .form-input.error {
          border-color: #FF6B6B;
        }

        .error-text {
          font-size: 12px;
          color: #FF6B6B;
          margin-top: 4px;
        }

        .form-input::placeholder {
          color: #999999;
        }

        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .radio-label {
          font-size: 14px;
          color: #6C5CE7;
          font-weight: 500;
        }

        .radio-options {
          display: flex;
          gap: 20px;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 16px;
          color: #333333;
        }

        .radio-option input[type="radio"] {
          display: none;
        }

        .radio-custom {
          width: 18px;
          height: 18px;
          border: 2px solid #CCCCCC;
          border-radius: 50%;
          position: relative;
          transition: all 0.3s ease;
        }

        .radio-option input[type="radio"]:checked + .radio-custom {
          border-color: #6C5CE7;
        }

        .radio-option input[type="radio"]:checked + .radio-custom::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: #6C5CE7;
          border-radius: 50%;
        }

        .submit-btn {
          background: #CCCCCC;
          color: #666666;
          border: none;
          padding: 16px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .signup-btn {
          background: #6C5CE7;
          color: white;
        }

        .submit-btn:hover {
          background: #B8B8B8;
        }

        .signup-btn:hover {
          background: #5B4BD6;
          transform: translateY(-1px);
        }

        /* Profile Styles */
        .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          width: 100%;
          max-width: 300px;
        }

        .profile-title {
          font-size: 24px;
          font-weight: 600;
          color: #000000;
        }

        .logout-btn {
          background: #FF6B6B;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logout-btn:hover {
          background: #FF5252;
          transform: translateY(-1px);
        }

        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          font-size: 18px;
          color: #666666;
        }

        .profile-card {
          background: #ffffff;
          border: 1px solid #E0E0E0;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          width: 100%;
          max-width: 300px;
        }

        .profile-image-section {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .profile-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #6C5CE7;
          position: relative;
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-image::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 24px;
          height: 24px;
          background: #6C5CE7;
          border-radius: 50%;
          border: 3px solid white;
        }

        .profile-info h2 {
          font-size: 20px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 5px;
        }

        .profile-info p {
          font-size: 14px;
          color: #666666;
        }

        .profile-description {
          margin-bottom: 25px;
          padding: 20px 0;
          border-top: 1px solid #F0F0F0;
          border-bottom: 1px solid #F0F0F0;
        }

        .profile-description p {
          font-size: 14px;
          color: #333333;
          line-height: 1.6;
          margin: 0;
        }

        .profile-details {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #F5F5F5;
        }

        .detail-item:last-child {
          border-bottom: none;
        }

        .detail-label {
          font-size: 14px;
          color: #666666;
          font-weight: 500;
        }

        .detail-value {
          font-size: 14px;
          color: #000000;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default App;